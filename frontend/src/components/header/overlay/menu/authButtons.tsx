import Link from "next/link";
import ProfileIcon from "@/components/icons/profileIcon";

export default function ButtonAuth() {
  return (
    <div className="flex justify-between gap-4 py-4 border-t border-gray-400">
      <link
        href="/login"
        className="flex items-center justify-center gap-1 h-10 w-full text-button-sm text-primary-600 border border-primary-600"
      >
        <ProfileIcon fill="var(--color-gray-900)" />
        Login
      </link>

      <Link
        href="/register"
        className="flex items-center justify-center gap-1 h-10 w-full text-button-sm text-primary-600 border border-primary-600"
      >
        Criar conta
      </Link>
    </div>
  );
}
