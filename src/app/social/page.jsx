import Link from 'next/link';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import { Section } from '@/components/Section';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from '@/components/SocialIcons';

const profiles = [
  {
    name: 'Instagram',
    handle: '@heyitsmintu',
    href: 'https://www.instagram.com/heyitsmintu',
    icon: InstagramIcon,
    stats: ['1K+ followers', '79 posts'],
    description:
      'Short-form reels — relatable comedy, relationship and friendship skits, Telugu/Hinglish humour, and the occasional behind-the-scenes of a developer’s life.',
  },
  {
    name: 'YouTube',
    handle: '@heyitsmintu',
    href: 'https://www.youtube.com/@heyitsmintu',
    icon: YouTubeIcon,
    stats: ['339 subscribers', '3.5K+ views', 'Since 2021'],
    description:
      'Shorts and videos under the MINTU channel — trend-based comedy, “tag your bestfriend” style skits and Telugu entertainment.',
  },
  {
    name: 'GitHub',
    handle: 'mintureddy25',
    href: 'https://github.com/mintureddy25',
    icon: GitHubIcon,
    stats: ['Open-source projects'],
    description:
      'Code for my projects — full-stack apps, real-time systems, automation tools and the reel-making pipeline described below.',
  },
  {
    name: 'LinkedIn',
    handle: 'Sai Teja Reddy Chappeta',
    href: 'https://www.linkedin.com/in/sai-teja-reddy-chappeta-158a3021b/',
    icon: LinkedInIcon,
    stats: ['Professional network'],
    description: 'Work experience, roles and professional updates.',
  },
  {
    name: 'X',
    handle: '@saiteja_reddy25',
    href: 'https://x.com/saiteja_reddy25',
    icon: XIcon,
    stats: ['Thoughts & updates'],
    description: 'Quick thoughts on tech, building things and content.',
  },
];

const videos = [
  { id: 'irsMbkyuZ_Y', title: 'Tag Your Cute Boyfriend' },
  { id: 'izGzrW7IwCQ', title: 'Tag your Bestfriend || That one bestfriend' },
  { id: 'Pn1TqrXswGA', title: 'Low class kanniru Vs High class panneru' },
  { id: 'C6v1JSILnkk', title: 'Us Trend Never Ends' },
  { id: 'AphNMl_6TZ8', title: 'Akalesthundi || Biryani love', short: true },
];

const reelSteps = [
  {
    title: 'Idea & script',
    description:
      'Start from a relatable hook — a trend, a friendship moment or a “90% of people…” style question — and write a tight 20–45 second script with the punchline at the end.',
  },
  {
    title: 'Shoot & voice-over',
    description:
      'Shoot vertical on phone in natural light, or record a Hindi/Telugu/English voice-over. Re-record the first 3 seconds until the hook lands.',
  },
  {
    title: 'Auto transcription',
    description:
      'A Python pipeline runs faster-whisper on the voice track to get word-level timestamps, then aligns the corrected Hinglish text onto those timings.',
  },
  {
    title: 'Animated captions',
    description:
      'Words are grouped into ~4-word chunks and rendered as pop-in captions, with the spoken word highlighted in a contrasting colour so viewers can follow without sound.',
  },
  {
    title: 'Stickers on the beats',
    description:
      'Each narrative beat (shock, love, heartbreak, laughter) pulls a matching anime sticker from the Giphy API and places it on screen at the right moment.',
  },
  {
    title: 'Render & publish',
    description:
      'Frames are drawn with Pillow and piped straight into ffmpeg to produce the final MP4, which goes out as an Instagram Reel and a YouTube Short.',
  },
];

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const metadata = {
  title: 'Social',
  description: 'My social profiles and how I create reels.',
};

export default function Social() {
  return (
    <SimpleLayout
      title="Beyond code — I create content too."
      intro="Alongside full-stack development I make short-form comedy and relatable reels for Instagram and YouTube. Here’s where to find me and how I put my reels together."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {profiles.map((profile) => (
          <Card as="li" key={profile.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <profile.icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-teal-500 dark:fill-zinc-400" />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={profile.href} target="_blank" rel="noopener">
                {profile.name}
              </Card.Link>
            </h2>
            <Card.Eyebrow decorate>{profile.handle}</Card.Eyebrow>
            <Card.Description>{profile.description}</Card.Description>
            <div className="relative z-10 mt-4 flex flex-wrap gap-2">
              {profile.stats.map((stat) => (
                <span
                  key={stat}
                  className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {stat}
                </span>
              ))}
            </div>
            <Card.Cta>Visit profile</Card.Cta>
          </Card>
        ))}
      </ul>

      <div className="mt-24 space-y-20">
        <Section title="Latest on YouTube">
          <ul role="list" className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {videos.map((video) => (
              <li key={video.id}>
                <Link
                  href={
                    video.short
                      ? `https://www.youtube.com/shorts/${video.id}`
                      : `https://www.youtube.com/watch?v=${video.id}`
                  }
                  target="_blank"
                  rel="noopener"
                  className="group block"
                >
                  <div className="aspect-video overflow-hidden rounded-xl bg-zinc-100 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 flex items-center text-sm font-medium text-zinc-800 group-hover:text-teal-500 dark:text-zinc-100">
                    {video.title}
                    <ArrowIcon className="ml-1 h-4 w-4 stroke-current" />
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="How I create reels">
          <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
            <p>
              I built my own reel pipeline in Python so captions, timing and
              stickers are automated and every reel keeps a consistent style.
            </p>
            <ol role="list" className="space-y-8 pt-4">
              {reelSteps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-teal-500/10 text-xs font-semibold text-teal-600 dark:text-teal-400">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                      {step.title}
                    </h3>
                    <p className="mt-1">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="pt-4">
              <span className="font-semibold text-zinc-800 dark:text-zinc-100">
                Stack:
              </span>{' '}
              Python, faster-whisper, Pillow, ffmpeg, Giphy API.
            </p>
          </div>
        </Section>
      </div>
    </SimpleLayout>
  );
}
