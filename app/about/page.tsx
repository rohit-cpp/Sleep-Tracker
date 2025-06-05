import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
          About SleepTracker
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Your ultimate companion for tracking sleep and improving your health.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
          At SleepTracker, our mission is to help you achieve better sleep and
          overall well-being by analyzing sleep trends and offering practical insights.
          We believe quality rest is the foundation for a healthier, happier life.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose SleepTracker?
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: 'Comprehensive Tracking',
              description:
                'Track your sleep duration and mood with intuitive daily logs.',
            },
            {
              title: 'Personalized Insights',
              description:
                'Get recommendations tailored to your sleep habits and mood patterns.',
            },
            {
              title: 'User-Friendly Design',
              description:
                'Enjoy a clean, responsive UI designed for all screens and users.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-purple-50 transition p-6 rounded-2xl shadow-md text-center"
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-600">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
          SleepTracker was born from a desire to solve modern sleep issues through technology.
          Our team of sleep scientists and developers joined forces to build a tool that not only tracks sleep,
          but helps people build healthy routines. Since launching, we have impacted thousands of lives
          and continue to evolve with feedback and research.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Sleep Better?</h2>
        <p className="text-lg max-w-xl mx-auto mb-8">
          Join SleepTracker today and take the first step toward healthier sleep and a better you.
        </p>
        <Link
          href="/sign-up"
          className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
        >
          Get Started For Free
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
