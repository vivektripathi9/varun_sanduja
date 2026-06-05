"use client";

import { useMemo, useState } from "react";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { GallerySidebar } from "@/components/gallery/GallerySidebar";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/data/galleryData";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All Photos");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All Photos") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="gallery-page">
      {/* Decorative elements matching site design */}
      <div className="gallery-overlay" aria-hidden="true" />
      <div className="gallery-circuit" aria-hidden="true" />

      <div className="gallery-container">
        <header className="gallery-header">
          <div className="gallery-badge">OUR MOMENTS</div>
          <h1 className="gallery-title">
            Our <span>Gallery</span>
          </h1>
          <p className="gallery-desc">
            Explore our STEM workshops, school sessions, camps, teacher trainings, achievements and
            events.
          </p>
        </header>

        <section className="gallery-content">
          <GallerySidebar
            categories={galleryCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <GalleryGrid items={filteredItems} />
        </section>
      </div>
    </main>
  );
}
