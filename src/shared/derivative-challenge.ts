class DerivativeChallenge {
  challenge: string;
  answer: string;
  answerMonomials: string[];

  constructor(challenge: string, answer: string, answerMonomials: string[]) {
    this.challenge = challenge;
    this.answer = answer;
    this.answerMonomials = answerMonomials;
  }
}

export default DerivativeChallenge;
