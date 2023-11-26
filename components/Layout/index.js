import Header from "@/components/Header";
import LiveHeader from "../LiveHeader";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <LiveHeader />
      <main>{children}</main>
    </>
  );
};

export default RootLayout;
