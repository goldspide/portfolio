import createClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: `ee9ovqji`,
    dataset:'production',
    apiVersion:'2023-08-27',
    useCdn:true,
    token:process.env.REACT__APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);