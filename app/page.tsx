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

      {/* Language Buttons */}
      <div className="absolute top-4 right-4 flex gap-2 z-20">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          English
        </button>
        <button className="px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-200 transition">
          اردو
        </button>
      </div>

      {/* Overlay Text & Cards */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        {/* Main Heading */}
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Thank you for flying with us
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl mt-2">
          Shaping Our Tomorrow, Together.
        </p>

        {/* Feedback Cards */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center w-full max-w-5xl">
          
          {/* Sales Feedback Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full sm:w-64 hover:scale-105 transform transition">
            <Image
              src="/Surveys/sales_feedback.png"
              alt="Sales Feedback"
              width={400}
              height={250}
              className="object-cover"
            />
            <div className="p-4">
              <h2 className="text-gray-800 font-semibold text-lg">Sales Feedback</h2>
            </div>
          </div>

          {/* Meal Feedback Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full sm:w-64 hover:scale-105 transform transition">
            <Image
              src="/Surveys/meal_feedback.png"
              alt="Meal Feedback"
              width={400}
              height={250}
              className="object-cover"
            />
            <div className="p-4">
              <h2 className="text-gray-800 font-semibold text-lg">Meal Feedback</h2>
            </div>
          </div>

          {/* General Feedback Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full sm:w-64 hover:scale-105 transform transition">
            <Image
              src="/Surveys/general_feedback.png"
              alt="General Feedback"
              width={400}
              height={250}
              className="object-cover"
            />
            <div className="p-4">
              <h2 className="text-gray-800 font-semibold text-lg">General Feedback</h2>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
