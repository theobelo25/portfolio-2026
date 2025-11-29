import Header from "@/components/shared/header";
import Footer from "../../components/footer";
import NavigateBack from "@/components/navigate-back";
import { cn } from "@/lib/utils";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center min-h-screen bg-zinc-50 dark:bg-black">
      <Header className={cn("fixed top-8 left-[50%] -translate-x-[50%]")} />
      <main className="min-h-screen w-full max-w-4xl py-32 px-16 bg-white dark:bg-black">
        <NavigateBack />
        {children}
      </main>
      <Footer />
    </div>
  );
}
