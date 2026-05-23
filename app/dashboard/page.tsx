import IncidentTimeline from "@/components/IncidentTimeline";
import AIAnalysis from "@/components/AIAnalysis";
import Logs from "@/components/Logs";
import Charts from "@/components/Charts";
import ControlPanel from "@/components/ControlPanel";
import AIChat from "@/components/AIChat";
import ThreatAlert from "@/components/ThreatAlert";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 p-6 relative overflow-hidden selection:bg-emerald-500/30">

      {/* Threat Popup */}
      <ThreatAlert />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_65%)] pointer-events-none blur-3xl" />

      {/* Header */}
      <header className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-zinc-800/60 pb-6 mb-8 gap-4">

        <div>

          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />

            <span className="text-xs font-mono tracking-widest text-emerald-500 uppercase font-bold">
              System Active
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            SENTINEL
            <span className="text-emerald-500 font-light">
              .AI
            </span>
          </h1>

        </div>

        <div className="flex items-center gap-3 font-mono text-xs text-zinc-400 bg-zinc-900/40 border border-zinc-800/80 px-4 py-2.5 rounded-xl backdrop-blur-md">

          <span className="text-zinc-600">
            NODE:
          </span>

          <span className="text-emerald-400">
            01_SEC
          </span>

          <span className="text-zinc-700">
            |
          </span>

          <span className="text-zinc-600">
            SYS:
          </span>

          <span className="text-zinc-300">
            ONLINE
          </span>

        </div>

      </header>

      {/* Main Layout */}
      <main className="relative z-10 grid grid-cols-1 xl:grid-cols-4 gap-6">

        {/* Sidebar */}
        <div className="xl:col-span-1 flex flex-col gap-6">

          {/* CPU Card */}
          <div className="group bg-zinc-900/20 backdrop-blur-xl border border-zinc-800/50 p-5 rounded-2xl hover:border-emerald-500/30 transition-all duration-300">

            <div className="flex justify-between items-start mb-4">

              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Core Load
              </span>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                SYS_01
              </span>

            </div>

            <div className="flex items-baseline gap-1">

              <span className="text-5xl font-black tracking-tight text-white">
                82
              </span>

              <span className="text-lg font-bold text-emerald-500 font-mono">
                %
              </span>

            </div>

            <div className="w-full h-[3px] bg-zinc-800 rounded-full mt-4 overflow-hidden">

              <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-[82%] rounded-full shadow-[0_0_8px_#10b981]" />

            </div>

          </div>

          {/* Latency Card */}
          <div className="group bg-zinc-900/20 backdrop-blur-xl border border-zinc-800/50 p-5 rounded-2xl hover:border-blue-500/30 transition-all duration-300">

            <div className="flex justify-between items-start mb-4">

              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Network Latency
              </span>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                EDGE_US
              </span>

            </div>

            <div className="flex items-baseline gap-1">

              <span className="text-5xl font-black tracking-tight text-white">
                540
              </span>

              <span className="text-xs font-bold text-blue-400 font-mono">
                ms
              </span>

            </div>

            <div className="w-full h-[3px] bg-zinc-800 rounded-full mt-4 overflow-hidden">

              <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 w-[65%] rounded-full shadow-[0_0_8px_#3b82f6]" />

            </div>

          </div>

          {/* Incident Card */}
          <div className="group bg-zinc-900/20 backdrop-blur-xl border border-zinc-800/50 p-5 rounded-2xl hover:border-red-500/30 transition-all duration-300">

            <div className="flex justify-between items-start mb-4">

              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Threat Matrix
              </span>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950/40 text-red-400 border border-red-900/30 animate-pulse">
                CRITICAL
              </span>

            </div>

            <div className="flex items-baseline gap-2">

              <span className="text-5xl font-black tracking-tight text-red-500">
                03
              </span>

              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-bold">
                Breaches
              </span>

            </div>

            <div className="w-full h-[3px] bg-zinc-800 rounded-full mt-4 overflow-hidden">

              <div className="h-full bg-gradient-to-r from-red-600 to-rose-400 w-[90%] rounded-full shadow-[0_0_8px_#ef4444]" />

            </div>

          </div>

          {/* AI Analysis */}
          <div className="p-4 border border-zinc-800/60 rounded-2xl bg-zinc-900/10 backdrop-blur-sm">

            <div className="text-xs font-mono tracking-wider uppercase text-zinc-500 mb-3">
              AI Engine Output
            </div>

            <AIAnalysis />

          </div>

        </div>

        {/* Main Content */}
        <div className="xl:col-span-3 flex flex-col gap-6">

          {/* Charts */}
          <div className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/60 backdrop-blur-xl">

            <div className="flex items-center justify-between mb-4 border-b border-zinc-800/50 pb-3">

              <h3 className="text-sm font-mono tracking-wider uppercase text-zinc-400">
                Telemetry Stream
              </h3>

              <span className="text-[11px] font-mono text-zinc-500">
                REALTIME_FEED
              </span>

            </div>

            <Charts />

          </div>

          {/* Logs + Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div className="p-5 rounded-2xl bg-zinc-900/20 border border-zinc-800/40 backdrop-blur-sm">

              <h3 className="text-xs font-mono tracking-wider uppercase text-zinc-400 mb-3">
                Incident Timeline
              </h3>

              <IncidentTimeline />

            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/20 border border-zinc-800/40 backdrop-blur-sm">

              <h3 className="text-xs font-mono tracking-wider uppercase text-zinc-400 mb-3">
                System Logs
              </h3>

              <Logs />

            </div>

          </div>

          {/* Controls */}
          <ControlPanel />

          {/* AI Chat */}
          <AIChat />

        </div>

      </main>

    </div>
  );
}