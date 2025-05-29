import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import plasmo from "plasmo/vite"

export default defineConfig({
  plugins: [plasmo(), react()]
}) 