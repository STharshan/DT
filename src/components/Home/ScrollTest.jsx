import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    quote:
      "Danny has valeted both mine and my husband’s cars. He was punctual, works hard and does a very thorough job. Both cars were immaculate by the time Danny had finished working on them. We will definitely be booking him in the future.",
    author: "Julia Ingham",
  },
  {
    quote:
      "Best in the buissness, only person I’d trust my car with. Danny’s attention to detail is second to none, look no further.",
    author: "aaron yates",
  },
  {
    quote: "Amazing service! My car is always sparkling & smells so fresh. Always responds quickly & gets you booked in",
    author: "kayley",
  },
  {
    quote:
      "Used Dan a couple of months ago, brilliant service, advise and the hard work he put into making sure everything was perfect for me was unbelievable.",
    author: "Steven King",
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
