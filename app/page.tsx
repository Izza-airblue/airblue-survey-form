import Image from "next/image";

export default function Home() {
  return (
     <section className="relative w-full
      h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      
      <Image
        src="/Surveys/main_banner.png"
        alt="Survey Banner"
        fill
        priority
        className="object-cover"
        sizes="
          (max-width: 640px) 100vw,
          (max-width: 1024px) 100vw,
          100vw
        "
      />
    </section>
  );
}
