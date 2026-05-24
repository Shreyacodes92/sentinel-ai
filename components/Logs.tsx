"use client";

import { useEffect, useState } from "react";

const initialLogs = [
  "[02:01] Kubernetes deployment initiated",
  "[02:02] Redis cache memory usage exceeded 92%",
  "[02:03] API Gateway latency crossed 540ms",
  "[02:04] PostgreSQL connection timeout detected",
  "[02:05] Payment service returned HTTP 503",
  "[02:06] AI anomaly engine triggered critical alert",
  "[02:07] Auto-scaling failed due to insufficient nodes",
];

export default function Logs() {
  const [logs, setLogs] = useState(initialLogs);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomId = Math.floor(Math.random() * 9999);

      const newLog =
        `[LIVE] AI detected anomaly signature #${randomId}`;

      setLogs((prev) => [newLog, ...prev.slice(0, 6)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black border border-neutral-800 rounded-3xl p-8 h-full">
      <h2 className="text-3xl font-bold text-green-400 mb-8">
        Live Logs
      </h2>

      <div className="space-y-4 text-green-400 font-mono text-xl">
        {logs.map((log, i) => (
          <p key={i}>{log}</p>
        ))}
      </div>
    </div>
  );
}