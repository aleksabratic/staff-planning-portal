export const metadata = {
  title: 'Dashboard | Security Planner'
};

export default function DashboardPage(): JSX.Element {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Operational Overview</h1>
        <p className="text-sm text-slate-500">
          Monitor security schedules, announcements, and key performance indicators from a single view.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-lg border bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold">Upcoming shifts</h2>
          <p className="mt-2 text-xs text-slate-500">Shift summaries will appear here once data is connected.</p>
        </article>
        <article className="rounded-lg border bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold">Latest announcements</h2>
          <p className="mt-2 text-xs text-slate-500">Surface urgent communication to your teams.</p>
        </article>
        <article className="rounded-lg border bg-white p-4 shadow-sm md:col-span-2 xl:col-span-1">
          <h2 className="text-sm font-semibold">Security posture</h2>
          <p className="mt-2 text-xs text-slate-500">Map metrics from analytics when ready.</p>
        </article>
      </div>
    </section>
  );
}
