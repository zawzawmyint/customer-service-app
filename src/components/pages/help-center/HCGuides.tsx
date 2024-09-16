import {
  CreditCard,
  Heart,
  Lamp,
  LocateIcon,
  Lock,
  Package,
  RefreshCcw,
  ShoppingCart,
  Star,
  Tag,
  Truck,
} from "lucide-react";
import HCGuideCard from "./HCGuideCard";
import Motion from "@/components/framer-motion/Motion";

const hcGuides = [
  {
    icon: <ShoppingCart className="w-5 sm:w-10 h-5 sm:h-10" />,
    title: "Shopping Basics",
    href: "/help-center",
  },
  {
    icon: <Tag className="w-5 sm:w-10 h-5 sm:h-10" />,
    title: "Finding the Best Deals",
    href: "/help-center",
  },
  {
    icon: <Star className="w-5 sm:w-10 h-5 sm:h-10" />,
    title: "Product Reviews & Ratings",
    href: "/help-center",
  },
  {
    icon: <Lock className="w-5 sm:w-10 h-5 sm:h-10" />,
    title: "Safe Online Shopping",
    href: "/help-center",
  },
  {
    icon: <Heart className="w-5 sm:w-10 h-5 sm:h-10" />,
    title: "Creating a Wishlist",
    href: "/help-center",
  },
  {
    icon: <Package className="w-5 sm:w-10 h-5 sm:h-10" />,
    title: "Managing Your Orders",
    href: "/help-center",
  },
  {
    icon: <Truck className="w-5 sm:w-10 h-5 sm:h-10" />,
    title: "Shipping & Delivery Options",
    href: "/help-center",
  },
  {
    icon: <RefreshCcw className="w-5 sm:w-10 h-5 sm:h-10" />,
    title: "Handling Returns & Refunds",
    href: "/help-center",
  },
  {
    icon: <LocateIcon className="w-5 sm:w-10 h-5 sm:h-10" />,
    title: "Tracking Your Orders",
    href: "/help-center",
  },
  {
    icon: <CreditCard className="w-5 sm:w-10 h-5 sm:h-10" />,
    title: "Payment Methods Explained",
    href: "/help-center",
  },
];
const HCGuides = () => {
  return (
    <div className="w-full mx-auto max-w-5xl space-y-5">
      <h1 className="text-lg">Guides</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {hcGuides.map((guide) => (
          <Motion key={guide.title}>
            <HCGuideCard key={guide.title} guide={guide} />
          </Motion>
        ))}
      </div>
    </div>
  );
};

export default HCGuides;
