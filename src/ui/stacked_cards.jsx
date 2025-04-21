import { useEffect, useRef } from "react";

export default function StackedCards({ images }) {
  const stackRef = useRef(null);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    let isMounted = true;

    const moveCard = () => {
      const lastCard = stack.lastElementChild;
      if (lastCard && lastCard.classList.contains("card")) {
        lastCard.classList.add("swap");

        setTimeout(() => {
          if (!isMounted) return; //  stop if unmounted

          lastCard.classList.remove("swap");
          stack.insertBefore(lastCard, stack.firstElementChild);
        }, 1200);
      }
    };

    const autoplayInterval = setInterval(moveCard, 4000);

    return () => {
      isMounted = false;
      clearInterval(autoplayInterval);
    };
  }, []);

  return (
    <div
      ref={stackRef}
      className="relative h-72 max-h-80 w-full lg:mx-0 lg:h-full"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="card absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-lg transition-transform duration-500"
        >
          <img
            src={image}
            alt={`About Us ${index + 1}`}
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      ))}
    </div>
  );
}
