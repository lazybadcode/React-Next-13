import { ReactNode } from "react";
import AppFooter from "../components/AppFooter";
import AppChaKraNavBar from "../components/AppChaKraNavBar";


type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppChaKraNavBar />

      {children}

      <AppFooter />
    </>
  );
};

export default Layout;
