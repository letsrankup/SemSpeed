import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Powerful utility to dynamically merge Tailwind classes without conflicts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateUUID() {
  return crypto.randomUUID();
}

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

