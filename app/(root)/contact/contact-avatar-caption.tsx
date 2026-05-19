"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import {
  CONTACT_SIDEBAR_DIFFERENTIATOR_LINE,
  CONTACT_SIDEBAR_WORK_LEAD_IN,
  CONTACT_SIDEBAR_WORK_TAIL,
  ROLE,
} from "@/lib/constants";

const workLinkClassName =
  "text-foreground underline underline-offset-4 decoration-foreground/40 transition-colors hover:decoration-foreground";

export default function ContactAvatarCaption() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      className="mx-auto mt-10 max-w-sm space-y-4 text-center"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.25,
        ease: "easeOut",
        delay: reduceMotion ? 0 : 0.1,
      }}
    >
      <p className="font-play text-2xl text-foreground">{ROLE}</p>
      <p className="font-questrial text-base text-muted-foreground">
        {CONTACT_SIDEBAR_DIFFERENTIATOR_LINE}
      </p>
      <p className="font-questrial text-base text-muted-foreground">
        {CONTACT_SIDEBAR_WORK_LEAD_IN}{" "}
        <Link href="/work" className={workLinkClassName}>
          Work
        </Link>{" "}
        {CONTACT_SIDEBAR_WORK_TAIL}
      </p>
    </motion.div>
  );
}
