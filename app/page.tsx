import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <section className="max-w-7xl w-full">
        <Hero />
      </section>
    </main>
  );
}
