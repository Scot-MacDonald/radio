import Header from "@/components/Header";
import LiveHeader from "../LiveHeader";
import Footer from "../Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <LiveHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
