"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiChevronDown,
  FiSearch,
  FiUser,
  FiShoppingCart,
} from "react-icons/fi";

export default function Nav() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const locale = parts[0] === "jp" || parts[0] === "en" ? parts[0] : undefined;
  const href = (p: string) => (locale ? `/${locale}${p}` : p);

  const NAV_ITEMS = [
    { key: "keyboards", path: "/keyboards", hasDropdown: true },
    { key: "accessories", path: "/accessories", hasDropdown: true },
    { key: "support", path: "/support", hasDropdown: false },
  ] as const;

  return (
    <header className="bg-white border-b border-kui-border">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-12">
          <Link href={href("/")}>
            <h1 className="text-3xl sm:text-4xl font-bold">Kylith</h1>
          </Link>

          <nav className="flex items-center gap-4 text-xs font-semibold">
            {/* {NAV_ITEMS.map(({ key, path, hasDropdown }) => (
              <Link href={href(path)} className="hover:text-kui-primary">
                {key}
              </Link>
            ))} */}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <FiUser />
          <FiShoppingCart />
        </div>
      </div>
    </header>
  );
}
