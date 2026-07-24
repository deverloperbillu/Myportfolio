"use client";
import { useState } from "react";
export default function Packageform ({packageName, onClose}: {packageName: string; onClose: () => void}) {
const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      packageName,
    };

    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    alert("Form submitted successfully!");
    onClose();
  }

  const closeForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        onClose();
    };

    return(
        <>
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded w-96 relative"
      >
        <a href="#" className="cls-project absolute top-5 right-5 inline-block w-[50px] h-[40px] bg-black" onClick={closeForm}></a>
        <h2 className="text-[20px] font-bold mb-4 text-center text-[#000]">
          {packageName}
        </h2>

        <input
          name="name"
          placeholder="Your Name"
          className="border w-full p-2 mb-3"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="border w-full p-2 mb-3"
          required
        />

        <input
          name="phone"
          type="tel"
          placeholder="Your Phone Number"
          className="border w-full p-2 mb-3"
          required
        />

        <textarea name="message" className='border w-full p-2 mb-3' placeholder="Your Message"></textarea>
        <label className="flex items-start gap-2 mb-3 text-[13px] text-[#000]">
          <input
            type="checkbox"
            name="agree"
            className="w-4 h-4"
          />
        By submitting this form and signing up for texts, you consent to receive text messages. Privacy Policy
        </label>
        <button
          disabled={loading}
          className="bg-black text-white px-4 py-2 w-full"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
        </>
    )
}