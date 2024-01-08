export const primaryColor = "#CC2D4A";
export const secondaryColor = "#F4E8D6";
export const tertiaryColor = "#BA2943";

export const events = [
  "For Wedding Event",
  "For Anniversary Event",
  "For Birthday Party",
  "For Haldi Event",
  "For Reception",
  "For Engagement",
  "For Corporate Event",
  "For Poite Ceremony",
  "For Mukhe Bhat",
  "For Bou Bhat",
  "For Mehndi Function",
  "For Baby Shower",
  "For Bridal Party",
  "For Aibudhor Bhat",
  "For Housewarming",
];

export function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function isValidPhone(phone) {
  const re = /^[0-9]{10}$/;
  return re.test(String(phone));
}

