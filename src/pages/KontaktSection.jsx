import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const KontaktSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-4" id="kontakt">
      <h2 className="text-customGray text-4xl">Kontakt</h2>
      <hr className="border-t-4 border-customDarkTurqoise w-14 my-4" />

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex justify-center items-center my-8">
          <ul className="space-y-4 text-customGray">
            <li className="flex items-center">
              <BsFillTelephoneFill className="text-4xl bg-customBackground2 p-1 rounded-md text-customDarkTurqoise mr-6"/>
              <a href="tel:491797555502" className="text-xl hover:text-white">Tel: 01797 5555 02</a>
            </li>
            <li className="flex items-center">
              <MdEmail className="text-4xl bg-customBackground2 p-1 rounded-md text-customDarkTurqoise mr-6" />
              <a href="mailto:durmus@gmx.de" className="text-xl hover:text-white">E-Mail: durmusk@gmx.de</a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 bg-customBackground2 rounded-md p-6">
          <h3 className="text-4xl font-bold text-customDarkTurqoise mb-4">
            Kontaktiere mich
          </h3>
          <p className="text-white mb-6">Sende mir eine Nachricht!</p>
          <form
            action="https://formspree.io/f/xgvwyrlz"
            method="POST"
            className="space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                className="bg-black/40 text-white rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-customDarkTurqoise"
                placeholder="Name"
                name="Name"
                required
              />
              <input
                type="text"
                className="bg-black/40 text-white rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-customDarkTurqoise"
                placeholder="Unternehmen"
                name="Unternehmen"
                required
              />
              <input
                type="text"
                className="bg-black/40 text-white rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-customDarkTurqoise"
                placeholder="Telefon"
                name="Telefon"
              />
              <input
                type="text"
                className="bg-black/40 text-white rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-customDarkTurqoise"
                placeholder="E-Mail"
                name="E-Mail"
                required
              />
            </div>
            <textarea
              name="Nachricht"
              rows={5}
              className="w-full bg-black/40 text-white rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-customDarkTurqoise"
              placeholder="Deine Nachricht"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-customDarkTurqoise hover:bg-green-400 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl"
            >
              Absenden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default KontaktSection;
