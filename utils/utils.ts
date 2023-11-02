export const customizableFeatures = [
  "solarcalc",
  "pumpcalc",
  "D&S data repo",
  "Access to Elimu Premium",
  "Idayliff",
];

export const hardCodedFeatures = [
  {
    service: "solar-calc",
    basic: ["Access to SUNFLO systems", "3 trials for other sizing tools"],
    premium: [
      "AC Borehole Pumps",
      "Eazy AC Sizing",
      "SUNFLO Systems",
      "Solarization (Electric to Solar)",
      "Solar Pumps",
      "Projects",
      "Customers",
    ],
    custom: customizableFeatures,
    price: 10,
  },
  {
    service: "pump-calc",
    basic: ["Access to Pumps Catalogue", "3 trials for other tools"],
    premium: ["Pump Sizing", "DRO configuratior"],
    custom: customizableFeatures,
    price: 20,
  },
];
