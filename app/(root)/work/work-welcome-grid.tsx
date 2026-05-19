import type { ReactNode } from "react";

export const workWelcomeAvatarClassName =
  "order-1 md:order-2 max-sm:mb-5 col-span-2 self-center justify-self-center";

const introSlotClassName =
  "order-2 md:order-1 col-span-1 md:col-span-4";

export default function WorkWelcomeGrid({
  intro,
  avatar,
}: {
  intro: ReactNode;
  avatar: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
      <div className={introSlotClassName}>{intro}</div>
      {avatar}
    </div>
  );
}
