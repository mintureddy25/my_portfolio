import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import { getAllExperiences } from '@/lib/experiences';
import { formatDate } from '@/lib/formatDate';

function Experience({ experience }) {
  return (
    <experience className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/experiences/${experience.slug}`}>
          {experience.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={experience.date}
          className="md:hidden"
          decorate
        >
          {experience.date}
        </Card.Eyebrow>
        <Card.Description>{experience.description}</Card.Description>
        <Card.Cta>Read more</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={experience.date}
        className="mt-1 hidden md:block"
      >
        {experience.date}
      </Card.Eyebrow>
    </experience>
  );
}

export const metadata = {
  title: 'Experience',
  description: 'Work Experience',
};

export default async function ExperiencesIndex() {
  let experiences = await getAllExperiences();

  return (
    <SimpleLayout
      title="Work Experience"
      intro="Gained extensive experience in software development, including designing and implementing features, troubleshooting issues, and collaborating with teams to deliver high-quality solutions."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {experiences.map((experience) => (
            <Experience key={experience.slug} experience={experience} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}
