'use client';

import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import { Cigarette } from "lucide-react";

const BottomBarActions = () => {
  const router = useRouter();
  const cart = useCart();
  return (
    <div className="w-full flex justify-between items-center gap-x-4">
      <Button className="flex flex-col items-center rounded-full bg-white px-4 py-2">
      <Search color="black"/>
        <span className="ml-2 text-sm font-medium text-black">Search</span>
      </Button>
      <Button className="flex flex-col items-center rounded-full bg-white px-4 py-2">
      <Cigarette color="black"/>
        <span className="ml-2 text-sm font-medium text-black">Other</span>
      </Button>
      <Button
        onClick={() => router.push("/cart")}
        className="flex flex-col items-center rounded-full bg-white px-4 py-2 min-w-16"
      >
        <ShoppingCart color="black"/>
        <span className="ml-2 text-sm font-medium text-black">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default BottomBarActions;
