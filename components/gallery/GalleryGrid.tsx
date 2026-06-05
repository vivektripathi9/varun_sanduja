import type { GalleryItem } from "@/data/galleryData";
import { GalleryCard } from "./GalleryCard";

type GalleryGridProps = {
  items: GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <section aria-label="Gallery images" className="gallery-grid">
      {items.map((item) => (
        <GalleryCard key={item.id} item={item} />
      ))}
    </section>
  );
}
