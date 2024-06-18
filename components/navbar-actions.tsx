"use client";

import Button from "./ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/user")}
        className="flex items-center rounded-full bg-white px-4 py-2"
      >
        <User color="black"/>
        {/* <span className="ml-2 text-sm font-medium text-white">User</span> */}
      </Button>
    </div>
  );
};

export default NavbarActions;
