import { Injectable } from "@angular/core";
import DerivativePair from "src/shared/derivative-pair";
import { DerivativePairs } from "src/shared/derivative-pairs";

@Injectable()
class DerivativePairService {
  getAllDerivativePairs(): DerivativePair[] {
    return DerivativePairs;
  }
}

export default DerivativePairService;
