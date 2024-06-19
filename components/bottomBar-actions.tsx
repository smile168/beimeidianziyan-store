"use client";

import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import { Cigarette } from "lucide-react";
import { Filter } from "lucide-react";
import { cn } from "@/lib/util";

const BottomBarActions = () => {
  const router = useRouter();
  const cart = useCart();
  const [isClicked, setIsClicked] = useState("");

  const isClickHandler = (v: string) => {
    setIsClicked(v);
  };
  return (
    <div className="w-full flex justify-between items-center gap-x-4">
      <Button
        className="flex flex-col items-center rounded-full bg-white px-4 py-2 font-normal"
        onClick={() => isClickHandler("search")}
      >
        <Search
          color="black"
          strokeWidth={isClicked === "search" ? 2.5 : 1.25}
        />
        <span
          className={cn(
            "ml-2 text-sm text-black",
            isClicked === "search" ? "font-bold" : "font-normal"
          )}
        >
          Search
        </span>
      </Button>

      <Button
        className="flex flex-col items-center rounded-full bg-white px-4 py-2 font-normal"
        onClick={() => isClickHandler("filter")}
      >
        <Filter
          strokeWidth={isClicked === "filter" ? 2.5 : 1.25}
          color="black"
        />
        <span
          className={cn(
            "ml-2 text-sm text-black",
            isClicked === "filter" ? "font-bold" : "font-normal"
          )}
        >
          Filter
        </span>
      </Button>
      <Button
        className="flex flex-col items-center rounded-full bg-white px-4 py-2 font-normal"
        onClick={() => isClickHandler("orders")}
      >
        <Cigarette
          color="black"
          strokeWidth={isClicked === "orders" ? 2.5 : 1.25}
        />
        <span
          className={cn(
            "ml-2 text-sm text-black",
            isClicked === "orders" ? "font-bold" : "font-normal"
          )}
        >
          Orders
        </span>
      </Button>
      <Button
        onClick={() => {
          isClickHandler("cart");
          router.push("/cart");
        }}
        className="flex flex-col items-center rounded-full bg-white px-4 py-2 min-w-16 font-normal"
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
    </div>
  );
};

export default BottomBarActions;
