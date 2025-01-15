export default {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate", // Disable caching for dynamic files
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              connect-src 'self' http://18.143.79.95 https://fonts.googleapis.com;
              font-src 'self' https://fonts.gstatic.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              script-src 'self' 'unsafe-eval' 'unsafe-inline';
              img-src 'self' data: blob:;
            `.replace(/\s{2,}/g, " "),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/sw.js",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};
