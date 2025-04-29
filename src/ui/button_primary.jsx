function ButtonPrimary({
  onClick,
  label,
  color = "yellow",
  className,
  href, // New prop for link functionality
  ...props
}) {
  const colors = {
    yellow: {
      main: "bg-secondary-500",
      hover: "bg-yellow-600/25",
      dot: "bg-yellow-200",
    },
    blue: {
      main: "bg-blue-500",
      hover: "bg-blue-700",
      dot: "bg-blue-300",
    },
    red: {
      main: "bg-red-500",
      hover: "bg-red-700",
      dot: "bg-red-300",
    },
    green: {
      main: "bg-green-500",
      hover: "bg-green-700",
      dot: "bg-green-300",
    },
  };

  const selectedColor = colors[color] || colors.yellow;

  const baseClasses = `flex transform items-center justify-center transition-all duration-200 ease-in-out hover:scale-105 active:scale-100 ${className}`;
  const innerClasses = `group relative inline-flex translate-y-0 items-center justify-start overflow-hidden rounded-full ${selectedColor.main} px-4 py-1 font-medium shadow-lg transition-all active:translate-y-1 active:shadow-sm lg:px-6`;

  const dotClasses = `absolute right-0 top-0 inline-block aspect-square w-4 rounded lg:w-5 ${selectedColor.dot} transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4`;
  const dotInner = `absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white`;

  const hoverEffect = `absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-full ${selectedColor.hover} transition-all delay-200 duration-500 ease-in-out group-hover:mb-[40px] group-hover:translate-x-0 lg:group-hover:mb-[52px]`;

  const labelClasses = `relative w-full py-1 text-left font-fredoka text-base tracking-wider text-white transition-colors duration-200 ease-in-out group-hover:text-white lg:py-2 lg:text-lg`;

  // Use <a> if href is passed (PDF download case), otherwise use <button>
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        {...props}
      >
        <p className={innerClasses}>
          <span className={dotClasses}>
            <span className={dotInner}></span>
          </span>
          <span className={hoverEffect}></span>
          <span className={labelClasses}>{label}</span>
        </p>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses} {...props}>
      <p className={innerClasses}>
        <span className={dotClasses}>
          <span className={dotInner}></span>
        </span>
        <span className={hoverEffect}></span>
        <span className={labelClasses}>{label}</span>
      </p>
    </button>
  );
}

export default ButtonPrimary;
