import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const DLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <h1>Dashboard Layout</h1>

      {children}

    </>
  );
};

export default DLayout;
