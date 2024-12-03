import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import {
  type YogaClass,
  type YogaClassQuery,
  YogaClassSchema,
  YogaClassUpdateSchema,
} from '~/schemas/yoga';

interface YogaState {
  // State
  classes: YogaClass[];
  selectedClass: YogaClass | null;
  filteredClasses: YogaClass[];
  isLoading: boolean;
  error: string | null;

  // Actions
  addClass: (data: unknown) => Promise<YogaClass | null>;
  updateClass: (id: string, data: unknown) => Promise<YogaClass | null>;
  deleteClass: (id: string) => void;
  setSelectedClass: (id: string) => void;
  filterClasses: (query: YogaClassQuery) => void;
  setError: (error: string | null) => void;
  setLoading: (isLoading: boolean) => void;
  reset: () => void;
}

export const useYogaStore = create<YogaState>()(
  devtools(
    (set, get) => ({
      // Initial state
      classes: [],
      selectedClass: null,
      filteredClasses: [],
      isLoading: false,
      error: null,

      // Actions
      addClass: async (data) => {
        try {
          const validatedClass = YogaClassSchema.parse(data);
          set((state) => ({
            classes: [...state.classes, validatedClass],
            filteredClasses: [...state.classes, validatedClass],
            error: null,
          }));
          return validatedClass;
        } catch (error) {
          const message =
            error instanceof Error ? error.message : 'Invalid yoga class data';
          set({ error: message });
          return null;
        }
      },

      updateClass: async (id, data) => {
        try {
          const validatedUpdate = YogaClassUpdateSchema.parse({ data, id });
          set((state) => ({
            classes: state.classes.map((c) =>
              c.id === id ? { ...c, ...validatedUpdate } : c,
            ),
            filteredClasses: state.filteredClasses.map((c) =>
              c.id === id ? { ...c, ...validatedUpdate } : c,
            ),
            error: null,
          }));
          const updatedClass = get().classes.find((c) => c.id === id);
          return updatedClass || null;
        } catch (error) {
          const message =
            error instanceof Error
              ? error.message
              : 'Invalid yoga class update data';
          set({ error: message });
          return null;
        }
      },

      deleteClass: (id) => {
        set((state) => ({
          classes: state.classes.filter((c) => c.id !== id),
          filteredClasses: state.filteredClasses.filter((c) => c.id !== id),
          selectedClass:
            state.selectedClass?.id === id ? null : state.selectedClass,
        }));
      },

      setSelectedClass: (id) => {
        set((state) => ({
          selectedClass: state.classes.find((c) => c.id === id) || null,
        }));
      },

      filterClasses: (query) => {
        set((state) => {
          const filtered = state.classes.filter((yogaClass) => {
            const levelMatch = !query.level || yogaClass.level === query.level;
            const instructorMatch =
              !query.instructor ||
              yogaClass.instructor
                .toLowerCase()
                .includes(query.instructor.toLowerCase());
            const dayMatch =
              !query.dayOfWeek ||
              yogaClass.schedule.dayOfWeek === query.dayOfWeek;
            return levelMatch && instructorMatch && dayMatch;
          });
          return { filteredClasses: filtered };
        });
      },

      setError: (error) => set({ error }),
      setLoading: (isLoading) => set({ isLoading }),

      reset: () =>
        set({
          classes: [],
          selectedClass: null,
          filteredClasses: [],
          isLoading: false,
          error: null,
        }),
    }),
    { name: 'yoga-store' },
  ),
);
