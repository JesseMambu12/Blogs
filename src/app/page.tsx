import Blogteaser from "@/components/Blogteaser";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-white text-black flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-gray-200 opacity-50"></div>
        <img
          src="https://img.freepik.com/free-photo/aerial-view-man-typing-retro-typewriter_53876-40995.jpg?t=st=1742297249~exp=1742300849~hmac=7843032754d21186588ffae2c4ae3ac3961e7a3452429dec5add7e68fd158036&w=1800"
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover opacity-38"
        />
        <div className="relative z-10 max-w-[90%] sm:max-w-[740px]">
          <h1 className="text-3xl sm:text-6xl font-extrabol">
            Welcome to Our Blog
          </h1>
          <p className="mt-4 text-base sm:text-lg">
            Stay updated with the latest trends, news, and insights from our
            experts.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="max-w-5xl mx-auto my-10 px-4">
        <h2 className="text-xl sm:text-3xl font-semibold text-center mb-6">
          {" "}
          Our Popular Blogs
        </h2>
        <div className="flex  items-center justify-center">
          <Blogteaser title={""} description={""} category={""} image={""} />
        </div>
      </section>

      {/* Subscription Section */}
      <div className="text-center my-8 px-4">
        <h1 className="text-2xl sm:text-4xl font-medium">
          Join Our Community!
        </h1>
        <p className="mt-6 sm:mt-10 max-w-[90%] sm:max-w-[740px] m-auto text-sm sm:text-base">
          Subscribe now and enjoy exclusive benefits. You'll get the latest blog
          updates directly to your inbox, access exclusive content and expert
          insights, and be the first to know about new trends and tips. Enjoy
          special subscriber-only newsletters, stay ahead with industry
          knowledge, and receive hand-picked, high-quality articles tailored to
          your interests. We guarantee no spam, just valuable and insightful
          content curated for you!
        </p>
        <form
          className="flex flex-col sm:flex-row items-center justify-center max-w-[90%] sm:max-w-[500px] mx-auto mt-10 border border-black shadow-[-7px_7px_0px]"
          action=""
        >
          <input
            type="email"
            placeholder="Enter Your email"
            className="pl-4 py-2 flex-grow outline-none"
          />
          <button
            type="submit"
            className="border border-black py-2 sm:py-4 px-6 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
