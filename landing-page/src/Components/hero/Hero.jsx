function Hero() {
  return (
    <section
      id="home"
      className="bg-gray-50 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
            Premium Lubricant Solutions
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mt-6">
            Powering Performance
            <br />
            <span className="text-red-600">
              Every Mile
            </span>
          </h1>

          <p className="text-gray-600 text-lg mt-6 max-w-xl">
            High-performance automotive and industrial lubricants
            engineered to reduce friction, enhance efficiency and
            protect your engines under the toughest conditions.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#products"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition"
            >
              Explore Products
            </a>

            <a
              href="#about"
              className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-white transition"
            >
              Learn More
            </a>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-4 mt-10">

            <div className="bg-white shadow-sm px-4 py-3 rounded-xl">
              <p className="font-semibold text-gray-900">
                Engine Protection
              </p>
            </div>

            <div className="bg-white shadow-sm px-4 py-3 rounded-xl">
              <p className="font-semibold text-gray-900">
                High Performance
              </p>
            </div>

            <div className="bg-white shadow-sm px-4 py-3 rounded-xl">
              <p className="font-semibold text-gray-900">
                Long Life Formula
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=1200"
            alt="Lubricant Oil"
            className="w-full max-w-md rounded-3xl shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;