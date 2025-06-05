import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
          {/* Hero Section */}
    
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-10 md:pt-10 lg:pt-10 bg-white">
        <div className="flex-1 space-y-6 max-w-xl md:mr-12">
          <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent leading-tight">
            Sleep Better, Live Better
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            SleepTracker helps you monitor your sleep, understand patterns, and wake up feeling refreshed.
          </p>
          <SignInButton>
            <button className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-6 py-3 rounded-xl text-base font-semibold shadow-lg hover:opacity-90 transition-all">
              Get Started For Free
            </button>
          </SignInButton>
        </div>
        <div className="flex-1 flex justify-center mt-12 md:mt-0">
          <img
            src="/sleep-tracker.png"
            alt="SleepTracker Illustration"
            className="w-full max-w-sm md:max-w-md rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] bg-gray-200 my-10 mx-auto w-4/5" />

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h3 className="text-xl font-semibold text-purple-600">What is SleepTracker?</h3>
            <p className="text-gray-600 mt-2">
              SleepTracker is a smart app that tracks your sleep data, offering insights to improve your health and mood.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-600">How does it work?</h3>
            <p className="text-gray-600 mt-2">
              Just log your sleep duration and mood each day. We’ll visualize your sleep-mood correlation to help you build better habits.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-600">Is it free?</h3>
            <p className="text-gray-600 mt-2">
              Yes! SleepTracker is free to use with all essential features. Premium features are available for power users.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] bg-gray-200 my-10 mx-auto w-4/5" />

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                'SleepTracker completely transformed my sleep. I now wake up energized every single morning!',
              name: 'Sarah L.',
            },
            {
              quote:
                'With SleepTracker, I finally understood how my mood was linked to my sleep. Life-changing!',
              name: 'John D.',
            },
            {
              quote:
                'It’s easy to use, insightful, and beautifully designed. A must-have for night owls like me!',
              name: 'Emily R.',
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-100 hover:bg-purple-50 transition-colors p-6 rounded-2xl shadow-md"
            >
              <p className="text-gray-700 italic mb-4">“{testimonial.quote}”</p>
              <p className="text-purple-600 font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 py-16 text-white text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Ready to Take Control of Your Sleep?
        </h2>
        <SignInButton>
          <button className="bg-white text-purple-600 font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
            Join Now — It’s Free
          </button>
        </SignInButton>
      </section>
    </div>
  );
};

export default Guest;
