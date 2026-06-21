import clsx from "clsx";

const GRID_OVERLAY = process.env.NEXT_PUBLIC_GRID_OVERLAY === "true";

interface GridProps {
  children: React.ReactNode;
}

export default function GridOverlay({ children }: GridProps) {
  if (!GRID_OVERLAY) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-6 h-full">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className={clsx(
                "border border-red-500/40 bg-red-500/10",
                index >= 4 && "hidden lg:block",
              )}
            />
          ))}
        </div>
      </div>

      {children}
    </div>
  );
}
