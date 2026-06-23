import Link from "next/link";
import ProfileIcon from "@/components/icons/profile";
import Button from "@/components/button";

interface AuthMenuOverlayHeaderProps {
  isLogged: boolean;
}

export default function AuthMenuOverlayHeader({
  isLogged,
}: AuthMenuOverlayHeaderProps) {
  if (isLogged) {
    return (
      <div className="flex justify-center py-4 border-t border-gray-400">
        <Link href="/profile/logout" className="w-full">
          <Button variant="stroke" className="w-full">
            <ProfileIcon />
            Sair
          </Button>
        </Link>
      </div>
    );
  }

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
