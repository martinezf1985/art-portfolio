
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Limpiar mensaje de error al escribir
    if (submitStatus.type === "error") {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar email
    if (!validateEmail(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Por favor, ingresa un email válido."
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Configuración de EmailJS - necesitarás reemplazar estos valores con tus credenciales
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "¡Mensaje enviado exitosamente! Te contactaré pronto."
      });

      // Limpiar los campos después de enviar
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitStatus({
        type: "error",
        message: "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-6">
      {/* Nombre */}
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="Nombre"
          value={formData.firstName}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="w-full border-b-2 border-gray-400 focus:border-violet-400 bg-transparent p-2 text-white placeholder-gray-400 transition-colors disabled:opacity-50"
        />
      </div>

      {/* Apellido */}
      <div>
        <input
          type="text"
          name="lastName"
          placeholder="Apellido"
          value={formData.lastName}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="w-full border-b-2 border-gray-400 focus:border-violet-400 bg-transparent p-2 text-white placeholder-gray-400 transition-colors disabled:opacity-50"
        />
      </div>

      {/* Teléfono */}
      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="w-full border-b-2 border-gray-400 focus:border-violet-400 bg-transparent p-2 text-white placeholder-gray-400 transition-colors disabled:opacity-50"
        />
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="w-full border-b-2 border-gray-400 focus:border-violet-400 bg-transparent p-2 text-white placeholder-gray-400 transition-colors disabled:opacity-50"
        />
      </div>

      {/* Mensaje */}
      <div>
        <textarea
          name="message"
          placeholder="Escribe tu mensaje aquí..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          disabled={isSubmitting}
          className="w-full border-b-2 border-gray-400 focus:border-violet-400 bg-transparent p-2 text-white placeholder-gray-400 resize-none transition-colors disabled:opacity-50"
        />
      </div>

      {/* Mensaje de estado */}
      {submitStatus.message && (
        <div
          className={`p-3 rounded-lg text-center text-sm ${
            submitStatus.type === "success"
              ? "bg-green-500/20 text-green-300 border border-green-500/50"
              : "bg-red-500/20 text-red-300 border border-red-500/50"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      {/* Botón */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-violet-600 hover:bg-violet-700 disabled:bg-violet-800 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors shadow-lg"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
};

export default ContactForm;
