import Container from "@/components/ui/container";

interface OverlayHeaderProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function OverlayHeader({
  onClose,
  children,
}: OverlayHeaderProps) {
  return (
    <>
      <div className="fixed inset-x-0 top-16 lg:top-27.5 z-50 bg-white">
        <Container>
          <div className="max-h-[calc(100vh-4rem)] lg:max-h-[calc(100vh-6.875rem)] overflow-y-auto">
            {children}
          </div>
        </Container>
      </div>

      <div
        onClick={onClose}
        className="fixed inset-0 top-16 lg:top-27.5 z-40 bg-black/20 backdrop-blur-sm"
      />
    </>
  );
}
