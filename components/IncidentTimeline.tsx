const events = [
  "02:01 New deployment pushed to production",
  "02:02 Sudden traffic spike from Asia region",
  "02:03 Redis memory leak detected",
  "02:04 Database query queue overloaded",
  "02:05 Payment API outage started",
  "02:06 AI predicted cascading infrastructure failure",
  "02:07 Emergency rollback initiated",
];
export default function IncidentTimeline() {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl mt-6">
      
      <h2 className="text-2xl font-bold mb-4">
        Incident Timeline
      </h2>

      <div className="space-y-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="border-l-2 border-red-500 pl-4"
          >
            {event}
          </div>
        ))}
      </div>

    </div>
  );
}