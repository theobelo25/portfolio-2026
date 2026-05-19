import Header from "@/components/shared/header";
import Footer from "../../components/footer";
import RouteTransition from "@/components/shared/route-transition";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header className={cn("fixed top-8 left-[50%] -translate-x-[50%]")} />
      <main
        id="main-content"
        tabIndex={-1}
        className="wrapper min-h-screen w-full pt-30 pb-page-footer"
      >
        <RouteTransition>{children}</RouteTransition>
      </main>
      <Footer />
    </div>
  );
}
