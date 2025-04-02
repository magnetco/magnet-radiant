
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'

export default function API() {
  return (
    <main>
      <GradientBackground>
        <Navbar />
        <Container className="mt-24 sm:mt-32">
          <header className="max-w-3xl">
            <Heading>Radiant API</Heading>
            <Lead className="mt-6">
              Integrate Radiant's powerful sales intelligence features directly into your
              existing tools and workflows with our comprehensive API.
            </Lead>
          </header>
        </Container>
      </GradientBackground>

      <Container className="mt-16 sm:mt-20">
        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold tracking-tight">API Documentation</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our RESTful API gives you programmatic access to all Radiant features, 
              allowing you to build custom integrations and workflows.
            </p>
            
            <div className="mt-8 rounded-xl bg-gray-50 p-6">
              <h3 className="font-mono text-lg font-semibold">GET /api/v1/contacts</h3>
              <p className="mt-2 text-gray-600">Retrieve a list of contacts with filtering options</p>
              <pre className="mt-4 overflow-auto rounded-md bg-gray-900 p-4 text-sm text-white">
                {`// Example Response
{
  "contacts": [
    {
      "id": "con_12345",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "company": "Acme Corp",
      "created_at": "2023-01-15T10:30:00Z"
    },
    // More contacts...
  ],
  "pagination": {
    "total": 143,
    "page": 1,
    "per_page": 25
  }
}`}
              </pre>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight">Authentication</h2>
            <p className="mt-4 text-lg text-gray-600">
              Secure your API requests using OAuth 2.0 or API key authentication methods.
              All API requests are encrypted and protected with TLS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight">Rate Limits</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our API implements fair usage policies with tiered rate limits based on your
              subscription plan. Monitor your usage with detailed headers in each response.
            </p>
            
            <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Plan</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Requests per minute</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Daily quota</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">Starter</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">60</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">10,000</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">Growth</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">120</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">50,000</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">Enterprise</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">300</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">Unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </Container>

      <Footer />
    </main>
  )
}
