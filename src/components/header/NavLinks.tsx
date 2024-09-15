"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const links: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "HelpCenter",
    href: "/help-center",
  },
  {
    title: "Knowledge Base",
    href: "/knowledge-base",
  },
  {
    title: "FAQs",
    href: "/faqs",
  },
];

export function NavLinks() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <div className="flex flex-col sm:flex-row  flex-wrap gap-1 ">
          {links.map((link, i) => (
            <NavigationMenuItem key={link.title + i}>
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <h1 className="hover:scale-110 transition-all duration-500">
                    {link.title}
                  </h1>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
