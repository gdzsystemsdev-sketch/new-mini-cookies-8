import { type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CTAButton from './CTAButton';

type AboutSectionProps = {
  number: string;
  title: ReactNode;
  children: ReactNode;
};

function AboutSection({ number, title, children }: AboutSectionProps) {
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

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-xl sm:text-2xl font-bold italic text-white mb-4">{children}</h3>
  );
}

const includedItems = [
  'Multi-streaming setup across 5 platforms at the same time',
  'Up to 5 off-platform, done-for-you income sources',
  'Personalized training and 1-on-1 coaching, live in real time',
  'Complete technical & back-end support for each platform, live in real time',
  'Streaming equipment for your home studio',
  'Full “blue page” management included',
  '24/7 sales covered across all 10 platforms',
  'Zero upfront costs, no hidden fees, and zero lock-in contracts (leave anytime)',
];

const yesItems = [
  'Yes, that’s right: 10 income sources for the effort of just one!',
  'Yes, you get paid for the time you spend creating content!',
  'Yes, you can monetize each step of the way!',
  'Yes, you can earn while you are not working!',
  'Yes, you can grow your “blue page” on autopilot at the same time!',
  'Yes, every system is done-for-you—your job is just to show up on time!',
  'Yes, your team works for you and you only!',
  'Yes, it’s 100% free to start: no hidden fees or costs!',
  'Yes, you can leave at any time if you think it’s not for you!',
  'Yes, there aren’t any contracts or agreements involved whatsoever!',
];

const goodFit = [
  'Committed to working a minimum of 20 hours weekly',
  'Consistent with your schedule',
  'Positive, energetic personality and vibe',
  'Fast & stable internet connection',
  'Laptop or modern smartphone (iPhone 13 or above)',
  'Quiet room without distractions while working',
  'Treating this as a serious income path, not just testing the waters',
  'Coachable & ready to follow proven systems',
  'Self-motivated—nobody has to chase you to show up',
  'You’ve thought about this for months and you’re ready to take action',
];

const notFit = [
  'You want quick money without putting in the work',
  'You expect fast results without consistent execution',
  'You need someone to keep you on schedule every day',
  'You’re looking for a shortcut rather than a real business',
  'This is just a backup plan, not a real decision',
  'You disappear for weeks at a time—this system requires consistency',
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-jet-black text-pure-white">
      <Navbar />
      <main className="pt-32 sm:pt-40">
        <div className="max-w-5xl mx-auto px-6">
          {/* Hero */}
          <section className="pb-16 sm:pb-28">
            <div className="inline-flex items-center gap-3 mb-10 px-4 py-2 rounded-full border border-[#ff1493]/40 bg-[#ff1493]/10">
              <span className="text-xs tracking-[0.3em] uppercase text-[#ff1493] font-semibold">
                More Than An Agency
              </span>
            </div>
            <h1
              className="font-extrabold italic tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Built to give creators what every other{' '}
              <span style={{ color: '#ff1493' }}>agency couldn’t</span>
            </h1>
            <p className="max-w-4xl text-lg sm:text-xl text-white/70 font-light leading-relaxed mb-10">
              Once you join, an entire team and personalized system is built around you.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton label="How We Work" href="/#how-it-works" color="pink" className="px-6 py-3 text-xs" />
              <CTAButton label="Our Team Standards" href="#team-standards" variant="outline" className="px-6 py-3 text-xs" />
              <CTAButton label="Creators Requirements" href="#creators-requirements" variant="outline" className="px-6 py-3 text-xs" />
            </div>
          </section>

          {/* Who We Are */}
          <AboutSection
            number="01"
            title={<>Who We <span style={{ color: '#ff1493' }}>Are</span></>}
          >
            <p>
              Mini Cookies is a Talent Management Agency that operates worldwide, completely
              remote. We exist to turn creator ambition into a real, scalable career—surrounding
              you with a dedicated team, proven systems, and a strategy built around your current
              situation, goals, and boundaries.
            </p>
          </AboutSection>

          {/* What the Agency Does */}
          <AboutSection
            number="02"
            title={<>What the Agency <span style={{ color: '#ff1493' }}>Does</span></>}
          >
            <p>
              Navigating this industry alone is overwhelming. It demands deep technical knowledge,
              human psychology, constant multitasking, analytics tracking, and months wasted on
              trial and error—far more than one person can realistically manage in a day.
            </p>
            <p>
              That’s why we built Mini Cookies: an all-in-one management agency designed to cover
              every angle and give creators what other agencies couldn’t—and what you shouldn’t
              have to build alone.
            </p>
            <p>
              Our main job is to remove the guesswork. Every creator gets their own dedicated team
              working exclusively for them, with full back-end management: complete setup and
              optimization across every platform, a 24/7 off-platform earnings engine, live
              ghostwriters on every stream, 1-on-1 coaching, and a full library of training
              guides. Privacy is locked in from day one with a separate stage name and
              geo-blocking.
            </p>
          </AboutSection>

          {/* Agency Standards and Operations */}
          <div id="team-standards">
            <AboutSection
              number="03"
              title={<>Agency Standards and <span style={{ color: '#ff1493' }}>Operations</span></>}
            >
              <div>
                <SubHeading>Team Standards</SubHeading>
                <p>
                  We focus strictly on quality over quantity and are highly selective about who
                  joins our team. Before any candidate even gets an interview for a back-end role,
                  they must pass qualification, intelligence, performance, and live problem-solving
                  tests. We only hire skilled, dedicated operators who perform like sharks.
                </p>
              </div>
              <div>
                <SubHeading>Sales Team</SubHeading>
                <p>
                  Our ghostwriters are the core of the earnings engine—both for us and for every
                  creator we manage. We only hire proven sales talent with direct experience in
                  this exact industry and role. Stream specialists focus strictly on live streams,
                  while messaging specialists focus exclusively on building long-term fan
                  relationships across WhatsApp, Telegram, Snapchat, and whichever apps you or your
                  fans prefer. Because our sales team is 100% commission-based, they are fully
                  incentivized to handle every conversation strategically and maximize your
                  revenue.
                </p>
              </div>
              <div>
                <SubHeading>Admin Team</SubHeading>
                <p>
                  Every back-end team member—from managers and coaches to profile and tech
                  operators—already brings proven experience and an established career in this
                  industry. They know the ins and outs, have seen every common beginner mistake
                  firsthand, and know how to prevent them so you never have to figure things out
                  alone.
                </p>
              </div>
              <div className="pt-4">
                <p className="text-white/80 font-medium mb-6">
                  If you are competent and have proven skills in this industry, we want to hear
                  from you.
                </p>
                <CTAButton label="Join Our Back-End Team" href="/#application" color="pink" />
              </div>
            </AboutSection>
          </div>

          {/* Everything You Get */}
          <AboutSection
            number="04"
            title={<>Everything You Get <span style={{ color: '#ff1493' }}>Working With Us</span></>}
          >
            <p>Your success and earnings are done exactly like this:</p>
            <div className="border border-[#ff1493]/40 rounded-lg bg-white/[0.03] p-6 sm:p-10 space-y-5">
              {includedItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-[#ff1493] font-bold shrink-0 mt-0.5">✔</span>
                  <span className="text-base sm:text-lg text-white/80 font-light leading-relaxed">{item}</span>
                </div>
              ))}

              <div className="h-px bg-[#ff1493]/40" />

              {yesItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-[#ff1493] font-bold shrink-0 mt-0.5">✔</span>
                  <span className="text-base sm:text-lg text-white/80 font-light leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm sm:text-base text-white/50 font-light">
              → To compare Mini Cookies vs. other agencies &amp; working alone, click the button
              below →
            </p>
            <div className="flex justify-center">
              <CTAButton label="Why Mini Cookies?" href="/#why-mini-cookies" variant="outline" />
            </div>
          </AboutSection>

          {/* Creators Requirements */}
          <div id="creators-requirements">
            <AboutSection
              number="05"
              title={<>Creators <span style={{ color: '#ff1493' }}>Requirements</span></>}
            >
              <p className="text-lg sm:text-xl text-white/70 font-light">
                We accept fewer than 3% of applications
              </p>
              <p>
                We don’t select creators based on age, looks, or body type. What truly matters is
                your mindset. We are looking for ambitious, disciplined, and open-minded women who
                bring real charisma and positive energy.
              </p>
              <p>
                Once you join, an entire team and system is built around you. We can only do that
                for creators who are ALL IN, and most who apply are not. This filter protects both
                of us from wasting each other’s time.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
                <div className="border border-[#ff1493]/40 rounded-lg bg-white/[0.03] p-6 sm:p-8">
                  <h3 className="text-lg font-bold italic text-white mb-6">Good Fit If…</h3>
                  <ul className="space-y-4">
                    {goodFit.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-[#ff1493] font-bold shrink-0 mt-0.5">✅</span>
                        <span className="text-sm sm:text-base text-white/80 font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-white/10 rounded-lg bg-white/[0.02] p-6 sm:p-8">
                  <h3 className="text-lg font-bold italic text-white/60 mb-6">Not a Fit If…</h3>
                  <ul className="space-y-4">
                    {notFit.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-white/40 font-bold shrink-0 mt-0.5">✕</span>
                        <span className="text-sm sm:text-base text-white/50 font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p>
                Read the “Not a Fit If…” column and thought “that’s not me”? Good. That’s exactly
                how we know you belong in the “Good Fit If…” column—and it’s why we turn most
                applicants away. The ones we keep are the ones who just nodded.
              </p>

              <div className="flex justify-center pt-4">
                <CTAButton label="Apply Now" href="/#application" color="pink" />
              </div>
            </AboutSection>
          </div>

          {/* How Does Your Agency Earn */}
          <AboutSection
            number="06"
            title={<>How Does Your Agency <span style={{ color: '#ff1493' }}>Earn?</span></>}
          >
            <p>
              Every creator gets the exact same all-in setup—no tiers, no hidden packages, and no
              percentages that change depending on how many hours you work. Everything is built in
              from the start: your dedicated management team, sales team, personalized coaching,
              live tech support, essential home-studio equipment, and a clear path to scaling a
              full-time career—with zero joining fees, zero upfront costs, and zero lock-in
              contracts.
            </p>
            <p>
              We take a percentage fee from your streaming platform earnings, and you keep the
              rest. For off-platform earnings, we take a higher percentage fee due to the 24/7
              coverage and active management across your accounts (in most cases, off-platform
              apps generate double or triple what streaming alone brings in). Exact percentages
              and personalized earnings projections are covered in detail on your onboarding call.
            </p>
            <p>
              Our success is 100% tied to yours—if you don’t earn, we don’t earn. One-off payouts
              don’t interest us; we build long-term partnerships that generate consistent, high
              income for both sides. Every earnings figure and projection mentioned on our website
              is after our split—100% yours to take home.
            </p>

            <div className="border border-[#ff1493]/40 rounded-lg bg-white/[0.03] p-8 sm:p-12 text-center mt-12">
              <h3
                className="font-extrabold italic tracking-tight leading-[1.1] mb-8"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
              >
                Ready to See If You <span style={{ color: '#ff1493' }}>Qualify for the 3%?</span>
              </h3>
              <CTAButton label="Apply Now →" href="/#application" color="pink" />
            </div>
          </AboutSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
