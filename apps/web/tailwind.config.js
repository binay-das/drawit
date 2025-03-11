/** @type {import('tailwindcss').Config} */
import config from "@repo/tailwind-config/tailwindConfig"
export default {
  ...config,
  content: [
    "../app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
}
// module.exports = require('@repo/tailwind-config/tailwindConfig');