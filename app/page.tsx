import Image from "next/image";

export default function Home() {
  return (
       <main className="relative w-full h-screen">

      {/* Fullscreen Banner */}
      <div className="absolute inset-0">
        <Image
          src="/Surveys/main_banner1.png"
          alt="Survey Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

  {/* Top Bar: Logo + Language Buttons */}
  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20 px-4">
    
    {/* Airblue Logo */}
    <div className="w-24 h-auto">
      <Image
        src="/Surveys/airblue.svg"
        alt="Airblue Logo"
        width={189} // adjust if needed
        height={38} // adjust proportionally
        className="object-contain"
      />
    </div>

    {/* Language Buttons */}
    <div className="flex gap-2">
      {/* English Button with Gradient */}
      <button
        className="text-white rounded transition hover:opacity-90 flex items-center justify-center"
        style={{
          width: "90px",
          height: "38px",
          background: "linear-gradient(to right, #1E4560, #3D8EC6)"
        }}
      >
        English
      </button>

      {/* Urdu Button with Shadow */}
      <button
        className="rounded transition flex items-center justify-center hover:bg-gray-300"
        style={{
          width: "90px",
          height: "38px",
          backgroundColor: "#E5E7EB",
          boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
        }}
      >
        اردو
      </button>
    </div>
  </div>

      {/* Overlay Text & Cards */}
      <div className="relative z-10 flex flex-col items-center  justify-center   h-full px-4">

        {/* Main Heading */}
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-center justify-center items-center ">
          Thank you for flying with us
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl mt-2  text-center">
          Shaping Our Tomorrow, Together.
        </p>

        {/* Feedback Cards */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6 w-full max-w-5xl">
          
          {/* Sales Feedback Card */}
          <div className="relative rounded-lg overflow-hidden w-full sm:w-64 hover:scale-105 transform transition shadow-lg">
            <Image
              src="/Surveys/sales_feedback.png"
              alt="Sales Feedback"
              width={400}
              height={250}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4  w-full">
              <h2 className="text-white">Sales Feedback</h2>
            </div>
          </div>

          {/* Meal Feedback Card */}
          <div className="relative rounded-lg overflow-hidden w-full sm:w-64 hover:scale-105 transform transition shadow-lg">
            <Image
              src="/Surveys/meal_feedback.png"
              alt="Meal Feedback"
              width={400}
              height={250}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4  w-full">
              <h2 className="text-white">Meal Feedback</h2>
            </div>
          </div>

          {/* General Feedback Card */}
          <div className="relative rounded-lg overflow-hidden w-full sm:w-64 hover:scale-105 transform transition shadow-lg">
            <Image
              src="/Surveys/general_feedback.png"
              alt="General Feedback"
              width={400}
              height={250}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <h2 className="text-white">General Feedback</h2>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
