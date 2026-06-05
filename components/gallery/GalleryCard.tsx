import Image from "next/image";
import type { GalleryItem } from "@/data/galleryData";

type GalleryCardProps = {
  item: GalleryItem;
};

export function GalleryCard({ item }: GalleryCardProps) {
  return (
    <article className="gallery-card">
      <div className="gallery-card-img-wrap">
        <Image
          src={item.image}
          alt={item.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="gallery-card-img"
        />
        <div className="gallery-card-overlay">
          <span className="gallery-card-label">{item.title}</span>
          <span className="gallery-card-cat">{item.category}</span>
        </div>
      </div>
    </article>
  );
}
