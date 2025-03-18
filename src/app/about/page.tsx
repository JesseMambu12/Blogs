import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";

const authors = [
  {
    name: "John Doe",
    title: "Founder & Writer",
    image: "/author1.jpg",
    description:
      "John has been writing about technology and innovation for over a decade.",
  },
  {
    name: "Jane Smith",
    title: "Co-Author",
    image: "/author2.jpg",
    description: "Jane is passionate about digital marketing and storytelling.",
  },
];

export default function About() {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 space-y-8 pt-16">
        {/* Blog History */}
        <section className="text-center">
          <h1 className="text-3xl font-bold mb-4">About Our Blog</h1>
          <p className="text-gray-600">
            Started in 2015, our blog was created to share insightful content on
            technology, business, and digital transformation. Over the years, we
            have grown into a trusted source of information for readers
            worldwide.
          </p>
        </section>

        {/* Authors */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Meet the Authors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {authors.map((author, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm"
              >
                <Image
                  src={author.image}
                  alt={author.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-medium">{author.name}</h3>
                  <p className="text-gray-500 text-sm">{author.title}</p>
                  <p className="text-gray-600 text-sm mt-2">
                    {author.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Mission & Vision</h2>
          <p className="text-gray-600">
            Our mission is to educate and inspire our audience by providing
            high-quality, well-researched content. We envision a world where
            information is easily accessible and empowers people to make
            informed decisions.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600">
            Feel free to reach out to us via our social media channels:
          </p>
          <div className="mt-4 flex space-x-4">
            <FaFacebookSquare href="#" className="text-black hover:bg-black hover:text-white w-8 h-8" />
            <FaTwitterSquare href="#" className="text-black hover:bg-black hover:text-white w-8 h-8" />
            <FaGooglePlusSquare href="#" className="text-black hover:bg-black hover:text-white w-8 h-8" />
          </div>
        </section>
      </div>
    </>
  );
}
