import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { Check, ChevronDown, Loader as Loader2 } from 'lucide-react';
import CTAButton from './CTAButton';
import Footer from './Footer';
import Navbar from './Navbar';
import { getSupabase } from '../lib/supabase';
import {
  careerRoles,
  coreRoles,
  isCoreRole,
  otherRoles,
  proofLabel,
  roleQuestion,
  type CareerRole,
} from './careersData';
import { howItRunsRoles, type HowItRunsRole } from './howItRunsData';

type CareersApplicationFormProps = {
  selectedRole: string;
  onRoleChange: (role: string) => void;
};

type ApplicationFormState = {
  full_name: string;
  email: string;
  phone: string;
  role: string;
  experience: string;
  availability: string;
  current_country: string;
  legal_residency_ack: boolean;
  timezone_region: string;
  role_specific_answer: string;
  proof_link: string;
  fit_statement: string;
};

type FormErrors = Partial<Record<keyof ApplicationFormState, string>>;

const initialForm = (role: string): ApplicationFormState => ({
  full_name: '',
  email: '',
  phone: '',
  role,
  experience: '',
  availability: '',
  current_country: '',
  legal_residency_ack: false,
  timezone_region: '',
  role_specific_answer: '',
  proof_link: '',
  fit_statement: '',
});

const experienceOptions = ['Less than 1 year', '1–2 years', '3–5 years', '5+ years'];
const availabilityOptions = ['Under 20 hrs/week', '20–40 hrs/week', '40+ hrs/week'];
const timezoneOptions = [
  'Americas · Eastern',
  'Americas · Central',
  'Americas · Mountain',
  'Americas · Pacific',
  'Europe · Western',
  'Europe · Central',
  'Europe · Eastern',
  'Africa · Central',
  'Asia-Pacific',
  'Other region',
];

const inputClass = 'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#ff1493]/70 focus:bg-white/[0.05]';
const labelClass = 'mb-2 block text-xs font-medium uppercase tracking-wide text-white/55';

function SectionDivider({ number }: { number: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="text-xs font-medium tracking-[0.3em] text-white/40">{number}</span>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

type RoleCardProps = {
  role: CareerRole;
  open: boolean;
  onToggle: () => void;
  onApply: () => void;
  onHowItRuns?: () => void;
};

function HowItRunsCard({ role, open, onToggle }: { role: HowItRunsRole; open: boolean; onToggle: () => void }) {
  return (
    <article
      id={`how-it-runs-${role.id}`}
      className={`scroll-mt-10 overflow-hidden rounded-2xl border bg-white/[0.02] transition-colors duration-300 ${open ? 'border-[#ff1493]/50' : 'border-white/10 hover:border-[#ff1493]/50'}`}
    >
      <div className="p-5 sm:p-7">
        <div className="flex items-start gap-4 sm:gap-6">
          <span className="pt-1 text-sm font-medium tracking-[0.25em] text-[#ff1493]">{role.number}</span>
          <div className="min-w-0 flex-1">
            <h3 className="text-xl font-bold uppercase italic leading-tight text-white sm:text-2xl">{role.title}</h3>
            <div className="relative mt-5 overflow-hidden transition-[max-height] duration-500 ease-out" style={{ maxHeight: open ? '1000px' : '7rem' }}>
              <p className="max-w-4xl text-sm leading-7 text-white/70 sm:text-base">{role.description}</p>
              {!open && <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0d0d0d] to-transparent" />}
            </div>
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={open}
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/65 transition-colors hover:text-white"
            >
              {open ? 'Show Less ↑' : 'See Full Description ↓'}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function RoleCard({ role, open, onToggle, onApply, onHowItRuns }: RoleCardProps) {
  return (
    <article className={`overflow-hidden rounded-2xl border bg-white/[0.02] transition-colors duration-300 ${open ? 'border-[#ff1493]/50' : 'border-white/10 hover:border-[#ff1493]/50'}`}>
      <button type="button" onClick={onToggle} aria-expanded={open} className="group w-full cursor-pointer p-5 text-left sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex min-w-0 gap-4 sm:gap-6">
            <span className="pt-1 text-sm font-medium tracking-[0.25em] text-[#ff1493]">{role.number}</span>
            <div className="min-w-0">
              <h3 className="text-xl font-bold italic leading-tight text-white sm:text-2xl">{role.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {role.tags.map((tag) => <span key={tag} className="rounded-full bg-[#ff1493] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-black">{tag}</span>)}
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">{role.summary}</p>
            </div>
          </div>
          <span className="flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/65 transition-colors group-hover:text-white lg:pt-1">
            {open ? 'Close Details' : 'Read Full Description'}
            <ChevronDown className={`h-4 w-4 text-[#ff1493] transition-transform duration-300 ${open ? 'rotate-180' : ''}`} strokeWidth={2} />
          </span>
        </div>
      </button>

      {onHowItRuns && (
        <div className="px-5 pb-5 sm:px-7 sm:pb-6">
          <button
            type="button"
            onClick={onHowItRuns}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#ff1493] transition-colors hover:text-white"
          >
            See how it runs ↑
          </button>
        </div>
      )}

      <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-white/10 px-5 pb-7 pt-6 sm:px-7 sm:pb-9">
            <p className="max-w-4xl text-sm leading-7 text-white/70">{role.description}</p>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <ListBlock title="Requirements" items={role.requirements} />
              <ListBlock title="What We're Looking For" items={role.lookingFor} />
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button type="button" onClick={onApply} className="inline-flex items-center gap-3 rounded-full bg-[#ff1493] px-6 py-3.5 text-xs font-bold uppercase tracking-wide text-black transition-all hover:scale-[1.02] hover:bg-[#ff1493]/90 active:scale-[0.98]">
                Apply for this Role <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-white">{title}</h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-white/55"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff1493]" />{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return <div><label className={labelClass}>{label}</label>{children}{error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}</div>;
}

function CareersApplicationForm({ selectedRole, onRoleChange }: CareersApplicationFormProps) {
  const [form, setForm] = useState<ApplicationFormState>(() => initialForm(selectedRole));
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [success, setSuccess] = useState(false);
  const core = isCoreRole(form.role);

  useEffect(() => {
    setForm((current) => ({ ...current, role: selectedRole, current_country: '', legal_residency_ack: false }));
    setErrors({});
    setSubmissionError('');
  }, [selectedRole]);

  const update = <K extends keyof ApplicationFormState>(field: K, value: ApplicationFormState[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmissionError('');
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (form.full_name.trim().length < 2) next.full_name = 'Please enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = 'Please enter a valid email address.';
    if (form.phone.trim().length < 3) next.phone = 'Please enter your WhatsApp or phone number.';
    if (!form.role) next.role = 'Please select a role.';
    if (!form.experience) next.experience = 'Please select your experience.';
    if (!form.availability) next.availability = 'Please select your availability.';
    if (form.current_country.trim().length < 2) next.current_country = 'Please enter your location.';
    if (core && !form.legal_residency_ack) next.legal_residency_ack = 'Please confirm the residency requirement.';
    if (!form.timezone_region) next.timezone_region = 'Please select your timezone or region.';
    if (form.role_specific_answer.trim().length < 2) next.role_specific_answer = 'Please answer the role question.';
    if (!/^https?:\/\//i.test(form.proof_link.trim())) next.proof_link = 'Please provide a link beginning with http:// or https://.';
    if (form.fit_statement.trim().length < 2) next.fit_statement = 'Please tell us why you are a fit.';
    if (form.fit_statement.length > 200) next.fit_statement = 'Please keep this answer within 200 characters.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmissionError('');
    const supabase = getSupabase();

    if (!supabase) {
      setSubmissionError('Applications are temporarily unavailable. Please contact us directly and try again later.');
      setSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase.from('careers_applications').insert({
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        role: form.role,
        role_group: core ? 'core' : 'other',
        experience: form.experience,
        availability: form.availability,
        current_country: form.current_country.trim(),
        legal_residency_ack: core ? form.legal_residency_ack : false,
        timezone_region: form.timezone_region,
        role_specific_answer: form.role_specific_answer.trim(),
        proof_link: form.proof_link.trim(),
        fit_statement: form.fit_statement.trim(),
      });
      if (error) throw error;
      setSuccess(true);
    } catch (error) {
      console.error('careers application submission failed', error);
      setSubmissionError('We could not send your application. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return <section id="careers-application" className="border-t border-white/5 px-6 py-20 sm:py-32"><div className="mx-auto max-w-2xl"><div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-16 text-center"><div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-[#ff1493]/50"><Check className="h-9 w-9 text-[#ff1493]" strokeWidth={1.5} /></div><h3 className="text-3xl font-bold italic">Application Received</h3><p className="mt-4 max-w-md leading-7 text-white/55">Thank you for applying. Our team will review your application personally and reach out if there is a strong fit.</p></div></div></section>;
  }

  const selectProps = { style: { colorScheme: 'dark' as const } };
  const selectClass = `${inputClass} appearance-none`;

  return (
    <section id="careers-application" className="border-t border-white/5 px-6 py-20 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionDivider number="03" />
        <div className="mb-12 text-center"><p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#ff1493]">Mini Cookies · Final Application</p><h2 className="font-extrabold italic leading-[1.05]" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>Make your next move.</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-white/55">Tell us where your strengths can create the most impact. We read every application personally.</p></div>
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Full name" error={errors.full_name}><input value={form.full_name} onChange={(event) => update('full_name', event.target.value)} className={inputClass} placeholder="e.g. Jane Doe" /></Field>
            <Field label="Email" error={errors.email}><input type="email" value={form.email} onChange={(event) => update('email', event.target.value)} className={inputClass} placeholder="you@example.com" /></Field>
          </div>
          <Field label="WhatsApp / phone" error={errors.phone}><input value={form.phone} onChange={(event) => update('phone', event.target.value)} className={inputClass} placeholder="Include your country code" /></Field>
          <Field label="Which role?" error={errors.role}><select value={form.role} onChange={(event) => { onRoleChange(event.target.value); update('role', event.target.value); }} className={selectClass} {...selectProps}><option value="">Select a role</option>{careerRoles.map((role) => <option key={role.id} value={role.title}>{role.number} · {role.title}</option>)}<option value="Another role (not listed)">Another role (not listed)</option></select></Field>
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Role experience" error={errors.experience}><select value={form.experience} onChange={(event) => update('experience', event.target.value)} className={selectClass} {...selectProps}><option value="">Select</option>{experienceOptions.map((option) => <option key={option}>{option}</option>)}</select></Field>
            <Field label="Availability" error={errors.availability}><select value={form.availability} onChange={(event) => update('availability', event.target.value)} className={selectClass} {...selectProps}><option value="">Select</option>{availabilityOptions.map((option) => <option key={option}>{option}</option>)}</select></Field>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label={core ? 'Current country' : 'Country / region'} error={errors.current_country}>{core ? <select value={form.current_country} onChange={(event) => update('current_country', event.target.value)} className={selectClass} {...selectProps}><option value="">Select</option><option>United States</option><option>Europe</option></select> : <input value={form.current_country} onChange={(event) => update('current_country', event.target.value)} className={inputClass} placeholder="e.g. Canada" />}</Field>
            <Field label="Timezone / region" error={errors.timezone_region}><select value={form.timezone_region} onChange={(event) => update('timezone_region', event.target.value)} className={selectClass} {...selectProps}><option value="">Select</option>{timezoneOptions.map((option) => <option key={option}>{option}</option>)}</select></Field>
          </div>
          {core && <label className="flex cursor-pointer gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm leading-6 text-white/65"><input type="checkbox" checked={form.legal_residency_ack} onChange={(event) => update('legal_residency_ack', event.target.checked)} className="mt-1 h-4 w-4 accent-[#ff1493]" />I confirm that I legally reside and can operate from the United States or Europe with stable high-speed internet and power infrastructure.</label>}
          {errors.legal_residency_ack && <p className="-mt-4 text-xs text-red-400">{errors.legal_residency_ack}</p>}
          <Field label={roleQuestion(form.role)} error={errors.role_specific_answer}><textarea value={form.role_specific_answer} onChange={(event) => update('role_specific_answer', event.target.value)} className={`${inputClass} min-h-32 resize-y`} placeholder="Your answer" /></Field>
          <Field label={proofLabel(form.role)} error={errors.proof_link}><input type="url" value={form.proof_link} onChange={(event) => update('proof_link', event.target.value)} className={inputClass} placeholder="https://" /></Field>
          <Field label="Why are you a fit?" error={errors.fit_statement}><textarea maxLength={200} value={form.fit_statement} onChange={(event) => update('fit_statement', event.target.value)} className={`${inputClass} min-h-28 resize-y`} placeholder="Tell us in 200 characters or less." /><p className="mt-2 text-right text-xs text-white/35">{form.fit_statement.length}/200</p></Field>
          {submissionError && <p className="rounded-xl border border-red-400/30 bg-red-400/5 px-4 py-3 text-sm text-red-300">{submissionError}</p>}
          <button type="submit" disabled={submitting} className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#ff1493] px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-[1.01] hover:bg-[#ff1493]/90 disabled:cursor-not-allowed disabled:opacity-60">{submitting && <Loader2 className="h-4 w-4 animate-spin" />}{submitting ? 'Sending Application' : 'Submit Application →'}</button>
        </form>
      </div>
    </section>
  );
}

export default function Careers() {
  const [openRole, setOpenRole] = useState(careerRoles[0].id);
  const [selectedRole, setSelectedRole] = useState(careerRoles[0].title);
  const [openHowItRunsRole, setOpenHowItRunsRole] = useState<string | null>(null);

  const goToHowItRuns = (roleId: string) => {
    setOpenHowItRunsRole(roleId);
    requestAnimationFrame(() => {
      document.getElementById(`how-it-runs-${roleId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const goToApplication = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    document.getElementById('careers-application')?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderRoles = (roles: CareerRole[]) => roles.map((role) => <RoleCard key={role.id} role={role} open={openRole === role.id} onToggle={() => setOpenRole((current) => current === role.id ? '' : role.id)} onApply={() => goToApplication(role.title)} onHowItRuns={role.group === 'core' ? () => goToHowItRuns(role.id) : undefined} />);

  return (
    <div className="min-h-screen bg-jet-black text-pure-white">
      <Navbar />
      <main>
        <section className="px-6 pb-20 pt-36 sm:pb-32 sm:pt-48"><div className="mx-auto max-w-5xl text-center"><span className="inline-flex rounded-full border border-[#ff1493]/50 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#ff1493]">Every application reviewed personally</span><h1 className="mt-8 font-extrabold italic leading-[0.95]" style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}>THE TEAM BEHIND<br /><span className="text-[#ff1493]">THE AGENCY</span></h1><h2 className="mx-auto mt-8 max-w-3xl text-2xl font-bold italic leading-tight sm:text-4xl">Build a career that builds creators.</h2><div className="mx-auto mt-8 max-w-3xl space-y-5 text-sm leading-7 text-white/60 sm:text-base"><p>Mini Cookies is a talent management agency operating completely remote worldwide. We provide everything our creators need to transform ambition into success — a dedicated team that works only for them, personalized 1-on-1 coaching, complete technical &amp; live support, full privacy protection, multi-streaming across 5 platforms, 5 off-platform earnings engine setup, and a strategy designed around their current situation, goals, and boundaries.</p><p>We hire exclusively for elite performance. We look for the absolute best of the best who operate as sharks in their field, maintaining a supportive, performance-aligned culture where top-tier execution wins.</p></div><div className="mt-10 flex flex-wrap justify-center gap-3"><CTAButton label="Description ↓" variant="outline" href="#how-it-runs" className="px-5 py-3 text-xs" /><CTAButton label="Creator Operations Roles ↓" variant="outline" href="#core-positions" className="px-5 py-3 text-xs" /><CTAButton label="Agency Infrastructure Roles ↓" variant="outline" href="#other-positions" className="px-5 py-3 text-xs" /></div></div></section>
        <section id="how-it-runs" className="px-6 py-20 sm:py-32"><div className="mx-auto max-w-6xl"><SectionDivider number="01" /><div className="mb-12 max-w-3xl"><p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#ff1493]">I · How It Runs</p><h2 className="font-extrabold italic leading-tight" style={{ fontSize: 'clamp(2.3rem, 5vw, 4.5rem)' }}>What superior execution looks like in your role.</h2><p className="mt-6 max-w-2xl leading-7 text-white/55">Here are the six functions that run through a creator’s business. If you join us, you aren't just filling a seat—you are expected to deliver world-class, exhaustive, and superior work that separates our agency from everyone else.</p></div><div className="space-y-4">{howItRunsRoles.map((role) => <HowItRunsCard key={role.id} role={role} open={openHowItRunsRole === role.id} onToggle={() => setOpenHowItRunsRole((current) => current === role.id ? null : role.id)} />)}</div></div></section>
        <section className="px-6 py-20 sm:py-32"><div className="mx-auto max-w-6xl"><SectionDivider number="02" /><div className="mb-12 max-w-3xl"><p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#ff1493]">II · Open Positions</p><h2 className="font-extrabold italic leading-tight" style={{ fontSize: 'clamp(2.3rem, 5vw, 4.5rem)' }}>Find where your edge creates impact.</h2><p className="mt-6 leading-7 text-white/55">Everything we’re hiring for, split between direct creator operations and agency infrastructure. Review the specific requirements for each role below to see where your skill set commands maximum impact.</p></div><div id="core-positions" className="scroll-mt-10"><div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><span className="mb-3 inline-flex rounded-full bg-[#ff1493] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-black">Actively Hiring</span><h3 className="text-2xl font-bold italic">01 · Core Positions</h3></div><p className="text-sm text-white/45">Open continuously. Reviewed year-round.</p></div><div className="space-y-4">{renderRoles(coreRoles)}</div></div><div id="other-positions" className="mt-20 scroll-mt-10"><div className="mb-6"><h3 className="text-2xl font-bold italic">02 · Other Positions</h3><p className="mt-3 text-sm text-white/50">Key agency infrastructure, marketing, and creative expansion roles.</p></div><div className="space-y-4">{renderRoles(otherRoles)}</div></div><div className="mt-12 rounded-2xl border border-[#ff1493]/30 bg-[#ff1493]/5 p-6 text-center sm:p-8"><p className="text-base text-white/75">Don’t see your role? <button type="button" onClick={() => goToApplication('Another role (not listed)')} className="font-bold text-[#ff1493] underline decoration-[#ff1493]/40 underline-offset-4 transition-colors hover:text-white">Apply anyway</button> and pick “Another role (not listed)”. We keep strong applications on file.</p></div></div></section>
        <CareersApplicationForm selectedRole={selectedRole} onRoleChange={setSelectedRole} />
      </main>
      <Footer />
    </div>
  );
}
