import * as types from './types';

const initialState = {
  answers: new Array(5)
};

export default quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REPLY_TO_QUIZ:
      const { page, answer } = action.payload;
      const { answers } = state;
      answers[page] = answer;
      return {
        ...state,
        answers
      };
    default:
      return state;
  }
}
