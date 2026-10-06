"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { contactFormServices } from "@/lib/site-config";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message. Please try again later.");
      }

      setStatus("success");
      form.reset();
    } catch (error: unknown) {
      setStatus("error");
      const err = error as Error;
      setErrorMessage(err.message || "An error occurred while submitting.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="space-y-2 relative group">
          <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#707072] font-bold transition-colors group-focus-within:text-[#111111]">
            Full Name <span className="text-[#111111]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full pb-3 border-b border-[#e5e5e5] bg-transparent text-[#111111] text-base focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#707072]/40 font-medium"
            placeholder="Kavindra Singh"
          />
        </div>
        <div className="space-y-2 relative group">
          <label htmlFor="company" className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#707072] font-bold transition-colors group-focus-within:text-[#111111]">
            Company / Plant Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full pb-3 border-b border-[#e5e5e5] bg-transparent text-[#111111] text-base focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#707072]/40 font-medium"
            placeholder="e.g. Chemical Manufacturing Ltd."
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div className="space-y-2 relative group">
          <label htmlFor="phone" className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#707072] font-bold transition-colors group-focus-within:text-[#111111]">
            Phone Number <span className="text-[#111111]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full pb-3 border-b border-[#e5e5e5] bg-transparent text-[#111111] text-base focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#707072]/40 font-mono"
            placeholder="+91 94080 84532"
          />
        </div>
        <div className="space-y-2 relative group">
          <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#707072] font-bold transition-colors group-focus-within:text-[#111111]">
            Official Email Address <span className="text-[#111111]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full pb-3 border-b border-[#e5e5e5] bg-transparent text-[#111111] text-base focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#707072]/40 font-medium"
            placeholder="procurement@company.com"
          />
        </div>
      </div>

      <div className="space-y-2 relative group mt-8">
        <label htmlFor="service" className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#707072] font-bold transition-colors group-focus-within:text-[#111111]">
          Primary Service Required
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            defaultValue=""
            className="w-full pb-3 border-b border-[#e5e5e5] bg-transparent text-[#111111] text-base focus:outline-none focus:border-[#111111] transition-colors appearance-none cursor-pointer font-medium invalid:text-[#707072]/40"
          >
            <option value="" disabled>Select service category</option>
            {contactFormServices.map((service, idx) => (
              <option key={idx} value={service} className="text-[#111111]">
                {service}
              </option>
            ))}
            <option value="Other" className="text-[#111111]">Other Specialized Work</option>
          </select>
          <div className="pointer-events-none absolute top-1 right-0 flex items-center text-[#111111]">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-2 relative group mt-8">
        <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#707072] font-bold transition-colors group-focus-within:text-[#111111]">
          Project Scope &amp; Site Details <span className="text-[#111111]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full pb-3 border-b border-[#e5e5e5] bg-transparent text-[#111111] text-base focus:outline-none focus:border-[#111111] transition-colors resize-none placeholder:text-[#707072]/40 font-medium"
          placeholder="Please describe project scope, estimated tonnages/inch-meter piping, plant location, and desired turnaround timeline..."
        />
      </div>

      {status === "success" && (
        <div className="p-4 rounded-xl bg-[#f5f5f5] border border-[#e5e5e5] text-[#111111] text-sm flex items-start gap-3 mt-6">
          <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
          <span className="font-medium leading-relaxed">Thank you! Your enquiry has been forwarded to our engineering team. We will review the specs and reach out shortly.</span>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3 mt-6">
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <span className="font-medium leading-relaxed">{errorMessage}</span>
        </div>
      )}

      <div className="pt-6">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#111111] hover:bg-black text-white font-heading font-medium text-sm rounded-full transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <span>{status === "loading" ? "Submitting Scope..." : "Submit Technical Enquiry"}</span>
          <Send size={15} />
        </button>
      </div>
    </form>
  );
}
