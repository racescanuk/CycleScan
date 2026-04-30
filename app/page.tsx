export const metadata = {
  title: 'UK cycling events calendar | CycleScan',
  description:
    'Find UK cycling events including sportives, road races, time trials and gravel events. Join the CycleScan waitlist for early access.',
  alternates: {
    canonical: 'https://www.cyclescan.co.uk',
  },
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <div className="max-w-2xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
          CycleScan
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
          Find UK cycling events faster
        </h1>

        <p className="mb-8 text-lg leading-8 text-gray-600">
          Sportives, road races, time trials and gravel events — all in one
          place. CycleScan will track entry status, routes and key event details
          so you can plan your season with confidence.
        </p>

        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSenOznZ_3_ZNntmXgsnibSDVJu4IB7wOpWbq6Eb1Ovx5ZftqA/formResponse"
          method="POST"
          target="_blank"
          className="mx-auto mb-4 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            name="entry.1348621388"
            required
            placeholder="Enter your email"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base outline-none focus:border-gray-900"
          />

          <button
            type="submit"
            className="rounded-xl bg-black px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Join early access
          </button>
        </form>

        <p className="mb-8 text-sm text-gray-500">
          Be first to access the UK cycling events database. No spam.
        </p>

        <a
          href="https://www.racescan.co.uk"
          className="inline-block rounded-xl bg-gray-100 px-6 py-3 font-medium text-gray-900 hover:bg-gray-200"
        >
          Built by the creator of RaceScan
        </a>
      </div>
    </main>
  )
}