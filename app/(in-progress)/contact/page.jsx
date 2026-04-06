import { InProgress } from '@/components';
import { Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact',
  description:
    'I’m a passionate Content Creator specializing in travel, photography, and cinematic video editing.I create aesthetic visual content that focuses on storytelling, mood, and engagement. From capturing real travel experiences to editing cinematic reels, I aim to turn simple moments into impactful visuals.Skilled in tools like Lightroom, and Canva, I focus on creating content that connects with audiences and builds a strong visual identity.Currently exploring opportunities in content creation, social media, and visual storytelling. © Code by Phani',
};

export default function Contact() {
  return (
    <Transition>
      <InProgress>Contact Page</InProgress>
    </Transition>
  );
}
