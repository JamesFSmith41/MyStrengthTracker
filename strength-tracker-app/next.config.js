/** @type {import('next').NextConfig} */
/** @type {import('tailwindcss').Config} */

const nextConfig = {}

module.exports =  {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/dashboard',
          permanent: true,
        },
      ]
    },

  }
