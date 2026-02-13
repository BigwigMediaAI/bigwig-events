"use client";

type Props = {
  text: string;
  onClick?: () => void;
  className?: string;
};

export default function Button2({ text, onClick, className }: Props) {
  return (
    <button onClick={onClick} className={`btn-style500 ${className || ""}`}>
      {text}
    </button>
  );
}
