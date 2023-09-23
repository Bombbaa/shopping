import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function PhotoSlider() {
  return (
    <>
      <AspectRatio ratio={4 / 3} className="bg-muted h-[500px] w-auto">
        <Image
          src="/fotor-ai-20230923163952.jpg"
          alt="Image"
          width={300}
          height={500}
          objectFit="contain"
        />
      </AspectRatio>
    </>
  );
}
