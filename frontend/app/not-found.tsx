import Link from 'next/link';

export default function NotFound(): JSX.Element {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center space-y-6 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="max-w-md text-sm text-slate-500">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" className="rounded-md bg-blue-600 px-4 py-2 text-white">
        Return to home
      </Link>
    </section>
  );
}
