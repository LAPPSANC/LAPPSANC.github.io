"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/site-config";

/** Botón flotante de WhatsApp, visible en toda la página. */
export function WhatsAppFloat() {
  return (
    <motion.a
      href={buildWhatsAppLink(whatsappMessages.cta)}
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.8, type: "spring", stiffness: 200, damping: 14 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle size={26} className="relative" fill="white" strokeWidth={0} />
    </motion.a>
  );
}
