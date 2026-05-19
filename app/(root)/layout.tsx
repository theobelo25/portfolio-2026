import Footer from "../../components/footer";
import RootChrome from "./root-chrome";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full bg-zinc-50 font-sans dark:bg-black">
      <RootChrome>{children}</RootChrome>
      <Footer />
    </div>
  );
}
