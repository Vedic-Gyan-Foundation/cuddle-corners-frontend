export default function Cloud({
  width = 250,
  height = 100,
  scale = 1,
  className = "",
}) {
  const cloudWidth = width * scale;
  const cloudHeight = height * scale;
  const beforeSize = 120 * scale;
  const afterSize = 90 * scale;

  return (
    <div className={`absolute ${className}`} style={{ zIndex: 0 }}>
      <div
        style={{
          width: `${cloudWidth}px`,
          height: `${cloudHeight}px`,
          borderRadius: `${cloudHeight / 2}px`,
          background: "linear-gradient(to bottom, #c9dfea 5%, #c9dfea 100%)",
          boxShadow: `0 5px 10px #E1F1F9`,
          position: "relative",
        }}
      >
        {/* Right Circle */}
        <div
          style={{
            position: "absolute",
            background: "#c9dfea",
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
            background: "#c9dfea",
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
