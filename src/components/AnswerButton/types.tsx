type CurrentQuestionType = {
  question: string;
  answers: { letter: string; answer: string }[];
  correct: string[];
  reward: string;
};

export type AnswerButtonProps = {
  letter: string;
  text: string;
  currentQuestion: CurrentQuestionType;
  switchToNextQuestion: () => void;
  finishGame: () => void;
};
