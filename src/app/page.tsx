"use client";
import { NavigationMenuDemo } from "@/components/navigation";
import PhotoSlider from "@/components/photo-slider";

export default function Home() {
  return (
    <>
      <NavigationMenuDemo />
      <main>
        <PhotoSlider />
      </main>
    </>
  );
}
