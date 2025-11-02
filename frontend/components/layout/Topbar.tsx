'use client';

import { Menu, UserCircle2 } from 'lucide-react';

/**
 * Topbar placeholder that can be replaced with real navigation, search, and user menus.
 */
export function Topbar(): JSX.Element {
  return (
    <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-white/70 px-4 backdrop-blur">
      <div className="flex items-center gap-3 text-sm text-slate-500">
        <Menu className="h-5 w-5" />
        <span className="hidden text-xs font-medium uppercase tracking-wide text-blue-600 sm:inline">
          Secure every schedule
        </span>
      </div>
      <div className="flex items-center gap-2 text-sm text-slate-700">
        <UserCircle2 className="h-6 w-6 text-slate-400" />
        <span className="font-medium">Admin</span>
      </div>
    </header>
  );
}
