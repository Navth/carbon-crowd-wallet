# Deploy Carbon Crowd App

Your app is an **Expo** project with EAS already configured. You can deploy **web** and/or **mobile** (Android/iOS).

---

## 1. Deploy Web

### Build the web app

```bash
npm run export:web
```

This creates a **`dist`** folder with static files (your `app.json` already has `web.output: "static"`).

### Deploy the `dist` folder

**Option A – EAS Hosting (Expo)**

1. Log in: `npx eas-cli login`
2. Follow [EAS Hosting get started](https://docs.expo.dev/eas/hosting/get-started/) to connect your repo and deploy the static `dist` output.

**Option B – Vercel**

1. Install Vercel CLI: `npm i -g vercel`
2. From the `app` folder: `vercel --prod`
3. Set **Output Directory** to `dist` when prompted (or in project settings).

**Option C – Netlify**

1. Build: `npm run export:web`
2. In Netlify: **Site settings → Build & deploy**  
   - Build command: `npm run export:web`  
   - Publish directory: `dist`

**Option D – Any static host**

Upload the contents of the `dist` folder to any static host (e.g. GitHub Pages, Firebase Hosting, AWS S3 + CloudFront).

---

## 2. Deploy Mobile (Android / iOS)

You already have **EAS** set up (`eas.json` and `projectId` in `app.json`).

### One-time setup

```bash
npm install -g eas-cli
eas login
```

### Build for stores

**Android (production AAB for Play Store):**

```bash
eas build --platform android --profile production
```

**iOS (for App Store):**

```bash
eas build --platform ios --profile production
```

**Both:**

```bash
eas build --platform all --profile production
```

### Submit to stores (after a successful build)

```bash
# Android
eas submit --platform android --profile production

# iOS
eas submit --platform ios --profile production
```

Use the latest build from the EAS dashboard if you’re not submitting the most recent one.

---

## Quick reference

| Goal              | Command / step                                      |
|-------------------|-----------------------------------------------------|
| Web static build  | `npm run export:web` → deploy `dist`                |
| Android build     | `eas build --platform android --profile production` |
| iOS build         | `eas build --platform ios --profile production`     |
| Submit to stores  | `eas submit --platform <android|ios> --profile production` |

For more: [Expo deployment docs](https://docs.expo.dev/guides/publishing-websites/) and [EAS Build](https://docs.expo.dev/build/introduction/).
