import Image from "next/image";
import img from "@/public/assets/images/8E2A8989.webp";
import Container from "../container";

const images = new Array(10).fill(img);

type GalleryProps = {
  width: string;
  height: string;
  wrapperRef: React.RefObject<HTMLDivElement>;
  trackRef: React.RefObject<HTMLUListElement>;
};

export const Gallery = ({
  width,
  height,
  wrapperRef,
  trackRef,
}: GalleryProps) => {
  return (
    <Container>
      <div ref={wrapperRef} className="overflow-hidden">
        <ul ref={trackRef} className="flex space-x-4 will-change-transform">
          {images.map((src, index) => (
            <li
              key={index}
              className={`${width} ${height} relative overflow-hidden aspect-square`}
            >
              <Image
                src={src}
                alt={`Event image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
