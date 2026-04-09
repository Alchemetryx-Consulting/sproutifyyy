import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-cream">
        <Hero />
        <Menu />
        <WhyUs />
      </main>
    </>
  );
}
