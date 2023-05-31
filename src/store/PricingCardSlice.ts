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
  foreignPlus: 1200,
  foreignFlexi: 1400,
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
      console.log(price?.price.primary);
    },
    setForeignPlusPrice: (
      state,
      action: PayloadAction<{ numClasses: number; duration: number }>
    ) => {
      const { numClasses, duration } = action.payload;
      const price = state.lessonState.find(
        (lesson) =>
          lesson.plan === "PLUS" &&
          lesson.type === "FOREIGNER" &&
          lesson.nbLessons === numClasses &&
          lesson.duration === duration
      );
      state.foreignPlus = price?.price.primary ?? 1200;
    },
    setForeignFlexiPrice: (
      state,
      action: PayloadAction<{ numClasses: number; duration: number }>
    ) => {
      const { numClasses, duration } = action.payload;
      const price = state.lessonState.find(
        (lesson) =>
          lesson.plan === "FLEXI" &&
          lesson.type === "FOREIGNER" &&
          lesson.nbLessons === numClasses &&
          lesson.duration === duration
      );
      state.foreignFlexi = price?.price.primary ?? 1400;
    },
  },
});

export const {
  setPlanType,
  setForeignRegularPrice,
  setForeignPlusPrice,
  setForeignFlexiPrice,
} = pricingCardSlice.actions;

export default pricingCardSlice.reducer;
