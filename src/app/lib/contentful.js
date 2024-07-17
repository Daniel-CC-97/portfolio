import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export const getVideos = async () => {
    const response = await client.getEntries({
      content_type: 'video',
      order: 'fields.order'
    });
  
    return response.items;
  };

