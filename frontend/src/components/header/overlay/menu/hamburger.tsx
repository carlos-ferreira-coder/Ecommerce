import Link from "next/link";
import ArrowDownIcon from "@/components/icons/arrow-down";
import { navigationHeader } from "@/components/header/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface MenuAccordionProps {
  navigation: (typeof navigationHeader)[number];
  isOpen: boolean;
  onToggle: () => void;
}

export default function HamburgerMenuOverlayHeader({
  navigation,
  isOpen,
  onToggle,
}: MenuAccordionProps) {
  return (
    <div className="border-b border-black">
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between w-full cursor-pointer"
      >
        <div className="text-mobile-body-lg text-black">{navigation.title}</div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowDownIcon />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-6 my-6">
              {navigation.columns[0].items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center h-8 pl-8 text-mobile-body-lg text-gray-800"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
