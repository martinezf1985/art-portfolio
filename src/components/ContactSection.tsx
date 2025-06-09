// src/components/ContactSection.tsx
import { forwardRef } from "react";
import ContactForm from "./ContactForm";

type ContactSectionProps = React.HTMLAttributes<HTMLDivElement>;

const ContactSection = forwardRef<HTMLDivElement, ContactSectionProps>(
  ({ className, ...rest }, ref) => {
    return (
      <section
        ref={ref}
        className={`px-6 py-20 bg-gradient-to-tr from-violet-700 via-violet-800 to-black ${className || ""}`}
        {...rest}
      >
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Contacto</h2>
          <p className="mb-6 text-gray-200">
            ¿Querés contactarme para un proyecto o colaboración?
          </p>
          <ContactForm />
        </div>
      </section>
    );
  }
);

export default ContactSection;
