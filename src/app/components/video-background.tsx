'use client'

import { useEffect, useState } from 'react';

const VideoBackground: React.FC = () => {
    const VIDEOS: Record<number, string> = {
        0: '/videos/purple-stars.mp4',
        1: '/videos/purple-smoke.mp4'
    };

    const [currentVideo, setCurrentVideo] = useState(VIDEOS[0]);
    const [videoNumber, setVideoNumber] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const decreasingOpacity = 1 - ((scrollTop / maxScroll) * 2);
            const increasingOpacity = decreasingOpacity * -1;
            

            // Determine when to switch to the next video
            if (decreasingOpacity < 0.1) {
                setVideoNumber(1);
            } else if (increasingOpacity < 0.1) {
                setVideoNumber(0);
            }

            const video = document.querySelector('video');
            if (video) {
                // Apply opacity based on videoNumber
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
    }, [videoNumber]); // Effect depends on videoNumber

    useEffect(() => {
        setCurrentVideo(VIDEOS[videoNumber]); // Update currentVideo when videoNumber changes
    }, [videoNumber]); // Effect depends on videoNumber

    return (
        <video
            autoPlay
            muted
            loop
            className="fixed right-0 bottom-0 min-w-full min-h-full z-[-1] object-cover"
            data-video="your-custom-data"
            key={currentVideo} // Ensure React re-renders the video element when src changes
        >
            <source src={currentVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoBackground;







