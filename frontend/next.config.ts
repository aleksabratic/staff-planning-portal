import type { NextConfig } from 'next';

/**
 * Next.js configuration for the Security Planner frontend.
 * Feel free to extend this configuration when additional features are added.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;
