export interface NavLink {
  label: string;
  href: string;
}

export interface Crop {
  id: string;
  image: string;
  glow: string;
  category: "Spice" | "Vegetable";
  name: string;
  description: string;
  indicatorLabel: string;
  indicatorIcon: string;
  metadata: [string, string, string];
}
