"use client"
import Faq from "./Faq";
import Old from "./CardsCrousal";
import Footer from "./Footer";
import HowItWorksComponent from "./How-itworks";
import Hero from "./Hero";
import Affliated from "./Affliated";


export default function LottoWebsite() {


  return (
    <div className="min-h-screen  ">

      <Hero />
      <HowItWorksComponent />
      <Affliated/>
      <Old />
      <Faq />
      <Footer />
      
    </div>
  );
}
