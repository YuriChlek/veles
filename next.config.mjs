/** @type {import('next').NextConfig} */

import path from "node:path";
import { fileURLToPath } from 'node:url';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
            @import "admin/variables.scss";
        `,
    }
};

export default withNextIntl(nextConfig);
