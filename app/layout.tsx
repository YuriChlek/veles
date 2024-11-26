import React from "react";
import { Mulish } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const mulish = Mulish({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    style: ["normal", "italic"],
});

const RootLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} style={{ fontSize: "62.5%" }}>
            <body className={mulish.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
};

export default RootLayout;
