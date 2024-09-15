import {
  Backpack,
  ChartArea,
  DollarSign,
  Laptop,
  Superscript,
  TrainTrack,
} from "lucide-react";
import React from "react";
import KBCard from "./KBCard";

const kbCardItems = [
  {
    icon: <Laptop className="w-20 h-20" />,
    title: "Product Categories",
    description:
      "Browse through our various product categories to find exactly what you're looking for. From electronics to clothing, we've got you covered.",
  },
  {
    icon: <TrainTrack className="w-20 h-20" />,
    title: "Order Tracking",
    description:
      "Learn how to track your orders in real-time and stay updated on your shipment status. Find out how to check your delivery progress.",
  },
  {
    icon: <DollarSign className="w-20 h-20 " />,
    title: "Payment Options",
    description:
      "Explore the different payment methods we accept. From credit cards to digital wallets, choose the one that suits you best.",
  },
  {
    icon: <Backpack className="w-20 h-20" />,
    title: "Returns & Exchanges",
    description:
      "Understand our return and exchange policy. Learn how to process a return or exchange if you’re not satisfied with your purchase.",
  },
  {
    icon: <ChartArea className="w-20 h-20" />,
    title: "Customer Support",
    description:
      "Get help with any issues or questions you have. Contact our customer support team for assistance with orders, products, or account issues.",
  },
  {
    icon: <Superscript className="w-20 h-20" />,
    title: "Special Offers",
    description:
      "Check out our latest promotions and discounts. Find special offers and deals on popular products to save on your shopping.",
  },
];

const KBCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-secondary p-3 sm:p-10">
      {kbCardItems.map((item) => (
        <KBCard kb={item} key={item.title} />
      ))}
    </div>
  );
};

export default KBCards;
