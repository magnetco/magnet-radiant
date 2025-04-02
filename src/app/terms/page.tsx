
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Legal terms and conditions for using Radiant services.',
}

export default function TermsOfService() {
  return (
    <main>
      <GradientBackground />
      <Navbar />
      <Container className="mt-24 sm:mt-32">
        <div className="max-w-3xl">
          <Heading level={1}>Terms of Service</Heading>
          <Lead className="mt-6">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Lead>

          <div className="mt-12 prose prose-slate">
            <section className="mb-10">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Radiant. By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
              </p>
            </section>

            <section className="mb-10">
              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily use Radiant's services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained in Radiant</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2>3. Disclaimer</h2>
              <p>
                The materials on Radiant's website are provided on an 'as is' basis. Radiant makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-10">
              <h2>4. Limitations</h2>
              <p>
                In no event shall Radiant or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Radiant's website, even if Radiant or a Radiant authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="mb-10">
              <h2>5. Revisions and Errata</h2>
              <p>
                The materials appearing on Radiant's website could include technical, typographical, or photographic errors. Radiant does not warrant that any of the materials on its website are accurate, complete or current. Radiant may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section className="mb-10">
              <h2>6. Links</h2>
              <p>
                Radiant has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Radiant of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section className="mb-10">
              <h2>7. Modifications</h2>
              <p>
                Radiant may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-10">
              <h2>8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
