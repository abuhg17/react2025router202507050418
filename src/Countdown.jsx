import React from "react";
import { useState, useEffect } from "react";

export default function Countdown() {
  const [countdownSeconds, setCountdownSeconds] = useState(0);
  const [currentTime, setCurrentTime] = useState("");

  // 目標時間：2025/07/05 04:18（注意 JS 月份從0開始）
  const targetTime = new Date(2025, 6, 5, 4, 18).getTime();

  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const diffSec = Math.max(
        0,
        Math.floor((targetTime - now.getTime()) / 1000)
      );
      setCountdownSeconds(diffSec);
      setCurrentTime(now.toLocaleString("zh-TW", { hour12: false }));
    }
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetTime]);

  function formatCountdown(sec) {
    if (sec <= 0) return "⏰ 審判已開始！";
    const days = Math.floor(sec / (24 * 3600));
    const hours = Math.floor((sec % (24 * 3600)) / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;
    return `${days} 天 ${hours} 時 ${minutes} 分 ${seconds} 秒`;
  }

  const svgElement = (
    <svg
      width="120"
      height="120"
      viewBox="0 0 24 24"
      fill="none"
      stroke="crimson"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-pulse mx-2"
    >
      <path d="M12 2v20M5 9l7 4 7-4" />
      <path d="M5 20h14M9 20V10M15 20V10" />
    </svg>
  );
  return (
    <div>
      <h1>Countdown</h1>
      <div className="text-center p-4 max-w-3xl mx-auto">
        {/* 上方 SVG */}
        <div className="flex justify-center items-center mb-6">
          {[1, 2, 3].map((n) => (
            <React.Fragment key={"top" + n}>{svgElement}</React.Fragment>
          ))}
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-error">
          🔥 人類最後的歷史倒數之大審判 🔥
        </h1>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-error">
          🔥 決不會延後：不早不晚 🔥
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-error">
          🔥 依序先審判各國首都 → 各國大都市 → 各國小都市 → 各國鄉村 → 各國活人
          → 各國死人→ 各國活物→ 各國死物 🔥
        </h3>

        <div className="text-lg md:text-2xl mb-6">
          🕒 現在時間：
          <span className="font-mono">{currentTime}</span>
        </div>

        <div className="text-5xl md:text-6xl font-mono mb-8 animate-pulse">
          ⏳ {formatCountdown(countdownSeconds)}
        </div>

        {/* 下方 SVG */}
        <div className="flex justify-center items-center mb-6">
          {[1, 2, 3].map((n) => (
            <React.Fragment key={"bottom" + n}>{svgElement}</React.Fragment>
          ))}
        </div>

        <p className="text-lg md:text-xl">
          審判開始時間：2025/07/05 04:18（各國首都當地時間）
        </p>
      </div>
    </div>
  );
}
