import { useTranslations } from "next-intl";

export default function IndexPage() {
  const t = useTranslations("nav");

  return (
    <div className="p-8">
      <div className="mt-4">Current text: {t("keyboards")}</div>
    </div>
  );
}
