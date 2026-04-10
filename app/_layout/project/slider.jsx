'use client';

import { useRef } from 'react';

import Image from 'next/image';
import { CldImage, CldVideoPlayer } from 'next-cloudinary';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 */
export function ProjectSlider({ type, source }) {
  const videoRef = useRef(null);

  const handleVideoMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  const handleVideoMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  // Check if source is a local image path (starts with /)
  const isLocalImage = type === 'image' && source.startsWith('/');

  const image =
    type === 'image' ? (
      isLocalImage ? (
        <Image
          src={source}
          className='object-cover'
          fill={true}
          alt='project items'
          sizes='(max-width: 768px) 100vw, 25vw'
        />
      ) : (
        <CldImage
          src={source}
          className='object-cover'
          fill={true}
          alt='project items'
        />
      )
    ) : null;
  // Check if source is a local video path (starts with /)
  const isLocalVideo = type === 'video' && source.startsWith('/');

  const video =
    type === 'video' ? (
      isLocalVideo ? (
        <video
          ref={videoRef}
          src={source}
          loop
          controls={false}
          muted
          autoPlay
          className='size-full cursor-pointer object-cover'
          onMouseEnter={handleVideoMouseEnter}
          onMouseLeave={handleVideoMouseLeave}
        />
      ) : (
        <div
          onMouseEnter={handleVideoMouseEnter}
          onMouseLeave={handleVideoMouseLeave}
        >
          <CldVideoPlayer
            src={source}
            loop={true}
            controls={false}
            muted={true}
            autoPlay='always'
            width='100%'
            height='100%'
            className='!static !bg-transparent'
          />
        </div>
      )
    ) : null;

  return (
    <Center
      className='relative w-1/4 rounded'
      style={{
        minWidth: '150px',
        height: '20vw',
      }}
    >
      {image}
      {video}
    </Center>
  );
}
