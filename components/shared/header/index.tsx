"use client";
import NavigationBar from "./nav-bar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Header = ({ className }: { className?: string }) => {
  return (
    <motion.header
      className={cn(
        "bg-black w-fit m-auto pl-6 pr-18 rounded-4xl text-white z-999",
        className,
      )}
      layoutId="header"
      transition={{ layout: { duration: 0.25, ease: "easeInOut" } }}
    >
      <NavigationBar />
    </motion.header>
  );
};

export default Header;
