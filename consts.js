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

export const cateringMenu = ["starter", "main", "dessert", "special"];

export const foodMenu = {
  starter: {
    title: "Starter Packages",
    subtitle:
      "Starter, like the first chapter of a great book, sets the tone for the feast ahead. It's not just about satisfying hunger, it's about awakening the appetite for a delightful culinary journey",
    packages: [
      {
        title: "Starter Delight- Non Veg + Veg  ",
        label: "Premium",
        image: "/food2.jpg",
        items: [
          "Chicken Reshmi Kebab",
          "Paneer Sashlik",
          "Hakka Chowmein",
          "Veg Manchurian",
          "Butter Baby Nun",
          "Kima Chana or Paneer Butter Masala",
          "Fish Munia",
          "Prawn Malai Curry",
          "Chicken Dopaiza",
          "Mutton Kasha",
          "Chatny",
          "Papad",
          "4 types of salads",
        ],
        price: 400,
      },
      {
        title: "Starter Delight- Non Veg + Veg  ",
        label: "Best Seller",
        image: "/food2.jpg",
        items: [
          "Chicken Reshmi Kebab",
          "Paneer Sashlik",
          "Hakka Chowmein",
          "Veg Manchurian",
          "Butter Baby Nun",
          "Kima Chana or Paneer Butter Masala",
          "Fish Munia",
          "Prawn Malai Curry",
          "Chicken Dopaiza",
          "Mutton Kasha",
          "Chatny",
          "Papad",
          "4 types of salads",
        ],
        price: 200,
      },
      {
        title: "Starter Delight- Non Veg + Veg  ",
        label: "Economic",
        image: "/food2.jpg",
        items: [
          "Chicken Reshmi Kebab",
          "Paneer Sashlik",
          "Hakka Chowmein",
          "Veg Manchurian",
          "Butter Baby Nun",
          "Kima Chana or Paneer Butter Masala",
          "Fish Munia",
          "Prawn Malai Curry",
          "Chicken Dopaiza",
          "Mutton Kasha",
          "Chatny",
          "Papad",
          "4 types of salads",
        ],
        price: 120,
      },
    ],
  },
};

export function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function isValidPhone(phone) {
  const re = /^[0-9]{10}$/;
  return re.test(String(phone));
}
