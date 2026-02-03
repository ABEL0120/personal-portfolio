/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#ffffff", // Pure White
          secondary: "#f5f5f4", // Stone 100 (Light Gray)
        },
        primary: {
          DEFAULT: "#e11d48", // Rose 600 (Main Red)
          hover: "#be123c", // Rose 700
          dim: "rgba(225, 29, 72, 0.05)",
        },
        secondary: {
          DEFAULT: "#fb7185", // Rose 400 (Soft Pink)
          hover: "#f43f5e", // Rose 500
          dim: "rgba(251, 113, 133, 0.05)",
        },
        text: {
          primary: "#0f172a", // Slate 900 (Dark)
          secondary: "#475569", // Slate 600 (Medium)
        },
        border: {
          DEFAULT: "#e2e8f0", // Slate 200
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #e11d48, #be123c)",
      },
      boxShadow: {
        "primary-glow": "0 0 25px rgba(225, 29, 72, 0.25)",
        "secondary-glow": "0 0 25px rgba(251, 113, 133, 0.2)",
      },
      animation: {
        "gradient-xy": "gradient-xy 6s ease infinite",
        "gradient-x": "gradient-x 6s ease infinite",
      },
      keyframes: {
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
