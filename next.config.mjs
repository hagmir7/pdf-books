/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Add Owl Carousel to resolve.alias
        config.resolve.alias['owl.carousel'] = 'owl.carousel';

        return config;
    },
};

export default nextConfig;
