const size = {
  mobile_s: '320px',
  mobile_m: '375px',
  mobile_l: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptop_l: '1440px',
  desktop: '2560px',
};

const device = {
  mobile_s: `(min-width: ${size.mobile_s})`,
  mobile_m: `(min-width: ${size.mobile_m})`,
  mobile_l: `(min-width: ${size.mobile_l})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptop_l: `(min-width: ${size.laptop_l})`,
  desktop: `(min-width: ${size.desktop})`
};

export default device;