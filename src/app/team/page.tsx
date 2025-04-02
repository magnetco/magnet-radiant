
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Heading, Lead } from '@/components/text'
import Image from 'next/image'

interface TeamMember {
  name: string
  role: string
  imageSrc: string
}

const leadership: TeamMember[] = [
  {
    name: 'Michael Foster',
    role: 'Co-Founder & CEO',
    imageSrc: '/team/michael-foster.jpg',
  },
  {
    name: 'Whitney Francis',
    role: 'Co-Founder & CTO',
    imageSrc: '/team/whitney-francis.jpg',
  },
  {
    name: 'Dries Vincent',
    role: 'Chief Design Officer',
    imageSrc: '/team/dries-vincent.jpg',
  },
  {
    name: 'Emily Selman',
    role: 'VP of Engineering',
    imageSrc: '/team/emily-selman.jpg',
  },
]

const team: TeamMember[] = [
  {
    name: 'Leonard Krasner',
    role: 'Senior Developer',
    imageSrc: '/team/leonard-krasner.jpg',
  },
  {
    name: 'Courtney Henry',
    role: 'Sales Lead',
    imageSrc: '/team/courtney-henry.jpg',
  },
  {
    name: 'Marcus Eldridge',
    role: 'Product Manager',
    imageSrc: '/team/marcus-eldridge.jpg',
  },
  {
    name: 'Celeste Vandermark',
    role: 'UX Designer',
    imageSrc: '/team/celeste-vandermark.jpg',
  },
  {
    name: 'Nolan Sheffield',
    role: 'Marketing Specialist',
    imageSrc: '/team/nolan-sheffield.jpg',
  },
]

export default function Team() {
  return (
    <main>
      <GradientBackground>
        <Navbar />
        <Container className="mt-24 sm:mt-32">
          <header className="max-w-3xl">
            <Heading>Meet our team</Heading>
            <Lead className="mt-6">
              We're a diverse team of talented individuals passionate about revolutionizing
              the sales industry through cutting-edge technology and innovative approaches.
            </Lead>
          </header>
        </Container>
      </GradientBackground>

      <Container className="mt-16 sm:mt-20">
        <div className="space-y-20">
          <section>
            <h2 className="text-2xl font-bold tracking-tight">Leadership</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our leadership team brings decades of experience from top technology and sales companies.
            </p>
            
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {leadership.map((member) => (
                <div key={member.name} className="group">
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight">Team Members</h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet the talented individuals who make Radiant possible.
            </p>
            
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {team.map((member) => (
                <div key={member.name} className="group">
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-medium">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight">Join Our Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              We're always looking for talented individuals to join our growing team.
              Check out our open positions.
            </p>
            <div className="mt-6">
              <a 
                href="#" 
                className="inline-flex items-center rounded-md bg-gray-950 px-6 py-3 text-base font-medium text-white hover:bg-gray-800"
              >
                View open positions
              </a>
            </div>
          </section>
        </div>
      </Container>

      <Footer />
    </main>
  )
}
