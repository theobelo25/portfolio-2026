import Footer from "../../components/footer";
import RootChrome from "./root-chrome";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main id="main-content" tabIndex={-1}>
        <RootChrome>{children}</RootChrome>
      </main>
      <Footer />
    </div>
  );
}
