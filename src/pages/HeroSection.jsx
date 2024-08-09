import Bewerbungsfoto from "../assets/images/Bewerbungsfoto.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const HeroSection = () => {
  return (
    // Hero Section
    <section className="max-w-screen-xl mx-auto">
      {/* Container */}
      <div className="relative h-screen md:h-[800px] grid grid-cols-1 md:grid-cols-2">
        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0 bg-no-repeat opacity-30 bg-center md:bg-right"
          style={{
            backgroundImage: `url(${Bewerbungsfoto})`,
          }}
        ></div>

        {/* Content */}
        <div className="relative flex flex-col md:justify-center gap-6 p-4 md:order-1 mt-4 tracking-wider">
          <h1 className="text-4xl md:text-6xl text-customDarkTurqoise">
            <span>
              <p className="text-2xl md:text-2xl text-customGray">
                Hey. Ich bin
              </p>
            </span>
            Durmus Karabulut
          </h1>
          <h2 className="text-xl md:text-2xl text-customGray">
            Junior Full-Stack Web Developer
          </h2>
          <button className="p-2 px-4 border-4 rounded-lg border-customDarkTurqoise text-customLightTurqoise max-w-fit">
            <a href="#kontakt">Kontaktieren</a>
          </button>
        </div>

        {/* Social Links */}
        <div className="absolute bottom-32 right-1 md:bottom-10 md:right-5">
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="https://github.com/drmskrblt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-customGray text-3xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/durmus-karabulut/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-customGray text-3xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
