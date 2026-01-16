# ⚡ STRNG

STRNG is a **premium React Native (Expo)** application designed for elite performance and aesthetics. It features a **real-time debounced search**, **bespoke pull-to-refresh**, and a **customized glassmorphic design system**.

The project is built with **Clean Architecture** principles, prioritizing scalability, type safety, and zero-compromise UX.

---

## 🎯 Senior React Native (Expo) Challenge
This solution implements the full requirements of a senior-level technical task with several production-grade enhancements.

### 📋 Core Requirements Met:
- **Offline-First Data**: Persisted user and post data using **Zustand + AsyncStorage**.
- **Dynamic Post Discovery**: Physics-based "Truncate + Expand" interaction for post bodies.
- **Smart User Search**: Debounced search logic (300ms) with instant-clear optimization.
- **Error Handling**: Graceful error states with Haptics-enabled retry mechanisms.
- **Zero Layout Shift**: Pixel-perfect **Branded Skeletons** that mirror finished content.

### 🌟 Bonus & Premium Features:
- [x] **Custom Pull-to-Refresh**: A hand-crafted, animated refresh experience.
- [x] **Responsive Scaling**: Strict use of `h()`, `v()`, and `m()` metrics for universal consistency.
- [x] **Haptic Feedback**: Meaningful sensory feedback throughout the app flow.
- [x] **Secure Architecture**: All endpoints managed via secured `.env` variables.

---

## 📸 Media & Demos

### 🎞️ Interactive Demos (GIFs)
Capture your app in action to showcase the fluid animations!

| Splash | Users List | Search | Posts | Post Expansion |
|----------------|-------------------|----------------|
| <img src="./assets/demo/splash.gif" width="180"/> | <img src="./assets/demo/users.gif" width="180"/> | <img src="./assets/demo/search.gif" width="180"/> | <img src="./assets/demo/user_posts.gif" width="180"/> | <img src="./assets/demo/post_cards.gif" width="180"/> |

---

## 🛠️ Media Capture Guide

### 📺 How to Record GIFs
To record high-quality demo GIFs:
1.  **Record iOS**: Use QuickTime Player (`File > New Screen Recording`) or the built-in iOS simulator recording (`Cmd + R`).
2.  **Record Android**: Use the **Screen Record** button in the Emulator sidebar.
3.  **Convert**: Use a tool like **GIPHY Capture** or **ezgif.com** to convert your `.mov`/`.mp4` to a high-quality GIF.
4.  **Save**: Place yours in `assets/demo/` and reference them in the table above.

### 📸 How to Take Screenshots
1.  **Capture**: 
    - **iOS**: `Cmd + S` in Sim.
    - **Android**: Camera icon in Emulator sidebar.
2.  **Organize**: Place in `assets/screenshots/`.
3.  **Optimize**: Use [TinyPNG](https://tinypng.com) for faster README loading.

---

## 🏗️ Architecture Layer

- **Feature-First Organization**: Domain logic grouped by features (`users`, `posts`) for high cohesion.
- **State & Persistence**: 
    - **Global State**: Zustand for simple, fast state management.
    - **Persistence**: Hybrid storage using AsyncStorage for Expo Go compatibility.
- **Data Layer**: 
    - **TanStack Query**: Intelligent caching, background refetching, and retry logic.
    - **Axios**: Centralized API client with environment-based configuration.
- **Design System**: 
    - **Metrics**: Standardized horizontal (`h`), vertical (`v`), and moderate (`m`) scaling.
    - **Typography**: Responsive Poppins implementation.
- **Physics & Motion**: Reanimated 3 powering Layout Transitions and gesture-driven icons.

---

## 📂 Folder Structure
```
src/
 ┣ app/                   # Expo Router routes
 ┣ components/            # Shared Atomic components (Buttons, Skeletons)
 ┣ features/              # Feature modules (UI + Feature-specific hooks & styles)
 ┣ hooks/                 # Global utility hooks (useTheme, useHaptics)
 ┣ services/              # API clients and environment config
 ┣ stores/                # Zustand persistence stores
 ┣ theme/                 # Design tokens (Colors, Fonts)
 ┗ utils/                 # Metrics and helper utilities
```

---

## 🚀 Deployment & Running

### 1. Configure Environment
Create a `.env` file in the root:
```env
EXPO_PUBLIC_API_URL=https://jsonplaceholder.typicode.com
```

### 2. Install & Start
```sh
npm install
npx expo start
```

---

## 📦 Key Dependencies
- **Expo SDK 54**
- **Zustand** (Persistence)
- **TanStack Query v5** (Data Flow)
- **Reanimated 3** (Motion)
- **Expo Blur** (Glassmorphism)
- **React Native Haptic Feedback** (Sensory UX)

---

## 👨‍💻 Developer
[**Mukesh Kumar (Rishu)**](https://github.com/Rishu2505) – Senior React Native & AI Engineer
*Focused on creating world-class mobile experiences.*
