function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black text-white border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold">
            Lubri<span className="text-red-600">Max</span>
          </h2>

          <p className="text-zinc-400 mt-4 leading-relaxed">
            High-performance lubricants engineered for
            automotive, industrial and heavy-duty
            machinery applications.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-zinc-400">
            <li>
              <a href="#hero" className="hover:text-red-500">
                Home
              </a>
            </li>

            <li>
              <a href="#products" className="hover:text-red-500">
                Products
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-red-500">
                About Us
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-red-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Contact Information
          </h3>

          <div className="space-y-2 text-zinc-400">
            <p>support@lubrimax.com</p>
            <p>+91 98765 43210</p>
            <p>Kerala, India</p>
          </div>
        </div>

      </div>

      <div className="border-t border-zinc-800 py-5 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} LubriMax. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;