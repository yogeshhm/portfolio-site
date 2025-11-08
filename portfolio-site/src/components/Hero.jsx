function Hero() {
  return (
<section id="hero" className="min-h-[45vh] flex flex-col justify-center items-center bg-linear-to-br from-blue-800 to-blue-500 text-white text-center px-6">
      <h1 className="text-4xl  sm:text-5xl md:text-6xl font-bold mb-4">
        Hi, I’m <span className="text-[#c5f82a]">Yogesh H M</span>
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl">
        A passionate Frontend Developer building modern, responsive web experiences using React & TailwindCSS.
      </p>
      <button className="bg-[#c5f82a] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
        View My Work
      </button>
    </section>
  );
}

export default Hero;
