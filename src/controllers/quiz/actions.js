import * as types from './types';

export const replyToQuiz = (page, answer) => ({
  type: types.REPLY_TO_QUIZ,
  payload: { page, answer }
})
