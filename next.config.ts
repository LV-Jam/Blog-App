import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''};
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  // webpack: (config) => {
  //   const entry = config.entry;
  //   config.entry = async () => {
  //     const entries = await entry();
  //     if (entries["main-app"] && !entries["main-app"].includes("./src/polyfills.ts")) {
  //       entries["main-app"].unshift("./src/polyfills.ts");
  //     }
  //     return entries;
  //   };
  //   return config;
  // },
  images: { remotePatterns: [{ protocol: 'https', hostname: '**' }] },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },
  reactCompiler: true,
};

export default nextConfig;
