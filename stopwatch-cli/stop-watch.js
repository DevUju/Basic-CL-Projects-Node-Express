let startTime = null;

function start() {
  if (startTime) {
    console.log("⏱ Stopwatch already running!");
    return;
  }
  startTime = Date.now();
  console.log("✅ Stopwatch started!");
}

function stop() {
  if (!startTime) {
    console.log("⚠️ Stopwatch is not running.");
    return;
  }
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  console.log(`🛑 Stopwatch stopped. Elapsed time: ${elapsed} seconds.`);
  startTime = null;
}

module.exports = { start, stop };
