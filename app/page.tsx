import Image from "next/image";

export default function Home() {
  return (
     <Image
      src="/Surveys/main_banner.png"
      alt="Survey Main Banner"
      width={1200}
      height={400}
      priority
    />
  );
}
