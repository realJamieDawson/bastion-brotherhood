# Bastion Brotherhood Website

A modern, elegant pre-launch landing page for Bastion Brotherhood — a men's mental health support organisation launching in St Helens.

## Features
- Beautiful dark navy / gold branding matching the custom logo
- Custom SVG logo featuring bastion tower, shield, chain & feather wreath
- Compelling copy about the mission and two ways to get involved (Member / Ambassador)
- Fully functional interest registration form (First name, Last name, Email + dropdown)
- Success state after submission
- Fully responsive and mobile-friendly
- Ready for Vercel deployment

## Tech Stack
- Vite + React 18 + TypeScript
- Tailwind CSS
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Form Integration (Important)

The form currently shows a success message on submit (client-side simulation).

**To make it actually collect emails:**

1. Go to [https://formspree.io](https://formspree.io) and create a **free account**
2. Create a new form (it will give you an endpoint like `https://formspree.io/f/xxxxxxxx`)
3. In `src/App.tsx`, find the commented section around line ~140 and replace with your real endpoint:

```tsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID_HERE', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

4. Remove the simulated `await new Promise...` block.

Formspree has a generous free tier and is perfect for this use case.

## Deploy to Vercel

1. Push this folder to a GitHub / GitLab repo
2. Go to [https://vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel will auto-detect Vite and deploy it instantly
4. Update your DNS / domain settings to point `bastionbrotherhood.co.uk` to Vercel

## Branding Notes

The logo SVG in the code is a custom-designed emblem created to match the Bastion Brotherhood identity:
- Central bastion tower = strength & protection
- Interlocking shield + chain = brotherhood bond
- Surrounding feather wreath = sophistication, wisdom, rising above challenges

Colors used:
- Deep Navy: `#0a1628`
- Charcoal: `#1e2937`
- Metallic Gold: `#c5a46e`

## Next Steps (Recommended)

- Add real photos of St Helens or men in supportive settings (once available)
- Add a simple blog or "Latest Updates" section later
- Connect the form to Formspree / ConvertKit / Mailchimp
- Add Google Analytics or Vercel Analytics
- Create a proper privacy policy page before launch

---

Built with ❤️ for the men of St Helens who need it most.

Bastion Brotherhood — You don't have to face it alone.
