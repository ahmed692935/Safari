import Car1 from "../../assets/images/landcruisersafari.jpg";
import Car2 from "../../assets/images/landcruisersafariback.jpg";
import Car3 from "../../assets/images/landcruiserindoor.jpg";

const VehiclesSection = () => {
  return (
    <section className="relative py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Diagonal Lines Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(139, 69, 19, 0.1) 35px,
            rgba(139, 69, 19, 0.1) 70px
          )`,
          backgroundColor: "#F5E6D3",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section with Image */}
        <div className="flex flex-col md:flex-row items-stretch mb-12">
          {/* Left - Orange Section */}
          <div className="bg-[#EF9716] p-8 md:w-1/2 flex flex-col justify-center">
            <p className="text-sm font-medium text-gray-800 mb-2">Vehicles</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900"
              style={{ fontFamily: '"Carter One", cursive' }}
            >
              Our vehicles
            </h2>
          </div>

          {/* Right - Vehicle Image */}
          <div className="md:w-1/2">
            <img
              src={Car1}
              alt="Toyota Land Cruiser"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Description Text */}
        <div className="mb-8">
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Our 4x4 Toyota Land Cruiser is equipped with a refrigerator to keep
            your drinks, a charging system to keep your devices powered, and a
            pop-up roof for a full 360-degree view during game drives.
          </p>
        </div>

        {/* Subtitle */}
        <h3 className="text-xl font-semibold text-gray-800 mb-6 italic">
          Toyota Landcruiser - Pop-up roof
        </h3>

        {/* Vehicle Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={Car2}
              alt="Toyota Land Cruiser Exterior"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={Car3}
              alt="Toyota Land Cruiser Interior"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Import Carter One Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');
      `}</style>
    </section>
  );
};

export default VehiclesSection;
