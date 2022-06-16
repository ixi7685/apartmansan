import { React, useState } from "react";
import emailjs from "emailjs-com";
import LoadingIcons from "react-loading-icons";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);
    setName("");
    setEmail("");
    setMessage("");
    console.log(e.target);
    emailjs
      .sendForm(
        "service_7wga3r4",
        "template_wdudx5p",
        e.target,
        "b_9pnBZ136eNfzh2o"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setSuccessMessage(true);
          setTimeout(() => {
            setSuccessMessage(false);
          }, 5000);
        },
        function (error) {
          console.log("FAILED...", error);
          setError(true);
          setLoading(false);
          setTimeout(() => {
            setError(false);
          }, 5000);
        }
      );
  }

  return (
    <section className="mt-24" id="kontakt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h3 className="h2 mb-4">Kontakt</h3>
          </div>
          {/* CTA box */}
          <div
            className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            {/* Background illustration */}
            <div
              className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
              aria-hidden="true"
            >
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient
                    cx="35.542%"
                    cy="34.553%"
                    fx="35.542%"
                    fy="34.553%"
                    r="96.031%"
                    id="ni-a"
                  >
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse
                      fillOpacity=".04"
                      cx="185"
                      cy="15.576"
                      rx="16"
                      ry="15.576"
                    />
                    <ellipse
                      fillOpacity=".24"
                      cx="100"
                      cy="68.402"
                      rx="24"
                      ry="23.364"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="29"
                      cy="251.231"
                      rx="29"
                      ry="28.231"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="29"
                      cy="251.231"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="342"
                      cy="31.303"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".48"
                      cx="62"
                      cy="126.811"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="78"
                      cy="7.072"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="185"
                      cy="15.576"
                      rx="6"
                      ry="5.841"
                    />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="text-gray-300 text-lg mb-6 ml-2">
                  Ukoliko imate neko pitanje, slobodno nas kontaktirajte !
                </h3>

                {/* CTA form */}
                <form
                  className="w-full lg:w-auto flex flex-col p-2"
                  onSubmit={sendEmail}
                >
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs  sm:max-w-md lg:mx-0 pb-2">
                    <input
                      required
                      value={name}
                      onChange={(e) => handleName(e)}
                      type="text"
                      name="name"
                      className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                      placeholder="Vaše ime…"
                      aria-label="Vaše ime…"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs  sm:max-w-md lg:mx-0 pb-2">
                    <input
                      required
                      value={email}
                      onChange={(e) => handleEmail(e)}
                      type="email"
                      name="user_email"
                      className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                      placeholder="Vaš email…"
                      aria-label="Vaš email…"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs sm:max-w-md lg:mx-0 pb-2">
                    <textarea
                      required
                      value={message}
                      onChange={(e) => handleMessage(e)}
                      name="message"
                      rows="4"
                      className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                      placeholder="Vaša poruka…"
                      aria-label="Vaša poruka…"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row justify-start max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <button
                      className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                      type="submit"
                      cursor="pointer"
                    >
                      {loading ? (
                        <LoadingIcons.Bars width="50px" height="22px" />
                      ) : (
                        "Pošalji"
                      )}
                    </button>
                  </div>

                  {successMessage ? (
                    <h3 className="text-sm text-gray-400 mt-3 ml-2">
                      Hvala na poruci, bićemo u kontaktu!{" "}
                    </h3>
                  ) : (
                    ""
                  )}
                  {error ? (
                    <h3 className="text-sm text-gray-400 mt-3 ml-2">
                      {" "}
                      Došlo je do greške!
                    </h3>
                  ) : (
                    ""
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
