import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UK cycling events calendar | Sportives, road races & time trials',
  description:
    'Find UK cycling events including sportives, road races, time trials and gravel rides. Explore upcoming cycling events across the UK with CycleScan.',
  alternates: {
    canonical: 'https://www.cyclescan.co.uk/cycling-events-uk',
  },
}

export default function CyclingEventsUKPage() {
  return (
    <main className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold">
          UK cycling events calendar
        </h1>

        <p className="mb-4 text-lg text-gray-700">
          Looking for cycling events in the UK? CycleScan is building a faster way
          to discover sportives, road races, time trials and gravel events all in
          one place.
        </p>

        <p className="mb-4 text-gray-700">
          Whether you're planning your next sportive, searching for a local time
          trial or looking for a challenging road race, finding accurate and
          up-to-date event information can be difficult. CycleScan aims to solve
          that by bringing together key details like entry status, routes and
          event information in a simple, easy-to-use format.
        </p>

        <p className="mb-4 text-gray-700">
          The platform is currently in development. Join the early access list to
          be the first to explore UK cycling events as they go live.
        </p>

        <div className="mt-8 rounded-xl border p-6 text-center">
          <h2 className="mb-4 text-xl font-semibold">
            Get early access to CycleScan
          </h2>

          <p className="mb-4 text-gray-600">
            Be first to access the UK cycling events database.
          </p>

          <a
            href="/"
            className="inline-block rounded-xl bg-black px-6 py-3 text-white font-medium"
          >
            Join early access
          </a>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          Built by the creator of{' '}
          <a
            href="https://www.racescan.co.uk"
            className="underline"
          >
            RaceScan
          </a>
          , a UK running race discovery platform.
        </div>
      </div>
    </main>
  )
}