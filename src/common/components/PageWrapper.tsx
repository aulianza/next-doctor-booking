import clsx from "clsx";
import React, { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

const PageWrapper = ({ children, className }: PageWrapperProps) => {
  const baseClass = "min-h-screen bg-white p-6 -mt-8 pb-28 rounded-t-3xl";
  const combinedClassNames = clsx(baseClass, className);

  return <div className={combinedClassNames}>{children}</div>;
};

export default PageWrapper;
