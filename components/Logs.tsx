const logs = [
  "[02:01] Kubernetes deployment initiated",
  "[02:02] Redis cache memory usage exceeded 92%",
  "[02:03] API Gateway latency crossed 540ms",
  "[02:04] PostgreSQL connection timeout detected",
  "[02:05] Payment service returned HTTP 503",
  "[02:06] AI anomaly engine triggered critical alert",
  "[02:07] Auto-scaling failed due to insufficient nodes",
];

export default function Logs() {
  return (
    <div className="bg-black p-6 rounded-2xl mt-6 border border-zinc-800">
      <h2 className="text-green-400 text-xl mb-4">
        Live Logs
      </h2>

      <div className="space-y-2 font-mono text-green-500">
        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </div>
  );
}