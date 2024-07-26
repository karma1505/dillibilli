
import Footer from "@/components/Footer";
import "./globals.css";
import Map from "@/components/Map";
import { Review } from "@/components/Review";
import Room from "@/components/Room";
import Travel from "@/components/Travel";
import ImageGallery from "@/components/ImageGal";
import Story from "@/components/Story";
import AmenitiesCard from "@/components/AmenitiesCard";




export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="pt-17">
          <ImageGallery />
        </div>
        <Story />
        <AmenitiesCard />
        <Room />
        <Travel />
        <Review />
        <Map />
        <Footer />

      </div>
    </>
  );
}
