/**
 * CENTRAL WEDDING CONFIGURATION
 * Every editable detail of the invitation lives here.
 * Sample wedding details for Anjana & Rohan (a fictional couple,
 * traditional Malayali wedding on the Alappuzha backwaters, Kerala).
 * Replace the values below with the real wedding details.
 */

export type WeddingEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  icon: "crescent" | "rings" | "lantern" | "dinner";
};

export const wedding = {
  bride: {
    firstName: "Anjana",
    fullName: "Anjana Menon",
    parents: "Daughter of Mr. Gopinath Menon & Mrs. Sreedevi Menon",
  },

  groom: {
    firstName: "Rohan",
    fullName: "Rohan Pillai",
    parents: "Son of Mr. Raghavan Pillai & Mrs. Lekha Pillai",
  },

  initials: "A & R",

  /** Human readable date + time */
  date: "Sunday, 17 January 2027",

  dayName: "Sunday",
  dayNumber: "17",
  monthName: "January",
  year: "2027",

  time: "10:30 AM onwards",

  /** Used by countdown + calendar */
  dateISO: "2027-01-17T10:30:00",
  endISO: "2027-01-17T21:30:00",

  welcomeLine: "With the blessings of our families",

  welcomeTitle: "Wedding Celebration",

  welcomeJoin: "between",

  venue: {
    name: "Kayal Tharavad Resort",
    address: "Punnamada Backwaters, Alappuzha, Kerala 688013",
    mapsQuery: "Punnamada Backwaters, Alappuzha, Kerala",
  },

  events: [
    {
      id: "welcome",
      title: "Mehendi & Haldi",
      date: "Saturday, 16 January 2027",
      time: "5:00 PM",
      venue: "Kayal Tharavad Resort, Lakeside Lawn",
      icon: "lantern",
    },

    {
      id: "ceremony",
      title: "Wedding Muhurtham",
      date: "Sunday, 17 January 2027",
      time: "10:30 AM",
      venue: "Kayal Tharavad Resort, Nalukettu Mandapam",
      icon: "crescent",
    },

    {
      id: "reception",
      title: "Wedding Sadya",
      date: "Sunday, 17 January 2027",
      time: "12:30 PM",
      venue: "Kayal Tharavad Resort, Banana-Leaf Hall",
      icon: "dinner",
    },

    {
      id: "brunch",
      title: "Evening Reception",
      date: "Sunday, 17 January 2027",
      time: "6:30 PM",
      venue: "Kayal Tharavad Resort, Sunset Deck",
      icon: "rings",
    },
  ] satisfies WeddingEvent[],

  dressCode: {
    description:
      "Join us in traditional Kerala attire. Kasavu sarees and set-mundus in cream and gold, with touches of hibiscus red, backwater teal, and banana-leaf green, are warmly encouraged. Men are welcome in a mundu with a shirt or kurta.",

    colors: [
      {
        name: "Kasavu Cream",
        hex: "#F5EBD8",
      },
      {
        name: "Temple Gold",
        hex: "#C9A24B",
      },
      {
        name: "Hibiscus Red",
        hex: "#C8283A",
      },
      {
        name: "Backwater Teal",
        hex: "#1F8A82",
      },
      {
        name: "Banana Leaf",
        hex: "#5E8C45",
      },
      {
        name: "Sunset Coral",
        hex: "#F0866A",
      },
      {
        name: "Jasmine White",
        hex: "#FBF8F1",
      },
    ],
  },

  invitationMessage:
    "With the grace of the Almighty and the blessings of our elders, we joyfully invite you to celebrate the wedding of Anjana and Rohan amid the calm beauty of the Kerala backwaters. Join us as two families come together in love, laughter, and tradition. Your presence and good wishes will make our celebration truly complete.",

  quote: "“Where there is love, there is home.”",

  guestInformation: [
    {
      title: "Arrival",
      body: "Please arrive 20–30 minutes before the muhurtham so you can settle in and be present for the rituals from the beginning.",
    },

    {
      title: "Dress Code",
      body: "Traditional Kerala attire in cream, gold, and festive tones is encouraged. Mornings by the backwaters are warm, so light cotton and silk are comfortable choices.",
    },

    {
      title: "Family",
      body: "Our celebration is all about togetherness. Families, elders, and children are warmly welcome at every event.",
    },

    {
      title: "Parking",
      body: "Parking is available at the resort. Our team will guide you on arrival. Houseboat and boat transfers can be arranged on request.",
    },

    {
      title: "Photography",
      body: "Please feel free to capture the joyful moments. During the muhurtham, we kindly request that guests avoid flash photography and keep the aisle clear for the rituals.",
    },

    {
      title: "Gifts",
      body: "Your love, blessings, and presence are the greatest gifts we could ask for.",
    },
  ],

  /** Optional background music */
  musicSrc: "",

  footer: {
    signOff: "With Love, Anjana & Rohan",
    thanks:
      "Thank you for being part of our story. We look forward to celebrating this beautiful new beginning with you and receiving your blessings.",
  },
} as const;

export type Wedding = typeof wedding;