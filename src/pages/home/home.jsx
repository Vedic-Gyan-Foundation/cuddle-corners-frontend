function Home() {
  return (
    <section>
      <div className="relative">
        <img
          src="https://s3.ap-south-1.amazonaws.com/content.pentemind.com/kidzee/kidzee_banner/mobile_home_banner.png"
          alt=""
        />
        <div className="z-10 text-white absolute bottom-20 left-1/2   transform -translate-x-1/2">
          <p className="font-semibold text-4xl font-fredoka *:block text-center">
            <span className="whitespace-nowrap">Build a foundation for</span>
            <span>a life time of</span>
            <span>learning</span>
          </p>
          <button className="">Enroll</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
