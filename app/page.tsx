import Navbar from "@/components/Navbar";
import { SproutifyyHero } from '@/components/ui/hero-section';
import Menu from "@/components/Menu";
import WhyUs from "@/components/WhyUs";
import Proof from "@/components/Proof";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-cream">
        <SproutifyyHero
          bowlImageUrl="/sproutifyyy-hero.jpg"
          onMenuClick={() => {
            const menuElement = document.getElementById('menu');
            if (menuElement) {
              menuElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
        <Menu />
        <WhyUs />
        <Proof />
        <FindUs />
      </main>
      <Footer />
    </>
  );
}
