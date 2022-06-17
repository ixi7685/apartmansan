import React, { useEffect } from "react";

function Footer() {
  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    const lat = 43.6183913970134;
    const lon = 20.884961129625896;
    
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  });

  return (
    <footer>
      <div className="max-w-6xl mx-auto  my-auto px-4 sm:px-6">
        <div className="flex py-8 md:py-12 border-t border-gray-200">
          <div className=" w-full flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 lg:w-1/2 px-2 py-4 flex items-center justify-center">
              <h4 className="text-xl md:text-2xl mr-20">Saznajte više o nama!</h4>

              <a
                href="https://www.instagram.com/vrnjackabanjasan/"
                target="_blank"
                className="inline-block"
                aria-label="instagram
            "
              >
                <i class="fa fa-instagram fa-2x  pr-2"></i>
              </a>

              <a
                href="https://www.youtube.com/watch?v=FkQr3DdynuI"
                target="_blank"
                className="inline-block"
                aria-label="Cruip"
              >
                <i class="fa fa-youtube fa-2x"></i>
              </a>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 px-2 flex items-center justify-center">
              <iframe id="iframeId" height="150px" width="350px"></iframe>
            </div>
          </div>
        </div>

        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          <div className="text-sm text-gray-600 mr-4">
            <b>Apartman San &nbsp;&nbsp; 0641919613 </b>
          </div>
          <div className="text-sm text-gray-600 mr-4">
            Napravili{" "}
            <a
              className="text-blue-600 hover:underline"
              href="https://www.facebook.com/ivan.hadzicenic"
            >
              Ivan
            </a>{" "}
            i{" "}
            <a
              className="text-blue-600 hover:underline"
              href="https://github.com/Boki87"
            >
              Boki
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
