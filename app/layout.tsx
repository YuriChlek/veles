import React from "react";
import type {Metadata} from "next";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
    title: "Veles",
};

const roboto = Roboto(
    {
        weight: ['300', '400', '500', '700'],
        subsets: ['latin'],
        display: 'swap',
        style: ['normal', 'italic'],
    }
)

const RootLayout = ({
                        children,
                    }: Readonly<{
    children: React.ReactNode;
}>) => {
    const locale = "en"
    return (
        <html lang={locale} style={{"fontSize": "62.5%"}}>
        <body className={roboto.className} data-attr="test">
            {children}
        </body>
        </html>
    );
}

export default RootLayout;
