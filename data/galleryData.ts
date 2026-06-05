export const galleryCategories = [
  "All Photos",
  "Achievements",
  "Inaugurations",
  "School Sessions",
  "Workshops",
  "Camps",
  "Teacher Training",
  "Techfests",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  id: number;
  title: string;
  category: Exclude<GalleryCategory, "All Photos">;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  { id: 1, title: "Robotics Team Achievement", category: "Achievements", image: "/project-rover.jpg" },
  { id: 2, title: "Science Fair Recognition", category: "Achievements", image: "/project-arm.jpg" },
  { id: 3, title: "Young Innovators Award", category: "Achievements", image: "/project-circuit.jpg" },
  { id: 4, title: "STEM Lab Launch Ceremony", category: "Inaugurations", image: "/hero.png" },
  { id: 5, title: "Digital Lab Opening Day", category: "Inaugurations", image: "/hero-bg-new.png" },
  { id: 6, title: "Campus Innovation Inauguration", category: "Inaugurations", image: "/background.jpg" },
  { id: 7, title: "Classroom STEM Activity", category: "School Sessions", image: "/secondsection.png" },
  { id: 8, title: "Electronics Learning Session", category: "School Sessions", image: "/sk-breadboard.png" },
  { id: 9, title: "Coding and Circuits Session", category: "School Sessions", image: "/sk-arduino.png" },
  { id: 10, title: "Hands-on Robotics Workshop", category: "Workshops", image: "/robot-arm.png" },
  { id: 11, title: "Creative AI Workshop", category: "Workshops", image: "/artificial-intelligence.png" },
  { id: 12, title: "Circuit Building Workshop", category: "Workshops", image: "/sk-leds.png" },
  { id: 13, title: "Summer STEM Camp", category: "Camps", image: "/test-hero.png" },
  { id: 14, title: "Maker Camp Activities", category: "Camps", image: "/STEMKIT.png" },
  { id: 15, title: "Problem Solving Camp", category: "Camps", image: "/sk-wires.png" },
  { id: 16, title: "Educator Upskilling Session", category: "Teacher Training", image: "/mentor.png" },
  { id: 17, title: "Teacher Robotics Training", category: "Teacher Training", image: "/parents-awerness.png" },
  { id: 18, title: "Assessment Training Workshop", category: "Teacher Training", image: "/Performancetracking.png" },
  { id: 19, title: "Inter-School Techfest", category: "Techfests", image: "/project-drone.jpg" },
  { id: 20, title: "Innovation Expo Showcase", category: "Techfests", image: "/1-1course.png" },
];
