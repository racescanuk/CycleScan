export const metadata = {
  title: 'UK cycling events calendar | CycleScan',
  description:
    'Find UK cycling events including sportives, road races, time trials and gravel events. CycleScan helps you discover events, check entry status and plan your season.',
  alternates: {
    canonical: 'https://www.cyclescan.co.uk',
  },
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-6">
          Find UK cycling events faster
        </h1>

        <p className="text-lg mb-6 text-gray-600">
          Sportives, road races, time trials and gravel events — all in one place.
          CycleScan will track entry status, routes and key event details so you
          can plan your season with confidence.
        </p>

        <p className="text-md mb-8 text-gray-500">
          🚧 Launching soon. Built by the creator of RaceScan.
        </p>

        <a
          href="https://www.racescan.co.uk"
          className="inline-block rounded-xl bg-black px-6 py-3 text-white font-medium hover:opacity-90"
        >
          Visit RaceScan
        </a>
      </div>
    </main>
  )
}