export interface Faculty {
  id: string;
  name: string;
  designation: string;
  department: string;
  email: string;
  qualifications: string[];
  researchInterests: string[];
  profileDescription: string;
  image?: string;
  importantLinks: {
    label: string;
    url: string;
  }[];
  fullBio?: string;
  careerHistory?: string[];
  awards?: string[];
}

export const facultyData: Faculty[] = [
  {
    id: "tahmina-foyez",
    name: "Dr. Tahmina Foyez",
    designation: "Head & Professor",
    department: "Department of Pharmacy",
    email: "tahmina@pharmacy.uiu.ac.bd",
    qualifications: [
      "Doctor of Philosophy: Department of Molecular Biology, Graduate School of Medicine, Nagoya University, Nagoya, Japan",
      "Masters of Pharmacy: Department of Clinical Pharmacy & Pharmacology, University of Dhaka, Dhaka, Bangladesh",
      "Bachelor of Pharmacy: Department of Pharmacy, University of Dhaka, Dhaka, Bangladesh"
    ],
    researchInterests: [
      "Sickle cell Disease",
      "Venous thromboembolism",
      "Glycoprotein",
      "Sugar chain",
      "Sulfotransferases enzymes",
      "Neurodegenerative diseases",
      "Nanomedicine"
    ],
    profileDescription: "Dr. Tahmina Foyez is a distinguished academic leader and pharmaceutical scientist serving as the Head of the Department of Pharmacy at United International University.",
    image: "https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg",
    fullBio: "Dr. Tahmina worked with Professor Rafal Pawlinski as a Postdoctoral Research Associate in the Department of Hematology, Blood Research Center, School of Medicine at the University of North Carolina at Chapel Hill, USA in 2022. She actively worked on Women Leaders Program to Promote Well-being in Asia from Nagoya University, Nagoya, Japan during December 2013-September 2014. She has published extensively in many high-impact journals and publishers, including Nature Publishing Group, Wiley, Springer, RSC Advances, Taylor and Francis Group, ACS Omega, Proceedings of the National Academy of Sciences, and others.",
    importantLinks: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=jIkyvfwAAAAJ&hl=en" },
      { label: "Research Gate", url: "https://www.researchgate.net/profile/Tahmina-Foyez" },
      { label: "UIU Profile", url: "https://pharmacy.uiu.ac.bd/faculty/foyez-tahmina/" }
    ],
    careerHistory: [
      "Postdoctoral Research Associate, University of North Carolina at Chapel Hill, USA (2022)",
      "Women Leaders Program, Nagoya University, Japan (2013-2014)",
      "Professor & Head, Department of Pharmacy, UIU"
    ]
  },
  {
    id: "sabiha-tasnim",
    name: "Sabiha Tasnim",
    designation: "Assistant Professor",
    department: "Department of Pharmacy",
    email: "sabiha@pharmacy.uiu.ac.bd",
    qualifications: [
      "B.Pharm (Hons.), University of Dhaka",
      "M.Pharm, Pharmaceutical Chemistry, University of Dhaka"
    ],
    researchInterests: [
      "Organic synthesis and analytical chemistry",
      "Computer-aided drug design (CADD)",
      "Natural product research",
      "Molecular biology"
    ],
    profileDescription: "Ms. Sabiha Tasnim is an emerging academic and researcher with a strong background in pharmaceutical chemistry and industry experience.",
    image: "https://images.pexels.com/photos/5439130/pexels-photo-5439130.jpeg",
    fullBio: "Ms. Tasnim started her career with The ACME Laboratories Ltd as a Brand Executive in the Strategic Brand Management Department in February 2021. In November 2021, she joined Incepta Pharmaceuticals Ltd. as an Executive in the International Marketing Department. She started her academic career at the University of Asia Pacific as a Lecturer before joining UIU.",
    importantLinks: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=6uKdPI8AAAAJ&hl=en" },
      { label: "Research Gate", url: "https://www.researchgate.net/profile/Sabiha-Tasnim-2" }
    ],
    careerHistory: [
      "Assistant Professor, UIU (Current)",
      "Lecturer, University of Asia Pacific",
      "Executive, International Marketing, Incepta Pharmaceuticals Ltd.",
      "Brand Executive, ACME Laboratories Ltd."
    ],
    awards: ["Scholarship from Ministry of Education", "NST Fellowship for thesis research"]
  },
  {
    id: "sharmin-ahmed-rakhi",
    name: "Sharmin Ahmed Rakhi",
    designation: "Assistant Professor",
    department: "Department of Pharmacy",
    email: "sharmin@pharmacy.uiu.ac.bd",
    qualifications: [
      "M. Pharm. (2018-19) Dept. of Pharmaceutical Chemistry, University of Dhaka (3rd Position)",
      "B. Pharm. (2014-2018) Dept. of Pharmacy, University of Dhaka (5th position)"
    ],
    researchInterests: [
      "Phytochemistry and natural product research",
      "Drug design and synthetic chemistry",
      "Molecular biology and docking",
      "Nanoparticle drug delivery"
    ],
    profileDescription: "Ms. Sharmin Ahmed Rakhi is a promising researcher in pharmaceutical chemistry with a strong academic record.",
    image: "https://images.pexels.com/photos/5439141/pexels-photo-5439141.jpeg",
    fullBio: "Sharmin obtained her M. Pharm from the University of Dhaka securing 3rd position. She started her career with Incepta Pharmaceuticals Ltd as a Brand Executive before transitioning to academia at UIU. Her master's thesis was on Phytochemical and biological investigation on Crinum asiaticum.",
    importantLinks: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=n9n1mt0AAAAJ&hl=en" },
      { label: "Research Gate", url: "https://www.researchgate.net/profile/Sharmin-Ahmed-Rakhi" }
    ],
    careerHistory: [
      "Assistant Professor, UIU",
      "Lecturer, UIU",
      "Brand Executive, Incepta Pharmaceuticals Ltd."
    ],
    awards: ["Govt. scholarship from Ministry of Education", "NST scholarship for master's thesis"]
  },
  {
    id: "ferdous-ul-haque-joy",
    name: "Ferdous-Ul-Haque Joy",
    designation: "Lecturer",
    department: "Department of Pharmacy",
    email: "ferdous@pharmacy.uiu.ac.bd",
    qualifications: [
      "Master in Pharmacy (M. Pharm.) Dept. of Clinical Pharmacy & Pharmacology, University of Dhaka",
      "Bachelor in Professional Pharmacy (B.Pharm.) Dept. of Pharmacy, University of Dhaka"
    ],
    researchInterests: [
      "Pharmacology",
      "Biochemistry",
      "Cell Biology",
      "Molecular biology"
    ],
    profileDescription: "Mr. Ferdous-Ul-Haque Joy is currently serving as Lecturer in the Department of Pharmacy at United International University.",
    image: "https://images.pexels.com/photos/3825368/pexels-photo-3825368.jpeg",
    fullBio: "Mr. Joy completed his Master of Pharmacy from the University of Dhaka, securing 2nd position. He began his professional career as an Executive in the Product Management Department (Oncology Marketing Division) at Beacon Pharmaceuticals Ltd. He also taught at Atish Dipankar University and State University of Bangladesh.",
    importantLinks: [
        { label: "Email", url: "mailto:ferdous@pharmacy.uiu.ac.bd" }
    ],
    careerHistory: [
      "Lecturer, UIU (Current)",
      "Lecturer, State University of Bangladesh",
      "Lecturer, Atish Dipankar University of Science & Technology",
      "Executive, Product Management, Beacon Pharmaceuticals Ltd."
    ]
  },
  {
    id: "rajib-das",
    name: "Rajib Das",
    designation: "Lecturer",
    department: "Department of Pharmacy",
    email: "rajibdas@pharmacy.uiu.ac.bd",
    qualifications: [
      "Master in Pharmacy (M. Pharm.) University of Dhaka (3rd Position)",
      "Bachelor in Professional Pharmacy (B.Pharm.) University of Dhaka (1st Position)"
    ],
    researchInterests: [
      "Clinical Pharmacology",
      "Molecular pharmaco genetics",
      "Molecular Biology",
      "Drug Discovery"
    ],
    profileDescription: "Rajib Das is currently serving as a Lecturer in the Department of Pharmacy at United International University (UIU).",
    image: "https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg",
    fullBio: "Rajib has contributed to several peer-reviewed publications in reputed journals including Heliyon and Food Additives & Contaminants. He co-authored a book chapter on ethnopharmacology. For his outstanding academic performance, he has been honored with several awards including the Bangabandhu Scholar Award 2023.",
    importantLinks: [
        { label: "Email", url: "mailto:rajibdas@pharmacy.uiu.ac.bd" }
    ],
    careerHistory: [
      "Lecturer, UIU",
      "President, Rotaract Club of Dhaka University",
      "President, Jagannath Hall Debating Club"
    ],
    awards: ["Jagannath Hall Merit Award 2025", "Bangabandhu Scholar Award 2023", "NST Fellowship 2023"]
  },
  {
    id: "mst-nowsad-zahan-sathi",
    name: "Mst. Nowsad Zahan Sathi",
    designation: "Lecturer",
    department: "Department of Pharmacy",
    email: "nowsad@pharmacy.uiu.ac.bd",
    qualifications: [
      "Masters in Pharmacy (M. Pharm.) University of Dhaka (3rd Position)",
      "Bachelor in Professional Pharmacy (B.Pharm.) University of Dhaka"
    ],
    researchInterests: [
      "Endophytic Fungi",
      "Organic synthesis & analytical chemistry",
      "Natural product research",
      "Ethnopharmacology",
      "Computer aided drug design (CADD)",
      "Molecular biology"
    ],
    profileDescription: "Ms. Mst. Nowsad Zahan Sathi is an early-career academic actively contributing to pharmaceutical education and research.",
    image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
    fullBio: "Mst. Nowsad Zahan Sathi obtained her degrees from the University of Dhaka securing 3rd position. Her research interests include Isolation and biological evaluation of secondary metabolites from endophytic fungus. She previously served as a lecturer at Stamford University Bangladesh.",
    importantLinks: [
        { label: "Email", url: "mailto:nowsad@pharmacy.uiu.ac.bd" }
    ],
    careerHistory: [
      "Lecturer, UIU (Current)",
      "Lecturer, Stamford University Bangladesh"
    ],
    awards: ["Academic Scholarship", "NST Fellowship", "Education Board Scholarship"]
  }
];
