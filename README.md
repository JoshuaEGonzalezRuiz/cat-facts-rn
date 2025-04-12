# 😺 Cat Facts App

This project follows a modern **Clean Architecture** structure combined with **MVVM**, **Command Pattern**, and **Event Bus (Observer)**, fully optimized for React Native + Redux + Expo.

---

## 🗂️ Folder Structure by Layer

```plaintext
src/
├── adapters/                  # Data transformers (API → internal models)
├── api/                       # External API clients (Axios, REST, etc.)
├── bootstrap/                 # App startup, context setup, theme loading
├── commands/                  # Encapsulated, reusable action logic (Command Pattern)
├── components/                # Reusable UI components (dumb/presentational)
├── data/                      # Data layer: services, repository implementations
│   ├── repositories/          # Concrete implementations of domain interfaces
│   └── services/              # External integrations (AsyncStorage, etc.)
├── domain/                    # Business logic and contracts (pure interfaces)
│   └── repositories/          # Interfaces for data access (no dependencies)
├── hooks/                     # Custom logic hooks (ex: global snackbar, permissions)
├── models/                    # Data models/entities used across layers
├── navigation/                # Navigation setup (tab stack, themes)
├── screens/                   # View layer: each screen connects to a ViewModel
├── state/                     # Global app state (Redux slices and store config)
│   ├── slices/                # Facts & theme slices
│   └── store.ts               # Redux store configuration
├── theme/                     # Visual configuration and helpers
│   ├── themes.ts
│   ├── navigationThemeAdapter.ts
│   └── themeHelpers.ts
├── utils/                     # General-purpose functions (clipboard, share, eventBus)
└── viewmodels/                # MVVM layer: prepares state for each screen
```

---

## 🧠 Architecture Principles Applied

### ✅ CLEAN Architecture Layers

| Layer              | Responsibility                                    |
| ------------------ | ------------------------------------------------- |
| **Domain**         | Pure interfaces and models (no dependencies)      |
| **Data**           | Implements domain interfaces (API, storage, etc.) |
| **Application**    | ViewModels, Commands, State logic (Redux)         |
| **Presentation**   | UI components and screens (React Native)          |
| **Infrastructure** | API clients, AsyncStorage, EventBus, Navigation   |

### ✅ Patterns Used

- **MVVM (Model-View-ViewModel)**
- **Command Pattern** (`commands/`)
- **Adapter Pattern** (`adapters/`)
- **Repository Pattern** (`domain/repositories/` → `data/repositories/`)
- **Observer Pattern** (`utils/eventBus.ts` + `useGlobalSnackbar.ts`)

---

## 🚀 Benefits of This Architecture

- 💡 Clear separation of concerns
- 🧪 Easily testable in isolation
- 🔄 Plug-and-play data sources
- 🔐 UI decoupled from logic
- ⚡ Optimized for long-term scalability and maintainability

---

## 🐾 Built with ❤️ for Cat Lovers

A modern, maintainable, scalable architecture that keeps your codebase clean... and your cats well-informed. 😺
