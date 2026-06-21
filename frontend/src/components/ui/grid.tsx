import GridOverlay from "@/components/ui/gridOverlay";

interface GridProps {
  children: React.ReactNode;
}

export default function Grid({ children }: GridProps) {
  return (
    <GridOverlay>
      <GridComponent>{children}</GridComponent>
    </GridOverlay>
  );
}

export function GridComponent({ children }: GridProps) {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-6">
      {children}
    </div>
  );
}
