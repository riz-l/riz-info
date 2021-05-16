// breakpoints: width
const width = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  tabletL: "824px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

// breakpoints: deviceWidth
export const deviceWidth = {
  mobileS: `(max-width: ${width.mobileS})`,
  mobileM: `(max-width: ${width.mobileM})`,
  mobileL: `(max-width: ${width.mobileL})`,
  tablet: `(max-width: ${width.tablet})`,
  tabletL: `(max-width: ${width.tabletL})`,
  laptop: `(max-width: ${width.laptop})`,
  laptopL: `(max-width: ${width.laptopL})`,
  desktop: `(max-width: ${width.desktop})`,
};
