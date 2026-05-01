# MemoryOS

![Built for Bloomathon](https://img.shields.io/badge/Built%20for-Bloomathon-7C3AED?style=for-the-badge)
![Expo](https://img.shields.io/badge/Expo-55-000020?style=for-the-badge&logo=expo)
![React Native](https://img.shields.io/badge/React%20Native-0.83-61DAFB?style=for-the-badge&logo=react&logoColor=000)
![Convex](https://img.shields.io/badge/Backend-Convex-EE342F?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Bun](https://img.shields.io/badge/Runtime-Bun-F9F1E1?style=for-the-badge&logo=bun&logoColor=000)

MemoryOS is an AI-powered people-memory prototype built for **Bloomathon**. It helps you remember everyone you meet: record a quick voice note after a conversation, let AI extract the useful details, and later search your personal network by name, context, role, company, event, or vague memory.

> Prototype status: functional MVP built with Expo + Convex.

## Why MemoryOS exists

Most people meet valuable contacts at conferences, university events, interviews, founder meetups, classes, and social situations — then forget the details that matter.

MemoryOS acts like a lightweight personal CRM and memory assistant:

- capture context immediately with voice
- structure messy memories into clean people profiles
- search later using natural language
- track follow-ups
- understand your network through analytics

## Core Features

### Voice-first capture
Record a short note after meeting someone instead of manually typing everything.

### AI transcription and structuring
Audio is transcribed and converted into structured fields such as:

- name
- role
- company
- context
- notes
- follow-up status
- follow-up note
- LinkedIn/profile details

### People memory database
Saved people become searchable memory cards inside the app.

### Natural language recall
Search for people using memory-based queries like:

- “Who was the founder I met at demo night?”
- “Find the designer from the AI meetup.”
- “Who did I need to follow up with about internships?”

### Pulse dashboard
The Pulse page visualizes relationship intelligence, including:

- social composition
- networking velocity
- follow-up signals
- AI-generated network insights

### Settings and export
Users can adjust preferences and export their saved MemoryOS data as a readable text/JSON file.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Mobile/Web App | Expo, React Native, Expo Router |
| Backend | Convex |
| Auth | Convex Auth |
| Database | Convex document database |
| File/Audio Storage | Convex Storage + Expo APIs |
| Audio | `expo-audio` on native, browser recording support on web |
| AI Transcription | Groq Whisper |
| Semantic Search / Embeddings | OpenAI |
| UI | React Native StyleSheet, custom components, `react-native-svg` |

## Repository Structure

```text
.
├── apps/
│   └── default/                 # Expo app
│       ├── app/                 # Expo Router screens
│       │   ├── (tabs)/          # Main authenticated tabs
│       │   └── auth.tsx         # Auth screen
│       ├── components/          # Shared frontend components
│       └── lib/                 # Frontend helpers and app types
│
├── packages/
│   └── backend/
│       └── convex/              # Convex schema, auth, queries, mutations, actions
│
├── assets/                      # Shared app images/icons/fonts
├── package.json                 # Bun workspace root
└── README.md
```

## Important App Files

| File | Purpose |
| --- | --- |
| `apps/default/app/(tabs)/index.tsx` | Main record/capture screen |
| `apps/default/app/(tabs)/pulse.tsx` | Network analytics dashboard |
| `apps/default/app/(tabs)/settings.tsx` | Preferences and data export |
| `apps/default/app/auth.tsx` | Login/sign-up UI |
| `apps/default/lib/memoryos.ts` | Shared frontend types, theme helpers, default settings |
| `packages/backend/convex/schema.ts` | Convex database schema |
| `packages/backend/convex/people.ts` | People memory queries/mutations/actions |
| `packages/backend/convex/settings.ts` | User settings and onboarding state |
| `packages/backend/convex/auth.ts` | Convex Auth configuration |

## Environment Variables

To run this outside the original build environment, configure these variables in your Convex/backend environment:

```env
GROQ_API_KEY=your_groq_key
OPENAI_API_KEY=your_openai_key
```

For local Expo/Convex development, also configure:

```env
CONVEX_DEPLOYMENT=dev:your-convex-deployment
EXPO_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
EXPO_PUBLIC_CONVEX_SITE_URL=https://your-deployment.convex.site
```

OAuth credentials may also be required if you enable Google/GitHub sign-in outside the original hosted environment.

## Getting Started Locally

### 1. Install dependencies

```bash
bun install
```

### 2. Configure environment variables

Create a root `.env` file with your Convex deployment URLs and required AI keys.

### 3. Start the backend

```bash
cd packages/backend
bun run dev
```

### 4. Start the Expo app

In a separate terminal:

```bash
cd apps/default
bun run start
```

Then open the app in Expo Go, a simulator, or web preview.

## Available Scripts

From the repository root:

```bash
bun run dev        # Start all dev tasks through Turbo
bun run build      # Run build tasks
bun run lint       # Run lint checks
bun run typecheck  # Run TypeScript checks
bun run test       # Run tests
```

From `apps/default`:

```bash
bun run start      # Start Expo
bun run ios        # Start iOS target
bun run android    # Start Android target
bun run web        # Start web target
bun run lint       # Lint Expo app
```

From `packages/backend`:

```bash
bun run dev        # Start Convex dev server
bun run deploy     # Deploy Convex backend
bun run test       # Run backend tests
bun run lint       # Lint backend
```

## Product Flow

```text
Meet someone
   ↓
Record a quick voice memory
   ↓
AI transcribes and extracts details
   ↓
MemoryOS saves a structured person profile
   ↓
Search later by context, name, role, company, or vague memory
   ↓
Use Pulse to understand your network and follow-up opportunities
```

## Example Use Cases

- Remembering people from conferences and demo days
- Tracking classmates, professors, and club contacts
- Founder/investor networking
- Recruiting and sales relationship notes
- Community building
- Personal relationship context

## Current Prototype Notes

This is a prototype/MVP. It demonstrates the full core loop:

```text
Record → Transcribe → Save → Search → Analyze → Export
```

Potential future improvements:

- richer contact import/export
- calendar/event association
- reminders and push notifications
- stronger duplicate detection
- team/shared memory spaces
- production analytics and billing
- app store release pipeline

## License

No license has been selected yet. Add a license before distributing or accepting external contributions.
