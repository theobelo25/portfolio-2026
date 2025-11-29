import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";

const NavigateBack = () => {
  return (
    <Link
      href="/work"
      className="flex items-center gap-2 absolute bottom-15 left-8"
    >
      <ArrowLeftCircle size={25} />
      Back to all Projects
    </Link>
  );
};

export default NavigateBack;
