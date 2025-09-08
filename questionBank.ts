

export type Question = {
    id: number;
    question: string;
    answer: boolean;         // true = statement is correct, false = incorrect
    explanation?: string;    // optional (nice for your Cheat screen)
  };
  
  export const questionBank: Question[] = [
    {
      id: 1,
      question: "Rose Quartz supports unconditional love and romantic love.",
      answer: true,
      explanation: "Rose Quartz is commonly associated with compassion, self-love, and romantic love."
    },
    {
      id: 2,
      question: "Black Tourmaline promotes luck and prosperity.",
      answer: false,
      explanation: "Black Tourmaline is primarily known for protection and grounding, Turquoise promotes luck/prosperity."
    },
    {
      id: 3,
      question: "Black Tourmaline is a protective and grounding stone that keeps negativity at bay.",
      answer: true,
      explanation: "Often used for energetic protection, boundaries, and grounding."
    },
  ];
  
  export default questionBank;
  