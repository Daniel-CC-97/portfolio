import { EntrySkeletonType, createClient, Entry } from 'contentful';
import { VideoType } from '../helpers/types'; // Adjust the path according to your project structure

interface VideoEntrySkeleton extends EntrySkeletonType {
  fields: VideoType;
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
});

export const getVideoById = async (id: string): Promise<VideoType | null> => {
  try {
    const entry: Entry<VideoEntrySkeleton> = await client.getEntry<VideoEntrySkeleton>(id);
    
    if (entry.fields) {
      const fields = {
        title: entry.fields.title,
        video: entry.fields.video,
        order: entry.fields.order,
      } as unknown as VideoType;

      return fields;
    }

    return null;
  } catch (error) {
    console.error(`Error fetching video with ID ${id}:`, error);
    return null;
  }
};
