"use client";

import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import { ClipboardList } from "lucide-react";
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
        className="flex flex-col items-center border-transparent shadow-none p-2"
        onClick={() => isClickHandler("search")}
      >
        <Search
          color="black"
          strokeWidth={isClicked === "search" ? 2.5 : 1.25}
        />
        <span
          className={cn(
            "text-sm text-black",
            isClicked === "search" ? "font-bold" : "font-normal"
          )}
        >
          搜索
        </span>
      </Button>

      <Button
        className="flex flex-col items-center border-transparent shadow-none p-2"
        onClick={() => isClickHandler("filter")}
      >
        <Filter
          strokeWidth={isClicked === "filter" ? 2.5 : 1.25}
          color="black"
        />
        <span
          className={cn(
            "text-sm text-black",
            isClicked === "filter" ? "font-bold" : "font-normal"
          )}
        >
          筛选
        </span>
      </Button>
      <Button
        className="flex flex-col items-center border-transparent shadow-none p-2"
        onClick={() => isClickHandler("orders")}
      >
        <ClipboardList
          color="black"
          strokeWidth={isClicked === "orders" ? 2.5 : 1.25}
        />
        <span
          className={cn(
            "text-sm text-black",
            isClicked === "orders" ? "font-bold" : "font-normal"
          )}
        >
          订单
        </span>
      </Button>
      <Button
        onClick={() => {
          isClickHandler("cart");
          router.push("/cart");
        }}
        className="flex flex-col items-center border-transparent shadow-none p-2"
      >
        <ShoppingCart
          color="black"
          strokeWidth={isClicked === "cart" ? 2.5 : 1.25}
        />
        <span
          className={cn(
            "text-sm text-black",
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
