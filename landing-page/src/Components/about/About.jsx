function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold uppercase tracking-wider">
            Why LubriMax
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Performance You Can Trust
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mt-6 text-lg">
            LubriMax provides high-quality lubricants designed to
            maximize efficiency, reduce wear and deliver reliable
            protection for vehicles and industrial equipment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Premium Quality
            </h3>

            <p className="text-gray-600">
              Advanced lubricant formulations designed for superior
              protection and long-lasting performance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Engine Protection
            </h3>

            <p className="text-gray-600">
              Reduces friction, minimizes wear and helps extend
              engine life under demanding conditions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Trusted Performance
            </h3>

            <p className="text-gray-600">
              Suitable for passenger vehicles, commercial fleets
              and industrial machinery.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;