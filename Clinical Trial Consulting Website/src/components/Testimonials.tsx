import { Card, CardContent } from "./ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Director of Clinical Operations",
    company: "BioTech Solutions",
    quote: "KMichelson Consulting brought exceptional expertise to our Phase III trial. Their practical approach and attention to detail helped us navigate complex regulatory requirements while keeping our timeline on track."
  },
  {
    name: "Michael Chen",
    title: "VP Clinical Development", 
    company: "Therapeutic Innovations Inc",
    quote: "Working with KMichelson Consulting was transformative for our organization. They provided the strategic guidance we needed to elevate our clinical operations and delivered results quickly."
  },
  {
    name: "Dr. Jennifer Rodriguez",
    title: "Chief Medical Officer",
    company: "Advanced Therapeutics",
    quote: "The expertise demonstrated by KMichelson Consulting is exceptional. They identified potential challenges early and provided practical solutions that prevented delays in our pivotal study."
  },
  {
    name: "Robert Williams",
    title: "Clinical Operations Director",
    company: "Research Partners LLC",
    quote: "KMichelson Consulting enabled our startup to make a seamless transition into clinical development. Their comprehensive understanding of regulations gave us confidence throughout the process."
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            What our clients say about working with us
          </p>
        </div>

        <div className="relative">
          <Card className="max-w-4xl mx-auto border border-gray-200">
            <CardContent className="p-8 lg:p-12 text-center">
              <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="text-center">
                <div className="font-semibold text-gray-900 text-lg mb-1">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-8 bg-white border border-gray-300 rounded-full p-3 shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-primary"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-8 bg-white border border-gray-300 rounded-full p-3 shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-primary"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}