export interface Project {
  id: string;
  title: string;
  description: string;
}

export interface Equipment {
  id: string;
  name: string;
  origin: string;
  description: string;
  image: string;
}

export interface Collaboration {
  id: string;
  name: string;
  description: string;
  logoUrl?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  description: string;
}

export const projectsData: Project[] = [
  {
    id: "hydrogel",
    title: "Hydrogel Project",
    description: "Developing novel hydrogel-based systems for directed wound healing therapies and controlled drug release."
  },
  {
    id: "colistin-resistance",
    title: "Colistin Resistance and mcr-1/mcr-3 Gene Analysis in Urinary E. coli from a Tertiary Level Hospital",
    description: "This project investigates the emergence of colistin-resistant Escherichia coli isolated from urinary tract infections in a tertiary-level hospital setting."
  },
  {
    id: "vegf-polymorphisms",
    title: "Role of VEGF Polymorphisms and Serum VEGF Level as Potential Biomarkers in Breast Cancer",
    description: "Exploring the relationship between genetic variations in the VEGF gene and circulating serum VEGF levels as potential biomarkers for breast cancer."
  },
  {
    id: "diospyros-malabarica",
    title: "Biological Activities and In Silico Analysis of Diospyros malabarica Leaf Extract",
    description: "Investigating the therapeutic potential of Diospyros malabarica leaf extract through in vitro, in vivo, and in silico analyses."
  }
];

export const equipmentData: Equipment[] = [
  {
    id: "microcentrifuge",
    name: "Mini Microcentrifuge",
    origin: "Corning, USA",
    description: "Compact lab essential with an 8 x 1.5/2.0 mL tube capacity and fixed 6,000 RPM speed.",
    image: "https://images.pexels.com/photos/8442024/pexels-photo-8442024.jpeg"
  },
  {
    id: "freezer",
    name: "Ultra-Low Temp Freezer",
    origin: "Esco Lifesciences",
    description: "Reliable solution for long-term sample storage with a range of -50°C to -86°C.",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "thermal-cycler",
    name: "Bio-Rad T100 Thermal Cycler",
    origin: "USA",
    description: "Features an intuitive touch-screen interface and thermal gradient capability for efficient PCR applications.",
    image: "https://images.unsplash.com/photo-1579154212624-8b598f828731?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "chemidoc",
    name: "Bio-Rad ChemiDoc MP",
    origin: "USA",
    description: "All-in-one solution for imaging and analyzing gels and western blots with high sensitivity.",
    image: "https://images.pexels.com/photos/8533016/pexels-photo-8533016.jpeg"
  },
  {
    id: "vortex-daihan",
    name: "DAIHAN MaXshake VM-30",
    origin: "Korea",
    description: "Multifunction vortex mixer with variable speed control up to 3,300rpm for efficient sample mixing.",
    image: "https://images.pexels.com/photos/8442448/pexels-photo-8442448.jpeg"
  },
  {
    id: "vortex-dlab",
    name: "DLAB MX-S Vortex Mixer",
    origin: "USA",
    description: "Variable speed mixer from 0 to 3,000 rpm for versatile laboratory mixing applications.",
    image: "https://images.pexels.com/photos/7108344/pexels-photo-7108344.jpeg"
  },
  {
    id: "humalyzer",
    name: "HumaLyzer 3000",
    origin: "Germany",
    description: "Semi-automated clinical chemistry analyzer known for reliability and efficiency.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "microscope",
    name: "Leica DM750",
    origin: "Germany",
    description: "Binocular microscope designed for educational and laboratory use.",
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800"
  }
];

export const collaborationData: Collaboration[] = [
  {
    id: "icddrb",
    name: "icddr,b",
    description: "Strengthens research in infectious diseases, public health, and clinical studies through access to advanced facilities."
  },
  {
    id: "labaid",
    name: "LabAid Cancer Hospital",
    description: "Focuses on cancer-related research, including drug response, biomarker analysis, and therapeutic evaluation."
  },
  {
    id: "omega",
    name: "Omega Hospital",
    description: "Facilitates clinical and diagnostic research, allowing validation of laboratory findings in clinical settings."
  }
];

export const newsData: NewsItem[] = [
  {
    id: "cell-culture-workshop",
    title: "Cell Culture Training Workshop Held",
    date: "March 9, 2026",
    description: "A seminar and hands-on training on cell culture techniques was conducted, providing practical experience in aseptic handling and applications in infectious disease and biomedical research."
  },
  {
    id: "presentation-session",
    title: "Biomedical Research Lab Presentation Session",
    date: "February 16, 2025",
    description: "Led by Dr. Tahmina Foyez, this session showcased ongoing research projects, student contributions, and future directions of the laboratory."
  },
  {
    id: "community-pharmacy-webinar",
    title: "Career Webinar on Community Pharmacy",
    date: "December 13, 2025",
    description: "The first session of the Career Webinar Series focused on building a career as a community pharmacist, highlighting skills, opportunities, and professional pathways."
  },
  {
    id: "wound-healing-remedy",
    title: "Seminar on Local Wound Healing Remedy",
    date: "December 08, 2024",
    description: "A seminar explored the development of cost-effective, locally sourced treatments for minor wound healing and their evaluation."
  },
  {
    id: "pharmacist-day-2024",
    title: "World Pharmacist Day 2024 Celebrated",
    date: "September 28, 2024",
    description: "The department celebrated World Pharmacist Day under the theme 'Pharmacists: Meeting Global Health Needs,' recognizing the role of pharmacists in healthcare."
  }
];
