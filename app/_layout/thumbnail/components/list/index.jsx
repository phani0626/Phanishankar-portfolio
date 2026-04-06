'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { thumbnailOptions } from '@/data';

/**
 * @param {Object} props
 * @param {(index: number) => void} props.handlePointerEnter
 * @param {(index: number) => void} props.handlePointerLeave
 * @param {(x: number, y: number) => void} props.moveItems
 */
export function ThumbnailList({
  handlePointerEnter,
  handlePointerLeave,
  moveItems,
}) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const items = thumbnailOptions.map(({ href, title, media }, index) => {
    const id = index;
    const hasMedia = media && media.length > 0;
    const isExpanded = expandedIndex === id;

    return (
      <li
        key={`thumbnail-list-${id}`}
        className='border-t border-solid transition-all last-of-type:border-b group-hover:opacity-90'
        style={{
          paddingInline: 'calc(clamp(1em,3vw,4em) * 2)',
          paddingBlock: 'clamp(1em,3vw,4em)',
        }}
        onPointerEnter={({ clientX, clientY }) => {
          if (!hasMedia) {
            handlePointerEnter(id);
            moveItems(clientX, clientY);
          }
          if (hasMedia) {
            setExpandedIndex(id);
          }
        }}
        onPointerLeave={({ clientX, clientY }) => {
          if (!hasMedia) {
            handlePointerLeave(id);
            moveItems(clientX, clientY);
          }
          if (hasMedia) {
            setExpandedIndex(null);
          }
        }}
      >
        <Link
          href={href}
          className='flex items-center justify-between max-lg:flex-wrap'
          passHref
          onClick={hasMedia ? e => e.preventDefault() : undefined}
        >
          <h4
            style={{
              fontSize: 'calc(clamp(3.25em, 7vw, 8em) * 0.75)',
            }}
          >
            {title}
          </h4>
        </Link>

        {/* Media dropdown */}
        {hasMedia && (
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className='overflow-hidden'
              >
                <div className='grid grid-cols-3 gap-4 pb-4 pt-8'>
                  {media.map((item, itemIndex) => (
                    <motion.div
                      key={item.src + itemIndex}
                      className='relative aspect-[4/3] overflow-hidden rounded-xl'
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: itemIndex * 0.08,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                    >
                      {item.type === 'video' ? (
                        <video
                          src={item.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className='size-full object-cover transition-transform duration-500 hover:scale-110'
                        />
                      ) : (
                        <Image
                          src={item.src}
                          alt={`Media item ${itemIndex + 1}`}
                          fill
                          className='object-cover transition-transform duration-500 hover:scale-110'
                          sizes='(max-width: 768px) 100vw, 33vw'
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </li>
    );
  });

  return <ul className='group'>{items}</ul>;
}
