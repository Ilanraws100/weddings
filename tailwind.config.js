/** @type {import('tailwindcss').Config} */
export const content = [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",

      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}"
];
export const theme = {
  extend: {
    colors: {
      primary: "#CC2D4A", // Custom primary color
      secondary: "#F4E8D6", // Custom secondary color
      tertiary: "#BA2943", // Custom tertiary color
    },
  },
};
export const plugins = [];

// export const mode = 'jit'; // Enable JIT mode
