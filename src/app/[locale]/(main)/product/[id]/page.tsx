"use client";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import {
  FiChevronRight,
  FiHeart,
  FiShoppingCart,
  FiTruck,
} from "react-icons/fi";
import {
  KuiIconButton,
  KuiButton,
  KuiTag,
  KuiBreadcrumbs,
  KuiInputNumber,
} from "@/components/kui";
import PriceTag from "@/components/PriceTag";
import ImageGallery from "./components/ImageGallery";
import Review from "./components/Review";
// mock data
import products from "@/lib/products";
import { reviews } from "@/lib/reviews";

type Product = (typeof products)[number];

function Product() {
  const t = useTranslations();
  const params = useParams();
  const id =
    typeof params?.id === "string"
      ? params.id
      : Array.isArray(params?.id)
      ? params?.id?.[0]
      : null;
  const product = useMemo(() => products.find((p) => p.id === id), [id]);

  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const filteredSwitches = product?.switches ?? [];

  // Use the first switch as the default selected switch
  const [selectedSwitch, setSelectedSwitch] = useState(
    filteredSwitches[0] ?? ""
  );

  // Add state for color and layout selection
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0]?.name ?? ""
  );
  const [selectedLayout, setSelectedLayout] = useState(
    t("product.englishLayout")
  );
  const currentColorImage = product?.colors.find(
    (color) => color.name === selectedColor
  )?.image;

  if (!product) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold">{t("common.notFound")}</h2>
        <Link href="/products" className="text-blue-500 underline">
          {t("common.backToProducts")}
        </Link>
      </div>
    );
  }
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <KuiBreadcrumbs
        items={[
          { label: t("nav.home"), path: "/" },
          { label: t("nav.keyboards"), path: "/keyboards" },
          { label: product.fullName },
        ]}
      />

      <div className="mt-4 flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-bold">{product.fullName}</h2>

        <KuiIconButton
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="お気に入りに追加"
          variant="filled"
          color={isFavorite ? "error" : "default"}
        >
          {isFavorite ? <FiHeart fill="currentColor" /> : <FiHeart />}
        </KuiIconButton>
      </div>

      <div className="mt-4 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:basis-1/2 max-w-full lg:max-w-1/2">
          <ImageGallery
            images={product.images}
            productName={product.name}
            currentImage={currentColorImage ?? ""}
          />
        </div>

        <div className="flex flex-col space-y-4 w-full lg:basis-1/2">
          <PriceTag amount={product.price} size="large" />
          <hr className="border-kui-border" />

          {/* Switch selector */}
          <div>
            <label className="block text-sm mb-2">{t("product.switch")}</label>
            <select
              className="w-full bg-kui-base border border-kui-border rounded p-2 text-sm"
              value={selectedSwitch}
              onChange={(e) => setSelectedSwitch(e.target.value)}
            >
              {filteredSwitches.map((sw) => (
                <option key={sw} value={sw}>
                  {sw}
                </option>
              ))}
            </select>

            <button className="mt-2 text-xs text-kui-primary flex items-center">
              <span>{t("product.switchSupport")}</span>
              <FiChevronRight />
            </button>
          </div>

          <hr className="border-kui-border" />

          {/* Color selector */}
          <div>
            <label className="block text-sm mb-2">{t("product.color")}</label>
            <select
              className="w-full bg-kui-base border border-kui-border rounded p-2 text-sm"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              {product.colors.map((color) => (
                <option key={color.name} value={color.name}>
                  {color.name}
                </option>
              ))}
            </select>
          </div>

          <hr className="border-gray-200" />

          {/* Layout selector */}
          <div>
            <label className="block text-sm mb-2">{t("product.layout")}</label>
            <select
              className="w-full bg-kui-base border border-kui-border rounded p-2 text-sm"
              value={selectedLayout}
              onChange={(e) => setSelectedLayout(e.target.value)}
            >
              <option value={t("product.englishLayout")}>
                {t("product.englishLayout")}
              </option>
              <option value={t("product.japaneseLayout")}>
                {t("product.japaneseLayout")}
              </option>
            </select>
          </div>

          <div>
            <div className="mb-4">
              {product.stock > 0 ? (
                <KuiTag
                  color="success"
                  size="small"
                  variant="soft"
                  className="rounded-full!"
                >
                  <span className="w-2 h-2 bg-kui-success rounded-full"></span>
                  {t("stock.inStock")}
                </KuiTag>
              ) : (
                <KuiTag
                  color="error"
                  size="small"
                  variant="soft"
                  className="rounded-full!"
                >
                  <span className="w-2 h-2 bg-kui-error rounded-full"></span>
                  {t("stock.outOfStock")}
                </KuiTag>
              )}
            </div>

            <div className="flex gap-4 items-center w-full">
              <KuiInputNumber
                value={quantity}
                onChange={setQuantity}
                min={1}
                max={99}
                className="h-12"
                disabled={product.stock === 0}
              />

              <KuiButton
                variant="solid"
                color="default"
                size="large"
                shape="round"
                disabled={product.stock === 0}
                onClick={() => {
                  // TODO: Integrate CartContext when available
                }}
                className="flex-1"
              >
                <FiShoppingCart className="w-4 h-4 mr-2" />
                {t("cart.addToCart")}
              </KuiButton>
            </div>
          </div>

          <hr className="border-kui-border" />

          <div className="flex flex-col gap-2">
            <p className="text-xs leading-relaxed text-kui-secondary">
              {product.description}
            </p>

            <div className="bg-kui-base text-kui-secondary rounded-lg p-4 flex items-center gap-2">
              <FiTruck className="w-4 h-4" />
              <span className="text-xs">
                10000円以上の注文で日本全国送料無料。
              </span>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-kui-border my-8" />

      <Review reviews={reviews} />
    </div>
  );
}

export default Product;
