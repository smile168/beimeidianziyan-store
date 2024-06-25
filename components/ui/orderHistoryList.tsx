"use client";

import { Copy } from "lucide-react";
import React from "react";
import Button from "./button";
import orderHistoryDetail from "./orderHistoryDetail";
import toast from "react-hot-toast";
import { CircleCheck, PackageOpen, Truck } from "lucide-react";
import Currency from "./currency";
import { cn } from "@/lib/util";

interface OrderHistoryProps {
  eachOrderInfo: any;
}

const OrderHistoryList: React.FC<OrderHistoryProps> = ({ eachOrderInfo }) => {
  const orderLayoutRow1 = [
    {
      hasLabel: true,
      label: "订单号",
      value: "guoyan12474749", // eachOrderInfo?.orderNumber,
      hasCopy: true,
    },
    {
      hasLabel: true,
      label: "下单日期",
      value: "Jun 8, 2024", // eachOrderInfo?.orderDate,
      hasCopy: false,
    },
    {
      hasLabel: true,
      label: "总价",
      value: 123.55, // eachOrderInfo?.totalPrice,
      hasCopy: false,
    },
  ];
  const orderLayoutRow2 = [
    {
      hasLabel: false,
      label: "",
      value: "已送达", // eachOrderInfo?.orderStatus,
      hasCopy: false,
      hasStatus: true,
      statusIcon: (
        // eachOrderInfo?.orderStatus === "Delivered" ? (
        <CircleCheck className="stroke-white fill-green-400 mr-1" />
      ),
      // ) : eachOrderInfo?.orderStatus === "In Progress" ? (
      //   <PackageOpen className="mr-1" />
      // ) : eachOrderInfo?.orderStatus === "In Transit" ? (
      //   <Truck className=" mr-1" />
      // ) : null,
    },
    {
      hasLabel: true,
      label: "USPS运单号",
      value: "1z95748302845734839458", // eachOrderInfo?.orderTracking,
      hasCopy: true,
    },
  ];
  const copyHandler = async (v: string) => {
    console.log(v);
    try {
      const response = await navigator.clipboard.writeText(v);
      // console.log(response)
      toast.success("Copied!");
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <div className="flex flex-col rounded-md border-solid border-2 border-slate-200 p-6 my-6">
      <div className="flex justify-between">
        <div className="flex flex-row">
          {orderLayoutRow1.map((item) => (
            <div
              key={item.label}
              className={cn(
                "flex flex-col pr-8 lg:pr-16 pb-6",
                !item.label.includes("订单号") ? `max-sm:hidden` : null
              )}
            >
              <p className={item.hasLabel ? `font-lg font-semibold` : `hidden`}>
                {item.label}
              </p>
              <div className="flex">
                <p className="pr-2">
                  {item.label.includes("Date Place") ? (
                    item.value
                  ) : item.label.includes("总价") ? (
                    <Currency
                      value={item.value}
                      className="font-normal"
                    ></Currency>
                  ) : (
                    item.value
                  )}
                </p>
                <Copy
                  className={item.hasCopy ? `my-auto` : `hidden`}
                  size={20}
                  onClick={() => copyHandler("guoyan12474749")}
                />
              </div>
            </div>
          ))}
        </div>
        <Button className="px-3 py-2">查看订单</Button>
      </div>
      <hr></hr>
      <div className="flex flex-row max-sm:flex-col justify-between pt-6">
        <div className="flex flex-row max-sm:flex-col">
          {orderLayoutRow2.map((item) => (
            <div key={item.label} className="flex pr-8 lg:pr-16">
              <p
                className={
                  item.hasLabel
                    ? `font-lg font-semibold whitespace-nowrap`
                    : `hidden`
                }
              >
                {item.label}
              </p>
              <div className="flex">
                {item.hasStatus ? item.statusIcon : null}
                <p className="pl-1 pr-2">{item.value}</p>
                <Copy
                  className={item.hasCopy ? `my-auto` : `hidden`}
                  size={20}
                  onClick={() => copyHandler("1z95748302845734839458")}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div>
        {eachOrderDetails.map((item) => (
            <orderHistoryDetail key={item.id}></orderHistoryDetail>
        ))}
      </div> */}
    </div>
  );
};

export default OrderHistoryList;
