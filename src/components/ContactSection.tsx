// components/ContactSection.tsx
import React, { forwardRef } from "react";
import ContactForm from "./ContactForm";

const ContactSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="px-6 py-20 bg-gradient-to-tr from-violet-700 via-violet-800 to-black"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="mb-6 text-gray-200">
          ¿Querés contactarme para un proyecto o colaboración?
        </p>
        <ContactForm />
      </div>
    </section>
  );
});

export default ContactSection;
