"use client";

type ReserveNowButtonProps = {
  label?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
};

export default function ReserveNowButton({
  label = "Reserve",
  href = "#reservations",
  onClick,
  variant = "primary",
}: ReserveNowButtonProps) {
  const className = `reserve-btn ${variant}`;

  if (onClick) {
    return (
      <button className={className} onClick={onClick} type="button">
        {label}
      </button>
    );
  }

  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
}
