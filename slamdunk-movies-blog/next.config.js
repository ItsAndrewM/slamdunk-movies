module.exports = {
  images: {
    domains: ["aiptcomics.com"],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};
