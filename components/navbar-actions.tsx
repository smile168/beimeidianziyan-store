"use client";

import Button from "./ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isClicked, setIsClicked] = useState("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  const isClickHandler = (v: string) => {
    setIsClicked(v);
  };

  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => {
          isClickHandler("user");
          router.push("/user");
        }}
        className="flex items-center rounded-full bg-white px-4 py-2"
      >
        <User color="black" strokeWidth={isClicked === "user" ? 2.5 : 1.25}/>
        {/* <span className="ml-2 text-sm font-medium text-white">User</span> */}
      </Button>
    </div>
  );
};

export default NavbarActions;
