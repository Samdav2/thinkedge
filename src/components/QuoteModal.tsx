"use client";

import React, { useState, useEffect, useRef } from "react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { X, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function QuoteModal() {
  const { isOpen, defaultService, closeQuoteModal } = useQuoteModal();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Sync service selection when defaultService changes
  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  // Focus input and lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStatus("idle");
      setErrorMessage("");
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Keyboard accessibility (Esc to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeQuoteModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeQuoteModal]);

  // Light dismiss: click outside modal box closes modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeQuoteModal();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit quote request.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      const errorStr =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setStatus("error");
      setErrorMessage(errorStr);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-brand-dark px-6 py-5 flex items-center justify-between text-white">
          <div>
            <h2 id="quote-modal-title" className="text-xl font-bold tracking-tight">
              Request a Quote
            </h2>
            <p className="text-xs text-gray-300 mt-1">
              Tell us about your requirements and we&apos;ll be in touch promptly.
            </p>
          </div>
          <button
            onClick={closeQuoteModal}
            className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {status === "success" ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Quote Request Received!</h3>
              <p className="text-gray-600 text-sm max-w-sm mx-auto leading-relaxed">
                Thank you for getting in touch. An email has been sent to our team, and we will review your request and contact you soon.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={closeQuoteModal}
                  className="bg-brand-primary hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-start gap-3">
                  <AlertCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Unable to send: </span>
                    {errorMessage}
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="quote-name"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="quote-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="quote-email"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="quote-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="quote-service"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                >
                  Service of Interest
                </label>
                <select
                  id="quote-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition"
                >
                  <option value="General Quote">General Quote &amp; Consultation</option>
                  <option value="EdgeBrand">EdgeBrand — Business Identity &amp; Presentation</option>
                  <option value="EdgeCover">EdgeCover — Staffing &amp; Operational Cover</option>
                  <option value="Idea Research & Strategy">Idea Research &amp; Business Strategy</option>
                  <option value="Compliance & Documentation">Compliance &amp; Professional Documentation</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="quote-message"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                >
                  Message &amp; Requirements <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="quote-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please describe your requirements, timelines, and any specific support needed..."
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeQuoteModal}
                  disabled={status === "loading"}
                  className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 bg-brand-primary hover:bg-blue-700 disabled:opacity-60 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-all shadow-md shadow-blue-500/20"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Quote Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

