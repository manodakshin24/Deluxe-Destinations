import Accordion from "@/components/Accordion";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import GetApp from "@/components/GetApp";
import Image from "next/image";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <Feature />
      <Packages />
      <Accordion />
      <GetApp />
    </main>
  );
}
