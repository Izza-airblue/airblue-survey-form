import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-[400px]">
      <Image
        src="/Surveys/main_banner.png"
        alt="Survey Banner"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
