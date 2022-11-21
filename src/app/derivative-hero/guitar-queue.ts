import DerivativePair from "src/shared/derivative-pair";

class GuitarQueue {
  derivativePair: DerivativePair;
  top: number = 0;

  constructor(derivativePair: DerivativePair) {
    this.derivativePair = derivativePair;
  }
}

export default GuitarQueue;
