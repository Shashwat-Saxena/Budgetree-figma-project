/** @type {import('next').NextConfig} */
import { output } from 'framer-motion/client'
import type { NextConfig } from 'next'
const nextConfig = {
  output: 'export',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig
