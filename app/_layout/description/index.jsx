'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// ─── Brand SVG Icons ──────────────────────────────────────────────────────────

const CapCutIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48' fill='none'>
    <rect width='48' height='48' rx='12' fill='#000' />
    <circle cx='17' cy='20' r='3' fill='#fff' />
    <circle cx='17' cy='28' r='3' fill='#fff' />
    <line
      x1='17'
      y1='20'
      x2='33'
      y2='14'
      stroke='#fff'
      strokeWidth='2.5'
      strokeLinecap='round'
    />
    <line
      x1='17'
      y1='28'
      x2='33'
      y2='34'
      stroke='#fff'
      strokeWidth='2.5'
      strokeLinecap='round'
    />
  </svg>
);

const LightroomIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48'>
    <rect width='48' height='48' rx='10' fill='#31A8FF' />
    <text
      x='8'
      y='34'
      fontFamily='Arial Black, sans-serif'
      fontWeight='900'
      fontSize='22'
      fill='#001E36'
    >
      Lr
    </text>
  </svg>
);

const PhotoshopIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48'>
    <rect width='48' height='48' rx='10' fill='#31A8FF' />
    <text
      x='5'
      y='34'
      fontFamily='Arial Black, sans-serif'
      fontWeight='900'
      fontSize='22'
      fill='#001E36'
    >
      Ps
    </text>
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48' fill='none'>
    <rect width='48' height='48' rx='10' fill='#1E1E1E' />
    <path d='M19 38a5 5 0 005-5v-5h-5a5 5 0 000 10z' fill='#0ACF83' />
    <path d='M14 24a5 5 0 015-5h5v10h-5a5 5 0 01-5-5z' fill='#A259FF' />
    <path d='M14 14a5 5 0 015-5h5v10h-5a5 5 0 01-5-5z' fill='#F24E1E' />
    <path d='M24 9h5a5 5 0 010 10h-5V9z' fill='#FF7262' />
    <path d='M34 24a5 5 0 11-10 0 5 5 0 0110 0z' fill='#1ABCFE' />
  </svg>
);

const CanvaIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48' fill='none'>
    <rect width='48' height='48' rx='24' fill='#7D2AE8' />
    <text
      x='10'
      y='33'
      fontFamily='Georgia, serif'
      fontWeight='900'
      fontSize='26'
      fill='#fff'
    >
      C
    </text>
  </svg>
);

const SnapseedIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48' fill='none'>
    <rect width='48' height='48' rx='12' fill='#4285F4' />
    <circle cx='24' cy='24' r='9' fill='none' stroke='#fff' strokeWidth='3' />
    <circle cx='24' cy='24' r='4' fill='#fff' />
    <line
      x1='24'
      y1='10'
      x2='24'
      y2='14'
      stroke='#fff'
      strokeWidth='2.5'
      strokeLinecap='round'
    />
    <line
      x1='24'
      y1='34'
      x2='24'
      y2='38'
      stroke='#fff'
      strokeWidth='2.5'
      strokeLinecap='round'
    />
    <line
      x1='10'
      y1='24'
      x2='14'
      y2='24'
      stroke='#fff'
      strokeWidth='2.5'
      strokeLinecap='round'
    />
    <line
      x1='34'
      y1='24'
      x2='38'
      y2='24'
      stroke='#fff'
      strokeWidth='2.5'
      strokeLinecap='round'
    />
  </svg>
);

const VNEditorIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48' fill='none'>
    <rect width='48' height='48' rx='12' fill='#FF6B35' />
    <text
      x='8'
      y='34'
      fontFamily='Arial Black, sans-serif'
      fontWeight='900'
      fontSize='20'
      fill='#fff'
    >
      VN
    </text>
  </svg>
);

const AlightMotionIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48' fill='none'>
    <rect width='48' height='48' rx='12' fill='#1A1A2E' />
    <polygon points='24,10 34,36 28,36 24,26 20,36 14,36' fill='#E94560' />
    <line x1='18' y1='30' x2='30' y2='30' stroke='#E94560' strokeWidth='2.5' />
  </svg>
);

const PremiereIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48'>
    <rect width='48' height='48' rx='10' fill='#9999FF' />
    <text
      x='5'
      y='34'
      fontFamily='Arial Black, sans-serif'
      fontWeight='900'
      fontSize='22'
      fill='#0D0032'
    >
      Pr
    </text>
  </svg>
);

const AfterEffectsIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48'>
    <rect width='48' height='48' rx='10' fill='#9999FF' />
    <text
      x='5'
      y='34'
      fontFamily='Arial Black, sans-serif'
      fontWeight='900'
      fontSize='22'
      fill='#0D0032'
    >
      Ae
    </text>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const apps = [
  { name: 'CapCut', url: 'https://www.capcut.com', Icon: CapCutIcon },
  {
    name: 'Lightroom',
    url: 'https://lightroom.adobe.com',
    Icon: LightroomIcon,
  },
  {
    name: 'Photoshop',
    url: 'https://www.adobe.com/products/photoshop',
    Icon: PhotoshopIcon,
  },
  { name: 'Figma', url: 'https://www.figma.com', Icon: FigmaIcon },
  { name: 'Canva', url: 'https://www.canva.com', Icon: CanvaIcon },
  { name: 'Snapseed', url: 'https://snapseed.online', Icon: SnapseedIcon },
  { name: 'VN Editor', url: 'https://www.vn.movie', Icon: VNEditorIcon },
  {
    name: 'Alight Motion',
    url: 'https://alightcreative.com',
    Icon: AlightMotionIcon,
  },
  {
    name: 'Premiere Pro',
    url: 'https://www.adobe.com/products/premiere',
    Icon: PremiereIcon,
  },
  {
    name: 'After Effects',
    url: 'https://www.adobe.com/products/aftereffects',
    Icon: AfterEffectsIcon,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function Description() {
  return (
    <article id='about' className='container relative pt-10'>
      {/* TEXT + IMAGE */}
      <div className='mt-4'>
        <div className='grid items-start gap-12 lg:grid-cols-[1.2fr_1.5fr]'>
          {/* LEFT COLUMN: About Me + Skills */}
          <div className='flex flex-col gap-12'>
            {/* ABOUT ME TEXT */}
            <div className='text-2xl font-semibold leading-[2.6rem] text-black lg:text-2xl lg:leading-[2.2rem]'>
              <h2 className='mb-6 text-4xl font-bold text-black lg:text-5xl'>
                About me
              </h2>
              I&apos;m a passionate Content Creator specializing in travel,
              photography, and cinematic video editing. I create aesthetic
              visual content focused on storytelling, mood, and engagement. From
              capturing real travel experiences to editing cinematic reels, I
              transform simple moments into impactful visuals. Skilled in
              Lightroom, Canva, and Adobe tools, I build content that connects
              and creates a strong visual identity.
            </div>

            {/* SKILLS */}
            <div>
              <h3 className='mb-6 text-3xl font-bold text-black'>Skills</h3>
              <div className='flex flex-wrap gap-x-8 gap-y-6'>
                {apps.map(({ name, url, Icon }) => (
                  <Link key={name} href={url} target='_blank'>
                    <motion.div
                      className='flex cursor-pointer flex-col items-center gap-2'
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Icon />
                      <p className='text-center text-xs font-semibold text-black'>
                        {name}
                      </p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Larger Image */}
          <motion.div
            className='relative mt-4 h-[45rem] w-full overflow-hidden rounded-3xl border border-white/10'
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src='/Image2.png'
              alt='Content creation'
              fill
              className='object-cover'
              priority
            />
          </motion.div>
        </div>
      </div>
    </article>
  );
}
