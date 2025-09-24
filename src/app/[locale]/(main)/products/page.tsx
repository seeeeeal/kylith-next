import { Link } from "@/i18n/navigation";
import products from "@/lib/products";

export default function Page() {
  return (
    <div className="max-w-screen-xl mx-auto p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((p) => (
        <Link
          key={p.id}
          href={{ pathname: "/product/" + p.id }}
          className="block bg-kui-base rounded-lg p-4"
        >
          <div className="font-semibold text-sm">{p.fullName}</div>
        </Link>
      ))}
    </div>
  );
}
