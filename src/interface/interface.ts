import store from "../store/store";

export interface Lesson {
  nbLessons: number;
  duration: number;
  label: {
    ru: string;
    en: string;
  };
  description: string;
  plan: string | null;
  type: string;
  price: {
    primary: number;
    secondary: number | null;
  };
}

export interface RootState {
  lessonState: Lesson[];
  plan: string;
  foreignRegular: number;
  foreignPlus: number;
  foreignFlexi: number;
}

export type State = ReturnType<typeof store.getState>;
