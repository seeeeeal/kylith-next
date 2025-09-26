"use client";
import { useParams } from "next/navigation";
import { ProductType, isValidProductType, Product } from "@/types/product";
import { redirect } from "@/i18n/navigation";
import products from "@/lib/products";
import { Link } from "@/i18n/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import ProductList from "./components/List";

export default function ProductsPage() {
  const t = useTranslations("nav");

  const { locale, type } = useParams<{ locale: string; type: ProductType }>();
  if (!isValidProductType(type)) {
    redirect({ href: "/404", locale });
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto px-8 py-6 ">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">{t("home")}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/products/${type}`}>{t("keyboards")}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-4">
        <ProductList products={products}>
          {/* Custom PR */}
          <div
            className={`relative flex items-center w-full bg-[url(/HE.jpg)] bg-center bg-cover p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden`}
          >
            <div className="absolute inset-0 bg-black opacity-40 z-0" />
            <div className="relative z-10 text-white p-2 sm:p-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold leading-tight sm:leading-10">
                静かに、速く。
                <br />
                Kylith HE Series & Kylith Mag Switch
              </h2>
              <p className="mt-2 sm:mt-4 text-xs sm:text-sm leading-5 sm:leading-6">
                Kylith HE Series、Mag Switchとともに登場。
                <br />
                次世代の非接触スイッチが、あなたの指先に革命を。
              </p>
              <Button className="mt-3" color="default" shape="round" size="sm">
                詳細を見る
              </Button>
            </div>
          </div>
        </ProductList>
      </div>
    </div>
  );
}
