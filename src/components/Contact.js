// components/Contact.js
"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm();

  const onSubmit = (data) => {
    alert('Message sent! Thank you.');
  };

  return (
    <section id="contact" className="container mx-auto py-20 px-6 max-w-lg">
      <h2 className="text-4xl font-bold mb-12 text-blue-500 text-center">Contact Me</h2>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <input
          {...register('name', { required: true })}
          placeholder="Your Name"
          className={`p-3 rounded border ${errors.name ? 'border-red-500' : 'border-gray-700'} bg-gray-800 text-white`}
        />
        {errors.name && <span className="text-red-500">Name is required</span>}

        <input
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Your Email"
          className={`p-3 rounded border ${errors.email ? 'border-red-500' : 'border-gray-700'} bg-gray-800 text-white`}
        />
        {errors.email && <span className="text-red-500">Valid email is required</span>}

        <textarea
          {...register('message', { required: true })}
          placeholder="Your Message"
          rows={6}
          className={`p-3 rounded border ${errors.message ? 'border-red-500' : 'border-gray-700'} bg-gray-800 text-white resize-none`}
        />
        {errors.message && <span className="text-red-500">Message is required</span>}

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>

        {isSubmitSuccessful && <p className="text-green-400 text-center mt-2">Thanks for reaching out!</p>}
      </motion.form>
    </section>
  );
}
