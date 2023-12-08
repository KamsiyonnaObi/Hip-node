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

export function formDataToObject(formData: FormData) {
  const object = {};

  for (const [key, value] of formData.entries()) {
    // @ts-ignore
    object[key as keyof Object] = value;
  }
  return object;
}
export * from "./utils";

export function uniques(array: string[]) {
  return Array.from(new Set(array));
}
