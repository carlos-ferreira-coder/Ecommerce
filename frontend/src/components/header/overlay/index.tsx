import Container from "@/components/ui/container";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-x-0 top-16 lg:top-27.5 z-50 bg-white"
      >
        <Container>
          <div className="max-h-[calc(100vh-4rem)] lg:max-h-[calc(100vh-6.875rem)] overflow-y-auto">
            {children}
          </div>
        </Container>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 top-16 lg:top-27.5 z-40 bg-black/20 backdrop-blur-sm"
      />
    </>
  );
}
