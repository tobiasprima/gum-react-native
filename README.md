# Gum React Native

React Native application powered by Expo and TypeScript.

## Prerequisites

- **Node.js 18+** (use nvm to match the version)
- **npm 9+** (comes with Node) – yarn/pnpm are fine but npm is the default
- **Expo CLI** (`npx expo --version`) – bundled with the project, no global install required
- **Xcode + iOS Simulator** for iOS testing, and/or **Android Studio + Emulator** for Android

## Getting Started

```bash
# Install dependencies
npm install

# Start with expo
npx expo start

## Project Structure

```
src/
├── app/                # Expo Router entry points
├── core/               # Shared UI elements, hooks, i18n provider, etc.
├── features/
│   └── premiumConsultation/
│       ├── api/        # Data fetching & mock APIs
│       ├── components/ # Feature-specific UI (specialist list, bottom sheet, agreements)
│       ├── hooks/      # React Query hooks (e.g., useSpecialists)
│       └── screens/    # Screen containers (PremiumConsultationScreen)
└── utils/              # Cross-feature helpers (linking, formatting, etc.)
```

Key dependencies:

- **@tanstack/react-query** – handles server state for specialist data (`useSpecialists`)
- **@gorhom/bottom-sheet** – fixed bottom sheet for service hours
- **expo-linear-gradient** – hero image overlay
- **react-native-safe-area-context** – safe area insets

## Working With Data

- API interfaces live in `src/features/premiumConsultation/types`.
- Mock/network calls are defined in `src/features/premiumConsultation/api`.
- React Query hooks wrap these APIs (see `useSpecialists.ts`) and expose loading/error state to the screen.