"use client";
import { useCallback, useState } from "react";
import { Check, Copy, FileText, Github, Linkedin, Mail } from "lucide-react";
import {
  APP_NAME,
  AVAILABILITY_LINE,
  CONTACT_EMAIL,
  CONTACT_HIRING_FOCUS_LINE,
  CONTACT_HIRING_OUTREACH_LINE,
  CONTACT_RESPONSE_EXPECTATION_LINE,
  GITHUB_HANDLE,
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_HREF,
} from "@/lib/constants";
import {
  ProfileLinkList,
  ProfileLinkRow,
} from "@/components/shared/profile-link-row";
import ContactHeroCrossLinks from "./contact-hero-cross-links";
import ContactMeMotion from "./contact-me-motion";

const MAIL_SUBJECT = `Inquiry from ${APP_NAME}'s portfolio`;

const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(MAIL_SUBJECT)}`;

const ContactMe = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, []);

  return (
    <ContactMeMotion>
      <h1 className="text-5xl font-play text-left">Contact Me</h1>
      <div className="mt-3 max-w-lg space-y-3 font-questrial text-muted-foreground">
        <p>{AVAILABILITY_LINE}</p>
        <p>{CONTACT_HIRING_FOCUS_LINE}</p>
        <p>{CONTACT_HIRING_OUTREACH_LINE}</p>
        <p>{CONTACT_RESPONSE_EXPECTATION_LINE}</p>
      </div>
      <ContactHeroCrossLinks />
      <ProfileLinkList align="start" layout="stack" className="gap-6 pt-6">
        <ProfileLinkRow
          icon={Mail}
          label="Email"
          subtitle={CONTACT_EMAIL}
          href={mailtoHref}
          ariaLabel={`Email ${APP_NAME} at ${CONTACT_EMAIL}`}
          trailing={
            <>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={
                  copied ? "Email copied" : `Copy ${CONTACT_EMAIL} to clipboard`
                }
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
            </>
          }
        />
        <ProfileLinkRow
          icon={Github}
          label="GitHub"
          subtitle={GITHUB_HANDLE}
          href={GITHUB_URL}
          external
          ariaLabel={`${APP_NAME} on GitHub, ${GITHUB_URL}`}
        />
        <ProfileLinkRow
          icon={Linkedin}
          label="LinkedIn"
          href={LINKEDIN_URL}
          external
          ariaLabel={`${APP_NAME} on LinkedIn, ${LINKEDIN_URL}`}
        />
        <ProfileLinkRow
          icon={FileText}
          label="Download CV"
          href={RESUME_HREF}
          download
          prefetch={false}
          ariaLabel={`Download ${APP_NAME}'s resume (PDF)`}
        />
      </ProfileLinkList>
    </ContactMeMotion>
  );
};

export default ContactMe;
