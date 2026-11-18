import { type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type PrivacySectionProps = {
  number: string;
  title: ReactNode;
  children: ReactNode;
};

function PrivacySection({ number, title, children }: PrivacySectionProps) {
  return (
    <section className="border-t border-white/10 py-10 sm:py-24">
      <div className="flex items-center gap-4 mb-10">
        <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">
          {number}
        </span>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      <h2
        className="font-extrabold italic tracking-tight leading-[1.1] mb-10"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
      >
        {title}
      </h2>
      <div className="space-y-8 text-base sm:text-lg text-white/60 font-light leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function DetailList({ children }: { children: ReactNode }) {
  return <ul className="space-y-4 list-disc pl-6 marker:text-[#ff1493]">{children}</ul>;
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-jet-black text-pure-white">
      <Navbar />
      <main className="pt-32 sm:pt-40">
        <div className="max-w-5xl mx-auto px-6">
          <section className="pb-16 sm:pb-28">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">
                00
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <h1
              className="font-extrabold italic tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              <span style={{ color: '#ff1493' }}>Privacy</span> Policy
            </h1>
            <p className="text-sm sm:text-base text-white/40 font-light mb-10">
              Last updated: November 16, 2026
            </p>
            <p className="max-w-4xl text-lg sm:text-xl text-white/70 font-light leading-relaxed">
              Building trust starts right here. When you interact with Mini Cookies (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we only collect what is required for verification, onboarding, and optimizing our platform experience. All data is stored securely using encryption. We do not sell, rent, or trade your data with third parties, and you can request the deletion of your personal data at any time.
            </p>
          </section>

          <PrivacySection
            number="01"
            title={<>Information We <span style={{ color: '#ff1493' }}>Collect</span></>}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold italic text-white mb-4">
                Information You Provide to Us
              </h3>
              <DetailList>
                <li>
                  <strong className="font-semibold text-white">Application Data:</strong> Full name, date of birth, email address, phone number, social media usernames if applicable, country of residence, nationality, stage name, and any additional information you choose to provide in your application.
                </li>
                <li>
                  <strong className="font-semibold text-white">Identity Verification:</strong> A clear face photo submitted strictly for age-verification purposes as required by law.
                </li>
                <li>
                  <strong className="font-semibold text-white">Communications:</strong> Any messages, emails, or inquiries you send to us.
                </li>
              </DetailList>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold italic text-white mb-4">
                Automatically Collected Technical &amp; Telemetry Data
              </h3>
              <DetailList>
                <li>
                  <strong className="font-semibold text-white">Device &amp; Network Identifiers:</strong> IP address, browser type and version, operating system, device identifiers, screen resolution, and referral URLs.
                </li>
                <li>
                  <strong className="font-semibold text-white">Behavioral &amp; Interaction Logs:</strong> Session duration, page views, scroll depth, clickstream paths, form interaction events, and conversion triggers.
                </li>
              </DetailList>
            </div>
          </PrivacySection>

          <PrivacySection
            number="02"
            title={<>How We Use Your <span style={{ color: '#ff1493' }}>Information</span></>}
          >
            <p>We use the collected information to:</p>
            <DetailList>
              <li>Process and evaluate your agency application</li>
              <li>Schedule and conduct discovery calls</li>
              <li>Create and set up your accounts and profiles</li>
              <li>Communicate with you regarding our services</li>
              <li>Measure advertising attribution, analyze funnel performance, and optimize user experience</li>
              <li>Comply with legal and regulatory obligations</li>
            </DetailList>
          </PrivacySection>

          <PrivacySection
            number="03"
            title={<>Cookies, Tracking Pixels &amp; User Activity <span style={{ color: '#ff1493' }}>Mapping</span></>}
          >
            <p>
              To ensure platform security, measure marketing campaign attribution, and optimize our onboarding funnel, we deploy client-side storage technologies, tracking pixels, and behavioral analytics scripts across our website.
            </p>
            <DetailList>
              <li>
                <strong className="font-semibold text-white">Essential &amp; Functional Cookies:</strong> Small text files stored locally on your browser to maintain session state, preserve form inputs, enforce security protocols, and ensure core site functionality.
              </li>
              <li>
                <strong className="font-semibold text-white">Advertising &amp; Conversion Pixels (Snap Pixel, Meta Pixel):</strong> Lightweight JavaScript tags and server-side event APIs that log specific conversion milestones. These technologies match hashed browser signals with advertising platforms to measure campaign ROI, prevent duplicate ad delivery, and build aggregated lookalike audiences without exposing your raw application data.
              </li>
            </DetailList>
            <p>
              <strong className="font-semibold text-white">User Activity &amp; Behavioral Telemetry:</strong> Session-mapping and heatmap analytics tools record anonymized interaction telemetry, including cursor trajectories, scroll velocity, click distribution, and drop-off points. This diagnostic data allows us to identify UI bottlenecks and improve mobile and desktop usability.
            </p>
            <p>
              <strong className="font-semibold text-white">Managing Tracking &amp; Opt-Out Controls:</strong> You can restrict, block, or purge cookies and local storage at any time via your browser settings or by declining non-essential tracking through our cookie consent banner. You may also manage ad-level personalization directly within your Snapchat and Meta account privacy settings. Please note that disabling essential cookies may impact form submission stability.
            </p>
          </PrivacySection>

          <PrivacySection
            number="04"
            title={<>Third-Party <span style={{ color: '#ff1493' }}>Services</span></>}
          >
            <p>We utilize trusted third-party service providers to run our operations efficiently:</p>
            <DetailList>
              <li><strong className="font-semibold text-white">Calendly.com:</strong> Used for scheduling discovery calls. Subject to Calendly&apos;s Privacy Policy.</li>
              <li><strong className="font-semibold text-white">WhatsApp &amp; Telegram:</strong> Used for daily communications. Subject to their respective Privacy Policies.</li>
              <li><strong className="font-semibold text-white">Advertising &amp; Analytics Partners (Snap Inc., Meta Platforms, Inc.):</strong> Used for conversion tracking, attribution modeling, and aggregated traffic analytics.</li>
            </DetailList>
          </PrivacySection>

          <PrivacySection
            number="05"
            title={<>How We Share Your <span style={{ color: '#ff1493' }}>Data</span></>}
          >
            <p>
              We never sell, rent, or trade your personal data. We share data strictly on a need-to-know basis with the following infrastructure, operational, and advertising partners:
            </p>
            <DetailList>
              <li><strong className="font-semibold text-white">Partner Streaming &amp; Webcam Platforms:</strong> Shared exclusively to provision your creator profile using your chosen stage name. Your legal identity and verification documents remain strictly confidential.</li>
              <li><strong className="font-semibold text-white">Payment &amp; Financial Processors:</strong> Encrypted financial routing details shared solely to disburse your creator earnings securely.</li>
              <li><strong className="font-semibold text-white">Cloud &amp; IT Infrastructure Providers:</strong> Hosting, database, email, and technical support vendors that process data on our behalf under strict Data Processing Agreements and encryption standards.</li>
              <li><strong className="font-semibold text-white">Analytics &amp; Telemetry Providers (Google Analytics 4):</strong> Used to measure anonymized site interaction metrics, including scroll depth, video engagement duration, and form completion steps, helping us optimize funnel performance.</li>
              <li><strong className="font-semibold text-white">Advertising &amp; Attribution Partners (Meta Platforms and Snap Inc.):</strong> When you visit our site, submit an application, or schedule a call, client-side pixels and server-side Conversions APIs transmit technical event signals such as your IP address, browser metadata, referral URL, and cryptographically hashed contact identifiers. These platforms match hashed signals against user accounts to measure campaign attribution and optimize ad delivery under their respective Privacy Policies. We never transmit the personal answers you enter into your application questionnaire to advertising networks.</li>
              <li><strong className="font-semibold text-white">Legal authorities:</strong> Where required by law, court order, or to protect our legal rights.</li>
            </DetailList>
            <p>
              All third-party payment and infrastructure processors are contractually bound to maintain industry-standard security controls and process data strictly in accordance with our documented instructions.
            </p>
          </PrivacySection>

          <PrivacySection
            number="06"
            title={<>Data <span style={{ color: '#ff1493' }}>Security</span></>}
          >
            <p>
              We implement rigorous technical and organizational measures, including end-to-end encryption in transit using TLS and encrypted storage at rest, to protect your personal information against unauthorized access, loss, or misuse. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </PrivacySection>

          <PrivacySection
            number="07"
            title={<>Your <span style={{ color: '#ff1493' }}>Rights</span></>}
          >
            <p>You retain full control over your personal data. Under applicable data protection frameworks, including GDPR, you have the right to:</p>
            <DetailList>
              <li>Access, update, or correct your personal data</li>
              <li>Request the complete deletion of your personal data</li>
              <li>Withdraw consent for non-essential cookies and tracking pixels at any time</li>
              <li>Object to or restrict certain data processing activities</li>
            </DetailList>
          </PrivacySection>

          <PrivacySection
            number="08"
            title={<>Children&apos;s <span style={{ color: '#ff1493' }}>Privacy</span></>}
          >
            <p>
              Our services are strictly restricted to adults aged 18 and over. We do not knowingly collect or solicit personal data from anyone under 18. If you believe we have inadvertently collected data from a minor, please contact us immediately, and we will delete it promptly.
            </p>
          </PrivacySection>

          <PrivacySection
            number="09"
            title={<>Changes to This <span style={{ color: '#ff1493' }}>Policy</span></>}
          >
            <p>
              We may update this Privacy Policy from time to time to reflect operational, technical, or legal changes. Any updates will be posted on this page with a revised &quot;Last updated&quot; date at the top.
            </p>
          </PrivacySection>

          <PrivacySection
            number="10"
            title={<>Contact <span style={{ color: '#ff1493' }}>Us</span></>}
          >
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:
            </p>
            <DetailList>
              <li><strong className="font-semibold text-white">Agency Name:</strong> Mini Cookies</li>
              <li><strong className="font-semibold text-white">Email:</strong> [Insert Support Email]</li>
              <li><strong className="font-semibold text-white">Telegram / WhatsApp:</strong> [Insert Agency Handle / Number]</li>
            </DetailList>
          </PrivacySection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
