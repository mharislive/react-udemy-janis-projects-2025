import type React from "react";

type ContainerProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`container max-w-[1210px] mx-auto px-5 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
