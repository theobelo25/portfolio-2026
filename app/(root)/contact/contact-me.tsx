"use client";
import { useCallback, useState } from "react";
import {
  Check,
  Copy,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { APP_NAME, LINKEDIN_URL, RESUME_HREF } from "@/lib/constants";

const EMAIL = "theo.belo25@gmail.com";
const MAIL_SUBJECT = `Inquiry from ${APP_NAME}'s portfolio`;
const GITHUB_URL = "https://github.com/theobelo25/";
const GITHUB_HANDLE = "@theobelo25";

const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(MAIL_SUBJECT)}`;

const ContactMe = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, []);

  return (
    <motion.section
      className="col-span-1 w-full py-10"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <h1 className="text-5xl font-play text-left">Contact Me</h1>
      <div className="flex w-full flex-col items-start gap-10 py-10">
        <div className="flex w-full max-w-lg flex-wrap items-center justify-start gap-3">
          <Mail className="size-8 shrink-0 sm:size-10 md:size-12" aria-hidden />
          <a
            className="font-questrial text-xl inline-flex items-center gap-2"
            href={mailtoHref}
          >
            {EMAIL}
            <ExternalLink className="size-4 shrink-0 opacity-80" aria-hidden />
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={copied ? "Email copied" : `Copy ${EMAIL} to clipboard`}
          >
            {copied ? (
              <Check className="size-5" aria-hidden />
            ) : (
              <Copy className="size-5" aria-hidden />
            )}
          </button>
          {copied ? (
            <span className="sr-only" role="status" aria-live="polite">
              Email address copied to clipboard
            </span>
          ) : null}
        </div>
        <div className="flex w-full max-w-lg flex-wrap items-center justify-start gap-3">
          <Github className="size-8 shrink-0 sm:size-10 md:size-12" aria-hidden />
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-questrial text-xl inline-flex items-center gap-2"
            title={GITHUB_URL}
            aria-label={`Theodore Belo on GitHub, ${GITHUB_URL}`}
          >
            {GITHUB_HANDLE}
            <ExternalLink className="size-4 shrink-0 opacity-80" aria-hidden />
          </a>
        </div>
        <div className="flex w-full max-w-lg flex-wrap items-center justify-start gap-3">
          <Linkedin
            className="size-8 shrink-0 sm:size-10 md:size-12"
            aria-hidden
          />
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-questrial text-xl inline-flex items-center gap-2"
            title={LINKEDIN_URL}
            aria-label={`${APP_NAME} on LinkedIn, ${LINKEDIN_URL}`}
          >
            LinkedIn
            <ExternalLink className="size-4 shrink-0 opacity-80" aria-hidden />
          </a>
        </div>
        <div className="flex w-full max-w-lg flex-wrap items-center justify-start gap-3">
          <FileText
            className="size-8 shrink-0 sm:size-10 md:size-12"
            aria-hidden
          />
          <Link
            href={RESUME_HREF}
            download
            prefetch={false}
            className="font-questrial text-xl inline-flex items-center gap-2"
            aria-label={`Download ${APP_NAME}'s resume (PDF)`}
          >
            Download CV
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactMe;
