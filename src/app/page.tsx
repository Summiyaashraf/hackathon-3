
import Categories from "./components/categories";
import CompanyLogo from "./components/companyLogo";


import Hero from "./components/Hero";
import HotProduct from "./components/hotProduct";

import OurProduct from "./components/ourProduct";
import SinglePagePromotion from "./components/SinglePagePromotion";


export default function Home() {
  return (
    <>
  
      <Hero />
      <CompanyLogo />
      <SinglePagePromotion/>
      <Categories />
      <HotProduct />
      <OurProduct />
      
    </>
  );
}