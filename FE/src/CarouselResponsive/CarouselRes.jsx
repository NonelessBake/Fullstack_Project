const responsiveCategory = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const responsiveCollection = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    deviceType: "superLargeDesktop",
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    deviceType: "desktop",
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    deviceType: "tablet",
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    deviceType: "mobile",
  },
};
const responsiveHomeSlide = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export { responsiveCategory, responsiveCollection, responsiveHomeSlide };
