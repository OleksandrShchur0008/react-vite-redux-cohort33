import { createAppSlice } from "store/createAppSlice"
import { FeedbackSliceState } from "./types"

const feedbackInitialStates: FeedbackSliceState = {
  likes: 0,
  dislikes: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",

  initialState: feedbackInitialStates,

  reducers: create => ({
    addLike: create.reducer((state: FeedbackSliceState) => {
      state.likes += 1
    }),

    addDislike: create.reducer((state: FeedbackSliceState) => {
      state.dislikes += 1
    }),

    resetResults: create.reducer(() => feedbackInitialStates),
  }),

  selectors: {
    like: (state: FeedbackSliceState) => state.likes,
    dislike: (state: FeedbackSliceState) => state.dislikes,
  },
})

export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors
