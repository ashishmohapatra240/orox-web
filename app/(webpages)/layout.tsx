import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

export default function WebpagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">{children}</main>
      <Footer />
    </>
  );
}
