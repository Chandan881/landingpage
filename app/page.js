import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-10 md:px-16 lg:px-24">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
          Choose a landing to preview
        </h1>
        <p className="mt-3 text-base sm:text-lg text-black/70 dark:text-white/70">
          Three responsive pages built with Atomic Design and Tailwind CSS.
        </p>
      </section>
      <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/user"
          className="group rounded-2xl border border-black/10 dark:border-white/15 p-6 hover:shadow-lg transition-shadow bg-white/80 dark:bg-black/20 backdrop-blur"
        >
          <div className="h-12 w-12 rounded-xl bg-black text-white dark:bg-white dark:text-black grid place-items-center text-xl font-semibold">
            U
          </div>
          <h3 className="mt-4 text-xl font-semibold">User Landing</h3>
          <p className="mt-1 text-black/70 dark:text-white/70 text-sm">
            Personalized experience, discovery, and actions for end users.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-blue-600 group-hover:underline">
            Open →
          </span>
        </Link>

        <Link
          href="/rider"
          className="group rounded-2xl border border-black/10 dark:border-white/15 p-6 hover:shadow-lg transition-shadow bg-white/80 dark:bg-black/20 backdrop-blur"
        >
          <div className="h-12 w-12 rounded-xl bg-black text-white dark:bg-white dark:text-black grid place-items-center text-xl font-semibold">
            R
          </div>
          <h3 className="mt-4 text-xl font-semibold">Rider Landing</h3>
          <p className="mt-1 text-black/70 dark:text-white/70 text-sm">
            Clear onboarding, earnings highlights, and how it works.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-blue-600 group-hover:underline">
            Open →
          </span>
        </Link>

        <Link
          href="/shop"
          className="group rounded-2xl border border-black/10 dark:border-white/15 p-6 hover:shadow-lg transition-shadow bg-white/80 dark:bg-black/20 backdrop-blur"
        >
          <div className="h-12 w-12 rounded-xl bg-black text-white dark:bg-white dark:text-black grid place-items-center text-xl font-semibold">
            S
          </div>
          <h3 className="mt-4 text-xl font-semibold">Shop Landing</h3>
          <p className="mt-1 text-black/70 dark:text-white/70 text-sm">
            Tools to grow sales, manage orders, and delight customers.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-blue-600 group-hover:underline">
            Open →
          </span>
        </Link>
      </section>
    </main>
  );
}
