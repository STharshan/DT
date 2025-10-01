import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    quote:
      "Got a starlight headliner done from them and it was done quickly and to a high standard. Would highly recommend",
    author: "EEVAN S",
  },
  {
    quote:
      "Toni and his team are lovely. Very friendly and worked well within the timeframe agreed and were very cost-effective. Absolutely recommend this team 👍.",
    author: "RENOL K",
  },
  {
    quote: "Exceptional service! My car looks as good as new. Highly recommend!",
    author: "KIRK S",
  },
  {
    quote:
      "Fantastic service. Had my Range Rover serviced by these guys, quick turn around good pricing. Will definitely be a repeat customer",
    author: "TARVINDER B",
  },
];

const ScrollingTestimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-overlay py-16 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="w-[200%] animate-scroll flex space-x-6">
        {[...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] bg-white text-black dark:bg-black dark:text-white p-6 rounded shadow-md"
          >
            {/* Quote */}
            <p className="text-sm mb-4">"{t.quote}"</p>

            {/* Author */}
            <p className="font-bold text-sm uppercase">
              {t.author}
            </p>

            {/* Source */}
            <p className="text-xs">Google Reviews</p>
          </div>
        ))}
      </div>

      {/* Scrolling Animation */}
      <style jsx="true">{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ScrollingTestimonials;
