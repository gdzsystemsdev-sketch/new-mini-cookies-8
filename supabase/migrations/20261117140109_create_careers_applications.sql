/*
# Create careers applications table

1. New Tables
- `careers_applications`
- `id` (uuid, primary key): Unique application identifier.
- `full_name` (text): Applicant's name.
- `email` (text): Applicant's email address.
- `phone` (text): Applicant's WhatsApp or phone contact.
- `role` (text): Role selected by the applicant.
- `role_group` (text): Whether the role is a Core Position or Other Position.
- `experience` (text): Applicant's experience range.
- `availability` (text): Applicant's available weekly hours.
- `current_country` (text): Applicant's current country or region.
- `legal_residency_ack` (boolean): Required acknowledgement for Core Positions.
- `timezone_region` (text): Applicant's working time zone or region.
- `role_specific_answer` (text): Answer to the role-specific qualifying question.
- `proof_link` (text): Portfolio, sales proof, resume, or track record link.
- `fit_statement` (text): Applicant's short explanation of fit, limited to 200 characters.
- `created_at` (timestamptz): Submission timestamp.

2. Security
- Enable row-level security on `careers_applications`.
- Allow anonymous and authenticated visitors to INSERT applications only.
- Do not grant public SELECT, UPDATE, or DELETE access because applications contain private candidate information.
- Add separate deny-by-default policies for SELECT, UPDATE, and DELETE.

3. Integrity
- Require all application fields used by the form.
- Enforce the 200-character limit for the fit statement in the database.
- Require Core Positions to use United States or Europe as the residence selection and acknowledge the legal residency requirement.
*/

CREATE TABLE IF NOT EXISTS public.careers_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (length(trim(full_name)) BETWEEN 2 AND 160),
  email text NOT NULL CHECK (length(trim(email)) BETWEEN 5 AND 320),
  phone text NOT NULL CHECK (length(trim(phone)) BETWEEN 3 AND 80),
  role text NOT NULL CHECK (length(trim(role)) BETWEEN 2 AND 160),
  role_group text NOT NULL CHECK (role_group IN ('core', 'other')),
  experience text NOT NULL CHECK (experience IN ('Less than 1 year', '1–2 years', '3–5 years', '5+ years')),
  availability text NOT NULL CHECK (availability IN ('Under 20 hrs/week', '20–40 hrs/week', '40+ hrs/week')),
  current_country text NOT NULL CHECK (length(trim(current_country)) BETWEEN 2 AND 120),
  legal_residency_ack boolean NOT NULL DEFAULT false,
  timezone_region text NOT NULL CHECK (length(trim(timezone_region)) BETWEEN 2 AND 120),
  role_specific_answer text NOT NULL CHECK (length(trim(role_specific_answer)) BETWEEN 2 AND 4000),
  proof_link text NOT NULL CHECK (length(trim(proof_link)) BETWEEN 2 AND 1000),
  fit_statement text NOT NULL CHECK (length(trim(fit_statement)) BETWEEN 2 AND 200),
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT careers_core_residency_check CHECK (
    role_group = 'other'
    OR (current_country IN ('United States', 'Europe') AND legal_residency_ack = true)
  )
);

ALTER TABLE public.careers_applications ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON public.careers_applications TO anon, authenticated;

DROP POLICY IF EXISTS "Public can submit careers applications" ON public.careers_applications;
CREATE POLICY "Public can submit careers applications"
ON public.careers_applications FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "Public cannot read careers applications" ON public.careers_applications;
CREATE POLICY "Public cannot read careers applications"
ON public.careers_applications FOR SELECT
TO anon, authenticated
USING (false);

DROP POLICY IF EXISTS "Public cannot update careers applications" ON public.careers_applications;
CREATE POLICY "Public cannot update careers applications"
ON public.careers_applications FOR UPDATE
TO anon, authenticated
USING (false)
WITH CHECK (false);

DROP POLICY IF EXISTS "Public cannot delete careers applications" ON public.careers_applications;
CREATE POLICY "Public cannot delete careers applications"
ON public.careers_applications FOR DELETE
TO anon, authenticated
USING (false);