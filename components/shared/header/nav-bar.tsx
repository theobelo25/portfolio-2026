"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import ModeToggle from "./mode-toggle";

const navLinkClass =
  "font-play rounded-full px-3 py-1.5 text-white/80 hover:bg-white/10 hover:text-white aria-[current=page]:bg-white/15 aria-[current=page]:text-white";

/** Keeps active route in sync on full refresh and back/forward. */
function useSyncedPathname() {
  const routerPathname = usePathname();
  const [pathname, setPathname] = useState(routerPathname);

  useLayoutEffect(() => {
    // Router pathname can lag behind window.location after hard navigation.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-shot sync on mount/navigation
    setPathname(window.location.pathname);
  }, [routerPathname]);

  return pathname ?? routerPathname ?? "";
}

const NavigationBar = () => {
  const pathname = useSyncedPathname();
  const path = pathname ?? "";
  const isHome = path === "/" || path === "";
  const isAbout = path === "/about";
  const isWork = path === "/work" || path.startsWith("/projects/");
  const isContact = path === "/contact";

  return (
    <NavigationMenu className="relative py-2">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/"
              className={navLinkClass}
              aria-current={isHome ? "page" : undefined}
            >
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/about"
              className={navLinkClass}
              aria-current={isAbout ? "page" : undefined}
            >
              About
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/work"
              className={navLinkClass}
              aria-current={isWork ? "page" : undefined}
            >
              Work
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/contact"
              className={navLinkClass}
              aria-current={isContact ? "page" : undefined}
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="absolute -right-12">
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationBar;
