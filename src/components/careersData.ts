export type RoleGroup = 'core' | 'other';

export type CareerRole = {
  id: string;
  number: string;
  title: string;
  group: RoleGroup;
  tags: string[];
  summary: string;
  description: string;
  requirements: string[];
  lookingFor: string[];
};

export const careerRoles: CareerRole[] = [
  {
    id: 'account-manager',
    number: '01',
    title: 'Account Manager',
    group: 'core',
    tags: ['Ongoing', 'Full-time', 'Remote'],
    summary: "Own the creator's strategy, support, and daily operating rhythm.",
    description: "Act as each creator's central strategic partner: maintain high-touch communication, lead daily alignment, audit channel health, and keep every team working toward clear revenue and career goals.",
    requirements: [
      '2+ years of proven experience managing creators, talent, or high-touch digital clients.',
      "You have been accountable for a team's output, not just its activity.",
      'Strong data-tracking, briefing, and operational follow-through skills.',
      'Comfort with schedules that can include nights and weekends.',
      'Must legally reside and operate from the United States or Europe with stable internet and power.',
    ],
    lookingFor: [
      'A calm leader who becomes the person others escalate to when something goes wrong.',
      'Sharp pattern recognition and the discipline to act on performance data quickly.',
      'Clear communication across coaching, technology, and sales teams.',
      'High standards paired with genuine care for creator wellbeing.',
      'A relentless focus on protecting creator momentum and removing uncertainty.',
    ],
  },
  {
    id: 'stream-platforms-sales',
    number: '02',
    title: 'Stream-Platforms Sales Team',
    group: 'core',
    tags: ['Ongoing', 'Full-time', 'Remote'],
    summary: 'Turn live chat energy into stronger sessions and better creator earnings.',
    description: 'Operate as an elite live chat partner on every broadcast, greeting viewers, identifying high-value opportunities, supporting the creator in real time, and guiding conversations toward tips and private invites.',
    requirements: [
      '2+ years of proven experience as a live chat operator or streaming ghost writer.',
      '80+ WPM typing speed with strong written English.',
      'Reliable availability for schedules that can include nights and weekends.',
      'Discretion and a serious approach to confidentiality.',
      'Must legally reside and operate from the United States or Europe with stable internet and power.',
    ],
    lookingFor: [
      'Lightning-fast responses and an intuitive read on live audience dynamics.',
      'Natural, persuasive writing that adapts to a clear brand brief.',
      'The ability to spot high-spending viewers and act without creating pressure.',
      'Excellent tracking of viewer behavior, spending patterns, and engagement spikes.',
      'Flawless shift handovers that preserve context and revenue opportunities.',
    ],
  },
  {
    id: 'off-platform-sales',
    number: '03',
    title: 'Off-Platform Sales Team',
    group: 'core',
    tags: ['Ongoing', 'Full-time', 'Remote'],
    summary: 'Build thoughtful, long-term conversations across the off-platform earning engine.',
    description: 'Manage structured messaging conversations, build trust over time, tailor monetization offers to real audience signals, and produce precise shift reports so the next operator can continue every relationship seamlessly.',
    requirements: [
      '2+ years of proven experience in messaging sales, customer conversations, or a similar role.',
      '80+ WPM typing speed and excellent written communication.',
      'Extreme attention to detail when tracking conversations and follow-up points.',
      'Reliable availability for schedules that can include nights and weekends.',
      'Must legally reside and operate from the United States or Europe with stable internet and power.',
    ],
    lookingFor: [
      'Strong persona adoption, relationship-building, and persuasive communication skills.',
      'A sharp understanding of audience motivations and healthy boundaries.',
      'The focus to manage continuous messaging funnels without losing context.',
      'Exhaustive shift reports that make every handover immediately actionable.',
      'Professional judgment and consistent discretion in every interaction.',
    ],
  },
  {
    id: 'personal-coach',
    number: '04',
    title: 'Personal Coach',
    group: 'core',
    tags: ['Ongoing', 'Full-time', 'Remote'],
    summary: 'Build creator confidence through precise training, honest feedback, and repeatable systems.',
    description: 'Deliver one-to-one training on show performance, pricing, audience conversion, camera presence, and practical stream strategy, turning performance data into clear weekly development plans.',
    requirements: [
      '2+ years of proven experience coaching creators or working as a top-tier creator.',
      'Comfort with schedules that can include nights and weekends.',
      'Discretion and a serious approach to confidentiality.',
      'Must legally reside and operate from the United States or Europe with stable internet and power.',
    ],
    lookingFor: [
      'Deep knowledge of live streaming, audience behavior, and platform mechanics.',
      'The ability to give direct feedback that builds confidence instead of defensiveness.',
      'A practical understanding of pricing, retention, and relationship dynamics.',
      'Strong camera presence and the ability to teach it clearly.',
      'A data-led approach to turning recorded sessions into better next steps.',
    ],
  },
  {
    id: 'profile-operators',
    number: '05',
    title: 'Profile Operators',
    group: 'core',
    tags: ['Ongoing', 'Full-time', 'Remote'],
    summary: 'Turn every creator profile into a polished, high-converting digital storefront.',
    description: 'Engineer profile architecture and continuous conversion improvements across bios, thumbnails, pricing tiers, folders, and media so every visitor has a clear path toward a purchase.',
    requirements: [
      '2+ years of proven experience setting up and optimizing creator profiles or digital storefronts.',
      'Comfort with schedules that can include nights and weekends.',
      'Discretion and a serious approach to confidentiality.',
      'Must legally reside and operate from the United States or Europe with stable internet and power.',
    ],
    lookingFor: [
      'An obsession with turning profile visits into meaningful buyer action.',
      'Strong visual judgment across thumbnails, bios, media layouts, and pricing.',
      'A testing mindset grounded in conversion data rather than personal taste.',
      'Immaculate organization across folders, tiers, and platform details.',
      'The eye to spot small issues that quietly cost revenue.',
    ],
  },
  {
    id: 'tech-support',
    number: '06',
    title: 'Tech Support',
    group: 'core',
    tags: ['Ongoing', 'Full-time', 'Remote'],
    summary: 'Keep every broadcast stable, fast, and free from avoidable technical friction.',
    description: 'Own technical execution across streaming hardware, software, multi-stream routing, and equipment. Diagnose problems proactively and resolve live issues quickly so creators stay focused on performance.',
    requirements: [
      '2+ years of experience with streaming hardware, OBS or vMix setups, and network routing.',
      'Comfort with schedules that can include nights and weekends.',
      'Discretion and a serious approach to confidentiality.',
      'Must legally reside and operate from the United States or Europe with stable internet and power.',
    ],
    lookingFor: [
      'A zero-downtime mindset and calm decision-making under pressure.',
      'Proactive checks that prevent problems before a broadcast starts.',
      'The ability to explain technical fixes clearly to non-technical creators.',
      'Fast troubleshooting across hardware, software, and network layers.',
      'A genuine sense of urgency when a technical issue threatens live revenue.',
    ],
  },
  {
    id: 'recruiter-onboarding',
    number: '07',
    title: 'Recruiter & Onboarding Manager',
    group: 'other',
    tags: ['Ongoing', 'Part-time', 'On-demand', 'Remote'],
    summary: 'Find the right talent, run high-quality discovery calls, and guide every new creator into the system.',
    description: "Own the front line of the talent pipeline: evaluate potential, lead discovery calls, explain the creator journey clearly, and deliver a smooth handover into the agency's onboarding process.",
    requirements: [
      '2+ years in recruitment, talent acquisition, or onboarding within digital entertainment or streaming.',
      'Fluent spoken English, polished communication, and a confident professional presence.',
      'Reliable availability for calls that can include evenings or weekends.',
      'Strong discretion when handling personal and career information.',
    ],
    lookingFor: [
      'A precise eye for potential, commitment, and cultural alignment.',
      'Excellent listening, persuasion, and closing skills without overpromising.',
      'The discipline to protect agency standards throughout the pipeline.',
      'A warm candidate experience balanced with honest expectations.',
      'Strong follow-through from first call to fully prepared onboarding.',
    ],
  },
  {
    id: 'ui-ux-developer',
    number: '08',
    title: 'UI / UX Developer',
    group: 'other',
    tags: ['Project-based', 'Freelance', 'Remote'],
    summary: 'Build fast, memorable digital spaces that reflect each creator and convert attention into action.',
    description: "Create polished websites and landing pages tailored to each creator's persona, with obsessive attention to responsive layouts, intuitive flows, performance, and conversion.",
    requirements: [
      '2+ years of professional experience in frontend development, UI/UX, or high-converting landing pages.',
      'Mastery of modern web frameworks such as React, Tailwind CSS, or similar tools.',
      'A portfolio showing strong visual systems and shipped work.',
      'Reliable delivery and discretion across fast-moving projects.',
    ],
    lookingFor: [
      'A strong instinct for visual hierarchy, responsive behavior, and micro-interactions.',
      'The ability to turn a vague brand direction into a precise digital experience.',
      'Clean implementation habits and an eye for zero-friction user flows.',
      'Comfort balancing creative decisions with conversion data.',
      'Someone who ships polished work under clear deadlines.',
    ],
  },
  {
    id: 'video-editor',
    number: '09',
    title: 'Video Editor',
    group: 'other',
    tags: ['Project-based', 'Part-time', 'Freelance', 'Remote'],
    summary: 'Shape raw footage into magnetic, high-retention clips built for modern feeds.',
    description: 'Edit promotional clips, teasers, and highlight reels with sharp pacing, precise audio, clear hooks, and visual storytelling designed for platform-native attention.',
    requirements: [
      '2+ years editing creator, social, or marketing video content professionally.',
      'Advanced command of Premiere Pro, After Effects, DaVinci Resolve, or equivalent tools.',
      'A verifiable portfolio or reel showing your specific contributions.',
      'Reliable turnaround, discretion, and comfort with repeatable content schedules.',
    ],
    lookingFor: [
      'A natural understanding of hooks, pacing, retention, and rhythm.',
      'Meticulous sound design, captions, color, and visual effects.',
      'The ability to adapt quickly across aspect ratios and platform trends.',
      'A constructive response to creative direction and fast revision cycles.',
      'Consistent delivery without sacrificing polish.',
    ],
  },
  {
    id: 'ai-content-specialist',
    number: '10',
    title: 'AI Video & Image Content Specialist',
    group: 'other',
    tags: ['Project-based', 'Freelance', 'Part-time', 'Remote'],
    summary: 'Use generative tools to produce distinctive, brand-aligned creative assets at speed.',
    description: 'Create video, image, and promotional assets with advanced generative workflows, then refine them into polished marketing creative that fits the brand and performs in real campaigns.',
    requirements: [
      '2+ years using generative AI for visual production, marketing, or content workflows.',
      'Proficiency with tools such as Midjourney, Stable Diffusion, Runway, Sora, or equivalents.',
      'A portfolio showing strong prompt-led production and final polish.',
      'Reliable delivery, adaptability, and discretion.',
    ],
    lookingFor: [
      'Deep skill in prompting, upscaling, inpainting, outpainting, and iteration.',
      'A performance mindset focused on creative testing and click-through improvement.',
      'The ability to combine generated assets with traditional editing workflows.',
      'Continuous curiosity as creative tooling evolves.',
      'Strong judgment around brand consistency and responsible use of AI.',
    ],
  },
  {
    id: 'social-media-va',
    number: '11',
    title: 'Social Media Virtual Assistant',
    group: 'other',
    tags: ['Ongoing', 'Full-time', 'Remote'],
    summary: 'Keep creator profiles active, timely, consistent, and connected across every major platform.',
    description: 'Manage daily content distribution, audience engagement, community activity, scheduling, and reporting so each creator maintains a healthy, recognizable digital presence.',
    requirements: [
      '2+ years managing social accounts, communities, or digital brand presence.',
      'Strong familiarity with scheduling tools, platform algorithms, and analytics.',
      'Reliable availability for consistent daily execution.',
      'Discretion and excellent organization across multiple creator profiles.',
    ],
    lookingFor: [
      'Relentless consistency with publishing and community engagement.',
      'Sharp intuition for online culture, trending formats, and audience etiquette.',
      'The ability to identify engagement patterns and report useful insights.',
      'A proactive mindset for comments, messages, and brand alignment.',
      'Someone who never lets a scheduled detail quietly slip.',
    ],
  },
  {
    id: 'copywriter',
    number: '12',
    title: 'Copywriter',
    group: 'other',
    tags: ['Ongoing', 'Full-time', 'Remote'],
    summary: 'Write clear, persuasive words that deepen trust and move audiences toward action.',
    description: 'Create email sequences, blog content, landing-page copy, and conversion guides that match each creator voice while connecting every message to audience trust and measurable action.',
    requirements: [
      '2+ years in direct-response copywriting, email marketing, or long-form digital content.',
      'Exceptional grammar, tone control, research, and editing discipline.',
      'A portfolio showing persuasive work and measurable outcomes where available.',
      'Reliable delivery, discretion, and comfort working across different brand voices.',
    ],
    lookingFor: [
      'Strong command of consumer psychology and conversion frameworks.',
      'The ability to adapt tone without losing clarity or authenticity.',
      'A strategic link between words, user intent, and funnel performance.',
      'Relentless attention to detail and zero avoidable errors.',
      'A writer who can make complex ideas feel simple and compelling.',
    ],
  },
  {
    id: 'talent-scout',
    number: '13',
    title: 'Talent Scout',
    group: 'other',
    tags: ['Ongoing', 'Part-time', 'Commission-based', 'Remote'],
    summary: 'Spot promising creators early and open the conversations that start their next chapter.',
    description: 'Research social and streaming platforms, identify high-potential creators, open thoughtful conversations, and pass qualified prospects into the recruitment pipeline with clean context.',
    requirements: [
      '2+ years in talent scouting, outbound lead generation, influencer outreach, or creator acquisition.',
      'Deep familiarity with Instagram, TikTok, X, Twitch, Kick, and streaming directories.',
      'Proven cold outreach and follow-up skills that lead to qualified calls.',
      'Strong discretion and consistent pipeline tracking.',
    ],
    lookingFor: [
      'A sharp eye for charisma, camera presence, and untapped earning potential.',
      'Relentless but respectful outbound execution with strong follow-up habits.',
      'Natural communication that creates curiosity without sounding generic.',
      'Obsessive lead tracking so every promising prospect has a clear next step.',
      'Smooth coordination with recruiters and onboarding managers.',
    ],
  },
];

export const coreRoles = careerRoles.filter((role) => role.group === 'core');
export const otherRoles = careerRoles.filter((role) => role.group === 'other');

export function isCoreRole(roleTitle: string): boolean {
  return coreRoles.some((role) => role.title === roleTitle);
}

export function roleQuestion(roleTitle: string): string {
  if (['Account Manager', 'Recruiter & Onboarding Manager', 'Talent Scout'].includes(roleTitle)) {
    return 'What is the largest team or talent pipeline you have been directly accountable for, and what did you own?';
  }
  if (['Stream-Platforms Sales Team', 'Off-Platform Sales Team'].includes(roleTitle)) {
    return 'Where have you done chat, sales, or customer conversation work before? What were you measured on, and how did you perform against it?';
  }
  if (['UI / UX Developer', 'Video Editor', 'AI Video & Image Content Specialist', 'Tech Support'].includes(roleTitle)) {
    return 'Provide a breakdown or link of your strongest production output and explain exactly what you owned.';
  }
  if (roleTitle === 'Another role (not listed)') {
    return 'What role are you after, and what makes you the right person for it?';
  }
  return 'What have you done that maps most closely to this role, and how would you make an impact in your first 90 days?';
}

export function proofLabel(roleTitle: string): string {
  if (['Stream-Platforms Sales Team', 'Off-Platform Sales Team'].includes(roleTitle)) {
    return 'Sales proof, chat logs, or metrics link';
  }
  if (['UI / UX Developer', 'Video Editor', 'AI Video & Image Content Specialist'].includes(roleTitle)) {
    return 'Portfolio or reel link';
  }
  return 'CV, resume, or track record link';
}
