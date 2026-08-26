// components/Nav.tsx
'use client';

import { NavLink } from './NavLink';

export function Nav() {
  return (
    <nav className="flex gap-6">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/gallery">Gallery</NavLink>
      <NavLink href="/booking">Booking</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/admin">Admin</NavLink>
    </nav>
  );
}
