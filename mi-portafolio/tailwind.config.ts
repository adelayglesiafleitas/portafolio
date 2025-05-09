import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // Aquí puedes extender la configuración con colores, fuentes, etc.
    },
  },
  plugins: [],
}

export default config
