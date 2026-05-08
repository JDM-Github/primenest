import {
    Home,
    Shield,
    Leaf,
    Phone,
    Mail,
    MapPin,
    Eye,
    Sparkles,
    BadgeDollarSign,
} from "lucide-react";

export const LOGO_URL = "/logo.png";
export const HERO_IMG =
    "https://cdn.b12.io/client_media/6qrwr1vc/e8ea6728-021a-11f1-8f77-0242ac110002-jpg-hero_image.jpeg";
export const ABOUT_IMG =
    "https://cdn.b12.io/client_media/6qrwr1vc/e9d49688-021a-11f1-9777-0242ac110002-jpg-hero_image.jpeg";
export const SERVICE_1_IMG =
    "https://cdn.b12.io/client_media/6qrwr1vc/ee0ab68f-021a-11f1-b976-0242ac110002-jpg-regular_image.jpeg";
export const SERVICE_2_IMG =
    "https://cdn.b12.io/client_media/6qrwr1vc/ede18681-021a-11f1-acb2-0242ac110002-jpg-regular_image.jpeg";
export const SERVICE_3_IMG =
    "https://cdn.b12.io/client_media/6qrwr1vc/edc8f13d-021a-11f1-9692-0242ac110002-jpg-regular_image.jpeg";

export const PILLAR_SENSORY_IMG =
    "https://cdn.b12.io/client_media/6qrwr1vc/85752607-021c-11f1-9232-0242ac110002-jpg-regular_image.jpeg";
export const PILLAR_ABOUT_IMG =
    "https://cdn.b12.io/client_media/6qrwr1vc/8e3eec67-0519-11f1-a739-0242ac110002-jpeg-regular_image.jpeg";
export const PILLAR_SECURITY_IMG =
    "https://cdn.b12.io/client_media/6qrwr1vc/f780dc5f-0519-11f1-9ba7-0242ac110002-jpg-regular_image.jpeg";
export const PILLAR_GUARANTEE_IMG =
    "https://cdn.b12.io/client_media/6qrwr1vc/291e2eca-051a-11f1-a392-0242ac110002-png-regular_image.png";

export const AVATARS = [
    "https://i.pravatar.cc/80?img=11",
    "https://i.pravatar.cc/80?img=32",
    "https://i.pravatar.cc/80?img=47",
];

export const NAV_LINKS = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Services", href: "services" },
    { label: "Testimonials", href: "testimonials" },
    { label: "Contact", href: "contact" },
];

export const FEATURES = [
    {
        icon: "✦",
        label: "Healing Environments",
        desc: "Circadian-responsive lighting and calming palettes that promote sleep and emotional stability.",
    },
    {
        icon: "◎",
        label: "Acoustic Tranquility",
        desc: "Advanced insulation and noise-reducing materials to eliminate sensory overload.",
    },
    {
        icon: "◈",
        label: "Invisible Perimeter",
        desc: "Smart security designed to protect without feeling restrictive or institutional.",
    },
    {
        icon: "◐",
        label: "Cash-Powered Exits",
        desc: "Close in 7-14 days, as-is, zero repairs required. No bank delays.",
    },
];

export const SERVICES = [
    {
        Icon: Home,
        title: "Trauma-Informed Space Development",
        desc: "Transforming properties into secure, trauma-informed environments where families can heal and grow at their own pace.",
        link: "/trauma-informed-space-development",
        img: SERVICE_1_IMG,
    },
    {
        Icon: Shield,
        title: "Invisible Perimeter Technology",
        desc: "Enhancing safety with innovative smart monitoring solutions, security without the fortress aesthetic or institutional feel.",
        link: "/invisible-perimeter-technology",
        img: SERVICE_2_IMG,
    },
    {
        Icon: Leaf,
        title: "Sensory-Safe Design Standards",
        desc: "Creating environments that minimize sensory overload for neurodivergent children and the families who love them.",
        link: "/sensory-safe-design-standards",
        img: SERVICE_3_IMG,
    },
];

export const PILLARS = [
    {
        Icon: Sparkles,
        tag: "Design",
        title: "Sensory Heaven",
        img: PILLAR_SENSORY_IMG,
        bullets: [
            {
                bold: "Luminous Healing Environments:",
                text: "Circadian-responsive lighting and calming color palettes promote sleep and emotional stability.",
            },
            {
                bold: "Acoustic Tranquility:",
                text: "Advanced insulation and noise-reducing materials eliminate sensory overload.",
            },
            {
                bold: "Stable Foundations:",
                text: "Every Smart Nest is architecturally engineered to prioritize sensory comfort and predictable atmosphere.",
            },
        ],
    },
    {
        Icon: Home,
        tag: "Mission",
        title: "Who We Are",
        img: PILLAR_ABOUT_IMG,
        bullets: [
            {
                bold: "Mission-Driven Restoration:",
                text: "We breathe new life into undervalued Ohio properties, transforming distressed assets into high-efficiency Smart Nests.",
            },
            {
                bold: "Empathetic Stewardship:",
                text: "Guided by founder Michael Pavlov's personal experience, ensuring a family-focused approach to every project.",
            },
            {
                bold: "Fresh Start Protocol:",
                text: "A guaranteed, no-judgment path forward for families and individuals facing difficult property situations.",
            },
        ],
    },
    {
        Icon: Eye,
        tag: "Security",
        title: "Security Sanctuary",
        img: PILLAR_SECURITY_IMG,
        bullets: [
            {
                bold: "The Invisible Perimeter:",
                text: "High-end cameras and sensor-driven automation designed to protect residents without feeling restrictive.",
            },
            {
                bold: "Tech-Forward Safety:",
                text: "Every home features integrated smart security and automated climate control for total environmental peace of mind.",
            },
            {
                bold: "Proactive Protection:",
                text: "Specialized systems ensure safety for vulnerable individuals, providing tangible control and security.",
            },
        ],
    },
    {
        Icon: BadgeDollarSign,
        tag: "Financial",
        title: "Golden Guarantee",
        img: PILLAR_GUARANTEE_IMG,
        imgContain: true,
        bullets: [
            {
                bold: "Financial Certainty:",
                text: "Cash-Powered exits using internal capital from M&G Organization, bypassing all bank delays and appraisal gaps.",
            },
            {
                bold: "Accelerated Closings:",
                text: "Our streamlined process allows guaranteed transactions in as little as 7 to 14 days.",
            },
            {
                bold: "True As-Is Acquisition:",
                text: "We purchase in any condition — zero repairs, zero cleaning, zero staging costs.",
            },
        ],
        cta: { label: "Learn how it works", href: "/golden-guarantee-all-cash-solutions" },
    },
];

export const TESTIMONIALS = [
    {
        name: "Brandon Vega",
        role: "PrimeNest Client",
        quote:
            "PrimeNest Ohio transformed our once distressed property into a warm and inviting sanctuary. The trauma-informed design has positively impacted our family's well-being beyond measure.",
        img: AVATARS[0],
    },
    {
        name: "Chris Wei",
        role: "PrimeNest Client",
        quote:
            "The integration of smart technology and sensory-safe design made a world of difference. We finally feel secure and at home, it's allowed our family to truly thrive.",
        img: AVATARS[1],
    },
    {
        name: "Karen Weiss",
        role: "PrimeNest Client",
        quote:
            "I was amazed at how PrimeNest Ohio turned our house into a haven that meets our family's unique needs. The thoughtful design helped us immensely through the hardest year.",
        img: AVATARS[2],
    },
];

export const CONTACT_INFO = [
    { Icon: Phone, label: "+1 (650) 749-1446", href: "tel:+16507491446" },
    {
        Icon: Mail,
        label: "michael.pavlov@primenestohio.com",
        href: "mailto:michael.pavlov@primenestohio.com",
    },
    {
        Icon: MapPin,
        label: "17 East Broad Street, Warren, OH 44444",
        href: "https://www.google.com/maps/place/17+East+Broad+Street+Warren+OH+44444+US",
    },
];

export const HOURS = [
    ["Mon - Fri", "9:00 am - 10:00 pm"],
    ["Saturday", "9:00 am - 6:00 pm"],
    ["Sunday", "9:00 am - 12:00 pm"],
];

export const MAP_EMBED =
    "https://www.google.com/maps/embed/v1/place?q=17%20East%20Broad%20Street%2C%20Warren%2C%20OH%2044444%2C%20US&key=AIzaSyDygu92JJ_MAMG__b5A0xMKNWHP4vgHER4";
