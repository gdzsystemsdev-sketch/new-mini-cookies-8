/*
# Create Case Study application submissions

1. New Tables
- `public.case_study_applications`
- `id` (uuid, primary key): Unique identifier for each application.
- `stage_name` (text, required): Creator's stage name or alias; legal names are not requested.
- `contact_handle` (text, required): WhatsApp or Telegram contact handle supplied by the applicant.
- `experience` (text, required): Applicant's selected experience level.
- `availability` (text, required): Applicant's selected weekly availability commitment.
- `created_at` (timestamptz, required): Time the application was submitted.

2. Security
- Row level security is enabled on the table.
- Anonymous and authenticated visitors may submit application rows because this public page has no sign-in flow.
- Browser reads, updates, and deletes are denied because applications contain contact information and are managed outside the public page.
- INSERT access is granted only to the columns used by the application form.

3. Important Notes
- No user account or owner column is created because the page does not require sign-in.
- The form does not request a legal name, photos, or uploaded files.
- The table is intentionally write-only for the public client; authorized operators can review submissions through privileged database access.
*/

CREATE TABLE IF NOT EXISTS public.case_study_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stage_name text NOT NULL CHECK (char_length(btrim(stage_name)) BETWEEN 2 AND 120),
  contact_handle text NOT NULL CHECK (char_length(btrim(contact_handle)) BETWEEN 3 AND 200),
  experience text NOT NULL CHECK (experience IN ('Complete Beginner', 'Solo Creator', 'Switching Agencies')),
  availability text NOT NULL CHECK (availability = 'Minimum 20 hrs/week commitment'),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.case_study_applications ENABLE ROW LEVEL SECURITY;

GRANT INSERT (stage_name, contact_handle, experience, availability) ON public.case_study_applications TO anon, authenticated;

DROP POLICY IF EXISTS "Public can submit case study applications" ON public.case_study_applications;
CREATE POLICY "Public can submit case study applications"
ON public.case_study_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "Case study applications are not publicly readable" ON public.case_study_applications;
CREATE POLICY "Case study applications are not publicly readable"
ON public.case_study_applications
FOR SELECT
TO anon, authenticated
USING (false);

DROP POLICY IF EXISTS "Case study applications cannot be updated publicly" ON public.case_study_applications;
CREATE POLICY "Case study applications cannot be updated publicly"
ON public.case_study_applications
FOR UPDATE
TO anon, authenticated
USING (false)
WITH CHECK (false);

DROP POLICY IF EXISTS "Case study applications cannot be deleted publicly" ON public.case_study_applications;
CREATE POLICY "Case study applications cannot be deleted publicly"
ON public.case_study_applications
FOR DELETE
TO anon, authenticated
USING (false);
