import React, { useState, useEffect } from "react";

const ProgressTracker = () => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeRemaining, setTimeRemaining] = useState("");

  // Start: June 25, 2025 at 4:00 PM
  const startTime = new Date("2025-06-25T16:00:00");
  // End: July 1, 2025 at 10:00 AM
  const endTime = new Date("2025-07-01T10:00:00");

  const totalDuration = endTime.getTime() - startTime.getTime();

  const calculateProgress = () => {
    const now = new Date();
    setCurrentTime(now);

    if (now < startTime) {
      setProgress(0);
      setTimeRemaining("Not started yet");
    } else if (now > endTime) {
      setProgress(100);
      setTimeRemaining("Completed!");
    } else {
      const elapsed = now.getTime() - startTime.getTime();
      const progressPercent = (elapsed / totalDuration) * 100;
      setProgress(progressPercent);

      // Calculate remaining time
      const remaining = endTime.getTime() - now.getTime();
      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));

      if (days > 0) {
        setTimeRemaining(`${days}d ${hours}h ${minutes}m remaining`);
      } else if (hours > 0) {
        setTimeRemaining(`${hours}h ${minutes}m remaining`);
      } else {
        setTimeRemaining(`${minutes}m remaining`);
      }
    }
  };

  useEffect(() => {
    calculateProgress();
    const interval = setInterval(calculateProgress, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const containerStyle = {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #111827 0%, #000000 50%, #374151 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1rem",
  };

  const mainCardStyle = {
    maxWidth: "28rem",
    margin: "0 auto",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(16px)",
    borderRadius: "1.5rem",
    padding: "2rem",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "2rem",
  };

  const titleStyle = {
    fontSize: "1.875rem",
    fontWeight: "bold",
    color: "white",
    marginBottom: "0.5rem",
    margin: 0,
  };

  const dateStyle = {
    color: "#d1d5db",
    fontSize: "0.875rem",
    margin: "0.5rem 0",
  };

  const timeStyle = {
    color: "#f3f4f6",
    fontSize: "1.125rem",
    fontWeight: "600",
    margin: 0,
  };

  const progressContainerStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem",
  };

  const svgStyle = {
    width: "12rem",
    height: "12rem",
    transform: "rotate(-90deg)",
  };

  const progressTextContainerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const progressPercentStyle = {
    fontSize: "2.25rem",
    fontWeight: "bold",
    color: "white",
    marginBottom: "0.25rem",
  };

  const remainingTimeStyle = {
    color: "#d1d5db",
    fontSize: "0.875rem",
    textAlign: "center",
    padding: "0 1rem",
  };

  const timelineStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const timelineItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "0.75rem",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  };

  const timelineLabelStyle = {
    color: "white",
    fontWeight: "600",
    margin: 0,
  };

  const timelineSubtextStyle = {
    color: "#d1d5db",
    fontSize: "0.875rem",
    margin: 0,
  };

  const timelineRightStyle = {
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "0.5rem",
  };

  const timelineTimeStyle = {
    color: "white",
    fontWeight: "600",
    margin: 0,
  };

  const dotStyle = {
    width: "0.75rem",
    height: "0.75rem",
    borderRadius: "50%",
  };

  const activeDotStyle = {
    ...dotStyle,
    backgroundColor: "white",
  };

  const inactiveDotStyle = {
    ...dotStyle,
    backgroundColor: "#6b7280",
  };

  const progressBarContainerStyle = {
    marginTop: "1.5rem",
  };

  const progressBarBackgroundStyle = {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "9999px",
    height: "0.5rem",
  };

  const progressBarFillStyle = {
    background: "linear-gradient(90deg, #ffffff 0%, #d1d5db 50%, #9ca3af 100%)",
    height: "0.5rem",
    borderRadius: "9999px",
    width: `${progress}%`,
    transition: "all 1s ease-out",
  };

  const footerStyle = {
    textAlign: "center",
    marginTop: "1.5rem",
  };

  const footerTextStyle = {
    color: "#d1d5db",
    fontSize: "0.875rem",
    opacity: 0.75,
  };

  return (
    <div style={containerStyle}>
      <div>
        {/* Main Progress Card */}
        <div style={mainCardStyle}>
          {/* Header */}
          <div style={headerStyle}>
            <h1 style={titleStyle}>Progress Tracker</h1>
            <p style={dateStyle}>{formatDate(currentTime)}</p>
            <p style={timeStyle}>{formatTime(currentTime)}</p>
          </div>

          {/* Progress Circle */}
          <div style={progressContainerStyle}>
            <svg style={svgStyle} viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="4"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 42}`}
                strokeDashoffset={`${2 * Math.PI * 42 * (1 - progress / 100)}`}
                style={{ transition: "all 1s ease-out" }}
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#d1d5db" />
                  <stop offset="100%" stopColor="#9ca3af" />
                </linearGradient>
              </defs>
            </svg>

            {/* Progress Text */}
            <div style={progressTextContainerStyle}>
              <span style={progressPercentStyle}>{progress.toFixed(1)}%</span>
              <span style={remainingTimeStyle}>{timeRemaining}</span>
            </div>
          </div>

          {/* Timeline */}
          <div style={timelineStyle}>
            <div style={timelineItemStyle}>
              <div>
                <p style={timelineLabelStyle}>Start</p>
                <p style={timelineSubtextStyle}>June 25, 2025</p>
              </div>
              <div style={timelineRightStyle}>
                <p style={timelineTimeStyle}>4:00 PM</p>
                <div style={activeDotStyle}></div>
              </div>
            </div>

            <div style={timelineItemStyle}>
              <div>
                <p style={timelineLabelStyle}>End</p>
                <p style={timelineSubtextStyle}>July 1, 2025</p>
              </div>
              <div style={timelineRightStyle}>
                <p style={timelineTimeStyle}>10:00 AM</p>
                <div
                  style={progress >= 100 ? activeDotStyle : inactiveDotStyle}
                ></div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div style={progressBarContainerStyle}>
            <div style={progressBarBackgroundStyle}>
              <div style={progressBarFillStyle}></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={footerStyle}>
          <p style={footerTextStyle}>Updates every minute</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
