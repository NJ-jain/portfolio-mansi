"use client";
import { Code, Laptop, VenetianMask } from "lucide-react";
import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="box">
        {icon}
        <div className="text">{title}</div>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My services</h2>
        <div className="serv-content">
          <ServiceCard
            icon={<Laptop size={48} strokeWidth={3} />}
            title="Web Design"
            description="    High Converting Ecommerce stores, Product Page also having Custom code, liquid template design."
          />
          <ServiceCard
            icon={<VenetianMask size={48} strokeWidth={3} />}
            title="User Secret"
            description="Ensures that no sensitive data is included in the source code and are stored outside of the project folder."
          />
          <ServiceCard
            icon={<Code size={48} strokeWidth={3} />}
            title="Apps Design"
            description="I encompasses both the user interface(UI) & user experience(UX), including color scheme, font selection, and widgets."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
