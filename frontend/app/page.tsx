import Link from 'next/link';

export default function HomePage(): JSX.Element {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Welcome to Security Planner</h1>
      <p className="text-slate-500">
        This is a placeholder landing page. Use the navigation to explore the dashboard or sign in to manage schedules.
      </p>
      <div className="flex gap-3">
        <Link href="/login" className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm">
          Sign In
        </Link>
        <Link href="/dashboard" className="rounded-md border px-4 py-2 text-sm">
          Go to dashboard
        </Link>
      </div>
    </section>
  );
}
