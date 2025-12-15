import Image from "next/image";

export default function Home() {
  return (
      <div className="banner">
      <Image
        src="/Surveys/main_banner.png"
        alt="Survey Banner"
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
