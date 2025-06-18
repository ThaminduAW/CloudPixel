import img1 from "../../assets/projects/1.jpg";
import img2 from "../../assets/projects/2.jpg";
import img3 from "../../assets/projects/3.jpg";
import img4 from "../../assets/projects/4.jpg";

const projects = [
  {
    title: "Cloud Storage App",
    brand: "CloudPixel",
    image: img1,
    price: "$0",
    oldPrice: "$49.99",
    discount: "-100%",
    description: "A secure and fast cloud storage solution.",
    link: "#",
  },
  {
    title: "Team Collaboration Tool",
    brand: "CloudPixel",
    image: img2,
    price: "$0",
    oldPrice: null,
    discount: null,
    description: "Collaborate with your team in real-time.",
    link: "#",
  },
  {
    title: "AI Image Enhancer",
    brand: "CloudPixel",
    image: img3,
    price: "$0",
    oldPrice: null,
    discount: null,
    description: "Enhance your images using AI.",
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    brand: "CloudPixel",
    image: img4,
    price: "$0",
    oldPrice: null,
    discount: null,
    description: "Visualize your data with ease.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="pt-24">
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Selected Projects
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Here are some of our featured projects. Each project showcases our
              expertise in cloud, AI, and collaboration tools.
            </p>
          </div>
          {/* text - end */}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project, idx) => (
              <div key={idx}>
                <a
                  href={project.link}
                  className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100"
                >
                  <img
                    src={project.image}
                    loading="lazy"
                    alt={project.title}
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  {project.discount && (
                    <span className="absolute left-0 top-3 rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                      {project.discount}
                    </span>
                  )}
                </a>
                <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                  <div className="flex flex-col">
                    <a
                      href={project.link}
                      className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
                    >
                      {project.title}
                    </a>
                    <span className="text-sm text-gray-500 lg:text-base">
                      by {project.brand}
                    </span>
                    <span className="text-xs text-gray-400 mt-1">
                      {project.description}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold text-gray-600 lg:text-lg">
                      {project.price}
                    </span>
                    {project.oldPrice && (
                      <span className="text-sm text-red-500 line-through">
                        {project.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
