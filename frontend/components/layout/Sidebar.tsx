'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ShieldCheck, CalendarCheck2, Megaphone } from 'lucide-react';

const navigation = [
  { href: '/dashboard', label: 'Dashboard', icon: ShieldCheck },
  { href: '/dashboard/schedules', label: 'Schedules', icon: CalendarCheck2 },
  { href: '/dashboard/announcements', label: 'Announcements', icon: Megaphone }
];

/**
 * Sidebar navigation placeholder that can be extended with additional links.
 */
export function Sidebar(): JSX.Element {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 flex-col border-r border-slate-200 bg-white/80 p-4 backdrop-blur">
      <div className="mb-6 flex items-center gap-2 text-xl font-semibold text-slate-900">
        <ShieldCheck className="h-6 w-6" />
        Security Planner
      </div>
      <nav className="flex flex-1 flex-col gap-1">
        {navigation.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-slate-100 hover:text-slate-900',
              pathname?.startsWith(href) ? 'bg-slate-100 font-medium text-blue-600' : 'text-slate-500'
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </nav>
      <div className="rounded-md border border-dashed border-slate-200 bg-slate-50 p-3 text-xs text-slate-500">
        {/* Placeholder content */}
        Customize this sidebar with quick links, filters, or contextual guidance.
      </div>
    </aside>
  );
}
