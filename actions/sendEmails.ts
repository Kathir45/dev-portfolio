"use server";

// Contact form is now handled client-side via Formspree.
// This file is kept for compatibility but is no longer the primary contact method.

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");

  if (!email || !message) {
    return { error: "Please fill in all fields" };
  }

  // Formspree is handled client-side in Contact.tsx
  return { error: "Please use the contact form directly." };
};
