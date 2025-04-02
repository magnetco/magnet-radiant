
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community',
  description: 'Join the Radiant community to connect with other users, share best practices, and get help.',
}

const communityBenefits = [
  {
    title: 'Connect with peers',
    description: 'Network with other sales professionals and share experiences and strategies.',
  },
  {
    title: 'Learn from experts',
    description: 'Get insights and advice from industry leaders and Radiant power users.',
  },
  {
    title: 'Share your knowledge',
    description: 'Help others by sharing your experiences and best practices with the community.',
  },
  {
    title: 'Stay updated',
    description: 'Be the first to know about new features, updates, and industry trends.',
  },
]

const upcomingEvents = [
  {
    title: 'Sales Pipeline Mastery',
    date: 'June 15, 2023',
    time: '1:00 PM EST',
    type: 'Webinar',
    description: 'Learn how to optimize your sales pipeline for maximum efficiency and results.',
  },
  {
    title: 'Customer Engagement Strategies',
    date: 'June 22, 2023',
    time: '2:00 PM EST',
    type: 'Workshop',
    description: 'Discover effective strategies to engage prospects and drive conversions.',
  },
  {
    title: 'Radiant User Conference',
    date: 'July 10-12, 2023',
    time: 'All day',
    type: 'Conference',
    description: 'Join us for our annual user conference with keynotes, workshops, and networking.',
  },
]

export default function Community() {
  return (
    <main>
      <GradientBackground />
      <Navbar />
      <Container className="mt-24 sm:mt-32">
        <div className="relative">
          <Gradient className="absolute right-0 top-0 -z-10 h-64 w-64 opacity-25 sm:h-80 sm:w-80" />
        </div>
        
        <div className="max-w-3xl">
          <Heading level={1}>Join our community</Heading>
          <Lead className="mt-6">
            Connect with thousands of sales professionals using Radiant to close more deals and grow their businesses.
          </Lead>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#">Join the forum</Button>
            <Button href="#" variant="outline">
              Attend an event
            </Button>
          </div>
        </div>

        <div className="mt-24">
          <Subheading>Why join our community?</Subheading>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {communityBenefits.map((benefit, index) => (
              <div key={index} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-950/5">
                <h3 className="text-lg font-medium text-gray-950">{benefit.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <Subheading>Upcoming events</Subheading>
          <div className="mt-8 space-y-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-950/5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      {event.type}
                    </span>
                    <h3 className="mt-2 text-lg font-medium text-gray-950">{event.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{event.description}</p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <div className="text-sm font-medium text-gray-900">{event.date}</div>
                    <div className="text-sm text-gray-500">{event.time}</div>
                    <Button className="mt-3" variant="outline" href="#">
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="#" variant="outline">
              View all events
            </Button>
          </div>
        </div>

        <div className="mt-24 rounded-2xl bg-gray-50 p-8">
          <div className="text-center">
            <h2 className="text-2xl font-medium text-gray-950">Have a question?</h2>
            <p className="mt-2 text-gray-600">
              Our community forum is the perfect place to get answers from other users and Radiant experts.
            </p>
            <div className="mt-6">
              <Button href="#">Visit the forum</Button>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
