/** @type {import('tailwindcss').Config} */
import config from '../tailwind-config/tailwind.config'
export default {
  ...config,
  content: ["./src/**/*.{tsx}"]
}
