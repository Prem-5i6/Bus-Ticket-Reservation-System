import React from "react";

const AboutUs = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-600 mb-4">About Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to <strong>Bus Reservation System</strong> – your reliable travel partner! 
        Our platform makes booking bus tickets simple, fast, and transparent. 
        We connect passengers with multiple bus operators to provide safe, 
        affordable, and comfortable travel experiences.
      </p>

      <h2 className="text-2xl font-semibold text-orange-500 mb-2">Our Mission</h2>
      <p className="text-gray-700 mb-6">
        To make bus travel easier and more convenient with 
        technology-driven solutions for passengers and operators alike.
      </p>

      <h2 className="text-2xl font-semibold text-orange-500 mb-2">Key Features</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>📅 Easy online ticket booking & cancellation</li>
        <li>🚌 Real-time journey schedules</li>
        <li>💳 Secure wallet & payment integration</li>
        <li>🎫 Seat selection with fare options</li>
        <li>📍 Source & destination filtering</li>
      </ul>

      <h2 className="text-2xl font-semibold text-orange-500 mt-6 mb-2">Why Choose Us?</h2>
      <p className="text-gray-700">
        We prioritize passenger comfort, security, and transparency. 
        With flexible booking options and user-friendly design, 
        your journey starts with us!
      </p>
    </div>
  );
};

export default AboutUs;

