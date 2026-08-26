import type { Temporal as TemporalNamespace } from "@js-temporal/polyfill";

declare global {
  const Temporal: typeof TemporalNamespace;
  namespace Temporal {
    export type Instant = TemporalNamespace.Instant;
    export type PlainDate = TemporalNamespace.PlainDate;
    export type PlainDateTime = TemporalNamespace.PlainDateTime;
    export type ZonedDateTime = TemporalNamespace.ZonedDateTime;
    export type Duration = TemporalNamespace.Duration;
  }
}

export {};