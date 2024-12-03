# 🚀 Yoga Lotus Development Guide

## 📖 Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Organization](#code-organization)
- [Best Practices](#best-practices)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)
- [State Management with Zustand](#state-management-with-zustand)

## 🔍 Project Overview

Yoga Lotus is a modern React application built with TypeScript and Tailwind CSS. The project follows a modular architecture designed for scalability and maintainability.

### Core Components

#### 🎣 Hooks

- `hooks/` - Custom React hooks for data management
  - `useFetch.ts` - Type-safe HTTP request hook
  - `useQueries.ts` - Data query state management
  - `useYogaApi.ts` - Yoga-specific API integrations

#### 🛠️ Libraries

- `lib/` - Utility functions and configurations
  - `api.ts` - Centralized API client
  - `queryClient.ts` - Query client configuration

#### 🌐 Providers

- `providers/` - React context providers
  - `QueryProvider.tsx` - Global query state management

## 🏁 Getting Started

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd yoga-lotus
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start Development Server**

   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Visit `http://localhost:5173`

## 💻 Development Workflow

### 1. Environment Setup

- Ensure Node.js 18+ is installed
- Use VS Code with recommended extensions
- Configure Biome for code formatting

### 2. Making Changes

- Create feature branch from `main`
- Follow TypeScript strict mode
- Use existing hooks and utilities
- Add proper type definitions
- Test changes locally

### 3. Code Quality

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Formatting
npm run format
```

## 📁 Code Organization

### File Structure

```
src/
├── components/     # React components
├── hooks/         # Custom React hooks
├── lib/           # Utilities and configurations
├── providers/     # Context providers
├── schemas/       # TypeScript type definitions
└── styles/        # Global styles and Tailwind
```

### Naming Conventions

- Components: PascalCase (`YogaClass.tsx`)
- Hooks: camelCase with 'use' prefix (`useYogaApi.ts`)
- Utilities: camelCase (`api.ts`)
- Types/Interfaces: PascalCase (`YogaClassType.ts`)

## ✨ Best Practices

### TypeScript

- Enable strict mode
- Use interfaces for object types
- Define explicit return types
- Avoid `any` type

### React

- Use functional components
- Implement proper error boundaries
- Follow hooks best practices
- Maintain component independence

### State Management

- Use React Query for server state
- Use Context for global state
- Keep component state local
- Implement proper loading states

### Styling

- Use Tailwind CSS classes
- Follow responsive design principles
- Maintain consistent spacing
- Use design tokens

## 🛠️ Common Tasks

### Adding New Features

1. Create necessary components
2. Add required hooks
3. Update type definitions
4. Add tests
5. Update documentation

### API Integration

1. Define types in `schemas/`
2. Add API endpoints in `api.ts`
3. Create custom hook if needed
4. Implement error handling
5. Add loading states

### Styling Updates

1. Use Tailwind classes
2. Follow design system
3. Ensure responsiveness
4. Test across devices

## ❗ Troubleshooting

### Common Issues

#### Type Errors

- Check type definitions in `schemas/`
- Verify generic type parameters
- Ensure proper interface implementation

#### Build Issues

- Verify dependencies in `package.json`
- Check TypeScript configuration
- Clear `node_modules` and reinstall

#### API Errors

- Verify API configuration
- Check network requests
- Validate request/response types

#### State Management

- Review context providers
- Check hook dependencies
- Verify state updates

## 🏪 State Management with Zustand

### Recent Updates

- Consolidated store folders into a single `stores/` directory
- Improved hook dependency management in `useYogaStore`
- Enhanced API client with proper TypeScript types and query handling
- Implemented proper error handling and loading states

### Store Organization

```typescript
// Store structure
src/
└── stores/
    └── yogaStore.ts    // Main yoga class management store

// Hook structure
src/
└── hooks/
    └── useYogaStore.ts // Custom hook for yoga store actions
```

### API Integration

```typescript
// Example of API integration with proper typing
const searchClasses = useCallback(
  async (query: YogaClassQuery) => {
    store.setLoading(true);
    try {
      const response = await api.get<YogaClass[]>(
        "/api/yoga/classes/search",
        query
      );
      store.filterClasses(query);
      return response;
    } catch (error) {
      store.setError(
        error instanceof Error ? error.message : "Failed to search classes"
      );
      return [];
    } finally {
      store.setLoading(false);
    }
  },
  [store.filterClasses, store.setError, store.setLoading]
);
```

### Best Practices

- Use proper dependency arrays in useCallback hooks
- Implement consistent error handling
- Maintain loading states for better UX
- Use TypeScript for type safety
- Follow async/await pattern for API calls

### Setup and Configuration

1. **Install Dependencies**

```bash
npm install zustand zod
```

2. **Create Type Definitions with Zod**

```typescript
// src/schemas/yoga.ts
import { z } from "zod";

// Define your schema
export const YogaClassSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
  description: z.string(),
  instructor: z.string(),
  duration: z.number().min(30),
  maxParticipants: z.number().positive(),
});

// Infer types from schema
export type YogaClass = z.infer<typeof YogaClassSchema>;
```

3. **Create Zustand Store**

```typescript
// src/stores/yogaStore.ts
import { create } from "zustand";
import { YogaClassSchema, type YogaClass } from "~/schemas/yoga";

interface YogaStore {
  // State
  classes: YogaClass[];
  selectedClass: YogaClass | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  addClass: (data: unknown) => void;
  updateClass: (id: string, data: unknown) => void;
  deleteClass: (id: string) => void;
  setSelectedClass: (id: string) => void;
}

export const useYogaStore = create<YogaStore>((set, get) => ({
  classes: [],
  selectedClass: null,
  isLoading: false,
  error: null,

  addClass: (data) => {
    try {
      const validatedClass = YogaClassSchema.parse(data);
      set((state) => ({
        classes: [...state.classes, validatedClass],
        error: null,
      }));
    } catch (error) {
      set({ error: "Invalid yoga class data" });
    }
  },

  updateClass: (id, data) => {
    try {
      const validatedClass = YogaClassSchema.parse(data);
      set((state) => ({
        classes: state.classes.map((c) => (c.id === id ? validatedClass : c)),
        error: null,
      }));
    } catch (error) {
      set({ error: "Invalid yoga class data" });
    }
  },

  deleteClass: (id) => {
    set((state) => ({
      classes: state.classes.filter((c) => c.id !== id),
      selectedClass:
        state.selectedClass?.id === id ? null : state.selectedClass,
    }));
  },

  setSelectedClass: (id) => {
    set((state) => ({
      selectedClass: state.classes.find((c) => c.id === id) ?? null,
    }));
  },
}));
```

### Usage Examples

1. **In React Components**

```typescript
// src/components/YogaClassForm.tsx
import { useYogaStore } from '~/stores/yogaStore';

export const YogaClassForm = () => {
  const addClass = useYogaStore((state) => state.addClass);

  const handleSubmit = async (formData: unknown) => {
    addClass(formData); // Data will be validated automatically
  };

  return (
    // Your form JSX
  );
};
```

2. **With API Integration**

```typescript
// src/hooks/useYogaApi.ts
import { useYogaStore } from "~/stores/yogaStore";
import { YogaClassSchema } from "~/schemas/yoga";

export const useYogaApi = () => {
  const { addClass, setError } = useYogaStore();

  const fetchClasses = async () => {
    try {
      const response = await fetch("/api/classes");
      const data = await response.json();

      // Validate API response
      const classes = z.array(YogaClassSchema).parse(data);
      classes.forEach(addClass);
    } catch (error) {
      setError("Failed to fetch classes");
    }
  };

  return { fetchClasses };
};
```

### Best Practices

1. **Schema Organization**

   - Keep schemas in dedicated files (`schemas/`)
   - Use schema composition for complex types
   - Export both schemas and inferred types

2. **Store Structure**

   - Separate concerns into different stores
   - Use selectors for derived state
   - Implement proper error handling
   - Keep actions close to their data

3. **Validation**

   - Always validate external data
   - Provide meaningful error messages
   - Handle validation errors gracefully
   - Use Zod's built-in error handling

4. **Type Safety**
   - Use TypeScript's strict mode
   - Leverage Zod's type inference
   - Define explicit return types
   - Avoid type assertions when possible

### Common Patterns

1. **Form Handling**

```typescript
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const handleSubmit = (data: unknown) => {
  const result = formSchema.safeParse(data);
  if (!result.success) {
    // Handle validation errors
    console.error(result.error.flatten());
    return;
  }
  // Process valid data
  const { email, password } = result.data;
};
```

2. **API Response Validation**

```typescript
const responseSchema = z.object({
  data: z.array(YogaClassSchema),
  pagination: z.object({
    total: z.number(),
    page: z.number(),
    perPage: z.number(),
  }),
});

const fetchData = async () => {
  const response = await fetch("/api/classes");
  const rawData = await response.json();
  return responseSchema.parse(rawData);
};
```

## 🤝 Need Help?

- Check existing documentation
- Review related components
- Ask team members
- Create detailed issue reports
