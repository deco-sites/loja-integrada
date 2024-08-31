import daisyui from "daisyui";
import { transform } from "deco/deps.ts";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
        slidingFast: "slidingFast 20s linear infinite",
        "fade-in": "fade-in 2s ease-in-out",
        "pop-up": "pop-up 1s ease-in-out",
        "fade-up": "fade-up 1s ease-in-out",
      },
      keyframes: {
        sliding: {
          "0%": { left: 0 },
          "100%": { transform: "translateX(-50%)" },
        },
        slidingFast: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "pop-up": {
          "0%": { transform: "scale(90%)" },
          "100%": { transform: "scale(100%)" },
        },
        "fade-up": {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
      },
      boxShadow: {
        "spreaded": "0px 5.563px 31.72px 0px rgba(0, 72, 82, 0.09)",
      },
    },
  },
};
