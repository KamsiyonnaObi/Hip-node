import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";

function replaceNode() {}

export function html(html: any, opts = {}) {
  return parse(DOMPurify.sanitize(html), {
    ...{
      replace: replaceNode,
    },
    ...opts,
  });
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
