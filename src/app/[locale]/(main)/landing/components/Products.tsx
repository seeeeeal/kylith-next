import { KuiButton } from "@/components/kui";
import PriceTag from "@/components/PriceTag";
import { Link } from "@/i18n/navigation";
import products from "@/lib/products";
import { useTranslations } from "next-intl";

export default function Products() {
  const t = useTranslations("landing");

  return (
    <section className="max-w-screen-xl mx-auto p-4 sm:p-8">
      <h2 className="text-xl sm:text-2xl mb-4 sm:mb-8">
        <span className="font-semibold">{t("products")}</span>
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="rounded-lg p-4 bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded mb-2"
            />
            <h2 className="text-sm sm:text-base font-semibold mb-1">
              {product.name}
            </h2>

            <div className="mb-2">
              <PriceTag amount={product.price} size="small" />
            </div>

            <Link href={`/products/${product.id}`}>
              <KuiButton
                variant="solid"
                color="default"
                size="medium"
                shape="round"
                className="w-full"
              >
                {t("hero.cta")}
              </KuiButton>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
