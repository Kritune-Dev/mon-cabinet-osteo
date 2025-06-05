module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#E8D5CC',
        card: '#FDFFF9',
        primary: '#2C3E3E',
        accent: '#D98C55',
        footer: '#F4ECE7',
        text: '#1F1F1F',
        muted: '#4F4F4F',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        serif: ['"Lora"', 'serif'],
      },
    },
  },
  plugins: [],
}
