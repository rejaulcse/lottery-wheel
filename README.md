# মাসিক লটারি হুইল (Monthly Lottery Spin Wheel)

A single-file, offline-capable web app for running a fair monthly lottery draw among a group of 12 members. Built for a group that used to write 12 names on paper and toss for a winner each month — this replaces the paper toss with a spinning wheel.

**UI language:** Bengali

## Features

- **12 editable member names** — stored automatically in the browser, no backend needed.
- **Spin wheel** — a 10-second animated spin randomly picks a winner from the members currently on the wheel.
- **Winner celebration** — a congratulations card with the winner's name, date, and a confetti animation.
- **Winners' ledger (বিজয়ীদের খাতা)** — every draw is logged with its date.
  - Anyone listed in the ledger is automatically removed from the wheel.
  - Deleting a member's entry from the ledger (✕ button) adds them back to the wheel.
  - The whole ledger can also be cleared at once, which resets everyone back onto the wheel.
- **Light/dark theme aware** — follows the visitor's device theme automatically.
- **No installation or server required** — it's a single HTML file that runs entirely in the browser.

## Files

| File | Purpose |
|---|---|
| `lottery-wheel.html` | The complete app — open it directly in any browser. |

## How to use

1. Open `lottery-wheel.html` in a browser (or the live GitHub Pages link, if enabled).
2. Tap **"সদস্যদের নাম"** to enter or edit the 12 members' names.
3. Tap **"হুইল ঘোরান"** (or the center hub) to spin the wheel.
4. The winner is announced and automatically logged in **"বিজয়ীদের খাতা"**.
5. Next month, spin again — previous winners are skipped automatically until you remove them from the ledger.

## Hosting on GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under **Branch**, select `main` and save.
3. GitHub will give you a live link — open it on any device to use the app, or add it to your phone's home screen.

## Tech notes

- Pure HTML, CSS, and vanilla JavaScript — no build step, no dependencies.
- Data (names, win history) is saved in the browser's local storage, per device/browser.
- Fonts: Hind Siliguri and Tiro Bangla (loaded from Google Fonts) for Bengali text.
