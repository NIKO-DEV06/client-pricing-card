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
};

const pricingCardSlice = createSlice({
  name: "pricing-card",
  initialState,
  reducers: {
    setPlanType: (state, action: PayloadAction<string>) => {
      state.plan = action.payload;
    },
  },
});

export const { setPlanType } = pricingCardSlice.actions;

export default pricingCardSlice.reducer;
