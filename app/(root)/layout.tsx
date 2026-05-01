import Footer from "../../components/footer";
import RouteTransition from "@/components/shared/route-transition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main id="main-content" tabIndex={-1}>
        <RouteTransition>{children}</RouteTransition>
      </main>
      <Footer />
    </div>
  );
}
