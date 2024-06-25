"use client";

import Button from "./ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import { User, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/util";

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

  // 0ac08371-9409-4418-8b19-1d9405ca985e
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => {
          isClickHandler("cart");
          router.push("/cart");
        }}
        className="flex items-center border-transparent shadow-none p-2 max-md:hidden"
      >
        <ShoppingCart
          color="black"
          strokeWidth={isClicked === "cart" ? 2.5 : 1.25}
        />
        <span
          className={cn(
            "ml-2 text-sm text-black",
            isClicked === "cart" ? "font-bold" : "font-normal"
          )}
        >
          {cart.items.length}
        </span>
      </Button>
      <Button
        onClick={() => {
          isClickHandler("user");
          router.push("/user/0ac08371-9409-4418-8b19-1d9405ca985e/orders");
        }}
        className="items-center border-transparent shadow-none p-2"
      >
        <User color="black" strokeWidth={isClicked === "user" ? 2.5 : 1.25}/>
        {/* <span className="ml-2 text-sm font-medium text-white">User</span> */}
      </Button>
    </div>
  );
};

export default NavbarActions;
