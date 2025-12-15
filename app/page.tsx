import Image from "next/image";

export default function Home() {
  return (
    <section className="relative w-full h-screen">
      
      <Image
        src="/Surveys/main_banner.png"
        alt="Survey Banner"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Airblue Survey
        </h1>
      </div>

    </section>
  );
}
