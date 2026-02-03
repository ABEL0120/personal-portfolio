/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0c0a09", // Stone 950 (Warm Black)
          secondary: "#1c1917", // Stone 900
        },
        primary: {
          DEFAULT: "#d4a373", // Bronze/Latte (Warm - Action)
          hover: "#c59263", // Darker Bronze
          dim: "rgba(212, 163, 115, 0.1)",
        },
        secondary: {
          DEFAULT: "#e6ccb2", // Cream/Beige (Info/Accent)
          hover: "#dcc0a5",
          dim: "rgba(230, 204, 178, 0.1)",
        },
        text: {
          primary: "#fafaf9", // Stone 50 (Warm White)
          secondary: "#a8a29e", // Stone 400
        },
        border: {
          DEFAULT: "#292524", // Stone 800
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #d4a373, #c59263)",
      },
      boxShadow: {
        "primary-glow": "0 0 20px rgba(212, 163, 115, 0.2)", // Soft Bronze Glow
        "secondary-glow": "0 0 20px rgba(230, 204, 178, 0.15)", // Soft Beige Glow
      },
    },
  },
  plugins: [],
};
