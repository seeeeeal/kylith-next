import { useTranslations } from "next-intl";
import {
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLine,
} from "react-icons/fa6";
import { Link } from "@/i18n/navigation";

const SOCIAL_MEDIA_LINKS = [
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/kylith",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/kylith",
  },
  {
    icon: FaXTwitter,
    href: "https://www.twitter.com/kylith",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/kylith",
  },
  {
    icon: FaDiscord,
    href: "https://www.discord.com/kylith",
  },
  {
    icon: FaLine,
    href: "https://www.line.com/kylith",
  },
];

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-muted pt-6 pb-24 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="text-xl font-bold mb-1">Kylith</div>
            <p className="text-xxs text-muted-foreground leading-relaxed">
              {t("description")}
              <br />
              Where performance meets style.
            </p>
            <div className="flex gap-4 mt-4">
              {SOCIAL_MEDIA_LINKS.map((link) => (
                <Link href={link.href} key={link.href}>
                  <link.icon />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex gap-16 text-xs text-muted-foreground">
            <div className="flex flex-col gap-2">
              <div className="text-primary font-semibold">Kylith</div>
              <a href="#" className="hover:underline">
                {t("about")}
              </a>
              <a href="#" className="hover:underline">
                {t("brandStory")}
              </a>
              <a href="#" className="hover:underline">
                {t("employment")}
              </a>
              <a href="#" className="hover:underline">
                {t("privacyPolicy")}
              </a>
              <a href="#" className="hover:underline">
                {t("termsOfService")}
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-primary font-semibold">{t("support")}</div>
              <a href="#" className="hover:underline">
                {t("switchGuide")}
              </a>
              <a href="#" className="hover:underline">
                {t("shipping")}
              </a>
              <a href="#" className="hover:underline">
                {t("faq")}
              </a>
              <a href="#" className="hover:underline">
                {t("contact")}
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 border-border" />

        <div className="flex justify-between items-center">
          <p className="text-xxs text-muted-foreground">
            &copy; {new Date().getFullYear()} Kylith. All rights reserved.
          </p>
        </div>

        <div className="text-[120px] sm:text-[240px] font-bold absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 select-none">
          <span className="opacity-50 inline-block bg-clip-text text-transparent bg-gradient-to-r from-kui-primary/20 to-purple-500/10">
            Kylith
          </span>
        </div>
      </div>
    </footer>
  );
}
