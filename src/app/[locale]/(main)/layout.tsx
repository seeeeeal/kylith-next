import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav className="sticky top-0 z-20 relative" />
      <main className="flex-1 min-h-0">{children}</main>
      <Footer />
    </div>
  );
}
