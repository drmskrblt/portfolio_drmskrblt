import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiSass } from "react-icons/di";
import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoMongodb,
} from "react-icons/bi";
import { TbBrandBootstrap } from "react-icons/tb";
import { FaUbuntu } from "react-icons/fa";

const UeberSection = () => {
  const ueberMich = [
    {
      beschreibung: "Hey, ich bin , Junior Full-Stack Developer.",
    },
    {
      beschreibung:
        "Ich habe einen 14-monatigen Web Development Kurs erfolgreich absolviert, wo ich tiefgehende Kenntnisse in der Entwicklung moderner Webanwendungen mit Technologien wie React, Node.js und MongoDB erlangt habe.",
    },
    {
      beschreibung:
        "Jetzt bin ich bereit, den Einstieg in die Arbeitswelt zu machen und meine Karriere als Full-Stack Developer zu starten. Ich bin hochmotiviert, mein Wissen und meine Fähigkeiten in einem professionellen Umfeld weiterzuentwickeln und zum Erfolg eines großartigen Teams beizutragen.",
    },
    {
      beschreibung: `Fühlen Sie sich frei, mich unter durmusk@gmx.de zu kontaktieren oder mich auf LinkedIn zu verbinden. Ich freue mich auf neue Möglichkeiten und Zusammenarbeit!`,
    },
  ];

  const techStack = [
    { icon: <AiFillHtml5 />, text: "HTML" },
    { icon: <DiCss3 />, text: "CSS" },
    { icon: <DiSass />, text: "SASS" },
    { icon: <BiLogoJavascript />, text: "Javascript" },
    { icon: <BiLogoReact />, text: "ReactJs" },
    { icon: <BiLogoTailwindCss />, text: "TailwindCSS" },
    { icon: <TbBrandBootstrap />, text: "Bootstrap" },
    { icon: <AiFillGithub />, text: "GitHub" },
    { icon: <BiLogoMongodb />, text: "MongoDB" },
    { icon: <FaUbuntu />, text: "Ubuntu" },
  ];

  return (
    <section className="max-w-screen-xl mx-auto my-10" id="über">
      <div className="p-4 space-y-6">
        <h2 className="text-customGray text-4xl">Über mich</h2>
        <hr className="border-t-4 border-customDarkTurqoise w-14 my-4" />

        <ul className="space-y-6 text-customGray text-xl tracking-wide">
          {ueberMich.map((item, index) => (
            <li key={index}>
              <p className="md:px-14">{item.beschreibung}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 my-10 space-y-8">
        <h2 className="text-customGray text-4xl">Meine Skills</h2>
        <hr className="border-t-4 border-customDarkTurqoise w-14 my-4" />

          {/* Card Container */}
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
          {/* Cards */}
          {techStack.map((item, index) => (
            <li
              key={index}
              className="flex flex-col justify-center items-center bg-customBackground2 p-4 gap-4 rounded-xl h-32 w-44 mx-auto"
            >
              <span className="text-6xl text-customDarkTurqoise">
                {item.icon}
              </span>
              <p className="text-customGray">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UeberSection;
