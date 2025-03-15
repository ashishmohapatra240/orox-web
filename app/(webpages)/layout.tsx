import { Navbar } from "@/app/components/Navbar/Navbar";
import { Footer } from "@/app/components/Footer/Footer";

export default function WebpagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">{children}</main>
      <Footer />
    </>
  );
}
