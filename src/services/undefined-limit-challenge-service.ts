import { Injectable } from "@angular/core";
import UndefinedLimitChallenge from "src/shared/undefined-limit-challenge";
import { UndefinedLimitChallenges } from "src/shared/undefined-limit-challenges";

@Injectable()
class UndefinedLimitChallengeService {
  getAllUndefinedLimitChallenges(): UndefinedLimitChallenge[] {
    return UndefinedLimitChallenges;
  }
}

export default UndefinedLimitChallengeService;
