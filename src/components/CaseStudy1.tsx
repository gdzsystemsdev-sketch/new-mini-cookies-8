import { useState, type FormEvent, type ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { getSupabase } from '../lib/supabase';

type ProofItem = {
  label: string;
  value: string;
};

type OperationCardProps = {
  number: string;
  title: string;
  children: ReactNode;
  proofTitle: string;
  proofItems: ProofItem[];
};

type ApplicationFormState = {
  stage_name: string;
  contact_handle: string;
  experience: string;
  availability: string;
};

type FinancialRow = {
  engine: string;
  gross: string;
  agency: string;
  net: string;
  effort: string;
};

type ComparisonRow = {
  metric: string;
  before: string;
  after: string;
  impact: string;
};

type GrowthRow = {
  phase: string;
  gross: string;
  agency: string;
  net: string;
  milestones: string;
  peak?: boolean;
};

const heroStats = [
  {
    label: 'Peak Monthly Net Take-Home',
    value: '$21,500.00 / mo',
    detail: '(Peak Gross Revenue: $34,200.00 / mo)',
  },
  {
    label: 'Breakout Window',
    value: '60-Day Sprint',
    detail: '(vs. Entire Prior Year)',
  },
  {
    label: 'Active Income Streams',
    value: '10 Total',
    detail: '(5 Live Streaming Platforms + 5 Off-Platform & Subscription Channels)',
  },
  {
    label: 'Weekly Streaming Schedule',
    value: '8 hrs/wk',
    detail: '(Down from 65+ hrs/wk total grind)',
  },
];

const bottlenecks = [
  {
    title: 'Trapped on One Platform',
    text: 'Streaming on a single site with manual setup, missing out on peak global traffic windows and multi-platform reach.',
  },
  {
    title: 'Endless Offline Messaging & Admin',
    text: 'Trying to reply to every DM across every timezone alone, manually handling profile updates, and troubleshooting technical drops instead of focusing on her broadcast.',
  },
  {
    title: 'Missed High-Ticket Spenders',
    text: 'Entertaining live viewers while answering messages simultaneously caused high-spending regulars to drop off before converting.',
  },
];

const goals = [
  'Scale her monthly net take-home income significantly without burning out.',
  'Hand over 100% of daily live-room chatting and 24/7 off-platform messaging.',
  'Fully optimize her profiles, pricing menus, and multi-stream tech setup.',
  'Build and scale recurring subscription revenue on her "blue page".',
];

const financialRows: FinancialRow[] = [
  {
    engine: 'Live Streaming (5 Platforms)',
    gross: '$12,600.00',
    agency: '50% ($6,300.00)',
    net: '$6,300.00',
    effort: 'Live on camera only',
  },
  {
    engine: 'Off-Platform Engine (WhatsApp, TG, Snap, etc.)',
    gross: '$9,800.00',
    agency: '75% ($7,350.00)',
    net: '$2,450.00 (25%)',
    effort: '0 hrs (100% 24/7 team)',
  },
  {
    engine: '"Blue Page" (OnlyFans) & Subscriptions',
    gross: '$11,800.00',
    agency: '50% ($5,900.00)',
    net: '$5,900.00',
    effort: '0 hrs (Fully managed 24/7)',
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    metric: 'Monthly Net Take-Home',
    before: '~$1,122.00 / mo',
    after: '$14,650.00 / mo (Peak)',
    impact: 'Scaled realism in 60 days',
  },
  {
    metric: 'Weekly Hours Worked',
    before: '65+ hrs / week (stream + admin)',
    after: '8 hrs / week (stream only)',
    impact: 'Zero backend or DM work',
  },
  {
    metric: 'Streaming Platforms',
    before: '1 platform (manual setup)',
    after: '5 simultaneous platforms',
    impact: '5× viewer reach per hour',
  },
  {
    metric: 'Off-Platform Revenue',
    before: 'Minimal / manual replies',
    after: '5 apps managed 24/7',
    impact: 'Passive 24/7 income engine',
  },
  {
    metric: 'Privacy & Tech',
    before: 'Solo troubleshooting & basic settings',
    after: 'Full Geo-Block, DMCA & Tech Support',
    impact: '100% identity protection',
  },
];

const growthRows: GrowthRow[] = [
  {
    phase: 'Months 1–12 (Solo Phase)',
    gross: '~$1,650.00 avg',
    agency: '0% (Solo)',
    net: '~$1,122.00 Net / mo',
    milestones: 'Grinding 65+ hrs/wk on 1 platform, manual DMs, constant burnout and technical bottlenecks.',
  },
  {
    phase: 'Month 13 (Onboarding & Setup)',
    gross: '$6,400.00',
    agency: '50% / 75%',
    net: '$3,100.00 Net',
    milestones: 'Full technical deployment: 5-platform simulcast, geo-blocking, alias setup, and initial profile overhaul.',
  },
  {
    phase: 'Month 14 (30-Day Sprint Mark)',
    gross: '$14,800.00',
    agency: '50% / 75%',
    net: '$6,950.00 Net',
    milestones: 'Live room chat team activated; external messaging apps (WhatsApp/Telegram) launched for VIPs.',
  },
  {
    phase: 'Month 15 (Slight Dip / Adjustment)',
    gross: '$11,200.00',
    agency: '50% / 75%',
    net: '$5,200.00 Net',
    milestones: 'A slower month with traffic normalization and testing new streaming hours, proving consistency through dips.',
  },
  {
    phase: 'Month 16 (Peak Breakthrough Sprint)',
    gross: '$34,200.00',
    agency: '50% / 75%',
    net: '$14,650.00 Net',
    milestones: 'Fully optimized 10-stream ecosystem hitting peak performance, whale tipping, and OnlyFans subscriber scaling.',
    peak: true,
  },
];

const initialApplication: ApplicationFormState = {
  stage_name: '',
  contact_handle: '',
  experience: '',
  availability: '',
};

function SectionDivider({ number }: { number: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="text-sm font-medium uppercase tracking-[0.3em] text-white/40">{number}</span>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

function OperationCard({ number, title, children, proofTitle, proofItems }: OperationCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-[#ff1493]/50">
      <div className="p-6 sm:p-8 lg:p-10">
        <div className="flex items-start gap-4 sm:gap-6">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff1493] text-sm font-bold text-black">
            {number}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-xl font-bold italic leading-tight text-white sm:text-2xl">{title}</h3>
            <div className="mt-7 space-y-6 text-sm leading-7 text-white/70 sm:text-base">{children}</div>
            <div className="mt-8 rounded-xl border border-[#ff1493]/30 bg-[#ff1493]/[0.04] p-5 sm:p-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#ff1493]">{proofTitle}</h4>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {proofItems.map((item) => (
                  <div key={item.label} className="border-t border-white/10 pt-3">
                    <p className="text-xs uppercase tracking-[0.12em] text-white/40">{item.label}</p>
                    <p className="mt-1 text-sm font-medium leading-6 text-white/85">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function TableShell({ children, minWidth = 'min-w-[900px]' }: { children: ReactNode; minWidth?: string }) {
  return <div className="overflow-x-auto rounded-2xl border border-white/10"><div className={minWidth}>{children}</div></div>;
}

function CaseStudyApplication() {
  const [form, setForm] = useState<ApplicationFormState>(initialApplication);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const update = (field: keyof ApplicationFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.stage_name.trim() || !form.contact_handle.trim() || !form.experience || !form.availability) {
      setError('Please complete every field before applying.');
      return;
    }

    const supabase = getSupabase();
    if (!supabase) {
      setError('Applications are temporarily unavailable. Please try again later.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const { error: insertError } = await supabase.from('case_study_applications').insert({
        stage_name: form.stage_name.trim(),
        contact_handle: form.contact_handle.trim(),
        experience: form.experience,
        availability: form.availability,
      });
      if (insertError) throw insertError;
      setSuccess(true);
    } catch {
      setError('We could not send your application. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-2xl border border-[#ff1493]/50 bg-[#ff1493]/[0.04] px-6 py-16 text-center sm:px-10">
        <h3 className="text-3xl font-bold italic text-white">Application Received</h3>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/60">Thank you for applying. Our team will review your details and reach out to you.</p>
      </div>
    );
  }

  const inputClass = 'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#ff1493]/70 focus:bg-white/[0.05]';
  const selectProps = { style: { colorScheme: 'dark' as const } };

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-[#ff1493]/50 bg-[#ff1493]/[0.04] p-6 sm:p-10">
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div>
          <label htmlFor="case-study-stage-name" className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/55">Stage Name / Alias</label>
          <input id="case-study-stage-name" value={form.stage_name} onChange={(event) => update('stage_name', event.target.value)} placeholder="No legal name or photos required to apply" className={inputClass} />
        </div>
        <div>
          <label htmlFor="case-study-contact" className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/55">Preferred Contact Handle</label>
          <input id="case-study-contact" value={form.contact_handle} onChange={(event) => update('contact_handle', event.target.value)} placeholder="WhatsApp or Telegram" className={inputClass} />
        </div>
        <div>
          <label htmlFor="case-study-experience" className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/55">Current Experience</label>
          <select id="case-study-experience" value={form.experience} onChange={(event) => update('experience', event.target.value)} className={`${inputClass} appearance-none`} {...selectProps}>
            <option value="">Select your experience</option>
            <option value="Complete Beginner">Complete Beginner</option>
            <option value="Solo Creator">Solo Creator</option>
            <option value="Switching Agencies">Switching Agencies</option>
          </select>
        </div>
        <div>
          <label htmlFor="case-study-availability" className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/55">Weekly Availability</label>
          <select id="case-study-availability" value={form.availability} onChange={(event) => update('availability', event.target.value)} className={`${inputClass} appearance-none`} {...selectProps}>
            <option value="">Select your availability</option>
            <option value="Minimum 20 hrs/week commitment">Minimum 20 hrs/week commitment</option>
          </select>
        </div>
        {error && <p className="rounded-xl border border-red-400/30 bg-red-400/5 px-4 py-3 text-sm text-red-300" role="alert">{error}</p>}
        <button type="submit" disabled={submitting} className="inline-flex w-full items-center justify-center rounded-full bg-[#ff1493] px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-[1.01] hover:bg-[#ff1493]/90 disabled:cursor-not-allowed disabled:opacity-60">
          {submitting ? 'Submitting Application' : 'Apply Now'}
        </button>
      </form>
    </div>
  );
}

export default function CaseStudy1() {
  return (
    <div className="min-h-screen bg-jet-black text-pure-white">
      <Navbar />
      <main className="pt-32 sm:pt-40">
        <div className="mx-auto max-w-6xl px-6">
          <section className="pb-20 sm:pb-32">
            <nav className="mb-10 flex items-center gap-2 text-xs tracking-wide text-white/35" aria-label="Breadcrumb">
              <a href="/" className="transition-colors hover:text-[#ff1493]">Home</a>
              <span>/</span>
              <span>Case Study</span>
              <span>/</span>
              <span className="text-white/60">Sara</span>
            </nav>
            <h1 className="max-w-5xl font-extrabold italic leading-[0.98] tracking-tight" style={{ fontSize: 'clamp(2.75rem, 7vw, 6.75rem)' }}>
              Most Agencies Show You Huge Numbers. Nobody Shows You What You Actually Take Home.
            </h1>
            <p className="mt-8 max-w-4xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              Most agencies brag about massive gross revenue screenshots while hiding their cuts and leaving you guessing what actually hits your bank account. At Mini Cookies, we believe in complete transparency. Here is the exact breakdown of how Sara went from a burnt-out solo creator trapped on one platform to scaling across 10 income streams—showing her Total Gross Revenue, Agency Share, and Exact Net Take-Home Pay across every single service.
            </p>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="bg-[#0d0d0d] p-6 sm:p-7">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/45">{stat.label}</p>
                  <p className="mt-5 text-2xl font-extrabold italic leading-tight text-[#ff1493] sm:text-3xl">{stat.value}</p>
                  <p className="mt-3 text-sm leading-6 text-white/55">{stat.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-white/10 py-20 sm:py-32">
            <SectionDivider number="01" />
            <div className="mb-12 max-w-4xl">
              <h2 className="font-extrabold italic leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>Before Mini Cookies. The Solo Bottleneck & Sara&apos;s Goals.</h2>
              <p className="mt-6 text-base leading-7 text-white/60 sm:text-lg sm:leading-8">Before partnering with Mini Cookies, Sara was working over 65 hours a week as an independent creator while plateauing at roughly $1,122/month. Operating alone meant carrying every technical, administrative, and sales task on her own shoulders.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                <h3 className="text-xl font-bold italic text-white sm:text-2xl">The Solo Bottlenecks</h3>
                <div className="mt-8 space-y-7">{bottlenecks.map((item) => <div key={item.title}><h4 className="text-base font-bold text-white sm:text-lg">{item.title}</h4><p className="mt-2 text-sm leading-7 text-white/55 sm:text-base">{item.text}</p></div>)}</div>
              </div>
              <div className="rounded-2xl border border-[#ff1493]/50 bg-[#ff1493]/[0.04] p-6 sm:p-8">
                <h3 className="text-xl font-bold italic text-white sm:text-2xl">Sara&apos;s Core Goals When Joining</h3>
                <div className="mt-8 space-y-5">{goals.map((goal, index) => <div key={goal} className="flex items-start gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ff1493] text-xs font-bold text-black">{String(index + 1).padStart(2, '0')}</span><p className="pt-1 text-sm leading-7 text-white/75 sm:text-base">{goal}</p></div>)}</div>
              </div>
            </div>
          </section>

          <section className="border-t border-white/10 py-20 sm:py-32">
            <SectionDivider number="02" />
            <div className="mb-12 max-w-4xl">
              <h2 className="font-extrabold italic leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>How the Operation Runs. The Infrastructure & The System Behind Sara&apos;s Results</h2>
              <p className="mt-6 text-base leading-7 text-white/60 sm:text-lg sm:leading-8">When Sara joined Mini Cookies, we built a dedicated team around her and deployed our 10-source monetization ecosystem so her only job was showing up on camera with great energy.</p>
            </div>
            <div className="space-y-5">
              <OperationCard number="01" title="Multi-Platform Streaming & Enterprise Privacy Shielding" proofTitle="Verified Audience & Spender Proof — Live Streaming Audience & Top 3 Tippers (5 Platforms Combined)" proofItems={[{ label: 'Total Combined Followers', value: '34,500+ followers across all 5 streaming platforms' }, { label: 'Top Tipper #1', value: '$3,450.00 in live room tips & private shows' }, { label: 'Top Tipper #2', value: '$2,800.00 in live room tips & private shows' }, { label: 'Top Tipper #3', value: '$2,100.00 in live room tips & private shows' }]}>
                <p><strong className="font-semibold text-white">5-Platform Simultaneous Multi-Streaming:</strong> Our Tech Support team configured low-latency multi-streaming across 5 top platforms at once—multiplying Sara&apos;s live audience and room traffic for the exact same time spent on camera.</p>
                <p><strong className="font-semibold text-white">Full Identity & Geo-Blocking Protection:</strong> Before going live, we set up a dedicated stage alias, municipal/regional/national geo-blocking so nobody in her area can find her, and automated DMCA content monitoring.</p>
                <p><strong className="font-semibold text-white">Profile & Storefront Optimization:</strong> Dedicated Profile Operators overhauled her bios, thumbnails, media folders, and tipping menus to turn casual room visitors into paying buyers.</p>
              </OperationCard>
              <OperationCard number="02" title="Real-Time Stream-Platforms Sales Team (Live Ghost-Writers)" proofTitle="Nested Proof Sub-Card — Live Streaming Audience & Top 3 Tippers (5 Platforms Combined)" proofItems={[{ label: 'Total Combined Followers', value: '34,500+ followers across all 5 streaming platforms' }, { label: 'Top Tipper #1', value: '$3,450.00 in live room tips & private shows' }, { label: 'Top Tipper #2', value: '$2,800.00 in live room tips & private shows' }, { label: 'Top Tipper #3', value: '$2,100.00 in live room tips & private shows' }]}>
                <p><strong className="font-semibold text-white">Live Room Domination:</strong> On every single broadcast, specialized stream ghost-writers operate Sara&apos;s chat in real time—greeting viewers the second they enter, spotting high-spending whales immediately, and driving tips and private invites while she focuses 100% on performing.</p>
                <p><strong className="font-semibold text-white">1-on-1 Coaching & Peak-Hour Strategy:</strong> Her Personal Coach and Account Manager track live metrics daily, guiding her on peak traffic hours, show psychology, and custom pricing mechanics.</p>
              </OperationCard>
              <OperationCard number="03" title="24/7 Off-Platform Earning Engine (Passive Round-the-Clock Sales)" proofTitle="Nested Proof Sub-Card — Off-Platform Loyal VIP Audience & Top 3 Spenders" proofItems={[{ label: 'Active VIP Funnel Size', value: '180 active off-platform contacts across WhatsApp, Telegram, Snapchat & Signal' }, { label: 'VIP Fan #1', value: '$7,500.00 total spend (Custom content & daily relationship management)' }, { label: 'VIP Fan #2', value: '$5,200.00 total spend (High-ticket monthly packages)' }, { label: 'VIP Fan #3', value: '$4,100.00 total spend (Recurring off-stream tips & requests)' }]}>
                <p><strong className="font-semibold text-white">5 Done-For-You Messaging Channels:</strong> We set up and manage external accounts across WhatsApp, Telegram, Snapchat, Signal, and Viber. Fans on stream pay high direct tips to unlock access to these apps.</p>
                <p><strong className="font-semibold text-white">24/7 Relationship & High-Ticket Sales Team:</strong> Once fans land on messaging apps, our dedicated off-platform sales team takes over 24/7 in structured shifts—building genuine long-term connections in Sara&apos;s voice and closing high-ticket custom sales around the clock while she is offline or sleeping.</p>
              </OperationCard>
              <OperationCard number="04" title={'"Blue Page" (OnlyFans) & Platform Subscriptions'} proofTitle="Nested Proof Sub-Card — OnlyFans Audience & Revenue Proof" proofItems={[{ label: 'Total Active Subscribers', value: '1,450 paying subscribers' }, { label: 'Monthly Subscription & PPV Gross', value: '$11,800.00 (Creator Net Take-Home: $5,900.00)' }]}>
                <p><strong className="font-semibold text-white">Automated Traffic Forwarding:</strong> Across all 5 live streaming platforms, traffic is continuously funneled into her OnlyFans ("blue page") and native platform subscription tiers.</p>
                <p><strong className="font-semibold text-white">24/7 Full Account Management:</strong> Our team handles content scheduling, DM sales, and subscriber retention 24/7, turning live stream viewers into predictable monthly recurring revenue.</p>
              </OperationCard>
            </div>
          </section>

          <section className="border-t border-white/10 py-20 sm:py-32">
            <SectionDivider number="03" />
            <div className="mb-12 max-w-4xl">
              <h2 className="font-extrabold italic leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>Transparent Earnings Breakdown (Gross vs. Net Take-Home)</h2>
              <p className="mt-6 text-base leading-7 text-white/60 sm:text-lg sm:leading-8">Unlike agencies that hide behind inflated gross revenue numbers, here is the exact split structure and take-home breakdown matching Sara&apos;s peak month of $34,200 gross:</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"><h3 className="text-xl font-bold italic text-white sm:text-2xl">Live Streaming Platforms (50% Creator / 50% Agency)</h3><p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">You keep 50% of everything generated across all 5 streaming sites, with zero upfront fees or equipment costs.</p></div>
              <div className="rounded-2xl border border-[#ff1493]/50 bg-[#ff1493]/[0.04] p-6 sm:p-8"><h3 className="text-xl font-bold italic text-white sm:text-2xl">Off-Platform & Managed Channels (25% Creator / 75% Agency)</h3><p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">Because our sales team operates your messaging apps 24/7 around the clock, you keep 25% completely hands-free—which routinely supplements your live-streaming income.</p></div>
            </div>
            <div className="mt-10"><TableShell><div className="grid grid-cols-[1.35fr_1fr_1.1fr_1.2fr_1.15fr] bg-white/[0.04]">{['Income Engine', 'Monthly Gross Revenue', 'Agency Share', "Sara's Monthly Net Take-Home", 'Creator Active Effort'].map((heading) => <div key={heading} className="border-r border-white/10 p-4 text-xs font-medium uppercase tracking-[0.12em] text-white/45 last:border-r-0">{heading}</div>)}</div>{financialRows.map((row) => <div key={row.engine} className="grid grid-cols-[1.35fr_1fr_1.1fr_1.2fr_1.15fr] border-t border-white/10"><div className="border-r border-white/10 p-4 text-sm font-semibold leading-6 text-white">{row.engine}</div><div className="border-r border-white/10 p-4 text-sm text-white/70">{row.gross}</div><div className="border-r border-white/10 p-4 text-sm text-white/70">{row.agency}</div><div className="border-r border-white/10 p-4 text-sm font-semibold text-white">{row.net}</div><div className="p-4 text-sm leading-6 text-white/60">{row.effort}</div></div>)}<div className="grid grid-cols-[1.35fr_1fr_1.1fr_1.2fr_1.15fr] border-t border-[#ff1493]/60 bg-[#ff1493]/[0.08]"><div className="border-r border-[#ff1493]/30 p-4 text-sm font-bold uppercase tracking-wide text-white">TOTAL MONTHLY EARNINGS</div><div className="border-r border-[#ff1493]/30 p-4 text-sm font-bold text-white">$34,200.00</div><div className="border-r border-[#ff1493]/30 p-4 text-sm font-bold text-white">—</div><div className="border-r border-[#ff1493]/30 p-4 text-sm font-bold text-[#ff1493]">$14,650.00 Net / mo</div><div className="p-4 text-sm font-semibold leading-6 text-white">Weekly Payouts, Zero Lock-In</div></div></TableShell></div>
          </section>

          <section className="border-t border-white/10 py-20 sm:py-32">
            <SectionDivider number="04" />
            <div className="mb-12 max-w-4xl"><h2 className="font-extrabold italic leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>Growth Trajectory & Month-by-Month Breakdown</h2></div>
            <h3 className="mb-6 text-2xl font-bold italic text-white sm:text-3xl">Before vs. After Mini Cookies Comparison</h3>
            <TableShell minWidth="min-w-[850px]"><div className="grid grid-cols-[1.15fr_1.2fr_1.35fr_1.35fr] bg-white/[0.04]">{['Metric', 'Before Mini Cookies (Solo)', 'After Mini Cookies (Peak Month)', 'Impact'].map((heading) => <div key={heading} className="border-r border-white/10 p-4 text-xs font-medium uppercase tracking-[0.12em] text-white/45 last:border-r-0">{heading}</div>)}</div>{comparisonRows.map((row) => <div key={row.metric} className="grid grid-cols-[1.15fr_1.2fr_1.35fr_1.35fr] border-t border-white/10"><div className="border-r border-white/10 p-4 text-sm font-semibold leading-6 text-white">{row.metric}</div><div className="border-r border-white/10 p-4 text-sm leading-6 text-white/55">{row.before}</div><div className="border-r border-white/10 p-4 text-sm leading-6 text-white/80">{row.after}</div><div className="p-4"><span className="inline-flex rounded-full bg-[#ff1493]/15 px-3 py-1.5 text-xs font-semibold leading-5 text-[#ff1493]">{row.impact}</span></div></div>)}</TableShell>
            <h3 className="mb-6 mt-16 text-2xl font-bold italic text-white sm:text-3xl">Month-by-Month Growth Timeline (Showing Realistic Ups and Downs)</h3>
            <TableShell><div className="grid grid-cols-[1.35fr_1fr_0.8fr_1fr_1.75fr] bg-white/[0.04]">{['Timeline Phase', 'Monthly Gross Revenue', 'Agency Share', "Sara's Net Take-Home", 'Key Milestones & Operations'].map((heading) => <div key={heading} className="border-r border-white/10 p-4 text-xs font-medium uppercase tracking-[0.12em] text-white/45 last:border-r-0">{heading}</div>)}</div>{growthRows.map((row) => <div key={row.phase} className={`grid grid-cols-[1.35fr_1fr_0.8fr_1fr_1.75fr] border-t ${row.peak ? 'border-[#ff1493]/60 bg-[#ff1493]/[0.08]' : 'border-white/10'}`}><div className="border-r border-white/10 p-4 text-sm font-semibold leading-6 text-white">{row.phase}</div><div className="border-r border-white/10 p-4 text-sm text-white/70">{row.gross}</div><div className="border-r border-white/10 p-4 text-sm text-white/70">{row.agency}</div><div className={`border-r border-white/10 p-4 text-sm font-semibold ${row.peak ? 'text-[#ff1493]' : 'text-white'}`}>{row.net}</div><div className="p-4 text-sm leading-6 text-white/60">{row.milestones}</div></div>)}</TableShell>
          </section>

          <section id="case-study-application" className="border-t border-white/10 py-20 sm:py-32">
            <SectionDivider number="05" />
            <div className="mb-12 text-center"><h2 className="font-extrabold italic leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>Ready to Build Your Own Case Study?</h2><p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">We accept fewer than 3% of applicants because we build an entire dedicated team around every creator we partner with—with zero upfront costs, free studio equipment if needed, weekly payouts, and zero lock-in contracts.</p></div>
            <CaseStudyApplication />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default CaseStudy1