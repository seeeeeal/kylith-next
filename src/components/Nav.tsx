import { Link } from "@/i18n/navigation";
import {
  FiChevronDown,
  FiSearch,
  FiUser,
  FiShoppingCart,
} from "react-icons/fi";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { key: "keyboards", href: "/products/keyboards", hasDropdown: true },
  { key: "accessories", href: "/products/accessories", hasDropdown: true },
  { key: "support", href: "/support", hasDropdown: false },
];

type Props = {
  className: String;
};

export default function Nav({ className }: Props) {
  const t = useTranslations("nav");

  return (
    <header className={clsx("bg-background border-b border-border", className)}>
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-6 py-4">
        <div className="flex items-center gap-12">
          <Link href={"/"}>
            <h1 className="text-4xl font-bold">Kylith</h1>
          </Link>

          <nav className="flex items-center gap-6 text-xs">
            {NAV_ITEMS.map(({ key, href, hasDropdown }) => (
              <Link
                key={key}
                href={href}
                className="inline-flex items-center gap-1 transition-colors font-semibold"
              >
                {t(key)}
                {hasDropdown && (
                  <FiChevronDown
                    className={clsx(
                      "transition-transform"
                      // activeDropdown === key ? "rotate-180" : ""
                    )}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="bg-input border border-2 border-transparent hover:border-kui-primary transition-colors flex justify-end items-center rounded h-6 px-2 w-20 sm:w-36 cursor-pointer">
            <FiSearch />
            {/* TODO: Search modal */}
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" shape="round">
              <FiUser />
            </Button>
            <Button variant="ghost" size="icon" shape="round">
              <FiShoppingCart />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
