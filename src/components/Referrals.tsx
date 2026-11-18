import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import CTAButton from './CTAButton';

function Pink({ children }: { children: ReactNode }) {
  return <span style={{ color: '#ff1493' }}>{children}</span>;
}

function SectionDivider({ number }: { number: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">{number}</span>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

const flowSteps = [
  {
    title: 'You introduce her',
    tag: 'Your job — Done',
    highlight: false,
  },
  {
    title: 'She starts earning',
    tag: 'We run everything',
    highlight: false,
  },
  {
    title: 'You earn a share of her revenue',
    tag: 'Every month',
    highlight: true,
  },
  {
    title: 'Paid on the 15th of each month',
    tag: 'No minimum, no cap',
    highlight: true,
  },
];

const audience = [
  {
    number: '01',
    title: 'Anyone With a Social Media Following',
    text: 'You’ve already done 99% of the work—you have the attention and the audience. Your followers already include a lot of aspiring and active talent looking for real management. With only one story, post, or reel, you can turn it into passive monthly income. No outreach, no time wasting.',
  },
  {
    number: '02',
    title: 'Anyone Who Knows a Creator',
    text: 'You don’t need a following. You don’t need a business. You don’t need to work. You just need to know one person who creates content and could use real management behind them. One group chat message, one DM, one conversation over a coffee—that’s all it takes to start earning a % share every single month that pays you for years.',
  },
  {
    number: '03',
    title: 'Anyone Who Builds Lead-Gen Automations',
    text: 'You already know how to scrape, enrich, and automate outbound at scale. Instead of selling cold lead lists for a flat fee, or constantly looking for more leads to generate new income—plug your system directly into our pipeline. Every qualified creator your workflow routes to us turns into a recurring monthly % share that compounds on autopilot for years.',
  },
  {
    number: '04',
    title: 'Appointment Setters & DM Outreach',
    text: 'You’re already talking to creators every single day. For every introduction you make, you get a monthly % share for years. Turn conversations you’re already having into compounding income.',
  },
  {
    number: '05',
    title: 'Affiliate Marketers',
    text: 'You know how to drive traffic and convert leads—stop trading that skill for one-time payouts that reset you to zero. Every talent you send our way pays you month after month for as long as they stay active and working with us. The math on this versus one-time payouts isn’t even close.',
  },
  {
    number: '06',
    title: 'You Are Already Working With Us',
    text: 'You’re already earning with us. Your friends see your results and trust your opinion. When you send them our way, you get a monthly % share on top of what you’re already earning.',
  },
];

const applySteps = [
  {
    number: '01',
    title: 'Drop Your Details Below',
    text: 'Name, email, WhatsApp number. Just 15 seconds, that’s all. We’re not going to make you jump through hoops.',
  },
  {
    number: '02',
    title: 'We Get Back To You',
    text: 'You will hear from us within 24-48h. After that we join in a group chat, and we continue the process together.',
  },
  {
    number: '03',
    title: 'Get Paid Every Single Month',
    text: 'If referral qualifies, they start working with us, you start earning. Monthly deposits. No cap. No expiration. For as long as they’re active with Mini Cookies.',
  },
];

const faqs = [
  {
    question: 'How are commissions calculated and verified?',
    answer:
      'You earn a percentage of your creator’s platform revenue, a number you can check against what she tells you. Every monthly statement shows her revenue, the rate applied, and how your commission was calculated. We go through the specifics on your call.',
  },
  {
    question: 'When do I get paid?',
    answer:
      'Monthly, no games. We sent your commissions on the 10th of each month, covering the previous month’s earnings. No minimum threshold. If you earn only one dollar, you receive your dollar.',
  },
  {
    question: 'What are the payout options?',
    answer:
      'We can receive your earnings via Crypto, PayPal, wire, bank transfer, or Online Banking Apps such as Revolut, Wise, Skrill.',
  },
  {
    question: 'What happens if my referral is offboarded?',
    answer:
      'If your referral is offboarded, your commission on her ends there. We never take a creator back once she’s been offboarded, so treat it as the end of that income rather than a pause. Everything already paid to you stays paid, with no holds, ever. Your other referrals are unaffected.',
  },
  {
    question: 'Can I refer creators who are already with another agency?',
    answer:
      'Yes, and some of our strongest referrals come from creators who are switching agencies. As long as they sign with Mini Cookies through a direct introduction you made, you get full credit. We handle the entire transition on our end so you don’t have to navigate any awkwardness. Just make the introduction.',
  },
  {
    question: 'Is there a minimum payout threshold?',
    answer:
      'No. Every dollar you earn gets paid, every month. Most affiliate programs make you hit $100 or $500+ before they pay you out.—we think that’s a huge red flag and you should avoid it. You took action to earn that, and that money belongs to you. You earned it. You get it.',
  },
  {
    question: 'How do I track my referrals and earnings?',
    answer:
      'You’ll get a weekly summary with line-by-line breakdowns with active referrals, monthly revenue per creator, commission earnings, and payout history. Also you can request a live video call anytime, we share the screen with the live dashboards in real time.',
  },
  {
    question: 'Why would you pay referrers this much?',
    answer:
      'Because finding great talent is the hardest part of running an agency. We spend serious money on ads, in-house outreach teams, and sales infrastructure. When someone we already trust sends us a talent who’s already warm to the idea? That’s worth more than any ad campaign we could run. Paying you a % share of what she earns costs us less than acquiring her through cold outreach, and talent who come through referrals stay longer and earn more. This isn’t generosity. It’s just business math that works for both sides.',
  },
];

const industryStandard = [
  'You refer a creator earning $100K/mo.',
  'They hand you a flat finder’s fee.',
  'You get 500–2,000. Once. That’s It. Done.',
  'Total avg. earnings (2 years): $1,000',
  'That creator goes on to earn millions. You saw none of it.',
];

const ourEngine = [
  'Same creator. Same introduction.',
  'You earn a share of her revenue every month.',
  'For as long as she’s active and working with us.',
  'Our top referrer has earned: $41,476',
];

export default function Referrals() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-jet-black text-pure-white">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="px-6 pb-20 pt-36 sm:pb-32 sm:pt-48">
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center gap-3 rounded-full border border-[#ff1493]/50 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#ff1493]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff1493] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff1493]" />
              </span>
              Referral Partner Program Open
            </span>
            <h1
              className="mt-8 font-extrabold italic leading-[0.95]"
              style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}
            >
              One introduction. <br />
              <span className="text-[#ff1493]">$41,476</span> paid out. <br />
              Zero management.
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-2xl font-bold italic leading-tight sm:text-4xl">
              Refer a creator to Mini Cookies.
            </p>
            <div className="mx-auto mt-6 max-w-3xl space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                If they qualify and start earning, you get a % share of their revenue, every month,
                for as long as they’re active.
              </p>
            </div>
            <div className="mt-10 flex justify-center">
              <span className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#ff1493]/40 bg-[#ff1493]/10 px-5 py-3 text-xs font-semibold tracking-wide text-[#ff1493] sm:text-sm">
                $86,780 paid to date · One introduction. Recurring Monthly income. No selling. No
                managing. No content.
              </span>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <CTAButton label="See How It Works →" href="#referral-engine" color="pink" className="px-6 py-3 text-xs" />
              <CTAButton label="See the leaderboard →" href="/leaderboard" variant="outline" className="px-6 py-3 text-xs" />
            </div>
          </div>
        </section>

        {/* Section 01 · The Referral Earnings Engine */}
        <section id="referral-engine" className="scroll-mt-10 border-t border-white/10 px-6 py-20 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionDivider number="01" />
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#ff1493]">
                I · The Referral Earnings Engine
              </p>
              <h2
                className="font-extrabold italic leading-tight"
                style={{ fontSize: 'clamp(2.3rem, 5vw, 4.5rem)' }}
              >
                Here’s Exactly How <Pink>Money Flows To You.</Pink>
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-[#ff1493]/40 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">Paid to date</p>
                <p className="mt-4 text-4xl font-extrabold italic text-white sm:text-5xl">
                  <span className="text-[#ff1493]">$86,780</span>
                </p>
                <p className="mt-4 text-sm leading-7 text-white/55 sm:text-base">
                  paid out to people who made an introduction.
                </p>
              </div>
              <div className="rounded-2xl border border-[#ff1493]/40 bg-[#ff1493]/5 p-6 transition-colors duration-300 hover:border-[#ff1493]/70 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">Our top referrer</p>
                <p className="mt-4 text-4xl font-extrabold italic text-white sm:text-5xl">
                  <span className="text-[#ff1493]">$41,476</span>
                </p>
                <p className="mt-4 text-sm leading-7 text-white/55 sm:text-base">
                  to one referrer, from a single introduction, still earning.
                </p>
              </div>
            </div>

            <div className="mt-20 mb-12 text-center">
              <h3 className="text-2xl font-bold italic sm:text-4xl">
                How it works — <Pink>One Introduction. Paid Every Month.</Pink>
              </h3>
            </div>

            <div className="mx-auto flex max-w-3xl flex-col items-stretch">
              {flowSteps.map((step, i) => (
                <div key={step.title} className="flex flex-col items-center">
                  <div
                    className={`w-full rounded-2xl border p-6 text-center transition-colors duration-300 sm:p-8 ${
                      step.highlight
                        ? 'border-[#ff1493]/50 bg-[#ff1493]/5'
                        : 'border-white/10 bg-white/[0.02] hover:border-[#ff1493]/40'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
                      <h4 className="text-xl font-bold italic text-white sm:text-2xl">{step.title}</h4>
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide ${
                          step.highlight
                            ? 'bg-[#ff1493] text-black'
                            : 'bg-white/5 text-white/60 border border-white/10'
                        }`}
                      >
                        {step.tag}
                      </span>
                    </div>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div className="flex flex-col items-center py-3">
                      <div className="h-4 w-px bg-[#ff1493]/40" />
                      <span className="text-[#ff1493]">↓</span>
                      <div className="h-4 w-px bg-[#ff1493]/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 02 · The Comparison */}
        <section className="border-t border-white/10 px-6 py-20 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionDivider number="02" />
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#ff1493]">
                II · The Comparison
              </p>
              <h2
                className="font-extrabold italic leading-tight"
                style={{ fontSize: 'clamp(2.3rem, 5vw, 4.5rem)' }}
              >
                Most Agencies Pay You Only Once. <Pink>With Us You Earn Every Single Month.</Pink>
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                <span className="mb-6 inline-flex rounded-full border border-white/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white/50">
                  The Industry Standard
                </span>
                <ul className="space-y-4">
                  {industryStandard.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-white/55 sm:text-base">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[#ff1493]/50 bg-[#ff1493]/5 p-6 sm:p-8">
                <span className="mb-6 inline-flex rounded-full bg-[#ff1493] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-black">
                  Our Referral Earnings Engine
                </span>
                <ul className="space-y-4">
                  {ourEngine.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-white/75 sm:text-base">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff1493]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#ff1493]/30 bg-[#ff1493]/5 p-6 text-center sm:p-8">
              <p className="text-base font-bold italic text-white/85 sm:text-lg">
                Month after month. <span className="text-[#ff1493]">41x more money.</span> From that
                one conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 03 · Who This Is For */}
        <section className="border-t border-white/10 px-6 py-20 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionDivider number="03" />
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#ff1493]">
                III · Who This Is For
              </p>
              <h2
                className="font-extrabold italic leading-tight"
                style={{ fontSize: 'clamp(2.3rem, 5vw, 4.5rem)' }}
              >
                Who Can <Pink>Actually Earn</Pink> From This.
              </h2>
            </div>

            <div className="space-y-4">
              {audience.map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-[#ff1493]/50 sm:p-7"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="pt-1 text-sm font-medium tracking-[0.25em] text-[#ff1493]">
                      {item.number}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-bold uppercase italic leading-tight text-white sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-4 max-w-4xl text-sm leading-7 text-white/70 sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 04 · The Reality */}
        <section className="border-t border-white/10 px-6 py-20 sm:py-32">
          <div className="mx-auto max-w-4xl">
            <SectionDivider number="04" />
            <div className="text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#ff1493]">
                IV · The Reality
              </p>
              <h2
                className="font-extrabold italic leading-tight"
                style={{ fontSize: 'clamp(2.3rem, 5vw, 4.5rem)' }}
              >
                You Already Know How This Works, <Pink>You’ve Done It Before.</Pink>
              </h2>
              <p className="mx-auto mt-8 max-w-3xl text-sm leading-7 text-white/60 sm:text-base">
                You introduce and find work for other people in restaurants, office, services,
                professionals, side hustles, one-time gigs, part-time events. That’s all this is. The
                difference is that when your introduction leads to real results, you get a % share,
                every single month, for as long as that creator stays active with Mini Cookies. If
                you know someone who creates content, or who’s been thinking about it, she’s likely
                leaving money on the table without a professional team behind her. That’s where we
                come in, and that’s where your commission starts.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <span className="inline-flex rounded-full bg-[#ff1493] px-4 py-2 text-xs font-bold uppercase tracking-wide text-black">
                  One introduction.
                </span>
                <span className="inline-flex rounded-full bg-[#ff1493] px-4 py-2 text-xs font-bold uppercase tracking-wide text-black">
                  Monthly income.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 05 · How It Works */}
        <section className="border-t border-white/10 px-6 py-20 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionDivider number="05" />
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#ff1493]">
                V · How It Works
              </p>
              <h2
                className="font-extrabold italic leading-tight"
                style={{ fontSize: 'clamp(2.3rem, 5vw, 4.5rem)' }}
              >
                Here’s What Happens <Pink>After You Apply.</Pink>
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {applySteps.map((step) => (
                <div
                  key={step.number}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-[#ff1493]/40 sm:p-8"
                >
                  <span className="pointer-events-none absolute -right-2 -top-4 select-none text-[6rem] font-extrabold italic leading-none text-white/[0.04] sm:text-[7rem]">
                    {step.number}
                  </span>
                  <p className="text-xs font-medium tracking-[0.25em] text-[#ff1493]">{step.number}</p>
                  <h3 className="mt-4 text-xl font-bold italic leading-tight text-white sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="/leaderboard"
                className="text-sm font-semibold uppercase tracking-wide text-[#ff1493] underline decoration-[#ff1493]/40 underline-offset-4 transition-colors hover:text-white"
              >
                See where top referrers rank on the leaderboard →
              </a>
            </div>
          </div>
        </section>

        {/* Section 08 · FAQ */}
        <section className="border-t border-white/10 px-6 py-20 sm:py-32">
          <div className="mx-auto max-w-4xl">
            <SectionDivider number="08" />
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#ff1493]">
                VIII · FAQ
              </p>
              <h2
                className="font-extrabold italic leading-tight"
                style={{ fontSize: 'clamp(2.3rem, 5vw, 4.5rem)' }}
              >
                Your Questions, <Pink>Answered…</Pink>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const open = openFaq === i;
                return (
                  <div
                    key={faq.question}
                    className={`overflow-hidden rounded-2xl border bg-white/[0.02] transition-colors duration-300 ${
                      open ? 'border-[#ff1493]/50' : 'border-white/10 hover:border-[#ff1493]/50'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <span className="text-base font-bold italic text-white sm:text-lg">{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#ff1493] transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}
                        strokeWidth={2}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                        open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p className="border-t border-white/10 px-5 pb-6 pt-5 text-sm leading-7 text-white/60 sm:px-6 sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 09 · It’s Now or Never */}
        <section className="border-t border-white/10 px-6 py-20 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionDivider number="09" />
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#ff1493]">
                IX · It’s Now or Never
              </p>
              <h2
                className="font-extrabold italic leading-tight"
                style={{ fontSize: 'clamp(2.3rem, 5vw, 4.5rem)' }}
              >
                After one month, one of the both scenarios below is <Pink>100% true.</Pink>
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                <span className="mb-6 inline-flex rounded-full border border-white/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white/50">
                  Scenario 1 · Close This Page
                </span>
                <p className="text-sm leading-7 text-white/50 sm:text-base">
                  You close this tab. Maybe you bookmark it. Maybe you forget. Either way, every
                  introduction you make from this point forward pays you exactly nothing, maybe even
                  worse, you completely let this fade away. Your friend finds an agency on her own, or
                  doesn’t. The revenue she generates goes to someone else. You never see a cent of it.
                </p>
              </div>
              <div className="rounded-2xl border border-[#ff1493]/50 bg-[#ff1493]/5 p-6 sm:p-8">
                <span className="mb-6 inline-flex rounded-full bg-[#ff1493] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-black">
                  Scenario 2 · Apply Today
                </span>
                <p className="text-sm leading-7 text-white/75 sm:text-base">
                  You take less than 15 seconds to apply. You introduce a talent that you already know,
                  or source a talent from social media or your social circle, or any other method that
                  it’s good for you. And a month from now, you open your banking account to a deposit
                  you didn’t have to work for. That’s the entire difference. One message, And it starts
                  a revenue stream that pays you for years.
                </p>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <CTAButton label="Apply Now" href="/#application" color="pink" />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-white/10 px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="font-extrabold italic leading-tight"
              style={{ fontSize: 'clamp(2.3rem, 5vw, 4.5rem)' }}
            >
              Make One Introduction. <Pink>Get Paid Every Month.</Pink>
            </h2>
            <div className="mt-10 flex justify-center">
              <CTAButton label="Apply Now" href="/#application" color="pink" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
