import React from 'react';
import profile1 from "../../../../src/assets/Testimonial/profile-1.jpg";
import profile2 from "../../../../src/assets/Testimonial/profile-2.png";
import testimonialBg from "../../../../src/assets/Testimonial/testimonial-bg.png";
import Title from '../../../components/Title/Title';


const Testimonial = () => {
  const testimonials = [
  {
      name: "Afiya Jaman Snigdha",
      role: "UI/UX Designer",
      testimonialText: "Explore our collection of carefully chosen products expert advice and inspiring stories designed to  help you discover and your full potential. Whether you are seeking inspiration advice or the perfect product to elevate your routine.",
      imageUrl: profile1
    },
    {
      name: "Rafiq Hasan Mahabuba",
      role: "Frontend Developer",
      testimonialText: "The product selection and customer support are excellent. I found exactly what I needed for my requirements. Their service is professional, timely, and highly recommended. I am very impressed with the quality, attention to.",
      imageUrl: profile2
    }

  ];

  return (
    <section className="bg-base-200 py-20 flex flex-col items-center px-3 @min-[400px]:px-4 @min-[600px]:px-5 @min-[700px]:px-7 @min-[900px]:px-8 @min-[1500px]:px-0">
        <Title Text={"Customer Testimonial"} ></Title>

        <div className="flex">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-8 w-full z-20">
                {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className={`
                     rounded w-full @min-[1200px]:max-w-[424px] min-h-[284px] bg-base-100 shadow-md py-[48px] px-[30px]`
                    }
                >
                    <div className="flex items-start space-x-4 mb-4 z-10">
                    {/* Avatar */}
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                        <img src={testimonial.imageUrl} alt={`${testimonial.name}'s avatar`} />
                        </div>
                    </div>
                    {/* Name and Role */}
                    <div className="flex flex-col">
                        <span className="font-bold text-lg text-primary">{testimonial.name}</span>
                        <span className="text-sm text-base-content/60">{testimonial.role}</span>
                    </div>
                    </div>
                    {/* Testimonial Text */}
                    <p className="text-base-content text-sm md:text-base leading-relaxed z-10">
                    {testimonial.testimonialText}
                    </p>
                </div>
                ))}
            </div>
              
            {/* Image */}
            <div className="relative hidden -left-[106px] @min-[1200px]:block">
                <img
                    src={testimonialBg}
                    alt="Product"
                    className="min-w-[536px] h-full top-0 shadow-2xl"
                />
            </div>
        </div>

    </section>
  );
};

export default Testimonial;