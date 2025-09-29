const HOUSE_HOTSPOTS_CONFIG = [
  {
    variant: {
      images: [
        {
          src:
            "https://cdn.treehouseinternetgroup.com/cms_images/107/High%20energy%20bills_slider%20image%203.jpg",
          alt: "High Energy Bills"
        }
      ],
      title: "High Energy Bills",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      moreDetailsUrl: "https://www.gothrasher.com/3d-house/high-energy-bills.html"
    },
    popupProps: { popupSelector: "high-energy-bills" },
    initialDimensions: [1889, 1204],
    positions: [
      { imageIndex: 1, xCoord: 1150, yCoord: 760 },
      { imageIndex: 2, xCoord: 1140 },
      { imageIndex: 3, xCoord: 1130 },
      { imageIndex: 4, xCoord: 1120 },
      { imageIndex: 5, xCoord: 1110 },
      { imageIndex: 6, xCoord: 1100 },
      { imageIndex: 7, xCoord: 1090 },
      { imageIndex: 8, xCoord: 1080 },
      { imageIndex: 9, xCoord: 1070 },
      { imageIndex: 10, xCoord: 1060 },
      { imageIndex: 11, xCoord: 1050 },
      { imageIndex: 12, xCoord: 1040 },
      { imageIndex: 13, xCoord: 1030 },
      { imageIndex: 14, xCoord: 1020 },
      { imageIndex: 15, xCoord: 1010 },
      { imageIndex: 16, xCoord: 1000 },
      { imageIndex: 17, xCoord: 990 },
      { imageIndex: 18, xCoord: 980 },
      { imageIndex: 19, xCoord: 970 },
      { imageIndex: 20, xCoord: 960 },
      { imageIndex: 92, xCoord: 1200 },
      { imageIndex: 93, xCoord: 1200 },
      { imageIndex: 94, xCoord: 1200 },
      { imageIndex: 95, xCoord: 1200 },
      { imageIndex: 96, xCoord: 1200 },
      { imageIndex: 97, xCoord: 1195 },
      { imageIndex: 98, xCoord: 1180 },
      { imageIndex: 99, xCoord: 1170 },
      { imageIndex: 100, xCoord: 1160 },
    ],
  },
];
window.CI360.addHotspots("3d-house", HOUSE_HOTSPOTS_CONFIG);
