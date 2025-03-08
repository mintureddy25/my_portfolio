import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons';
import portraitImage from '@/images/portrait.jpg';

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export const metadata = {
  title: 'About',
  description: 'I’m Sai Teja Reddy Chappeta, I live in Hyderabad City.',
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Sai Teja Reddy Chappeta, I live in Hyderabad City.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I am a seasoned Full Stack Developer with a robust background in
              designing and optimizing complex applications. I have worked on a
              variety of projects, utilizing technologies such as React,
              Node.js, AWS, and Elasticsearch to deliver high-impact results. My
              expertise includes developing and integrating advanced features
              such as analytics, chapter management, and automated systems.
            </p>
            <p>
              At Metageeks Technologies, I contributed to the development of
              decentralized applications (dApps) and the integration of
              blockchain-based payment systems. I worked extensively with
              Ethereum, Node.js, MongoDB, and Next.js to build secure and
              efficient Web3 solutions, enhancing the company’s capabilities in
              blockchain technology.
            </p>
            <p>
              Previously, at Hubhopper in Delhi, I focused on enhancing podcast
              platforms by integrating advanced features such as analytics,
              chapter management, and automated email systems. I was responsible
              for optimizing frontend and backend integrations, as well as
              implementing cloud storage solutions, all while ensuring a
              seamless user experience.
            </p>
            <p>
              At Cognizant Technology Solutions in Chennai, I led the
              development of an employee management website, including the
              creation of a leave portal and an RTO tracking feature. My role
              involved handling end-to-end project development and system
              integration, with a strong focus on user authentication,
              third-party API integrations, and role-based access control.
            </p>
            <p>
              During my internship at Cognizant, I gained hands-on experience in
              full-stack development, where I utilized AngularJS, HTML, CSS, and
              Java Spring Boot. This experience provided me with a solid
              foundation in both frontend and backend technologies, contributing
              to my growth as a developer.
            </p>
            <p>
              As a freelancer, I developed a comprehensive food delivery app,
              Foodie, using a React frontend and a Node.js backend with
              Express.js APIs. This project included customer and eatery
              dashboards, secure API interactions, and robust data management
              with MySQL. Additionally, I built an automated email sender tool
              for recruiters, which allowed users to send personalized emails to
              multiple recruiters at once, streamlining the job application
              process. I also contributed to UI enhancements for educational
              tools like Photomath and Chegg and designed features for a cricket
              betting application, showcasing my adaptability across diverse
              domains.
            </p>
            <p>
              My educational background in Mechatronics from Sastra Deemed
              University, combined with a strong foundation in various
              programming languages and frameworks, has equipped me with a solid
              technical acumen. I am passionate about leveraging my skills to
              drive innovation and deliver effective solutions, continuously
              seeking opportunities to grow and contribute to impactful
              projects.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/saiteja_reddy25" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/mintuu_25/?igsh=NXk4M2lyajB4OGJ2&utm_source=qr"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/mintureddy25"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/sai-teja-reddy-chappeta-158a3021b/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:chappetasaitejareddy@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              chappetasaitejareddy@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
