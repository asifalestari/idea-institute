import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── URL Redirects — WordPress → Next.js ─────────────────────────
  // Sesuai docs/url-redirects.md
  async redirects() {
    return [
      // WordPress index.php paths → new Next.js routes
      {
        source: '/index.php/studi-keluar-negeri/:path*',
        destination: '/study-work/studi-keluar-negeri',
        permanent: true,
      },
      {
        source: '/index.php/studi-sambil-kerja/:path*',
        destination: '/study-work/studi-sambil-kerja',
        permanent: true,
      },
      {
        source: '/index.php/kuliah-di-australia/:path*',
        destination: '/study-work/kuliah-di-australia',
        permanent: true,
      },
      {
        source: '/index.php/kuliah-di-german/:path*',
        destination: '/study-work/kuliah-di-german',
        permanent: true,
      },
      // Legacy WordPress slug paths (without /index.php/)
      {
        source: '/studi-keluar-negeri',
        destination: '/study-work/studi-keluar-negeri',
        permanent: true,
      },
      {
        source: '/studi-sambil-kerja',
        destination: '/study-work/studi-sambil-kerja',
        permanent: true,
      },
      {
        source: '/kuliah-di-australia',
        destination: '/study-work/kuliah-di-australia',
        permanent: true,
      },
      {
        source: '/kuliah-di-german',
        destination: '/study-work/kuliah-di-german',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
