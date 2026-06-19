export type Entity = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  url: string;
  status: "live" | "soon";
  region: string;
};

export const entities: Entity[] = [
  {
    slug: "global",
    name: "I Link Global",
    tagline: "The IP Holding & Licensing Engine",
    blurb:
      "Custodian of the group's intellectual property, trademarks, methodologies and AI systems — licensed to national operating companies worldwide.",
    url: "https://global.ilinkbiz.com",
    status: "live",
    region: "Worldwide",
  },
  {
    slug: "international",
    name: "I Link International",
    tagline: "Strategic Management & Investment",
    blurb:
      "A diversified holding entity bridging international capital to emerging market opportunities through MSD, digital transformation and high-impact investment.",
    url: "https://international.ilinkbiz.com",
    status: "live",
    region: "Continental",
  },
  {
    slug: "rwanda",
    name: "I Link Rwanda",
    tagline: "Architecting Rwanda's Digital & Financial Future",
    blurb:
      "A 361-degree consultancy fusing technology, strategy and innovation to drive financial inclusion — Lead Partner of Rwanda's FIA Network reaching 1.8M+ households.",
    url: "https://rwanda.ilinkbiz.com",
    status: "live",
    region: "Kigali, Rwanda",
  },
  {
    slug: "tanzania",
    name: "I Link Tanzania",
    tagline: "Bridging Ideas with Reality",
    blurb:
      "Sixteen specialised brands across Finance & Tech, Resources & Infrastructure, Trade & Logistics and Professional Services — bespoke ICT and marketing solutions.",
    url: "https://tanzania.ilinkbiz.com",
    status: "live",
    region: "Dar es Salaam, Tanzania",
  },
  {
    slug: "founder",
    name: "The Founder",
    tagline: "Secure Your Legacy. Structure Your Wealth.",
    blurb:
      "Management consultancy specialising in Family Trust setup, corporate structuring and ongoing advisory — privacy, succession certainty, asset protection.",
    url: "https://thefounder.ilinkbiz.com",
    status: "live",
    region: "Dar es Salaam · Kigali",
  },
  {
    slug: "ghana",
    name: "I Link Ghana",
    tagline: "West African Operating Node",
    blurb:
      "A registered national operating company executing the I Link Global strategy under local Ghanaian jurisdiction.",
    url: "#",
    status: "soon",
    region: "Accra, Ghana",
  },
  {
    slug: "ethiopia",
    name: "I Link Ethiopia",
    tagline: "Horn of Africa Operating Node",
    blurb:
      "A registered national operating company executing the I Link Global strategy under local Ethiopian jurisdiction.",
    url: "#",
    status: "soon",
    region: "Addis Ababa, Ethiopia",
  },
];