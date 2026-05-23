"use client";

import { motion } from "framer-motion";

export default function AIAnalysis() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-zinc-900/40 backdrop-blur-xl p-6 rounded-2xl border border-zinc-800"
    >

      <h2 className="text-2xl font-bold mb-6 text-white">
        AI Root Cause Analysis
      </h2>

      <div className="space-y-5">

        <div>
          <h3 className="text-red-400 font-semibold mb-1">
            Root Cause
          </h3>

         <p className="text-zinc-300">
  A Redis memory leak after deployment caused cache saturation, increasing database load and triggering API failures.
</p>
        </div>

        <div>
          <h3 className="text-yellow-400 font-semibold mb-1">
            Severity
          </h3>

          <p className="text-zinc-300">
  Critical – High probability of cascading outage.
</p>
        </div>

        <div>
          <h3 className="text-emerald-400 font-semibold mb-1">
            Suggested Fix
          </h3>

         <p className="text-zinc-300">
  Rollback deployment, restart Redis cluster, increase autoscaling threshold, and isolate payment microservice traffic.
</p>
        </div>

      </div>

    </motion.div>
  );
}