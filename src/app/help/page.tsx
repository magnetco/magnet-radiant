
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help Center',
  description: 'Find answers to your questions and get support for Radiant products and services.',
}

const helpCategories = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of using Radiant for your sales needs',
    articles: [
      { title: 'Creating your account', link: '#' },
      { title: 'Setting up your first pipeline', link: '#' },
      { title: 'Importing your contacts', link: '#' },
    ],
  },
  {
    title: 'Account Management',
    description: 'Manage your Radiant account, billing, and team members',
    articles: [
      { title: 'Managing your subscription', link: '#' },
      { title: 'Adding team members', link: '#' },
      { title: 'Security settings', link: '#' },
    ],
  },
  {
    title: 'Features & Tools',
    description: 'Detailed guides on using key Radiant features',
    articles: [
      { title: 'Deal tracking and analytics', link: '#' },
      { title: 'Customer engagement tools', link: '#' },
      { title: 'Email integration and templates', link: '#' },
    ],
  },
  {
    title: 'Troubleshooting',
    description: 'Solutions to common issues and technical problems',
    articles: [
      { title: 'Connection issues', link: '#' },
      { title: 'Data import/export problems', link: '#' },
      { title: 'Mobile app troubleshooting', link: '#' },
    ],
  },
]

export default function HelpCenter() {
  return (
    <main>
      <GradientBackground />
      <Navbar />
      <Container className="mt-24 sm:mt-32">
        <div className="text-center mb-16">
          <Heading level={1}>Help Center</Heading>
          <Lead className="mt-6 mx-auto max-w-2xl">
            Everything you need to know about using Radiant. Can't find what you're looking for? Our support team is here to help.
          </Lead>
          <div className="mt-8 flex justify-center">
            <div className="relative max-w-xl w-full">
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Button className="absolute right-1.5 top-1.5">
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {helpCategories.map((category, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-medium text-gray-900">{category.title}</h2>
              <p className="mt-2 text-gray-600">{category.description}</p>
              <ul className="mt-4 space-y-3">
                {category.articles.map((article, articleIndex) => (
                  <li key={articleIndex}>
                    <a 
                      href={article.link} 
                      className="group flex items-center text-gray-700 hover:text-blue-600"
                    >
                      <ChevronRightIcon className="h-4 w-4 text-gray-400 group-hover:text-blue-500 mr-2" />
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                  View all articles →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-medium text-gray-900">Can't find what you're looking for?</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you with any questions or issues you may have.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button href="#" variant="outline">
              Contact Support
            </Button>
            <Button href="#">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
