# Landing Page Options

Three professional "coming soon" landing page options for verataventures.com.

## Preview Routes

After running `npm run dev`, view each option at:

- **Option 1**: http://localhost:3000/landing-options/option-1
- **Option 2**: http://localhost:3000/landing-options/option-2
- **Option 3**: http://localhost:3000/landing-options/option-3
- **Current Default**: http://localhost:3000

---

## Option 1: Minimal & Elegant

**File**: `app/landing-options/option-1/page.tsx`

**Design Philosophy**:
- Ultra-clean with lots of white space
- Premium, sophisticated feel
- Typography-focused design
- Subtle, refined interactions

**Best For**: Positioning as a premium/professional venture studio

**Visual Characteristics**:
- Light background (#fafafa)
- Black/white color scheme with minimal accent
- Single-letter logo mark
- Clean horizontal divider
- Inline form with subtle focus state

---

## Option 2: Bold Startup Energy

**File**: `app/landing-options/option-2/page.tsx`

**Design Philosophy**:
- Dynamic gradient backgrounds (deep purple/blue)
- Bold, impactful typography
- Modern glassmorphism effects
- Energetic, forward-thinking feel

**Best For**: Positioning as an innovative venture builder attracting early adopters

**Visual Characteristics**:
- Dark gradient background with decorative orbs
- Gradient text treatment
- "Launching 2025" badge
- Product category tags
- Stats/social proof element

---

## Option 3: Professional & Trust-Building

**File**: `app/landing-options/option-3/page.tsx`

**Design Philosophy**:
- Clean, corporate aesthetic
- Trust indicators prominently displayed
- Clear value proposition
- Multiple sections with structured information

**Best For**: Establishing credibility with enterprise/healthcare verticals

**Visual Characteristics**:
- Light gray background with white cards
- Header with logo
- Focus areas grid (Education, Healthcare, Consumer)
- Trust indicators bar (Location, Structure, Products)
- More traditional layout structure

---

## Deployment

To use an option as your main landing page:

1. Copy the option's code to `app/page.tsx`
2. Or modify `app/page.tsx` to import the desired component

## Email Collection

All options include email collection forms. To connect to an email service:

1. **Resend**: Add API integration in form handler
2. **ConvertKit**: Use their API or embed forms
3. **Vercel Postgres**: Store emails directly

Example integration point (in each page.tsx):
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  // TODO: Connect to your email service
  // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
}
```

---

## Customization

Each option uses inline styles for easy customization:

- **Colors**: Modify `styles` object at bottom of each file
- **Copy**: Edit text directly in JSX
- **Layout**: Adjust container widths and spacing in styles

---

## Recommendation

Based on Verata Ventures' positioning as a holding company with diverse verticals:

1. **For broad appeal**: Option 1 (Minimal) - universal, doesn't favor any vertical
2. **For startup/tech audience**: Option 2 (Bold) - attracts early adopters
3. **For enterprise/healthcare credibility**: Option 3 (Professional) - builds trust

Consider testing all three with different audiences.
