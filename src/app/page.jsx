import Achieved from "@/components/Achieved";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import CTASection from "@/components/CTASection";
import LatestItems from "@/components/LatestItems";
import Testimonial from "@/components/Testimonial";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div>
      <Banner/>
      <LatestItems/>
      <Categories/>
      <Achieved/>
      <WhyChoose/>
      <Testimonial/>
      <CTASection/>
    </div>
  );
}
