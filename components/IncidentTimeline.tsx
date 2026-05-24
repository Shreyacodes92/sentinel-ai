"use client";

import { useEffect, useState } from "react";

const initialEvents = [
  "02:01 New deployment pushed to production",
  "02:02 Sudden traffic spike from Asia region",
  "02:03 Redis memory leak detected",
  "02:04 Database query queue overloaded",
  "02:05 Payment API outage started",
];

export default function IncidentTimeline() {

  const [events, setEvents] = useState(initialEvents);

  useEffect(() => {

    const interval = setInterval(() => {

      const incidentId =
        Math.floor(Math.random() * 9999);

      const newEvent =
        `LIVE Incident #${incidentId} detected by Sentinel AI`;

      setEvents((prev) => [
        newEvent,
        ...prev.slice(0, 5),
      ]);

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6 text-white">
        Incident Timeline
      </h2>

      <div className="space-y-4">

        {events.map((event, index) => (

          <div
            key={index}
            className="border-l-2 border-red-500 pl-4 text-zinc-300"
          >
            {event}
          </div>

        ))}

      </div>

    </div>
  );
}