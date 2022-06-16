import React from 'react';

import Header from '../partials/Header';
import Welcome from '../partials/Welcome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Gallery from '../partials/Gallery';
import Contact from '../partials/Contact';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-amber-50
    ">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <Welcome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Gallery />
        <Contact />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;