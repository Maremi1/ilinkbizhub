export type Platform = {
  name: string;
  cluster: string;
  description: string;
  badge?: string;
  ctas: { label: string; href?: string }[];
};

export type Cluster = {
  id: string;
  letter: string;
  title: string;
  subtitle: string;
  platforms: Platform[];
};

export const clusters: Cluster[] = [
  {
    id: "fintech",
    letter: "A",
    title: "Fintech & Insuretech",
    subtitle: "Inclusion infrastructure for the next billion",
    platforms: [
      {
        name: "Bima Kwik",
        cluster: "fintech",
        description: "Award-winning insurance platform driving national penetration.",
        badge: "Validated in Rwanda",
        ctas: [
          { label: "Website", href: "https://bimakwik.com" },
          { label: "Launch App", href: "https://app.bimakwik.com" },
        ],
      },
      {
        name: "iBank",
        cluster: "fintech",
        description: "Robust financial infrastructure for digital inclusion.",
        badge: "Under Development",
        ctas: [{ label: "Visit Platform" }],
      },
    ],
  },
  {
    id: "realestate",
    letter: "B",
    title: "Real Estate & Property",
    subtitle: "Digital management for the built environment",
    platforms: [
      {
        name: "myEstate",
        cluster: "realestate",
        description: "Proprietary digital management for real estate and urban property.",
        badge: "Under Development",
        ctas: [{ label: "Explore Assets" }],
      },
    ],
  },
  {
    id: "ecommerce",
    letter: "C",
    title: "E-Commerce & Logistics",
    subtitle: "Manufacturer-to-consumer trade rails",
    platforms: [
      {
        name: "Mama Mia's Soko",
        cluster: "ecommerce",
        description: "Integrated Manufacturer-to-Consumer (M2C) marketplace.",
        badge: "Under Development",
        ctas: [
          { label: "Shop Now" },
          { label: "Vendor Login" },
        ],
      },
      {
        name: "Dunamis Delivery",
        cluster: "ecommerce",
        description: "Specialized logistics arm for Pan-African trade.",
        badge: "Under Development",
        ctas: [{ label: "Track Order" }],
      },
    ],
  },
  {
    id: "extractives",
    letter: "D",
    title: "Extractives & Trade",
    subtitle: "Ethical supply chains for strategic resources",
    platforms: [
      {
        name: "iMine / iSupply",
        cluster: "extractives",
        description: "Managing resource distribution and ethical mineral supply chains.",
        badge: "Under Development",
        ctas: [{ label: "B2B Portal" }],
      },
    ],
  },
  {
    id: "services",
    letter: "E",
    title: "Professional Services",
    subtitle: "Tech-enabled operations and advisory",
    platforms: [
      {
        name: "iClean",
        cluster: "services",
        description: "Smart tech-enabled facility management.",
        badge: "Under Development",
        ctas: [{ label: "Book Service" }],
      },
      {
        name: "Atomic Star",
        cluster: "services",
        description: "Executive consultancy and technical oversight.",
        badge: "Under Development",
        ctas: [{ label: "Company Profile" }],
      },
    ],
  },
];