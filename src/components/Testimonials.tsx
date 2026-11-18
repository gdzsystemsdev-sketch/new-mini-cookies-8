import CTAButton from './CTAButton';

const testimonials = [
  { pill: 'Testimonial 1', button: 'Case Study 1', href: '/case-study/sara' },
  { pill: 'Testimonial 2', button: 'Case Study 2', href: '#case-study' },
  { pill: 'Testimonial 3', button: 'Case Study 3', href: '#case-study' },
  { pill: 'Testimonial 4', button: 'Case Study 4', href: '#case-study' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-10 sm:py-32 px-6 bg-jet-black border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">02</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2
          className="font-extrabold italic tracking-tight leading-[1.1] mb-16"
          style={{ fontSize: 'clamp(2.125rem, 5vw, 3.5rem)' }}
        >
          Testimonials from other <span style={{ color: '#ff1493' }}>Mini Cookies Creators</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {testimonials.map((t) => (
            <div key={t.pill} className="flex flex-col items-center">
              {/* 9:16 video placeholder */}
              <div className="w-full aspect-[9/16] max-w-[320px] rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center">
                <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-medium">
                  9:16 Video
                </span>
              </div>

              <span className="mt-6 inline-flex items-center px-4 py-2 rounded-full text-xs font-medium tracking-wide bg-[#ff1493]/15 text-[#ff1493] border border-[#ff1493]/40">
                {t.pill}
              </span>

              <CTAButton
                label={t.button}
                href={t.href}
                variant="outline"
                className="mt-4 px-6 py-3 text-xs"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <CTAButton label="Apply Now" variant="solid" color="pink" href="#application" />
        </div>
      </div>
    </section>
  );
}
