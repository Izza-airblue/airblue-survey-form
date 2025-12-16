import Image from "next/image";

export default function Home() {
  return (
     <main className="relative w-full min-h-screen overflow-hidden">

  {/* Background Banner */}
  <div className="absolute inset-0">
    <Image
      src="/Surveys/main_banner1.png"
      alt="Survey Banner"
      fill
      priority
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/40" />
  </div>

  {/* Top Bar */}
  <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-6 py-4">

    {/* Logo */}
    <div className="w-20 sm:w-24 md:w-28">
      <Image
        src="/Surveys/airblue.svg"
        alt="Airblue Logo"
        width={189}
        height={38}
        className="object-contain"
      />
    </div>

    {/* Language Buttons */}
    <div className="flex gap-2">
      <button
        className="text-white text-sm sm:text-base rounded flex items-center justify-center px-4 py-2 hover:opacity-90"
        style={{
          background: "linear-gradient(to right, #1E4560, #3D8EC6)"
        }}
      >
        English
      </button>

      <button
        className="text-sm sm:text-base rounded px-4 py-2 bg-gray-200 hover:bg-gray-300 shadow-sm"
      >
        اردو
      </button>
    </div>
  </div>

  {/* Main Content */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-24 sm:pt-28">

    {/* Heading */}
    <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
      Thank you for flying with us
    </h1>

    <p className="text-white mt-2 sm:mt-3 text-base sm:text-lg md:text-xl">
      Shaping Our Tomorrow, Together.
    </p>

    {/* Cards */}
    <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">

      {/* Card Component */}
      {[
        { title: "Sales Feedback", img: "/Surveys/sales_feedback.png" },
        { title: "Meal Feedback", img: "/Surveys/meal_feedback.png" },
        { title: "General Feedback", img: "/Surveys/general_feedback.png" }
      ].map((card, i) => (
        <div
          key={i}
          className="relative rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105"
        >
          {/* Aspect Ratio */}
          <div className="relative aspect-[16/10]">
            <Image
              src={card.img}
              alt={card.title}
              fill
              className="object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Text Bottom Left */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-left">
              <h2 className="text-white text-base sm:text-lg font-semibold">
                {card.title}
              </h2>
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
</main>
  );
}
