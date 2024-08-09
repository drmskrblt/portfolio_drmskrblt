import TaxiSeite from "../assets/images/Driveassist24.png";
import TechSeite from "../assets/images/tech-strategy.png";
import ArztSeite from "../assets/images/arzt-beispiel.png";
import PlaystationSeite from "../assets/images/PlaystationProject.png";
import GithubSeite from "../assets/images/GitHubSearchProject.png";
import FinalProjektSeite from "../assets/images/EnergizeMeProject2.png";

const PortfolioSection = () => {
  const meineProjekte = [
    {
      bildUrl: TaxiSeite,
      titel: "Driveassist24",
      beschreibung: "Für Bekannte - Frontend, React/Tailwindcss",
      link: "https://driveassist24.de",
    },
    {
      bildUrl: TechSeite,
      titel: "Tech-Strategy",
      beschreibung: "Für Bekannte - Frontend, React/Tailwindcss",
      link: "https://tech-strategy.de/",
    },
    {
      bildUrl: ArztSeite,
      titel: "Beispiel Arzt Seite",
      beschreibung: "Zum Üben - Frontend, React/Tailwindcss",
      link: "https://ts-aerzte-beispiel.netlify.app/",
    },
    {
      bildUrl: PlaystationSeite,
      titel: "Playstation",
      beschreibung: "Erstes Frontend Projekt - Frontend, HTML/CSS",
      link: "https://drmskrblt.github.io/WebDevCrashCourse_Project_drmskrblt",
    },
    {
      bildUrl: GithubSeite,
      titel: "GitHub Search",
      beschreibung: "Erstes Full-Stack Projekt - Full-Stack, HTML/CSS",
      link: "https://drmskrblt.github.io/github-search_drmskrblt/",
    },
    {
      bildUrl: FinalProjektSeite,
      titel: "Final Projekt",
      beschreibung: "Zum Kursabschluss - Full-Stack, React, Tailwind",
      link: "https://github.com/Raum7-Final-Project/EnergizeMe",
    },
  ];
  return (
    <section className="max-w-screen-xl mx-auto my-10" id="portfolio">
      <div className="p-4 space-y-6">
        <h2 className="text-customGray text-4xl">Portfolio</h2>
        <hr className="border-t-4 border-customDarkTurqoise w-14 my-4" />

        {/* Card Container */}
        <div className="">
          <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {meineProjekte.map((item, index) => (
              <li
                key={index}
                className="relative h-96 w-full bg-white overflow-hidden group border-2"
              >
                <img
                  src={item.bildUrl}
                  alt={item.titel}
                  className="h-full w-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100">
                  <h4 className="text-3xl text-white mb-2">{item.titel}</h4>
                  <p className="text-xl text-white mb-4 text-center">
                    {item.beschreibung}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 px-4 bg-customDarkTurqoise text-white rounded-lg"
                  >
                    Seite besuchen
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
