import os from "os";

export async function GET() {

  const totalMem = os.totalmem();
  const freeMem = os.freemem();

  const usedRam =
    ((totalMem - freeMem) / totalMem) * 100;

  const cpuLoad =
    os.loadavg()[0] * 100;

  return Response.json({
    cpu: cpuLoad.toFixed(2),
    ram: usedRam.toFixed(2),
  });

}