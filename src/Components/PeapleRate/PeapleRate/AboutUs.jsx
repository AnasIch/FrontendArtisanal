import React from "react";
import "./AboutUS.css"
const testimonials = [
  {
    name: "HAchim",
    text: "A simple and smart way to connect artisans with marketers.",
  },
  {
    name: "Youssef ",
    text: "Une plateforme innovante pour promouvoir le Made In Morocco dans le monde.",
  },
  {
    name: "Manall",
    text: "Nice Wibsite for linking the  Morrocken Artisanall",
  },
  {
    name: "Brahim ait mhamed",
    text: "A promising concept to showcase Moroccan craftsmanship. But you stell Having small problems",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2 className="section-title">What People Are Saying About Artizal</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-icon">★</div>
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
