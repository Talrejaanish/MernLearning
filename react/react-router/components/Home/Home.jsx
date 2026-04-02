import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to YourBrand
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Your one-stop destination for quality products and services
        </p>
        <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Explore Now
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p>We ensure top-notch quality in all our offerings.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
            <p>Best prices that suit your budget without compromise.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
            <p>We are here to help you anytime, anywhere.</p>
          </div>
        </div>
      </section>

      {/* Products / Services Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Groceries</h3>
            <p>Daily essentials available at your convenience.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Home Needs</h3>
            <p>All household items in one place.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Special Offers</h3>
            <p>Exciting deals and discounts every day.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="mb-6">
          Join us today and experience the best service.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default Home;