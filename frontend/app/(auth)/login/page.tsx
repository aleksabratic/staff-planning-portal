export const metadata = {
  title: 'Login | Security Planner'
};

export default function LoginPage(): JSX.Element {
  return (
    <section className="mx-auto max-w-md space-y-6 rounded-lg border bg-white p-8 shadow-sm">
      <header className="space-y-1 text-center">
        <h1 className="text-2xl font-semibold">Access Security Planner</h1>
        <p className="text-sm text-slate-500">
          Sign in with your organization credentials to manage schedules securely.
        </p>
      </header>
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border px-3 py-2"
            placeholder="admin@securityplanner.com"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full rounded-md border px-3 py-2"
          />
        </div>
        <button type="submit" className="w-full rounded-md bg-blue-600 px-4 py-2 text-white">
          Continue
        </button>
      </form>
      <p className="text-center text-xs text-slate-500">
        Authentication will be powered by NextAuth.js in a future iteration.
      </p>
    </section>
  );
}
