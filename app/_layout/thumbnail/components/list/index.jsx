'use client';

import { useRef, useState } from 'react';

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
  const [expandedSubProject, setExpandedSubProject] = useState(null);

  const items = thumbnailOptions.map(
    ({ href, title, media, subProjects }, index) => {
      const id = index;
      const hasMedia = media && media.length > 0;
      const hasSubProjects = subProjects && subProjects.length > 0;
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
            if (!hasMedia && !hasSubProjects) {
              handlePointerEnter(id);
              moveItems(clientX, clientY);
            }
            if (hasMedia || hasSubProjects) {
              setExpandedIndex(id);
            }
          }}
          onPointerLeave={({ clientX, clientY }) => {
            if (!hasMedia && !hasSubProjects) {
              handlePointerLeave(id);
              moveItems(clientX, clientY);
            }
            if (hasMedia || hasSubProjects) {
              setExpandedIndex(null);
              setExpandedSubProject(null);
            }
          }}
        >
          <Link
            href={href}
            className='flex items-center justify-between max-lg:flex-wrap'
            passHref
            onClick={
              hasMedia || hasSubProjects ? e => e.preventDefault() : undefined
            }
          >
            <h4
              style={{
                fontSize: 'calc(clamp(3.25em, 7vw, 8em) * 0.75)',
              }}
            >
              {title}
            </h4>
          </Link>

          {/* Sub Projects dropdown */}
          {hasSubProjects && (
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  className='overflow-hidden'
                >
                  <div className='space-y-6 py-8'>
                    {subProjects.map((subProject, subIndex) => (
                      <div
                        key={`sub-project-${subIndex}`}
                        className='border-l border-gray-300 pl-8'
                      >
                        <button
                          onClick={() =>
                            setExpandedSubProject(
                              expandedSubProject === subIndex ? null : subIndex,
                            )
                          }
                          className='text-lg font-semibold transition-opacity hover:opacity-70'
                        >
                          {subProject.title}
                        </button>

                        {/* Description and Details */}
                        {subProject.description && (
                          <div className='mt-3 space-y-2'>
                            <p className='text-sm leading-relaxed text-gray-700'>
                              {subProject.description}
                            </p>
                            {subProject.details && (
                              <p className='text-xs text-gray-500'>
                                {subProject.details}
                              </p>
                            )}
                          </div>
                        )}

                        {/* Sub Project Media */}
                        <AnimatePresence>
                          {expandedSubProject === subIndex &&
                            subProject.media && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.3,
                                  ease: [0.76, 0, 0.24, 1],
                                }}
                                className='mt-4'
                              >
                                <div className='grid grid-cols-3 gap-4'>
                                  {subProject.media.map((item, itemIndex) => (
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
                                          className='size-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110'
                                          onMouseEnter={e => {
                                            e.currentTarget.muted = false;
                                            e.currentTarget.play();
                                          }}
                                          onMouseLeave={e => {
                                            e.currentTarget.muted = true;
                                          }}
                                        />
                                      ) : (
                                        <Image
                                          src={item.src}
                                          alt={`${subProject.title} media ${itemIndex + 1}`}
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
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {/* Media dropdown (for items without sub-projects) */}
          {hasMedia && !hasSubProjects && (
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
                            className='size-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110'
                            onMouseEnter={e => {
                              e.currentTarget.muted = false;
                              e.currentTarget.play();
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.muted = true;
                            }}
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
    },
  );

  return <ul className='group'>{items}</ul>;
}
