import Link from "next/link";
import ProfileIcon from "@/components/icons/profileIcon";
import Button from "@/components/button";

export default function AuthMenuOverlayHeader() {
  return (
    <div className="flex justify-between gap-4 py-4 border-t border-gray-400">
      <Link href="/profile/login" className="w-full">
        <Button variant="stroke" className="w-full">
          <ProfileIcon />
          Login
        </Button>
      </Link>

      <Link href="/profile/register" className="w-full">
        <Button variant="stroke" className="w-full">
          Criar conta
        </Button>
      </Link>
    </div>
  );
}
