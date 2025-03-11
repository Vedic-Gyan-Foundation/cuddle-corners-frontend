import { useState } from "react";

function BearAvatar({
  contentTitle,
  contentDetails,
  primaryColor = "#fad9d2",
  secondaryColor = "#FE5D37",
  children,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group flex cursor-pointer flex-col items-center transition-all duration-500 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <!--- Bear Head with Ears---> */}
      <div
        className="relative flex h-[100px] w-[120px] items-center justify-center rounded-[50%] transition-all duration-500 ease-in-out"
        style={{ backgroundColor: isHovered ? secondaryColor : primaryColor }}
      >
        {/* <!--- Left Ear ---> */}
        <div
          className="absolute left-0 top-[-15px] aspect-square w-[30px] rounded-full transition-all duration-500 ease-in-out group-hover:scale-125"
          style={{ backgroundColor: isHovered ? secondaryColor : primaryColor }}
        ></div>

        {/* <!--- Right Ear ---> */}
        <div
          className="absolute right-0 top-[-15px] aspect-square w-[30px] rounded-full transition-all duration-500 ease-in-out group-hover:scale-125"
          style={{ backgroundColor: isHovered ? secondaryColor : primaryColor }}
        ></div>
        {/* <!--- Icon ---> */}
        {children}
      </div>

      {/* <!--- Bear Body (Ellipse) ---> */}
      <div
        className="-mt-5 flex h-[250px] w-[280px] flex-col items-center justify-center gap-2 rounded-[50%] p-6 text-center shadow-md transition-all duration-500 ease-in-out sm:h-[260px] sm:w-[300px]"
        style={{ backgroundColor: isHovered ? secondaryColor : primaryColor }}
      >
        {contentTitle && (
          <h3
            className="font-lobsterTwo text-3xl font-bold"
            style={{
              color: isHovered ? "white" : secondaryColor,
            }}
          >
            {contentTitle}
          </h3>
        )}
        {contentDetails && (
          <p
            className={`font-robotoslab ${isHovered ? "text-white" : "text-stone-600"}`}
          >
            {contentDetails}
          </p>
        )}
      </div>
    </div>
  );
}

export default BearAvatar;
