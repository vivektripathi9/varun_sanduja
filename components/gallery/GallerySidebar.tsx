import type { GalleryCategory } from "@/data/galleryData";

type GallerySidebarProps = {
  categories: readonly GalleryCategory[];
  activeCategory: GalleryCategory;
  onCategoryChange: (category: GalleryCategory) => void;
};

export function GallerySidebar({
  categories,
  activeCategory,
  onCategoryChange,
}: GallerySidebarProps) {
  return (
    <aside aria-label="Gallery categories" className="gallery-sidebar">
      {/* Desktop sidebar */}
      <div className="gallery-sidebar-desktop">
        <h2 className="gallery-sidebar-title">Categories</h2>
        <div className="gallery-sidebar-list">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`gallery-sidebar-btn ${isActive ? "gallery-sidebar-btn--active" : ""}`}
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile horizontal scroll */}
      <div className="gallery-sidebar-mobile">
        <div className="gallery-sidebar-scroll">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`gallery-pill ${isActive ? "gallery-pill--active" : ""}`}
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
