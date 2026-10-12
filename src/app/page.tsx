import Bandeau from "@/components/sections/Bandeau";
import Disciplines from "@/components/sections/Disciplines";
import Fondatrice from "@/components/sections/Fondatrice";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Tarifs from "@/components/sections/Tarifs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Bandeau />
      <Disciplines />
      <Fondatrice />
      <Tarifs />
      <Footer />
    </>
  );
}
