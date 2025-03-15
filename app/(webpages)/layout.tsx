import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";

const WebpagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default WebpagesLayout;
