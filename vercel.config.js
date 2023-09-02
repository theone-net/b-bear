module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' https://static.cloudflareinsights.com/; font-src 'self' fonts.googleapis.com fonts.gstatic.com; style-src 'self' fonts.googleapis.com;",
          },
        ],
      },
    ];
  },
};
