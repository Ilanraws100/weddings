/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      primary: "#CC2D4A", // Custom primary color
      secondary: "#F4E8D6", // Custom secondary color
      tertiary: "#BA2943", // Custom tertiary color
      violet1: "#BC1A6E",
      linkColor: "#063755",
    },
    fontFamily: {
      lily: ["'Lily Script One'", "cursive"],
    },
    backgroundImage: {
     // "gray-to-white-gradient": "linear-gradient(to top, #f3f3f3, white)",
    },
  },
};
export const plugins = [];

// export const mode = 'jit'; // Enable JIT mode
