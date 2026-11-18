import { type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CTAButton from './CTAButton';

type Step = {
  num: string;
  title: string;
  description: ReactNode;
  tags: string[];
  pinkTags?: string[];
};

const steps: Step[] = [
  {
    num: '01',
    title: 'Apply — It Just Takes A Minute',
    description:
      'Everyone starts here. This is your first step to your success. Just fill out a simple form, and leave contact details, and we will get in touch with you!',
    tags: ['Completely confidential', 'No photos required', '18+ only', 'Free to apply'],
    pinkTags: ['Completely confidential'],
  },
  {
    num: '02',
    title: 'Discovery Call',
    description:
      'No commitments yet, just chill conversation with one person from our team, to see whether this fits your current situation. Camera on for both of us, because we are about to talk about your goals, and what success looks like for you, and realistic expectations based on your current situation. You will hear from us either way, even if the answer is no. If the answer is yes, shortly after you will be connected with your personal account manager on WhatsApp and Discord. Your goals, schedule, and initial personalized strategy are set here, based on your current situation. No matter what situation you’re in, we have the solution.',
    tags: ['1-to-1 WhatsApp support', 'Discord communication', 'Zero-pressure intro', 'Your goals, your pace'],
    pinkTags: ['1-to-1 WhatsApp support'],
  },
  {
    num: '03',
    title: 'Profile Setup & Full Privacy Configuration',
    description:
      'We handle the entire technical setup across all platforms: alias email/identity, profile creation and setup, geo-blocking (blocking country/region/postcode) required apps, softwares, setup off-platform profiles and payment systems.',
    tags: ['Geo-blocking configured', 'Alias identity setup', 'Multi-platform profiles', 'Privacy blueprint'],
    pinkTags: ['Geo-blocking configured'],
  },
  {
    num: '04',
    title: 'Training & Blueprint',
    description:
      'Personal onboarding session covering platform mechanics, audience engagement, show strategy, pricing, and building loyal regulars, plus a week-by-week blueprint plan.',
    tags: ['Structured plan', 'Show strategy coaching', 'Pricing guidance', 'Audience psychology'],
    pinkTags: ['Structured plan'],
  },
  {
    num: '05',
    title: 'Go Live — With Your Team’s Support In Real Time',
    description:
      'Go live across platforms with your account manager guiding you in real time — refining strategy, pricing, and schedule as data comes in.',
    tags: ['First earnings', 'Live support', 'Multi-stream enabled'],
    pinkTags: ['First earnings'],
  },
  {
    num: '06',
    title: 'Earnings & Payouts',
    description:
      'You receive your earnings every week. No targets to hit, no holds, you get what’s yours on time. You can access & track all incoming earnings on all platforms through your accounts. For the off-platform earnings you are getting daily sale updates at real time, and transactions are made the same day.',
    tags: ['Daily sales updates', 'Live earnings dashboard', 'Weekly payments'],
    pinkTags: ['Weekly payments'],
  },
];

const team = [
  {
    title: 'Accounts Manager',
    text: 'WhatsApp and Discord contact for daily help and support, daily calls, tracking progress and adapting strategy - real person dedicated to your success.',
  },
  {
    title: 'Stream-platforms Sales Team',
    text: 'Skilled ghost writers working your room live on every stream, greeting viewers, spotting spenders, driving earnings through tips and private invites while you focus only on performing.',
  },
  {
    title: 'Off-platform Sales Team',
    text: 'This is the highest income source and the potential here is infinite. Skilled ghost writers that specialize in building real online relationships, are active 24/7 on all messaging apps for you.',
  },
  {
    title: 'Personal Coach',
    text: '1-to-1 training on show performance, how pricing works, turning viewers into regulars, regulars into whales and stream ideas & scripts.',
  },
  {
    title: 'Profile Operators',
    text: 'Profile creation and continuous conversion optimization (bio, thumbnails, pricing, folders, content).',
  },
  {
    title: 'Tech Support',
    text: 'Technical setup, multi-stream setup, equipment setup. Any tech issue resolves fast, so you can focus on performing, not troubleshoot errors.',
  },
];

const stages = [
  {
    title: 'Stage 1: Getting Started (Foundation & First Earnings)',
    points: [
      'Profiles built, privacy/geo-blocking configured',
      'Trial sessions with 1-on-1 coaching',
      'Multistream activated',
      'Off-platform earning systems configured, earning early',
    ],
  },
  {
    title: 'Stage 2: Building (Growth & Consistency)',
    points: [
      'Returning regular base built',
      'Content strategy introduced',
      '“Blue page” funnel activated',
      'Off-platform funnel activated',
      'Scheduling optimized',
    ],
  },
  {
    title: 'Stage 3: Scaling (Scale & Full-Time Freedom)',
    points: [
      'Passive income fanbase',
      'Advanced show strategies',
      '24/7 cross-platform income',
      'Full-time independent income',
      'Top performer tiers unlocked',
    ],
  },
];

function SectionHeading({ number, title }: { number: string; title: ReactNode }) {
  return (
    <>
      <div className="flex items-center gap-4 mb-10">
        <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">{number}</span>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      <h2
        className="font-extrabold italic tracking-tight leading-[1.1] mb-10"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
      >
        {title}
      </h2>
    </>
  );
}

function Pink({ children }: { children: ReactNode }) {
  return <span style={{ color: '#ff1493' }}>{children}</span>;
}

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-jet-black text-pure-white">
      <Navbar />
      <main className="pt-32 sm:pt-40">
        <div className="max-w-5xl mx-auto px-6">
          {/* Hero */}
          <section className="pb-16 sm:pb-28">
            <div className="inline-flex items-center gap-3 mb-10 px-4 py-2 rounded-full border border-[#ff1493]/40 bg-[#ff1493]/10">
              <span className="text-xs tracking-[0.3em] uppercase text-[#ff1493] font-semibold">
                Your Roadmap To Success
              </span>
            </div>
            <h1
              className="font-extrabold italic tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Six Step System That Works. <Pink>Zero Guesswork.</Pink>
            </h1>
            <p className="max-w-4xl text-lg sm:text-xl text-white/70 font-light leading-relaxed mb-10">
              From the moment you apply, to your first earnings. What happens in each step of the
              way once you apply to become a Mini Cookie.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton label="Apply" href="/#application" color="pink" className="px-6 py-3 text-xs" />
              <CTAButton label="I Still Have Questions" href="/#faqs" variant="outline" className="px-6 py-3 text-xs" />
            </div>
          </section>

          {/* Timeline */}
          <section className="border-t border-white/10 py-10 sm:py-24">
            <SectionHeading
              number="01"
              title={<><Pink>6-Step</Pink> Onboarding Process</>}
            />

            <div className="relative">
              {/* Vertical pink line */}
              <div className="absolute left-5 sm:left-6 top-2 bottom-2 w-px bg-[#ff1493]/40" />

              <div>
                {steps.map((step, i) => (
                  <div
                    key={step.num}
                    className={`relative pl-16 sm:pl-20 py-8 sm:py-10 ${
                      i < steps.length - 1 ? 'border-b border-white/10' : ''
                    }`}
                  >
                    {/* Circular badge over the line */}
                    <div className="absolute left-0 top-8 sm:top-10 flex flex-col items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ff1493] flex items-center justify-center shadow-[0_0_20px_rgba(255,20,147,0.4)]">
                        <span className="text-sm sm:text-base font-bold text-white">{step.num}</span>
                      </div>
                      <span className="mt-2 text-[0.6rem] tracking-[0.25em] uppercase text-white/40 font-medium">
                        Step {i + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold italic text-white mb-4 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-white/60 font-light leading-relaxed mb-5">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag) => {
                        const isPink = step.pinkTags?.includes(tag);
                        return (
                          <span
                            key={tag}
                            className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium tracking-wide ${
                              isPink
                                ? 'bg-[#ff1493]/15 text-[#ff1493] border border-[#ff1493]/40'
                                : 'bg-white/5 text-white/60 border border-white/10'
                            }`}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Your Team */}
          <section className="border-t border-white/10 py-10 sm:py-24">
            <SectionHeading
              number="02"
              title={<>The Team Behind <Pink>Your Results</Pink></>}
            />
            <p className="text-lg sm:text-xl text-white/70 font-light mb-12 max-w-2xl leading-relaxed">
              Once you join, an entire team and system is built around you.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member) => (
                <div
                  key={member.title}
                  className="border border-white/10 rounded-lg bg-white/[0.02] p-6 sm:p-8 hover:border-[#ff1493]/40 transition-colors duration-300"
                >
                  <h3 className="text-lg font-bold italic text-white mb-4">{member.title}</h3>
                  <p className="text-sm sm:text-base text-white/50 font-light leading-relaxed">
                    {member.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Growth Blueprint */}
          <section className="border-t border-white/10 py-10 sm:py-24">
            <div className="text-center">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">03</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <h2
                className="font-extrabold italic tracking-tight leading-[1.1] mb-16"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                <Pink>3-Stage</Pink> Growth Blueprint
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {stages.map((stage, i) => (
                <div
                  key={stage.title}
                  className={`border rounded-lg p-6 sm:p-8 ${
                    i === 2
                      ? 'border-[#ff1493]/40 bg-white/[0.03]'
                      : 'border-white/10 bg-white/[0.02]'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full bg-[#ff1493] flex items-center justify-center mb-6 ${
                      i === 2 ? 'shadow-[0_0_20px_rgba(255,20,147,0.4)]' : ''
                    }`}
                  >
                    <span className="text-sm font-bold text-white">{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold italic text-white mb-6 leading-snug">
                    {stage.title}
                  </h3>
                  <ul className="space-y-3">
                    {stage.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff1493] shrink-0 mt-2" />
                        <span className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Transparency & Inclusions */}
          <section className="border-t border-white/10 py-10 sm:py-24">
            <SectionHeading
              number="04"
              title={<>Transparency <Pink>&amp; Inclusions</Pink></>}
            />

            <div className="space-y-8 text-base sm:text-lg text-white/60 font-light leading-relaxed">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold italic text-white mb-4">Pricing</h3>
                <p>
                  <strong className="font-semibold text-white">FREE to join.</strong> No starting
                  fee, no monthly retainer, no contracts whatsoever. We highly believe the results
                  should keep our partnership alive. We only earn when you do, so your success is
                  in our best interest.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold italic text-white mb-4">
                  Key Features Included
                </h3>
                <ul className="space-y-3">
                  {[
                    'Dedicated sales team on every stream',
                    'Dedicated sales team on all off-platform messaging apps',
                    '1-to-1 training, guide library',
                    'Account optimization',
                    'Multistreaming',
                    'Privacy/geo-blocking',
                    'Weekly payouts',
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-[#ff1493] font-bold shrink-0 mt-0.5">✔</span>
                      <span className="text-base sm:text-lg text-white/70 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16 flex justify-center">
              <CTAButton label="Apply Now" href="/#application" color="pink" />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
