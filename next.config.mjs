/** @type {import('next').NextConfig} */
import path from "node:path";

const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            use: {
                loader: 'graphql-tag/loader',
            },
        });

        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'web/styles')],
        additionalData: `
            @import "base/variables.scss";
        `,
    }
};

export default nextConfig;
