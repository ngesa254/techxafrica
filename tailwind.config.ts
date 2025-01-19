// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;


// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//         'google-blue': '#1a73e8',
//         'google-blue-hover': '#1557b0',
//       },
//       spacing: {
//         '18': '4.5rem',
//       },
//       borderWidth: {
//         '6': '6px',
//       },
//       transitionDuration: {
//         '250': '250ms',
//       },
//       maxWidth: {
//         '7xl': '80rem',
//       },
//       fontSize: {
//         '7xl': ['4.5rem', { lineHeight: '1.1' }],
//       },
//       boxShadow: {
//         'button': '0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)',
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;



import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'border-pulse': 'borderPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        borderPulse: {
          '0%, 100%': { borderColor: 'rgba(103, 232, 249, 0.1)' },
          '50%': { borderColor: 'rgba(103, 232, 249, 1)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;