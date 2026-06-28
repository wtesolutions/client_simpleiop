# SimplyIOP.com — Cursor HTML Mockup Specification
**Purpose:** Full-site clickable HTML mockup prompt & design spec for Cursor AI  
**Target:** Church, Nonprofit & Faith-Based Organization Fundraising Campaign Platform  
**Domain:** simplyIOP.com  
**Design Language:** Inspired by Edward Jones Online — professional financial services aesthetic  
**Date:** June 2026

---

## 🎨 Design System — Edward Jones Inspired

The SimplyIOP interface should feel like a **professional financial services platform** — trustworthy, clean, and data-forward — adapted with SimplyIOP's faith-focused brand identity. Study the Edward Jones reference images and replicate their structural approach.

### Color Palette

```css
/* Primary Brand */
--color-charcoal:     #3d3d3d;   /* EJ-style dark header background */
--color-navy:         #1a4a7a;   /* EJ-style link/accent blue (slightly warmer) */
--color-blue-btn:     #1557a0;   /* Primary CTA button blue (matches EJ "Log In" / "Start My Review") */
--color-blue-hover:   #0f3f7a;   /* Hover state for blue buttons */

/* Brand Accent */
--color-gold:         #f0b429;   /* SimplyIOP gold — matches EJ yellow logo accent */
--color-gold-light:   #fff8e1;   /* Gold tint for icon circles / highlight cards */

/* Neutrals */
--color-white:        #ffffff;
--color-bg-light:     #f5f7fa;   /* Page body background — EJ uses near-white */
--color-border:       #dde1e7;   /* Table/card borders — EJ light gray */
--color-text-primary: #1a1a1a;   /* Main body text */
--color-text-muted:   #6b7280;   /* Subtext, labels */
--color-link:         #1a6bbf;   /* Anchor/link text — EJ teal-blue */

/* Status */
--color-success:      #2e7d32;
--color-warning:      #f59e0b;
--color-error:        #c62828;

/* Right panel (login page dark side) */
--color-panel-dark:   #2d2d2d;   /* EJ login right panel charcoal */
--color-panel-border: #4a4a4a;   /* Dividers within dark panel */
```

### Typography

```css
/* Font Stack — matches EJ's clean sans-serif */
font-family: 'Lato', 'Open Sans', system-ui, -apple-system, sans-serif;
/* Google Fonts CDN: https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap */

--text-page-title:  2.25rem / 700 / color-white;    /* "Welcome, Eric" hero — white on dark header */
--text-h2:          1.5rem  / 700 / color-text-primary;
--text-h3:          1.125rem / 700 / color-text-primary;
--text-body:        1rem    / 400 / color-text-primary;  /* line-height: 1.6 */
--text-label:       0.875rem / 400 / color-text-muted;
--text-link:        1rem    / 400 / color-link;          /* underline on hover */
--text-small:       0.75rem / 400 / color-text-muted;
```

### Key Layout Patterns (from EJ screenshots)

#### 1. Site Header (Dark Charcoal Bar)
```
[Logo]  [Home icon]  [Accounts]  [Banking]  [Goals]  [Messages]  [Documents]  [Market Research]   [EG avatar ▾]  [Log Out btn]
background: #3d3d3d; 
height: 56px; 
Logo: white text with gold/yellow rectangle badge behind "Edward Jones"
Nav links: white text, 14px, hover: gold underline
Log Out: white outlined button, border-radius: 4px
```

#### 2. Welcome Hero Strip (Dark, Below Header)
```
background: #3d3d3d (same charcoal, or slightly lighter: #4a4a4a)
padding: 32px 48px;
h1: "Welcome, Eric" — font-size: 2.25rem, color: white, font-weight: 300 (light)
```

#### 3. Main Content Area
```
background: #f5f7fa (light gray page bg)
Two-column layout on dashboard:
  Left: 60% — Accounts table + Values Over Time
  Right: 36% — Reminder card + promo card
padding: 32px 48px;
```

#### 4. Content Cards
```css
.card {
  background: white;
  border-radius: 4px;           /* EJ uses minimal radius */
  box-shadow: 0 1px 4px rgba(0,0,0,0.10);
  padding: 24px;
  margin-bottom: 16px;
}
```

#### 5. Data Tables (Accounts List)
```css
/* EJ account list style */
table { border-collapse: collapse; width: 100%; }
thead th { 
  font-weight: 700; font-size: 0.875rem; 
  border-bottom: 2px solid #dde1e7; padding: 12px 0; 
}
tbody tr { border-bottom: 1px solid #dde1e7; }
tbody tr:hover { background: #f0f4f8; }
td { padding: 16px 0; vertical-align: middle; }
.account-link { color: #1a6bbf; font-weight: 700; text-decoration: none; }
.account-link:hover { text-decoration: underline; }
.account-sub { font-size: 0.813rem; color: #6b7280; margin-top: 2px; }
.amount { font-size: 1rem; font-weight: 700; text-align: right; }
```

#### 6. Primary Button (Blue — EJ "Log In" / "Start My Review" style)
```css
.btn-primary {
  background: #1557a0;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  width: 100%;            /* full-width in cards/forms */
  transition: background 0.2s;
}
.btn-primary:hover { background: #0f3f7a; }
```

#### 7. Outline / Secondary Button (EJ "Edit Account Order" style)
```css
.btn-outline {
  background: white;
  color: #1557a0;
  border: 1.5px solid #1557a0;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
}
```

#### 8. Reminder / Highlight Card (Gold circle icon, blue CTA)
```css
.reminder-card {
  background: white;
  border-radius: 4px;
  border: 1px solid #dde1e7;
  padding: 20px;
}
.reminder-icon {
  width: 56px; height: 56px;
  background: #fff8e1;         /* gold tint circle */
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.5rem;           /* emoji or SVG icon */
}
```

#### 9. Login Page — Two-Panel Split Layout
```css
.login-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}
/* Left panel — white */
.login-left {
  background: white;
  padding: 48px;
  border-left: 6px solid #f0b429;   /* EJ gold left accent stripe */
}
/* Right panel — dark charcoal */
.login-right {
  background: #2d2d2d;
  padding: 48px;
  color: white;
}
```

#### 10. Form Inputs (EJ floating label style)
```css
.form-group { position: relative; margin-bottom: 20px; }
.form-input {
  width: 100%; padding: 20px 12px 8px;
  border: 1px solid #b0b8c4;
  border-radius: 4px;
  font-size: 1rem;
  background: white;
  outline: none;
}
.form-input:focus { border-color: #1557a0; box-shadow: 0 0 0 2px rgba(21,87,160,0.15); }
.form-label {
  position: absolute; top: 6px; left: 12px;
  font-size: 0.75rem; color: #6b7280;
}
```

#### 11. Dark Panel List Items (EJ right-panel navigation links)
```css
.dark-panel-item {
  display: flex; justify-content: space-between; align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #4a4a4a;
  color: #e0e0e0;
  font-size: 0.9375rem;
  cursor: pointer;
}
.dark-panel-item:hover { color: white; }
.dark-panel-item .chevron { color: #9ca3af; }
.dark-panel-section-heading { font-weight: 700; color: white; font-size: 0.875rem; margin: 20px 0 8px; }
```

---

## 🧭 Project Overview

SimplyIOP is a **SaaS campaign management platform** for churches, dioceses, and faith-based nonprofits running structured multi-week fundraising stewardship campaigns. The platform manages the full lifecycle: member import → donor group segmentation → variable letter creation → multi-channel delivery (print, email, SMS) → response tracking → reporting → invoicing.

---

## 💳 Stripe Connect Integration

**Architecture:** Express Connect. SimplyIOP = platform. Each church = connected account.

```
[Donor pledge payment via campaign link]
        ↓
[Stripe collects payment]
        ↓
[SimplyIOP application_fee: ~1.5–2.5%]
        ↓
[Church Stripe connected account receives net]
        ↓
[Payout to church bank account]
```

- **Nonprofit rate:** 2.2% + $0.30 (card) | 0.8% capped at $5 (ACH)
- **Express onboarding:** church KYC in < 5 min within SimplyIOP wizard
- **Application fee:** collected per transaction automatically
- **50% upfront campaign fee** (paid by church to SimplyIOP): Stripe Elements or Payment Link; ACH preferred for $1,000+ invoices

---

## 💰 Revenue Model

| Revenue Stream | Amount |
|---|---|
| Campaign Setup Fee | $500–$5,000 flat |
| Per-piece print mail production | $1.50–$3.50/letter |
| Digital add-on (email + SMS) | $99–$499/campaign |
| Stripe application fee on donations | 1.5–2.5% per transaction |
| Promotional materials (envelopes, posters) | $200–$2,000 |
| Strategy consultation upsell | $299–$5,000 |
| Annual multi-campaign subscription | $1,200–$9,600/yr |

---

## 🖥️ HTML Mockup Instructions for Cursor

### Technical Requirements
- **HTML5 + Tailwind CSS (CDN):** `<script src="https://cdn.tailwindcss.com"></script>`
- **Google Fonts:** `<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">`
- Vanilla JavaScript only — no frameworks
- All pages linked and navigable
- Responsive (desktop-first, mobile hamburger)
- **Design reference:** Edward Jones online banking aesthetic — dark charcoal header, white body, blue CTAs, gold accent, clean table layouts

---

## 📁 File Structure

```
simplyiop-mockup/
├── index.html              ← Public marketing homepage
├── login.html              ← Login page (split panel, EJ style)
├── dashboard.html          ← Organization campaign dashboard
├── wizard.html             ← New campaign setup wizard
├── campaign-detail.html    ← Active campaign view with tabs
├── pledge.html             ← Public donor pledge/donation page
├── admin.html              ← SimplyIOP admin / salesperson view
├── reseller.html           ← Consultant reseller portal
└── js/
    └── main.js             ← Tab switching, wizard steps, modals, pledge calculator
```

---

### PAGE 1: Login Page (`login.html`) — EJ Two-Panel Style

**Exact replication of EJ login layout:**

```
[Left Panel — white, gold left border stripe]
  SimplyIOP logo (gold "IOP" with navy text)
  h2: "Welcome to Online Access"
  
  [Form — floating label inputs]
  User ID input (with dropdown arrow for saved IDs)
  Password input (with eye toggle icon)
  [ ☑ Save user ID on this device ]
  
  [Log In] — full-width blue button
  
  Find your User ID  |  Reset your password  (links)
  
  ─────────────────────────────────────────
  Support  |  Disclosures  |  Privacy & Security Center
  Copyright © 2026 SimplyIOP®. All rights reserved.

[Right Panel — dark charcoal #2d2d2d]
  h3: "New to Online Access?"
  p: "If you're already a SimplyIOP client:"

  [Sign up                              >]  ← dark-panel-item
  [Explore what you can do              >]
  [Learn more                           >]

  bold: "Need help logging in?"
  [Watch our sign-up and login help videos >]
  
  bold: "New to SimplyIOP?"
  [Contact a campaign advisor             >]
```

---

### PAGE 2: Public Marketing Homepage (`index.html`)

**Header — identical charcoal bar structure to EJ:**
```
[SimplyIOP logo]  [🏠]  [How It Works]  [Pricing]  [For Consultants]  [Resources]   [EG ▾]  [Log Out]
background: #3d3d3d
```
*(On public/marketing version, replace Log Out with [Login] outline + [Start Free Campaign] gold button)*

**Welcome Hero Strip (charcoal):**
- Headline (large, light weight, white): "Professional Stewardship Campaigns — Without the $50,000 Consultant Fee"
- Sub (white, smaller): "SimplyIOP guides your church through a proven 4-week campaign — print mail, email, SMS, and donor tracking in one platform."
- Two CTA buttons: [Start Your Campaign →] (blue, #1557a0) | [Watch 2-Min Demo] (white outline)

**Main Body (light gray bg #f5f7fa) — two column:**

Left column (60%):
- "How It Works" card (white, 4px radius, subtle shadow):
  1. Import your member list & assign donor groups
  2. Create personalized letters for each group & week
  3. Track responses — we suppress respondents automatically
  4. Receive a final report + thank-you letters sent for you
- Stats bar: $42M+ raised | 5.3% avg response rate | 1,200+ churches
- Pricing table (3 tiers in EJ table style)

Right column (36%):
- Reminder-style card (white, gold circle icon): "See If SimplyIOP Is Right for Your Church — Schedule a 15-min call" + [Book a Call] blue button
- Promo card (light blue bg): "Multi-Parish & Diocese Plans — Manage all your congregations from one dashboard. Learn More →"

**Pricing Section (below fold — full width):**

| | Starter | Growth | Diocese |
|---|---|---|---|
| **Price** | $499/campaign | $999/campaign | Contact Sales |
| **Members** | Up to 500 | Up to 2,500 | Unlimited |
| **Groups** | 1 | Up to 5 | Unlimited |
| **Channels** | Print only | Print + Email + SMS | All + white-label |
| **Reports** | Basic | Weekly auto-report | Custom + API |

---

### PAGE 3: Dashboard (`dashboard.html`) — EJ Dashboard Style

**Header:** Dark charcoal, identical to EJ nav bar with SimplyIOP branding, org name in avatar circle (initials "GC" for Grace Community), [Log Out] button

**Welcome Strip (charcoal):**
- `h1` (light weight, white): "Welcome, Grace Community Church"
- Role badge below: "Administrator" in small gray text

**Main Content (light gray bg, two-column):**

Left column (60%):

**Accounts-style card → "My Campaigns"**
```
Total Campaign Value (all active pledges):    $47,200.00
─────────────────────────────────────────────────────────
SimplyIOP Campaign Accounts          Go to Campaigns >

Account                              Value
✏ [IOP] 2026 Annual Stewardship     $34,151.30
     Growth • ****5524
✏ [IOP] Capital Building Fund       $8,316.71
     Starter • ****0502
✏ [IOP] Youth Wing Campaign         $4,731.99 (draft)
     Setup • ****0439

[Show More ▾]    [📋 Edit Campaign Order]
```

**Values Over Time** card (below):
- "Pledge Totals Over Time — All Campaigns" with [↗ Expand] link (EJ pattern)
- Placeholder for line chart

Right column (36%):

**Reminder card (white, gold circle icon ⏱):**
"Monday Deadline Approaching"
- "Ensure this week's responses are entered before 11:59 PM Monday to protect Tuesday's mailing schedule."
- [Enter Responses Now] — blue full-width button

**Promo card (light blue bg):**
"Upgrade to Growth Plan"
Powered by [Stripe] logo
"Unlock email + SMS channels, 5 donor groups, and weekly auto-reports."
[Learn More & Upgrade ↗]

**[+ Add New Campaign]** — outline button, below campaign table

---

### PAGE 4: New Campaign Wizard (`wizard.html`)

**Header:** Same dark charcoal nav

**Welcome strip:** "New Campaign Setup" (light, white)

**Body (white card, centered, max-width 760px):**

**Progress indicator at top (EJ-style step dots):**
```
● Step 1 — Campaign Basics
○ Step 2 — Member Import  
○ Step 3 — Donor Groups
○ Step 4 — Letter Creation
○ Step 5 — Delivery Channels
○ Step 6 — Review & Pay
```
Each dot: filled circle = complete (gold), current (navy), upcoming (gray)

**Step 1 — Campaign Basics (visible, others hidden via JS):**
- Campaign Name (floating label input)
- Organization Name (pre-filled from account)
- Campaign Type (EJ dropdown style): Annual Stewardship | Capital Campaign | Debt Retirement | Building Fund | Special Project
- Campaign Duration: radio group — 3 weeks | **4 weeks (default)** | 5 weeks | 6 weeks
- Start Date: date picker input
- Include Final Thank-You Letter: toggle (on by default)
- Upload Logo: drag-drop zone with dashed border
- Upload Signature Image: drag-drop zone
- [Save & Continue →] blue button (right-aligned)

**Step 2 — Member Import:**
- Tab toggle: [Bulk Upload CSV] [Manual Entry]
- CSV: large drag-drop upload zone, [Download CSV Template] link
- Field mapping preview table (EJ table style)
- Member count badge: "847 members imported" (green badge)
- **Upsell strip (gold background):** "Tip: Include the Email and Cell Phone columns to unlock digital channels in Step 5 — costs nothing extra to import now."
- [Save & Continue →]

**Step 3 — Donor Groups:**
- "How many groups?" — number selector (1–6, default: 3)
- For each group: Name input, color label, assignment rule (Annual Donation > $X)
  - Group 1: "Major Donors" — Annual Donation > $1,000
  - Group 2: "Regular Donors" — $100–$999
  - Group 3: "Excused / Lapsed"
- Member preview donut chart (placeholder)
- **Upsell card (white, gold left border):** "Add a 'Leadership Givers' group (Group 0) — our pre-campaign quiet phase template gets your largest donors to commit first, anchoring the campaign. Available on Growth plan."
- [Save & Continue →]

**Step 4 — Letter Creation:**
- Letter assignment matrix: rows = Groups, columns = Mailing Weeks (checkboxes)
- Rich text editor for each Group × Week combination
- Merge fields palette: `{{FirstName}}` `{{LastName}}` `{{Salutation}}` `{{LastGiftAmount}}` `{{AskAmount}}` `{{PledgeLink}}`
- Bump Table configurator: "Ask = Annual Donation × [1.15 ✏ editable]"
- Preview button: renders full letter with sample data in modal
- **Upsell card:** "Upgrade to full-color printing — $0.45 more per piece, up to 35% higher response rate. [Add Full-Color →]"
- [Save & Continue →]

**Step 5 — Delivery Channels:**
- Print Mail: locked ON (required)
- Email: toggle ON/OFF → if ON, compose HTML email version
- SMS: toggle ON/OFF → 160-char SMS composer with character counter
- **Upsell highlight box (gold tint bg):** "📱 Digital Bundle (Email + SMS) — Add for $149 and see up to 28% higher response rates when combined with print. [Add Digital Bundle]"
- Promotional Materials checkboxes:
  - [ ] In-pew pledge envelopes — 500 for $199, 1,000 for $349
  - [ ] Campaign posters (8.5×11) — $49 / set of 10
  - [ ] Pre-campaign teaser postcard — $0.65/piece
- [Save & Continue →]

**Step 6 — Review & Pay:**
- Campaign summary table (EJ account-list style):
  ```
  Campaign Setup Fee (Growth)         $999.00
  Est. Print Production (847 × 4 × $1.75)  $5,928.00
  Digital Bundle                      $149.00
  In-pew Envelopes (500)              $199.00
  ─────────────────────────────────
  Subtotal                            $7,275.00
  50% Due Today                       $3,637.50
  Remaining Due at Completion         $3,637.50
  ```
- Stripe embedded payment element (card, ACH toggle)
- "No mailings will be produced until payment clears. No exceptions." — bold notice, red icon
- Terms checkbox
- [Submit Campaign & Pay →] — blue, full-width

---

### PAGE 5: Active Campaign Detail (`campaign-detail.html`)

**Header + Welcome strip:** "2026 Annual Stewardship Drive" | Status badge: "● Active — Week 2 of 4"

**Tab Navigation (below strip, white bg):**
```
[Overview] [Letters] [Member List] [Responses] [Schedule] [Reports] [Payments] [Settings]
active tab: navy bottom border + bold text; hover: light navy underline
```

**Overview Tab (two-column):**

Left (60%):
- Week summary table (EJ table style):
  ```
  Week    Mailed    Suppressed    Responded    Pledged
  ─────────────────────────────────────────────────────
  Week 1   847          0            61        $18,200
  Week 2   786         61            33        $12,950
  Week 3   753         94         (pending)    —
  Week 4   —           —             —         —
  ```
- Bar chart placeholder: cumulative pledge growth by week

Right (36%):
- "Next Action Required" reminder card (urgent if < 48 hrs):
  "Monday 11:59 PM Deadline — Enter this week's responses before Tuesday mailing"
  [Enter Responses] — blue button
  Countdown: "31 hours 14 minutes remaining" (red text if < 24 hrs)
- Campaign health card: Response Rate 5.1% | Goal Progress 78% | Letters Queued 753

**Letters Tab:** Grid of letter preview thumbnails (Group × Week), click → full modal with rendered letter

**Member List Tab:**
- Search bar + filter (Group dropdown, Responded Y/N, Status)
- EJ-style table:
  ```
  Name           Group      Email           Last Gift    Pledge $    Responded    Suppress
  ───────────────────────────────────────────────────────────────────────────────────────
  Smith, John    Major      j@email.com     $2,400       $2,760        ✓          —
  Jones, Mary    Regular    m@email.com     $480         $552          —          [ ]
  ```
- Inline edit: click Responded cell → popover to mark Y + enter amount
- Bulk export CSV button (outline)
- **Upsell row (gold tint, non-intrusive):** "📱 Add Mobile Scanner App — log mailed pledge cards with your phone. $99. [Add Now →]"

**Responses Tab:**
- Running log table: Date | Member | Group | Pledge $ | Channel (Mail / Online / Phone / Check)
- Online pledge Stripe counter: "14 online pledges — $6,840 processed via pledge link" (green)
- [+ Log Manual Response] button

**Schedule Tab:**
- Visual week timeline (EJ horizontal step style):
  Week 1 ✓ | Week 2 ✓ | **Week 3 (current)** | Week 4 | Thank-You
- Each week: groups included, letter version, piece count, print status (Sent to printer ✓)

**Reports Tab:**
- [Download Week 1 Report PDF] | [Download Week 2 Report PDF]
- [Export Full Member List CSV]
- Final Report: "Available at campaign completion"

**Payments Tab:**
- Invoice table:
  ```
  Invoice                    Date         Amount        Status
  Setup Fee (50% upfront)    Jun 1, 2026  $3,637.50     Paid ✓
  Week 1 Print Production    Jun 8, 2026  $1,482.25     Paid ✓
  Week 2 Print Production    Jun 15, 2026 $1,375.50     Due Jul 1
  ```
- Online Donations (Stripe): "$6,840 processed — $171.00 platform fee collected"
- [Pay Remaining Balance] — blue button

---

### PAGE 6: Donor Pledge Page (`pledge.html`) — EJ Single-Panel Clean

**Layout:** White card, centered (max-width 560px), logo top, clean and trust-focused

```
[SimplyIOP logo]    Powered by [Stripe badge]

Grace Community Church
2026 Annual Stewardship Drive

Make Your Pledge or Gift

Suggested Amounts:
  [$250]  [$500]  [$750]  [Other: ______]

This is a:  ○ Pledge (pay later)  ● One-time gift  ○ Recurring

─────────────────────────────────────────
First Name: [___________]  Last Name: [___________]
Email:      [___________________________]
Member #:   [____________] (optional)

─────────────────────────────────────────
[  Card  |  Bank (ACH)  ]   ← Stripe Elements

Card number: [__________________________]
Exp: [___]  CVV: [___]

[ ] Help cover processing fees (+2.5% = $12.50 added to your gift)

Total: $500.00          [Give Now →]  ← blue button

🔒 Your gift is securely processed by Stripe.
   Grace Community Church is a registered 501(c)(3).

─────────────────────────────────────────
Tax Receipt will be emailed to you automatically.
```

**Post-submission:** Thank-you screen in same panel style:
- "Thank You, John!" (large, charcoal)
- "Your pledge of $500 has been recorded. A tax receipt has been sent to your email."
- [Download Receipt PDF]

---

### PAGE 7: SimplyIOP Admin Panel (`admin.html`)

**Header:** Same dark charcoal nav, "SimplyIOP Admin" in avatar, role: "Global Administrator"

**Welcome strip:** "Welcome, Admin Dashboard"

**Two-column layout:**

Left (60%) — Accounts table (EJ table style):
```
Organization            Contact         Plan       Campaigns    YTD Revenue    Next Action
──────────────────────────────────────────────────────────────────────────────────────────
Grace Community         J. Wilson       Growth     2 active     $7,275         ● Active
St. Michael's Parish    Fr. O'Brien     Starter    1 active     $2,499         ● Active
First Baptist           D. Johnson      Diocese    5 active     $31,200        ● Active
Kingdom Life Church     P. Harris       Growth     0 (draft)    —              ⚠ Setup
```
Click row → org detail page

Right (36%):
- "Pending Payments" card (red left border): 2 accounts with overdue balances
  - [Review & Hold Mailings] — outline red button
- "Upsell Pipeline" card: accounts flagged for upsell opportunity
  - "Grace Community — eligible for Diocese bundle upgrade"
  - [Send Upgrade Offer →]
- "This Week's Auto-Reports" card: 3 reports sending Monday 6 AM
  - [Preview Reports]

**Salesperson view toggle:** "My Accounts Only" checkbox (filters table to assigned accounts)

---

### PAGE 8: Consultant Reseller Portal (`reseller.html`)

**Login page right-panel style applied to hero:**
- Left: white panel with gold border stripe
  - "Grow Your Ministry Consulting Practice"
  - Sub: "Earn 20% revenue share on every SimplyIOP campaign you bring in. You handle strategy. We handle execution."
  - [Apply for Reseller Access →] — blue button
- Right: charcoal panel
  - How it works (3-item dark-panel-item list):
    1. Apply — free, approved within 24 hrs
    2. Refer — share your unique link or co-branded page
    3. Earn — 20% of setup fees, 5% of print, 10% of add-ons

**Dashboard (post-login):**

Left (60%) — Referred Accounts table:
```
Church                  Campaign Status   Your Earnings
─────────────────────────────────────────────────────────
Grace Community         Active Wk 2       $199.80
Resurrection Lutheran   Completed         $422.50
Our Lady of Peace       Setup             —
```

Right (36%):
- Earnings summary card:
  - Total Earned 2026: $622.30
  - Pending Payout: $199.80
  - [Request Payout →] (Stripe Connect payout)
- Commission rate card:
  - Setup Fee: 20%
  - Print Production: 5%
  - Add-Ons: 10%
  - Multi-year renewals: 10%

---

## 🔧 JavaScript Interactions

```javascript
// main.js behaviors to implement:

// 1. Wizard step advancement
document.querySelectorAll('.wizard-next').forEach(btn => {
  btn.addEventListener('click', () => advanceStep());
});

// 2. Tab switching (campaign detail)
document.querySelectorAll('.tab-btn').forEach(tab => {
  tab.addEventListener('click', e => switchTab(e.target.dataset.tab));
});

// 3. Pledge amount pre-fill
document.querySelectorAll('.amount-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    document.querySelector('#custom-amount').value = e.target.dataset.amount;
    recalculateTotal();
  });
});

// 4. Fee coverage checkbox recalculation
document.querySelector('#fee-coverage').addEventListener('change', recalculateTotal);

// 5. Upsell modals
document.querySelectorAll('.add-now-btn').forEach(btn => {
  btn.addEventListener('click', e => openModal(e.target.dataset.addon));
});

// 6. Mobile hamburger menu toggle
document.querySelector('#hamburger').addEventListener('click', toggleMobileMenu);

// 7. Countdown timer (dashboard, campaign detail)
function startCountdown(deadline) { /* update every second */ }

// 8. Dark panel item hover
document.querySelectorAll('.dark-panel-item').forEach(item => {
  item.addEventListener('mouseenter', () => item.classList.add('hovered'));
  item.addEventListener('mouseleave', () => item.classList.remove('hovered'));
});
```

---

## 🚀 Cursor Prompt (paste this into Cursor chat)

```
Build a multi-page clickable HTML mockup for SimplyIOP.com — a SaaS fundraising 
campaign management platform for churches and nonprofits.

DESIGN LANGUAGE: Model the visual design closely after Edward Jones Online Banking:
- Dark charcoal (#3d3d3d) header/nav bar with white logo and links
- Large welcome hero strip (same charcoal) with light-weight white heading
- Light gray page body (#f5f7fa) with white cards
- Blue primary CTA buttons (#1557a0), hover (#0f3f7a)
- Gold/yellow accent (#f0b429) for icons, badges, brand elements
- Login page: split two-panel (white left with gold left-border stripe, dark charcoal right)
- EJ-style floating label form inputs with subtle focus ring
- EJ-style data tables: thin borders, blue linked account names, bold amounts right-aligned
- EJ-style reminder widget: white card, circular gold icon, blue full-width button
- Minimal border-radius (4px) on cards and buttons — professional/conservative feel
- Font: Lato from Google Fonts (weights 300, 400, 700)

PAGES TO BUILD:
1. login.html — two-panel EJ-style login (white/gold left, charcoal right)
2. index.html — public marketing homepage with EJ header, hero strip, two-column body
3. dashboard.html — org dashboard with campaign list (EJ accounts table style)
4. wizard.html — 6-step new campaign wizard with step indicator
5. campaign-detail.html — active campaign with tabs (Overview, Letters, Members, Responses, Schedule, Reports, Payments)
6. pledge.html — donor-facing pledge/payment page (clean, trust-focused, Stripe-style elements)
7. admin.html — SimplyIOP global admin with accounts table
8. reseller.html — consultant partner portal

JS INTERACTIONS:
- Wizard step advancement with animated progress dots
- Tab switching on campaign-detail page
- Pledge amount button pre-fill + fee coverage checkbox total recalculation
- Upsell modal overlays on [Add Now] buttons
- Mobile hamburger menu
- Countdown timer on dashboard (Monday deadline)
- Dark panel item hover effects (right panel list items)

UPSELL MOMENTS (implement at these locations):
- Wizard Step 3: gold-border card promoting Leadership Giver quiet-phase group
- Wizard Step 4: above letter editor — full-color print upgrade card
- Wizard Step 5: highlighted box for Digital Bundle (email+SMS) for $149
- Campaign Detail > Member List tab: non-intrusive gold row for Mobile Scanner App ($99)
- Dashboard right column: promo card for plan upgrade

COLOR TOKENS:
--charcoal: #3d3d3d | --navy: #1a4a7a | --blue-btn: #1557a0
--gold: #f0b429 | --gold-light: #fff8e1 | --white: #ffffff
--bg-light: #f5f7fa | --border: #dde1e7 | --link: #1a6bbf
--panel-dark: #2d2d2d | --text-muted: #6b7280

Use Tailwind CSS via CDN + Google Fonts (Lato). No frameworks. 
All pages cross-linked. Realistic SimplyIOP-branded sample data populated throughout.
```

---

## 📊 Realistic Sample Data for Mockup

| Field | Value |
|---|---|
| Church name | Grace Community Church |
| Admin name | Jennifer Wilson |
| Campaign name | 2026 Annual Stewardship Drive |
| Campaign goal | $60,000 |
| Total pledged | $47,200 (78% of goal) |
| Members total | 847 |
| Members responded | 94 |
| Response rate | 5.1% |
| Average pledge | $502 |
| Online donations | $6,840 (Stripe) |
| Week | 2 of 4 |
| Next deadline | Monday 11:59 PM |
| Starter account | Single-1 • ****5524 — $34,151.30 |
| IRA-equivalent | Capital Fund • ****0502 — $8,316.71 |
| Joint-equivalent | Youth Campaign • ****0439 — $4,731.99 |

---

*Document: SimplyIOP Cursor Mockup Spec v2.0 — Edward Jones Style Update*  
*Prepared by: WTE Solutions / Eric Garrison — June 2026*
