import { Temporal } from "@js-temporal/polyfill";

if (typeof globalThis.Temporal === "undefined") {
  (globalThis as any).Temporal = Temporal;
}