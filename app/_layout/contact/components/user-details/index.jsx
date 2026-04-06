'use client';

import { motion } from 'framer-motion';
import {
  ArrowDownLeft,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { MagneticButton } from '@/components';

import { Container, ImageWrapper, MainTitle, Row } from './index.styled';

const social = [
  {
    name: 'LinkedIn',
    handle: 'linkedin.com/in/phani0626',
    url: 'https://www.linkedin.com/in/phani0626',
    Icon: Linkedin,
    color: '#0A66C2',
    bg: 'transparent',
  },
  {
    name: 'Instagram',
    handle: '@phanifilms__',
    url: 'https://www.instagram.com/phanifilms__?igsh=a3JvMXBrd3NpOTh0',
    Icon: Instagram,
    color: '#E1306C',
    bg: 'transparent',
  },
  {
    name: 'WhatsApp',
    handle: '+91 7702133567',
    url: 'https://wa.me/917702133567',
    Icon: MessageCircle,
    color: '#25D366',
    bg: 'transparent',
  },
  {
    name: 'Gmail',
    handle: 'phani.photography14@gmail.com',
    url: 'mailto:phani.photography14@gmail.com',
    Icon: Mail,
    color: '#EA4335',
    bg: 'transparent',
  },
];

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <Container>
      <Row>
        <div className='flex items-center gap-8'>
          <ImageWrapper>
            <Image
              src='/profilepic.jpeg'
              className='rounded-full object-cover'
              fill={true}
              sizes='(max-width: 768px) 100vw, 33vw'
              alt='Phani Shankar'
            />
          </ImageWrapper>
          <MainTitle>Let’s work</MainTitle>
        </div>
        <div className='flex items-center justify-between'>
          <MainTitle>together</MainTitle>
          <div>
            <ArrowDownLeft size={28} strokeWidth={1.25} />
          </div>
        </div>
      </Row>

      <Row>
        <div className='relative w-full'>
          <div className='h-px bg-muted-foreground' />
          <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
            <motion.div style={{ x: transformX }}>
              <a
                href='https://wa.me/917702133567'
                target='_blank'
                rel='noreferrer'
              >
                <MagneticButton variant='primary' size='lg'>
                  Get in touch
                </MagneticButton>
              </a>
            </motion.div>
          </div>
        </div>
      </Row>

      <Row>
        <div className='mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {social.map(({ name, handle, url, Icon, color, bg }) => (
            <Link
              key={name}
              href={url}
              target='_blank'
              passHref
              className='w-full'
            >
              <motion.div
                className='flex w-full cursor-pointer items-center gap-4 rounded-2xl border border-background/20 p-4'
                style={{ backgroundColor: bg }}
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Icon circle */}
                <div className='flex size-12 shrink-0 items-center justify-center rounded-full border border-background/20 text-background'>
                  <Icon size={22} currentColor />
                </div>

                {/* Text */}
                <div className='overflow-hidden text-background'>
                  <p className='text-xs font-semibold uppercase tracking-wide text-background/50'>
                    {name}
                  </p>
                  <p className='truncate text-sm font-bold text-background'>
                    {handle}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Row>
    </Container>
  );
}
