
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Heading, Lead } from '@/components/text'

export default function Analysis() {
  return (
    <main>
      <GradientBackground>
        <Navbar />
        <Container className="mt-24 sm:mt-32">
          <header className="max-w-3xl">
            <Heading>Sales pipeline analysis tools</Heading>
            <Lead className="mt-6">
              Gain deep insights into your sales pipeline with powerful analytics tools
              that help you understand performance, identify opportunities, and optimize
              your sales strategy.
            </Lead>
          </header>
        </Container>
      </GradientBackground>

      <Container className="mt-16 sm:mt-20">
        <div className="space-y-20">
          <section>
            <h2 className="text-2xl font-bold tracking-tight">Performance Analytics</h2>
            <p className="mt-4 text-lg text-gray-600">
              Track key sales metrics and KPIs to understand team and individual performance.
              Identify trends and patterns to optimize your sales approach.
            </p>
            <Screenshot
              src="/screenshots/competitors.png"
              alt="Performance Analytics Dashboard"
              className="mt-10 rounded-xl shadow-xl"
              width={1200}
              height={800}
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight">Competitor Analysis</h2>
            <p className="mt-4 text-lg text-gray-600">
              Monitor competitor activities, pricing strategies, and market positioning.
              Stay ahead with real-time insights and competitive intelligence.
            </p>
            <Screenshot
              src="/screenshots/app.png"
              alt="Competitor Analysis Interface"
              className="mt-10 rounded-xl shadow-xl"
              width={1200}
              height={800}
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight">AI-Powered Forecasting</h2>
            <p className="mt-4 text-lg text-gray-600">
              Leverage machine learning models to predict future sales trends and outcomes.
              Make data-driven decisions with accurate sales forecasting.
            </p>
            <div className="mt-10 rounded-xl bg-gray-50 p-8 shadow-sm">
              <p className="text-gray-700">
                Our advanced AI models provide up to 95% accuracy in sales forecasting, helping
                you plan resources and strategies with confidence.
              </p>
            </div>
          </section>
        </div>
      </Container>

      <Footer />
    </main>
  )
}
