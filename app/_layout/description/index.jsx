'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// ─── Brand SVG Icons ──────────────────────────────────────────────────────────

const CapCutIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48' fill='none'>
    <image href='/capcut.png' x='0' y='0' width='48' height='48' />
  </svg>
);

const LightroomIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48'>
    <image href='/photoshop-lightroom.png' x='0' y='0' width='48' height='48' />
  </svg>
);

const PhotoshopIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48'>
    <image href='/photoshop.png' x='0' y='0' width='48' height='48' />
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48' fill='none'>
    <image href='/figma.png' x='0' y='0' width='48' height='48' />
  </svg>
);

const CanvaIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48' fill='none'>
    <image href='/canva.png' x='0' y='0' width='48' height='48' />
  </svg>
);

const SnapseedIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48' fill='none'>
    <image href='/snapseed.png' x='0' y='0' width='48' height='48' />
  </svg>
);

const VNEditorIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48' fill='none'>
    <image href='/vneditor.png' x='0' y='0' width='48' height='48' />
  </svg>
);

const AlightMotionIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48' fill='none'>
    <image href='/alight.png' x='0' y='0' width='48' height='48' />
  </svg>
);

const PremiereIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48'>
    <image href='/premiere-pro.png' x='0' y='0' width='48' height='48' />
  </svg>
);

const AfterEffectsIcon = () => (
  <svg viewBox='0 0 48 48' width='48' height='48'>
    <image href='/after-effects.png' x='0' y='0' width='48' height='48' />
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
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </article>
  );
}
