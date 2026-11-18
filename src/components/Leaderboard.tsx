import Navbar from './Navbar';
import Footer from './Footer';
import CTAButton from './CTAButton';

type Ranking = {
  rank: string;
  referrer: string;
  status: string;
  creators: string;
  retention: string;
  commission: string;
  top: boolean;
};

const rankings: Ranking[] = [
  { rank: '01', referrer: 'C.M.', status: 'Active referrer', creators: '1', retention: '16 mo', commission: '$41,476', top: true },
  { rank: '02', referrer: 'R.J.S.', status: 'Active referrer', creators: '1', retention: '11 mo', commission: '$25,443', top: false },
  { rank: '03', referrer: 'M.E.', status: 'Active referrer', creators: '1', retention: '7 mo', commission: '$6,610', top: false },
];

const metrics = [
  { value: '$86,780', label: 'Paid to Referrers' },
  { value: '$41,476', label: 'Top Referrer, Still Earning' },
  { value: '$41,476', label: 'From One Introduction' },
];

const questions = [
  {
    num: '01',
    q: 'How is my commission calculated?',
    a: "You earn a share of your creator's platform revenue every month she's active and working with us. The earnings column on the board shows the lifetime running rate. Same % share for every referrer, no tiers. The same payment structure applies for everyone.",
  },
  {
    num: '02',
    q: 'What are the payout options?',
    a: 'We can receive your earnings via Crypto, PayPal, wire, bank transfer, or Online Banking Apps such as Revolut, Wise, Skrill.',
  },
  {
    num: '03',
    q: 'When do payouts happen?',
    a: 'Your earnings are sent to you monthly with no minimums. If you earn only one dollar, you receive your dollar. There is no cap and no expiration: as long as the creator you introduced is active, you keep earning your revenue-share % every month.',
  },
];

function SectionDivider({ number }: { number: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">{number}</span>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

export default function Leaderboard() {
  return (
    <div className="min-h-screen bg-jet-black text-pure-white">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="px-6 pb-20 pt-36 sm:pb-32 sm:pt-48">
          <div className="mx-auto max-w-5xl text-center">
            {/* Breadcrumb */}
            <nav className="mb-10 flex items-center justify-center gap-2 text-xs tracking-wide text-white/30">
              <a href="/referrals" className="transition-colors hover:text-[#ff1493]">Referrals</a>
              <span>/</span>
              <span className="text-white/50">Leaderboard</span>
            </nav>

            {/* Eyebrow */}
            <span className="inline-flex items-center gap-3 rounded-full border border-[#ff1493]/40 bg-[#ff1493]/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#ff1493]">
              Referral Program · Live Rankings
            </span>

            {/* Headline */}
            <h1
              className="mt-8 font-extrabold italic leading-[0.95]"
              style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}
            >
              Referrer <span className="text-[#ff1493]">Leaderboard.</span>
            </h1>

            {/* Sub-headline & proof copy */}
            <p className="mx-auto mt-8 max-w-3xl text-2xl font-bold italic leading-tight sm:text-4xl">
              The top three of our active referrers.
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/60 sm:text-base">
              See what happens when the right people refer the right talent. Then ask yourself who you already know.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/60 sm:text-base">
              One introduction has paid out <span className="text-[#ff1493] font-semibold">$41,476</span> and is still paying.
            </p>
            <p className="mx-auto mt-2 max-w-3xl text-sm leading-7 text-white/60 sm:text-base">
              Same terms for every referrer. No cap, no expiration.
            </p>

            {/* Action row */}
            <div className="mt-10 flex flex-col items-center gap-3">
              <CTAButton label="Refer Now →" href="/referrals" color="pink" />
              <span className="text-xs text-white/35">We'll get back to you within 48 hours</span>
            </div>
          </div>
        </section>

        {/* Section 01 · The Numbers */}
        <section className="border-t border-white/10 px-6 py-20 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionDivider number="01" />
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#ff1493]">I · The Numbers</p>
              <h2
                className="font-extrabold italic leading-tight"
                style={{ fontSize: 'clamp(2.3rem, 5vw, 4.5rem)' }}
              >
                Real Numbers, <span className="text-[#ff1493]">Real Commissions.</span>
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center transition-colors duration-300 hover:border-[#ff1493]/40 sm:p-8"
                >
                  <p
                    className="text-4xl font-extrabold italic sm:text-5xl"
                    style={{ color: '#ff1493' }}
                  >
                    {m.value}
                  </p>
                  <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-white/45">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 02 · The Rankings */}
        <section className="border-t border-white/10 px-6 py-20 sm:py-32">
          <div className="mx-auto max-w-5xl">
            <SectionDivider number="02" />
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#ff1493]">II · The Rankings</p>
              <h2
                className="font-extrabold italic leading-tight"
                style={{ fontSize: 'clamp(2.3rem, 5vw, 4.5rem)' }}
              >
                They Are Earning At This Very Moment <span className="text-[#ff1493]">While You Reading This</span>
              </h2>
            </div>

            {/* Table header bar */}
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold italic">Rankings</h3>
                <p className="mt-1 text-sm text-white/45">Sorted by monthly revenue.</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#ff1493]/30 bg-[#ff1493]/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#ff1493]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff1493] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff1493]" />
                </span>
                Live
              </span>
            </div>

            {/* Desktop table */}
            <div className="hidden overflow-hidden rounded-2xl border border-white/10 sm:block">
              {/* Header row */}
              <div className="grid grid-cols-6 bg-white/[0.03]">
                <div className="p-4 text-xs tracking-[0.2em] uppercase text-white/40 font-medium border-r border-white/10">Rank</div>
                <div className="p-4 text-xs tracking-[0.2em] uppercase text-white/40 font-medium border-r border-white/10">Referrer</div>
                <div className="p-4 text-xs tracking-[0.2em] uppercase text-white/40 font-medium border-r border-white/10">Status</div>
                <div className="p-4 text-xs tracking-[0.2em] uppercase text-white/40 font-medium border-r border-white/10 text-center">Creators</div>
                <div className="p-4 text-xs tracking-[0.2em] uppercase text-white/40 font-medium border-r border-white/10 text-center">Avg Retention</div>
                <div className="p-4 text-xs tracking-[0.2em] uppercase text-white/40 font-medium text-right">Commission Earned</div>
              </div>

              {rankings.map((r) => (
                <div
                  key={r.rank}
                  className={`grid grid-cols-6 border-t border-white/10 transition-colors ${
                    r.top ? 'border-l-2 border-l-[#ff1493] bg-[#ff1493]/[0.03]' : 'hover:bg-white/[0.01]'
                  }`}
                >
                  <div className="p-4 text-sm font-bold text-white border-r border-white/10 flex items-center">{r.rank}</div>
                  <div className="p-4 text-sm font-medium text-white border-r border-white/10 flex items-center">{r.referrer}</div>
                  <div className="p-4 border-r border-white/10 flex items-center">
                    <span className="rounded-full bg-[#ff1493]/15 border border-[#ff1493]/40 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-[#ff1493]">
                      {r.status}
                    </span>
                  </div>
                  <div className="p-4 text-sm text-white/70 font-light border-r border-white/10 text-center flex items-center justify-center">{r.creators}</div>
                  <div className="p-4 text-sm text-white/70 font-light border-r border-white/10 text-center flex items-center justify-center">{r.retention}</div>
                  <div className="p-4 text-sm font-extrabold flex items-center justify-end" style={{ color: '#ff1493' }}>{r.commission}</div>
                </div>
              ))}
            </div>

            {/* Mobile cards */}
            <div className="space-y-4 sm:hidden">
              {rankings.map((r) => (
                <div
                  key={r.rank}
                  className={`rounded-2xl border p-5 ${
                    r.top ? 'border-[#ff1493]/50 bg-[#ff1493]/[0.03]' : 'border-white/10 bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-white">{r.rank}</span>
                      <span className="text-base font-medium text-white">{r.referrer}</span>
                    </div>
                    <span className="text-lg font-extrabold" style={{ color: '#ff1493' }}>{r.commission}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-[#ff1493]/15 border border-[#ff1493]/40 px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-[#ff1493]">
                        {r.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm pt-2">
                      <span className="text-white/45">Creators</span>
                      <span className="text-white/70 font-light">{r.creators}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/45">Avg Retention</span>
                      <span className="text-white/70 font-light">{r.retention}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 03 · Your Commission */}
        <section className="border-t border-white/10 px-6 py-20 sm:py-32">
          <div className="mx-auto max-w-4xl">
            <SectionDivider number="03" />
            <div className="rounded-2xl border border-[#ff1493]/40 bg-[#ff1493]/[0.03] p-8 text-center sm:p-12">
              <h2
                className="font-extrabold italic leading-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                These Earnings Can Be Yours, <span className="text-[#ff1493]">Just With One Single Introduction.</span>
              </h2>

              <div className="mt-8 rounded-xl border border-[#ff1493]/30 bg-[#ff1493]/5 px-6 py-4">
                <p className="text-base font-bold italic text-white/85 sm:text-lg">
                  $86,780 paid to referrers so far · $41,476 earned by our top referrer
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-sm text-white/50 font-light">
                  Same rate for every referrer · Paid monthly, no minimums · No cap, no expiration
                </p>
              </div>

              <div className="mt-10 flex justify-center">
                <CTAButton label="Refer Now →" href="/referrals" color="pink" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 04 · Questions */}
        <section className="border-t border-white/10 px-6 py-20 sm:py-32">
          <div className="mx-auto max-w-4xl">
            <SectionDivider number="04" />
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#ff1493]">IV · Questions</p>
              <h2
                className="font-extrabold italic leading-tight"
                style={{ fontSize: 'clamp(2.3rem, 5vw, 4.5rem)' }}
              >
                Questions You're <span className="text-[#ff1493]">Probably Asking</span>
              </h2>
            </div>

            <div className="space-y-4">
              {questions.map((item) => (
                <div
                  key={item.num}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-[#ff1493]/40 sm:p-8"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="pt-1 text-sm font-medium tracking-[0.25em] text-[#ff1493]">{item.num}</span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-bold italic leading-tight text-white sm:text-2xl">{item.q}</h3>
                      <p className="mt-4 max-w-4xl text-sm leading-7 text-white/60 sm:text-base">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
