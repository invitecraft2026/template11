/**
 * CENTRAL WEDDING CONFIGURATION
 * InviteCraft demo template featuring Vijay Deverakonda & Rashmika Mandanna.
 *
 * IMPORTANT:
 * This is a fictional/template preview, not an announcement or confirmation
 * of a real wedding. Replace the sample date, venue, event details, and copy
 * with confirmed details before using this configuration for a real event.
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
    firstName: "Rashmika",
    fullName: "Rashmika Mandanna",
    parents: "With the love and blessings of her family",
  },

  groom: {
    firstName: "Vijay",
    fullName: "Vijay Deverakonda",
    parents: "With the love and blessings of his family",
  },

  initials: "V & R",

  /** SAMPLE DEMO DATE — replace with a confirmed date */
  date: "Saturday, 20 November 2027",

  dayName: "Saturday",
  dayNumber: "20",
  monthName: "November",
  year: "2027",

  time: "5:00 PM onwards",

  /** Used by countdown + calendar; sample demo date */
  dateISO: "2027-11-20T17:00:00",
  endISO: "2027-11-20T23:00:00",

  welcomeLine: "Together with the love and blessings of our families",

  welcomeTitle: "A Beautiful Beginning",

  welcomeJoin: "and",

  /** SAMPLE VENUE — replace with a confirmed venue */
  venue: {
    name: "The Royal Garden Palace",
    address: "Sample Venue Address, Hyderabad, Telangana, India",
    mapsQuery: "Sample wedding venue, Hyderabad, Telangana, India",
  },

  events: [
    {
      id: "welcome",
      title: "Welcome Celebration",
      date: "Friday, 19 November 2027",
      time: "6:30 PM",
      venue: "The Royal Garden Palace, Celebration Lawn",
      icon: "lantern",
    },

    {
      id: "ceremony",
      title: "Wedding Ceremony",
      date: "Saturday, 20 November 2027",
      time: "5:00 PM",
      venue: "The Royal Garden Palace, Garden Pavilion",
      icon: "crescent",
    },

    {
      id: "reception",
      title: "Wedding Reception",
      date: "Saturday, 20 November 2027",
      time: "7:00 PM",
      venue: "The Royal Garden Palace, Grand Ballroom",
      icon: "rings",
    },

    {
      id: "brunch",
      title: "Family Brunch",
      date: "Sunday, 21 November 2027",
      time: "10:30 AM",
      venue: "The Royal Garden Palace, Garden Terrace",
      icon: "dinner",
    },
  ] satisfies WeddingEvent[],

  dressCode: {
    description:
      "Celebrate this love-story-inspired demo in elegant Indian festive wear, with rich burgundy, warm ivory, champagne gold, and soft floral tones.",

    colors: [
      {
        name: "Ivory",
        hex: "#F5F0E6",
      },
      {
        name: "Champagne Gold",
        hex: "#D6BC8B",
      },
      {
        name: "Dusty Rose",
        hex: "#C98F91",
      },
      {
        name: "Sage Green",
        hex: "#A3AD91",
      },
      {
        name: "Mocha Brown",
        hex: "#8A7163",
      },
      {
        name: "Misty Blue",
        hex: "#A9BBCD",
      },
      {
        name: "Burgundy",
        hex: "#783F4D",
      },
    ],
  },

  invitationMessage:
    "Two hearts, two journeys, and a beautiful story imagined in celebration of love. With the warmth and blessings of our families, join us for this special invitation-template preview featuring Rashmika and Vijay. This is a demo design; event details are placeholders.",

  quote:
    "“Every great love story begins with a beautiful moment.”",

  guestInformation: [
    {
      title: "Arrival",
      body: "For this demo, guests are invited to arrive 20–30 minutes before the ceremony.",
    },

    {
      title: "Dress Code",
      body: "Festive Indian attire or elegant formal wear in ivory, champagne, burgundy, dusty rose, or other complementary tones is suggested for this demo.",
    },

    {
      title: "Family",
      body: "This template celebrates love, family, and togetherness. Update this note to reflect the event's confirmed arrangements.",
    },

    {
      title: "Parking",
      body: "Parking information is a placeholder. Add confirmed venue parking instructions before publishing.",
    },

    {
      title: "Photography",
      body: "Please update this section with the event host's photography preferences and venue guidelines.",
    },

    {
      title: "Gifts",
      body: "Your love and blessings are the greatest gifts. Replace this note if the hosts have other preferences.",
    },
  ],

  /** Optional background music */
  musicSrc: "",

  footer: {
    signOff: "With Love, Rashmika & Vijay",
    thanks:
      "Thank you for exploring this InviteCraft wedding invitation demo. Replace the sample details with verified event information before sharing it as a real invitation.",
  },
} as const;

export type Wedding = typeof wedding;
