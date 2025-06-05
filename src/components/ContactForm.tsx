




// src/components/ContactForm.tsx
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Por ahora solo mostramos en consola; Formspree lo enviará vía action en el <form> padre
    console.log("Enviando formulario:", formData);

    // Limpiar los campos después de enviar
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-6">
      {/* Nombre */}
      <input
        type="text"
        name="firstName"
        placeholder="Nombre"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="w-full border-b-2 border-gray-300 focus:border-blue-500 bg-transparent p-2 text-white"
      />

      {/* Apellido */}
      <input
        type="text"
        name="lastName"
        placeholder="Apellido"
        value={formData.lastName}
        onChange={handleChange}
        required
        className="w-full border-b-2 border-gray-300 focus:border-blue-500 bg-transparent p-2 text-white"
      />

      {/* Teléfono */}
      <input
        type="tel"
        name="phone"
        placeholder="Teléfono"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full border-b-2 border-gray-300 focus:border-blue-500 bg-transparent p-2 text-white"
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border-b-2 border-gray-300 focus:border-blue-500 bg-transparent p-2 text-white"
      />

      {/* Mensaje */}
      <textarea
        name="message"
        placeholder="Escribe tu mensaje aquí..."
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        className="w-full border-b-2 border-gray-300 focus:border-blue-500 bg-transparent p-2 text-white resize-none"
      />

      {/* Botón */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
      >
        Enviar mensaje
      </button>
    </form>
  );
};

export default ContactForm;
