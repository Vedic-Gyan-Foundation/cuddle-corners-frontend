export default function Cloud({
  width = 250, // Reduced width to keep proportions
  height = 100, // Increased height for a rounder look
  scale = 1,
  className = "",
}) {
  const cloudWidth = width * scale;
  const cloudHeight = height * scale;
  const beforeSize = 120 * scale; // Adjusted size for balance
  const afterSize = 90 * scale;

  return (
    <div className={`absolute ${className}`}>
      <div
        style={{
          width: `${cloudWidth}px`,
          height: `${cloudHeight}px`,
          borderRadius: `${cloudHeight / 2}px`,
          background: "linear-gradient(to bottom, #E1F1F9 5%, #e2eff5 100%)",
          boxShadow: `0 5px 10px #E1F1F9`, // Softer shadow
          position: "relative",
        }}
      >
        {/* Right Circle */}
        <div
          style={{
            position: "absolute",
            background: "#E1F1F9",
            width: `${beforeSize}px`,
            height: `${beforeSize}px`,
            borderRadius: "50%",
            right: `${30 * scale}px`,
            top: `${-60 * scale}px`,
            zIndex: 1,
          }}
        />
        {/* Left Circle */}
        <div
          style={{
            position: "absolute",
            background: "#E1F1F9",
            width: `${afterSize}px`,
            height: `${afterSize}px`,
            borderRadius: "50%",
            left: `${30 * scale}px`,
            top: `${-40 * scale}px`,
            zIndex: 5,
          }}
        />
      </div>
    </div>
  );
}
