'use client'

import { useEffect, useState } from 'react';
import { getVideos } from '@/app/lib/contentful';

const VideoBackground: React.FC = () => {
    const [videoNumber, setVideoNumber] = useState(0);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const allVideos = await getVideos();
                setVideos(allVideos);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, []);

    // Scroll to top when videos state changes or component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [videos]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const decreasingOpacity = 1 - ((scrollTop / maxScroll) * 2);
            const increasingOpacity = decreasingOpacity * -1;

            if (decreasingOpacity < 0.1) {
                setVideoNumber(1);
            } else if (increasingOpacity < 0.1) {
                setVideoNumber(0);
            }

            const video = document.querySelector('video');
            if (video) {
                if (videoNumber % 2 === 0) {
                    video.style.opacity = decreasingOpacity.toString();
                } else {
                    video.style.opacity = increasingOpacity.toString();
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [videoNumber]);

    return (
        <>
            {videos.length > 0 && (
                <video
                    autoPlay
                    muted
                    loop
                    className="fixed right-0 bottom-0 min-w-full min-h-full z-[-1] object-cover"
                    key={videos[videoNumber].fields.video.fields.file.url}
                >
                    <source src={videos[videoNumber].fields.video.fields.file.url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </>
    );
};

export default VideoBackground;

