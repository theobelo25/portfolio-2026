import { ExternalLink, type LucideIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ProfileLinkRowProps = {
  icon: LucideIcon;
  label: string;
  subtitle?: string;
  href: string;
  /** Opens in a new tab and shows the external-link icon. */
  external?: boolean;
  ariaLabel: string;
  download?: boolean;
  prefetch?: boolean;
  trailing?: React.ReactNode;
  align?: "start" | "center";
  className?: string;
};

const iconClassName = "size-8 shrink-0 sm:size-10 md:size-12";

export function ProfileLinkRow({
  icon: Icon,
  label,
  subtitle,
  href,
  external = false,
  ariaLabel,
  download,
  prefetch = true,
  trailing,
  align = "start",
  className,
}: ProfileLinkRowProps) {
  const isMailto = href.startsWith("mailto:");
  const showExternalIcon = external || isMailto;

  const linkContent = (
    <>
      <span className="inline-flex items-center gap-2 font-questrial text-xl">
        {label}
        {showExternalIcon ? (
          <ExternalLink className="size-4 shrink-0 opacity-80" aria-hidden />
        ) : null}
      </span>
      {subtitle ? (
        <span className="font-questrial text-sm text-muted-foreground">
          {subtitle}
        </span>
      ) : null}
    </>
  );

  const linkClassName =
    "flex min-w-0 flex-col gap-0.5 transition-opacity hover:opacity-90";

  const link =
    external || isMailto ? (
      <a
        href={href}
        className={linkClassName}
        aria-label={ariaLabel}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer", title: href }
          : {})}
      >
        {linkContent}
      </a>
    ) : (
      <Link
        href={href}
        className={linkClassName}
        aria-label={ariaLabel}
        download={download}
        prefetch={prefetch}
      >
        {linkContent}
      </Link>
    );

  return (
    <div
      className={cn(
        "flex max-w-lg flex-wrap items-center gap-3",
        align === "center" ? "justify-center" : "justify-start",
        className,
      )}
    >
      <Icon className={iconClassName} aria-hidden />
      {link}
      {trailing}
    </div>
  );
}

type ProfileLinkListProps = {
  align?: "start" | "center";
  /** Vertical stack (Contact) or horizontal wrap (About). */
  layout?: "stack" | "inline";
  className?: string;
  children: React.ReactNode;
};

export function ProfileLinkList({
  align = "start",
  layout = "stack",
  className,
  children,
}: ProfileLinkListProps) {
  return (
    <div
      className={cn(
        layout === "stack" &&
          cn("flex w-full flex-col gap-10", align === "center" && "items-center"),
        layout === "inline" &&
          cn(
            "flex flex-wrap gap-x-10 gap-y-4",
            align === "center" ? "justify-center" : "justify-start",
          ),
        className,
      )}
    >
      {children}
    </div>
  );
}
