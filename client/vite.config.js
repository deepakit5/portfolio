import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from '@vitejs/plugin-react-refresh';
// import dotenv from 'dotenv';

// dotenv.config();

// Use process.env.REACT_APP_API_URL here
// const BASE_URL = process.env.REACT_APP_BASE_URL;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),reactRefresh()],
  // define: {
  //   // Expose the variable to your code
  //   'process.env.REACT_APP_API_URL': JSON.stringify(BASE_URL),
  // },

  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },

  server: {
    host: '0.0.0.0',
  },
});



