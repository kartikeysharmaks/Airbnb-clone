/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['upload.wikimedia.org', 'www.jsonkeeper.com', 'a0.muscache.com', 'links.papareact.com'],
    },
    env: {
        mapbox_key: 'pk.eyJ1Ijoia2FydGlrZXlzaGFybWFrcyIsImEiOiJjbDJia2FyazkwZW5iM2VvYXppZ2xwdzZvIn0.cU_Physs2jNcQAT4N1OVdw',
    }
};