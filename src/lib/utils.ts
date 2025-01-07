import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function TrucanteText(text: string, length: number): string {
  return text.length > length ? text.slice(0, length) + "..." : text;
}


