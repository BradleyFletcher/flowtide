"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { BrandButton } from "@/components/ui/brand-button";
import { Mail, Send } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const formData = new FormData(event.currentTarget);
    const result = await submitContactForm(formData);

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      const form = event.currentTarget;
      if (form) {
        form.reset();
      }
    } else {
      setStatus({
        type: "error",
        message: result.error || "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg">
      {isSuccess ? (
        <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
          <div className="relative mb-10">
            {/* Mail icon with simple fade-in and float animation */}
            <div className="relative inline-block">
              <div
                className="flex h-24 w-24 items-center justify-center rounded-2xl bg-linear-to-br from-brand-teal to-brand-blue shadow-lg"
                style={{
                  animation:
                    "fadeInUp 0.6s ease-out, float 3s ease-in-out infinite",
                }}
              >
                <Mail className="h-12 w-12 text-white" strokeWidth={2} />
              </div>

              {/* Success checkmark badge */}
              <div
                className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 shadow-md"
                style={{
                  animation: "scaleIn 0.4s ease-out 0.5s both",
                }}
              >
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes float {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }

            @keyframes scaleIn {
              from {
                transform: scale(0);
              }
              to {
                transform: scale(1);
              }
            }
          `}</style>
          <h2 className="mb-4 text-4xl font-bold text-zinc-900">Thank You!</h2>
          <p className="mb-8 text-lg text-zinc-600">
            Your message has been sent successfully. I'll get back to you within
            24 hours.
          </p>
          <BrandButton
            onClick={() => setIsSuccess(false)}
            variant="primary"
            size="lg"
          >
            Send Another Message
          </BrandButton>
        </div>
      ) : (
        <>
          <h2 className="mb-6 text-3xl font-bold text-zinc-900">
            Send Me a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-zinc-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                placeholder="Your name"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-zinc-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                placeholder="your@email.com"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold text-zinc-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                placeholder="What's this about?"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-zinc-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                placeholder="Tell me about your project..."
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            {status.type && (
              <div
                className={`rounded-lg p-4 ${
                  status.type === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {status.message}
              </div>
            )}

            <BrandButton
              type="submit"
              disabled={isSubmitting}
              variant="primary"
              size="lg"
              className="w-full"
            >
              <Send className="mr-2 h-5 w-5" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </BrandButton>
          </form>
        </>
      )}
    </div>
  );
}
