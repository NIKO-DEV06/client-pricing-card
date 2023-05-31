import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import data from "../../public/data.json";
import { Lesson, RootState } from "../interface/interface";

const initailLessonsState: Lesson[] = data.map((lesson) => {
  return {
    nbLessons: lesson.nbLessons,
    duration: lesson.duration,
    label: {
      ru: lesson.label.ru,
      en: lesson.label.en,
    },
    description: lesson.description,
    plan: lesson.plan,
    type: lesson.type,
    price: {
      primary: lesson.price.primary,
      secondary: lesson.price.secondary,
    },
  };
});
const initialState: RootState = {
  lessonState: initailLessonsState,
  plan: "foreigner",
  foreignRegular: 1000,
  foreignPlus: 0,
  foreignFlexi: 0,
};

const pricingCardSlice = createSlice({
  name: "pricing-card",
  initialState,
  reducers: {
    setPlanType: (state, action: PayloadAction<string>) => {
      state.plan = action.payload;
    },
    setForeignRegularPrice: (
      state,
      action: PayloadAction<{ numClasses: number; duration: number }>
    ) => {
      const { numClasses, duration } = action.payload;
      const price = state.lessonState.find(
        (lesson) =>
          lesson.plan === "REGULAR" &&
          lesson.type === "FOREIGNER" &&
          lesson.nbLessons === numClasses &&
          lesson.duration === duration
      );
      state.foreignRegular = price?.price.primary ?? 1000;
    },
    foreignPlusPrice: () => {},
    foreignFlexiPrice: () => {},
  },
});

export const { setPlanType, setForeignRegularPrice } = pricingCardSlice.actions;

export default pricingCardSlice.reducer;
