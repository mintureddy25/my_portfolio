import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import graduationImage from '@/images/graduation.jpg'

import Image from 'next/image'
import { format } from 'prettier'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Education',
  description: 'My Educational Journey',
}
export default function Education() {
  return (
    <SimpleLayout
      title="My Educational Journey"
      intro="My education has equipped me with essential knowledge and skills, laying the groundwork for my professional development."
    >
      <div className="lg:pl-20 mb-8">
  <div className="px-2.5 max-w-xs sm:max-w-sm lg:max-w-md">
    <Image
      src={graduationImage}
      alt=""
      sizes="(min-width: 1024px) 25rem, (min-width: 640px) 20rem, 15rem"
      className="w-full h-auto aspect-square rotate rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
    />
  </div>
</div>



      <div className="space-y-20">
        <ToolsSection title="Bachelor's Degree">
          <Tool title="SASTRA DEEMED UNIVERSITY">
            I completed my Bachelor’s degree in Mechatronics at Sastra Deemed
            University , with CGPA OF 7.34, from 2018 to 2022, located in
            Thanjavur, Tamil Nadu.
          </Tool>
        </ToolsSection>
        <ToolsSection title="12th Grade">
          <Tool title="Excellencia Junior Colleges">
            I completed my Higher Secondary (12th grade) education with a focus
            on Mathematics, Physics, and Chemistry, including IIT Foundation,
            with 98% percentag, from 2016 to 2018 in Hyderabad, Telangana.
          </Tool>
        </ToolsSection>
        <ToolsSection title="10th-Standard">
          <Tool title="Sri Chaithanya e-Techno Schools">
            I completed my Secondary (10th grade) education at Srichaitanya
            E-Techno Schools in Siddipet, Telangana, with a CGPA of 9.8, and
            passed in 2016.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
