'use client';
/* eslint-disable import/order */

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import Image from 'next/image';
import { CldImage } from 'next-cloudinary';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

const roles = [
  'Content Creator',
  'Editor',
  'Graphic Designer',
  'Traveler',
  'Fitness Trainer',
  'Videographer',
  'Photographer',
  'UI/UX Designer',
];

export function Header() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(current => (current + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-secondary-foreground text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <Image
        src='/Image1.png'
        alt='Portfolio background'
        fill
        className='object-cover'
        sizes='100vw'
        priority
      />

      <div className='absolute inset-0 bg-black/20' />

      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(9em,12vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Phani Shankar
                <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-48 md:text-right'>
            <div className='mb-4 md:mb-20'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(3em,3vw,5em)] leading-tight'>
              <span className='block'> I&apos;m Freelance </span>
              <span className='relative block min-h-[6.5rem] overflow-hidden'>
                <AnimatePresence mode='wait'>
                  <motion.span
                    key={roleIndex}
                    className='absolute inset-0 block w-full text-right leading-none'
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
