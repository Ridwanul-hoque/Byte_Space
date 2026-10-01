import Navbar from "@/Component/Navbar";
import Banner from "@/Component/Banner";
import Feature from "@/Component/feature";
import Skills from "@/Component/skills";
import Growth from "@/Component/Growth";
import Explore from "@/Component/Explore";
import Creator from "@/Component/Creator";
import CommunityTestimonials from "@/Component/community";


export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Feature/>
      <Skills/>
      <Explore/>
      <Growth/>
      <Creator/>
      <CommunityTestimonials/>
    
      
    </>
  );
}