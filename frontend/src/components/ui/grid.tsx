import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
}

export default function Grid({ children }: GridProps) {
  return (
    <div
      className="
        grid
        grid-cols-4 lg:grid-cols-12
        gap-4 lg:gap-6
      "
    >
      {children}
    </div>
  );
}
