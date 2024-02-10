import Image from "next/image";
import { HiPhoneIncoming } from "react-icons/hi";
import { MdAttachEmail } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import { Heading } from "./ui/heading";
import { Logo } from "./ui/logo";
import { MdLocationPin } from "react-icons/md";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  Libraries,
} from "@react-google-maps/api";
import { useMemo } from "react";

const libraries: Libraries = ["places"];

const geoLocation = {
  lat: 22.368553444275918,
  lng: 91.84601876770998,
};

export function Footer() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  const center = useMemo(
    () => ({ lat: geoLocation.lat, lng: geoLocation.lng }),
    [geoLocation],
  );

  return (
    <footer className="mt-20 bg-background/60">
      <div className="container grid max-w-5xl grid-cols-1 gap-8 py-8 sm:grid-cols-2 sm:py-12">
        <div className="flex flex-col text-foreground/60">
          <Logo />
          <Heading className="!pb-3 pt-3 text-start text-foreground/90">
            সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট
          </Heading>
          <div className="space-y-2">
            <div className="flex items-center gap-x-2">
              <MdLocationPin className="text-foreground/50" />
              <span>Muradpur Chittagong</span>
            </div>
            <div className="flex items-center gap-x-2">
              <HiPhoneIncoming className="text-foreground/50" />
              <span>01918236789</span>
            </div>
            <div className="flex items-center gap-x-2">
              <MdAttachEmail className="text-foreground/50" />
              <span>samsur55@gmail.com</span>
            </div>
            <div className="flex items-center gap-x-2">
              <SiFacebook className="text-foreground/50" />
              <span>Samsur Nahar Harun</span>
            </div>
          </div>
        </div>
        {/* {isLoaded && (
          <GoogleMap
            mapContainerClassName="h-full sm:h-auto h-64 rounded-md"
            center={center}
            zoom={90}>
            <Marker position={center} />
          </GoogleMap>
        )} */}
      </div>
    </footer>
  );
}
