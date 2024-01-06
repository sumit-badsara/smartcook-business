import { 
  people01, 
  people02, 
  people03, 
  facebook, 
  instagram, 
  linkedin, 
  twitter, 
  airbnb, 
  binance, 
  coinbase, 
  dropbox, 
  send, 
  shield, 
  star
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  // {
  //   id: "product",
  //   title: "Product",
  // },
  {
    id: "clients",
    title: "User Reviews",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Trusted Cooks",
    content:
      "The best vouched cooks near your locality, who can cook delivious yet healthy meals.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We do all the necessary onboarding formalities of validating documents of cook before listing them on our platform",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Cook Change",
    content:
      "We allow for cook change request in the middle of arrangements, so that you have the freedom to choose.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "This app has revolutionized my dining experience, connecting me with skilled cooks in the city for delightful and affordable meals – a true game-changer!",
    name: "Sumit Badsara",
    title: "Software Developer @ Abnormal Security",
    img: people03,
  },
  {
    id: "feedback-2",
    content:
      "Discovering this app was a game-changer for me; now, I effortlessly find top-notch cooks in the city, enjoying delicious meals at pocket-friendly prices. Highly recommend!",
    name: "Dipanshu Daga",
    title: "Graphics and Marketing @ MoMoney",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "An exceptional app that not only connects me with excellent local cooks but also makes relishing affordable and delectable meals a delightful experience!",
    name: "Pratibha Shrivastav",
    title: "Software Developer @ Adobe",
    img: people01,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Cook Profiles",
    value: "50+",
  },
  {
    id: "stats-2",
    title: "Reviews by Users",
    value: "100+",
  },
  {
    id: "stats-3",
    title: "Meals served",
    value: "365+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];