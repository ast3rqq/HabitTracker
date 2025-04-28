module.exports = {
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  images: {
    domains: ['example.com'], // Add your image domains here
  },
};