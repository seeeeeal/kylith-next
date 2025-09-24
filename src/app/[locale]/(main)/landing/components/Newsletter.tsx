import { FiChevronRight, FiMail } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Newsletter() {
  const t = useTranslations("landing");

  return (
    <section className="max-w-screen-xl mx-auto p-8 mt-16 pb-16">
      <div className="text-center text-2xl sm:text-3xl font-bold mb-2">
        {t("newsletter.title")}
      </div>
      <div className="text-center text-xs text-muted-foreground mb-6 sm:mb-8 [&_a]:text-secondary-foreground [&_a]:underline">
        {t.rich("newsletter.subtitle", {
          a: (chunks) => <Link href="/privacy">{chunks}</Link>,
        })}
      </div>

      <div className="flex items-center relative max-w-md mx-auto mt-4 bg-input border border-2 border-transparent hover:border-kui-primary transition-colors rounded px-2 cursor-pointer">
        <FiMail className="text-muted-foreground mr-2" />
        <input
          type="text"
          placeholder={t("newsletter.placeholder")}
          className="w-full h-8 placeholder:text-xs outline-none"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <FiChevronRight />
        </div>
      </div>
    </section>
  );
}
