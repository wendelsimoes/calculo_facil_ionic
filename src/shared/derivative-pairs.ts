import DerivativePair from "./derivative-pair";

export const DerivativePairs: DerivativePair[] = [
  {
    "expression": "(\\sin x)'",
    "derivative": "\\cos x"
  },
  {
    "expression": "(\\cos x)'",
    "derivative": "-\\sin x"
  },
  {
    "expression": "(\\tan x)'",
    "derivative": "-\\sec^2 x"
  },
  {
    "expression": "(\\cot x)'",
    "derivative": "-\\cosec^2x"
  },
  {
    "expression": "(\\sec x)'",
    "derivative": "\\sec x * \\tan x"
  },
  {
    "expression": "(\\cosec x)'",
    "derivative": "-\\cosec x * \\cot x"
  }
];
