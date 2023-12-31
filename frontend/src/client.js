import createClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    projectId: `ee9ovqji`,
    dataset:'production',
    apiVersion:'2023-08-27',
    useCdn:true,
    token:'sk2wfzGar2yLvQOVuMx8MdFuNxngPLcsmir0KJd39LjvdH2dK9FHblTtFM6dWzuHkRwuHggtpRugNUGv1FUsMuBYcl1vbF2iqLOb2Vkqzmn9sRhmDb6UAYwNVjsRUo87gmeULSnzGHdKPNZszlClTHoGpgP7BbstiPAKpSS7zXr15QGhN5Eb',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);