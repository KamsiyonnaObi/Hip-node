import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 *
 * @param key
 * @param object Object that you're indexing
 * @returns the value of the objects key
 */
export function findProperty(key: string, object: { [x: string]: any }) {
  return object[key];
}

export function formDataToObject(formData) {
  const object = {};
  for (const [key, value] of formData.entries()) {
    object[key] = value;
  }
  return object;
}
export * from "./utils";
