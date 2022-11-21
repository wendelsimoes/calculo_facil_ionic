import { Injectable } from "@angular/core";
import DerivativeChallenge from "src/shared/derivative-challenge";
import { DerivativeChallenges } from "src/shared/derivative-challenges";

@Injectable()
class DerivativeChallengeService {
  getAllDerivativeChallenges(): DerivativeChallenge[] {
    return DerivativeChallenges;
  }
}

export default DerivativeChallengeService;
