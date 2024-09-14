'use client';

import { useRouter } from 'next/navigation'; // For Next.js 13+ App Router
import { useEffect, useState } from 'react';
import { SimpleLayout } from '@/components/SimpleLayout';

export default function ThankYou() {
  const router = useRouter();
  const [queryParam, setQueryParam] = useState(null);
  // Default messages
  const defaultTitle = 'Thanks for getting in touch!';
  const defaultIntro =
    'I’ve received your message and can’t wait to chat. I’ll get back to you as soon as possible. In the meantime, if you need anything urgent, don’t hesitate to reach out again. Looking forward to our conversation!';

  const customMessages = {
    contact_me: {
      title: 'Thanks for getting in touch!',
      intro:
        'I’ve received your message and can’t wait to chat. I’ll get back to you as soon as possible. In the meantime, if you need anything urgent, don’t hesitate to reach out again. Looking forward to our conversation!',
    },
    // Add more custom messages as needed
  };

  // Determine the title and intro based on the `thanks` query parameter
  const { title, intro } = customMessages[queryParam] || {
    title: defaultTitle,
    intro: defaultIntro,
  };

  return <SimpleLayout title={title} intro={intro} />;
}
