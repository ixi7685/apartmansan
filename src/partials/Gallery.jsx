import React from "react";



import ImageGallery from "react-image-gallery";

import img2 from "../images/banja/img-6.jpg";
import img2_thumb from "../images/banja_thumb/img-6_thumb.jpg";

import img3 from "../images/banja/img-7.jpg";
import img3_thumb from "../images/banja_thumb/img-7_thumb.jpg";

import img4 from "../images/banja/img-8.jpg";
import img4_thumb from "../images/banja_thumb/img-8_thumb.jpg";

import img5 from "../images/banja/img-9.jpg";
import img5_thumb from "../images/banja_thumb/img-9_thumb.jpg";

// import img6 from '../images/banja/img-10.jpg';
// import img6_thumb from '../images/banja_thumb/img-10_thumb.jpg';

import img7 from "../images/banja/img-13.jpg";
import img7_thumb from "../images/banja_thumb/img-13_thumb.jpg";

// import img8 from '../images/banja/img-15.jpg';
// import img8_thumb from '../images/banja_thumb/img-15_thumb.jpg';

import img9 from "../images/banja/img-16.jpg";
import img9_thumb from "../images/banja_thumb/img-16_thumb.jpg";

import img90 from "../images/banja/img-13.jpg";
import img90_thumb from "../images/banja_thumb/img-13_thumb.jpg";

import img10 from "../images/banja/img-17.jpg";
import img10_thumb from "../images/banja_thumb/img-17_thumb.jpg";

import img11 from "../images/banja/img-20.jpg";
import img11_thumb from "../images/banja_thumb/img-20_thumb.jpg";

import img12 from "../images/banja/img-21.jpg";
import img12_thumb from "../images/banja_thumb/img-21_thumb.jpg";

import img13 from "../images/banja/img-24.jpg";
import img13_thumb from "../images/banja_thumb/img-24_thumb.jpg";

import img14 from "../images/banja/img-26.jpg";
import img14_thumb from "../images/banja_thumb/img-26_thumb.jpg";

import img15 from "../images/banja/img-27.jpg";
import img15_thumb from "../images/banja_thumb/img-27_thumb.jpg";

import img16 from "../images/banja/img-31.jpg";
import img16_thumb from "../images/banja_thumb/img-31_thumb.jpg";

import img17 from "../images/banja/img-32.jpg";
import img17_thumb from "../images/banja_thumb/img-32_thumb.jpg";

import img18 from "../images/banja/img-5.jpg";
import img18_thumb from "../images/banja_thumb/img-5_thumb.jpg";

import img19 from "../images/banja/img-8.jpg";
import img19_thumb from "../images/banja_thumb/img-8_thumb.jpg";

import img20 from "../images/banja/img-37.jpg";
import img20_thumb from "../images/banja_thumb/img-37_thumb.jpg";

const properties = {
  thumbnailPosition: "left",
  useBrowserFullscreen: false,
  // showPlayButton: false,
  items: [
    {
      original: img3,
      thumbnail: img3_thumb,
    },
    // {
    //   original: img4,
    //   thumbnail: img4_thumb
    // },
    {
      original: img5,
      thumbnail: img5_thumb,
    },
    // {
    //   original: img6,
    //   thumbnail: img6_thumb
    // },
    // {
    //   original: img7,
    //   thumbnail: img7_thumb
    // },
    // {
    //   original: img8,
    //   thumbnail: img8_thumb
    // },

    {
      original: img11,
      thumbnail: img11_thumb,
    },
    {
      original: img12,
      thumbnail: img12_thumb,
    },
    {
      original: img13,
      thumbnail: img13_thumb,
    },
    {
      original: img14,
      thumbnail: img14_thumb,
    },
    {
      original: img15,
      thumbnail: img15_thumb,
    },
    {
      original: img16,
      thumbnail: img16_thumb,
    },
    {
      original: img17,
      thumbnail: img17_thumb,
    },
    {
      original: img9,
      thumbnail: img9_thumb,
    },
    {
      original: img2,
      thumbnail: img2_thumb,
    },
    {
      original: img18,
      thumbnail: img18_thumb,
    },

    {
      original: img20,
      thumbnail: img20_thumb,
    },
    {
      original: img19,
      thumbnail: img19_thumb,
    },
    {
      original: img90,
      thumbnail: img90_thumb,
    },
  ],
};

function Gallery() {
  return (
    <section className="relative mt-8">
       <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-100 pointer-events-none"
        aria-hidden="true"
      ></div> 
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20" id="galerija">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-24 md:pb-16">
            <h2 className="h2 mb-4">Galerija</h2>
            <p className="text-m sm:text-xl text-gray-600" data-aos="zoom-y-out">
              Objekat je opremljen potpuno novim nameštajem, klima uredjajem,
              grejanjem. Poseduje parking, bežični internet i kablovsku
              televiziju(mts). Od kućnih elemenata poseduje fen za kosu, peglu
              sa daskom, usisivač, žicu za sušenje veša. Takodje posedujemo
              posteljinu, peškire, bade mantile, papuče.{" "}
            </p>
          </div>

          <ImageGallery {...properties} />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
