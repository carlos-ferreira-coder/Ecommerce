import Container from "@/components/ui/container";

interface OverlayHeaderProps {
  children: React.ReactNode;
}

export default function OverlayHeader({ children }: OverlayHeaderProps) {
  return (
    <>
      <div className="fixed inset-x-0 top-16 lg:top-27.5 z-50 bg-white">
        <Container>
          <div className="max-h-[calc(100vh-4rem)] lg:max-h-[calc(100vh-6.875rem)] overflow-y-auto">
            {children}
          </div>
        </Container>
      </div>

      <div className="fixed inset-0 top-16 lg:top-27.5 z-40 bg-black/20 backdrop-blur-sm" />
    </>
  );
}

/*
TODO remover

export function OverlayHeader3({ children }: OverlayHeaderProps) {
  return (
    <>
      <div className="fixed inset-x-0 top-16 lg:top-27.5 z-50 bg-white">
        <Container>{children}</Container>
      </div>

      <div className="fixed inset-x-0 top-16 lg:top-27.5 bottom-0 z-40 bg-black/20 backdrop-blur-sm" />
    </>
  );
}

export function OverlayFullHeader({ children }: OverlayHeaderProps) {
  return (
    <>
      <div className="fixed inset-x-0 top-16 lg:top-27.5 bottom-0 overflow-y-auto z-50 bg-white">
        <Container>{children}</Container>
      </div>
    </>
  );
}
*/
