class UndefinedLimitChallenge {
  challenge: string;
  step1: string;
  step2: string;
  answer: string;
  to: string;

  constructor(challenge: string, step1: string, step2: string, answer: string, to: string) {
    this.challenge = challenge;
    this.step1 = step1;
    this.step2 = step2;
    this.answer = answer;
    this.to = to;
  }
}

export default UndefinedLimitChallenge;
