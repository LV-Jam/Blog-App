'use client';

import { SubmitEvent, useState } from 'react';

export default function BookingPage() {
  const [sent, setSent] = useState(false);
  const submit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };
  return (
    <main className="page-shell booking-page">
      <div className="page-title">
        <p className="eyebrow">Make something lasting</p>
        <h1>
          Let&apos;s work
          <br />
          <em>together.</em>
        </h1>
        <p>Tell us a little about the project, and we&apos;ll reply within two working days.</p>
      </div>
      {sent ? (
        <div className="success-message">
          <p className="eyebrow">Request received</p>
          <h2>Thank you. We&apos;ll be in touch.</h2>
          <button type="button" onClick={() => setSent(false)} className="text-link">
            Send another request ↗
          </button>
        </div>
      ) : (
        <form className="booking-form" onSubmit={submit}>
          <label>
            Name
            <input name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Project type
            <select name="type" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Editorial</option>
              <option>Portraits</option>
              <option>Commercial</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Project details
            <textarea name="details" rows={5} required />
          </label>
          <button type="submit" className="button">
            Send booking request ↗
          </button>
        </form>
      )}
    </main>
  );
}
