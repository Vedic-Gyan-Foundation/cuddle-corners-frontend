function EnrollNowBtn({ onClick, styles, ...props }) {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`flex transform items-center justify-center transition-all duration-200 ease-in-out hover:scale-105 active:scale-100 ${styles}`}
    >
      <p className="group relative inline-flex translate-y-0 items-center justify-start overflow-hidden rounded-xl bg-yellow-cc/85 px-6 py-1 font-medium shadow-lg transition-all active:translate-y-1 active:shadow-sm">
        <span className="absolute right-0 top-0 inline-block h-4 w-4 rounded bg-yellow-cc/90 transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4">
          <span className="absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white"></span>
        </span>
        <span className="absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-xl bg-yellow-500 transition-all delay-200 duration-500 ease-in-out group-hover:mb-[33px] group-hover:translate-x-0 sm:group-hover:mb-[44px]"></span>
        <span className="relative w-full text-left font-fredoka text-lg tracking-wider text-white transition-colors duration-200 ease-in-out group-hover:text-white">
          <img
            src="./images/icons/enroll-now.svg"
            alt="enroll-now-btn-img"
            // className="h-6 lg:h-9"
            className="sm:h-3 lg:h-9"
          />
        </span>
      </p>
    </button>
  );
}

export default EnrollNowBtn;
