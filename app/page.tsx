import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <section className="max-w-7xl w-full border-4 border-lime-600">
        <FloatingNav
          className=""
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "About", link: "/about" },
          ]}
        />
        <Hero />
        <Grid />
      </section>
    </main>
  );
}
