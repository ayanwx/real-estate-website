// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                    Outfit: true,
                    "Ubuntu+Mono": true,
                },
            },
        ],
    ],
    app: {
        head: {
            title: "AyanW's Nuxt Template",
            charset: "utf8",
            viewport: "width=device-width, initial-scale=1",
            htmlAttrs: { lang: "en" },
            meta: [{ name: "darkreader-lock" }],
        },
    },
});
