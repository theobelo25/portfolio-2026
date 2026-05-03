import { RouteEnter } from "@/components/shared/motion/route-enter";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RouteEnter>{children}</RouteEnter>;
}
