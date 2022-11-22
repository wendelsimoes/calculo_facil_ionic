import DerivativePair from "./derivative-pair";

export const DerivativePairs: DerivativePair[] = [
  {
    "expression": "\\sin x",
    "derivative": "\\cos x"
  },
  {
    "expression": "\\cos x",
    "derivative": "-\\sin x"
  },
  {
    "expression": "\\tan x",
    "derivative": "-\\sec^2 x"
  },
  {
    "expression": "\\cot x",
    "derivative": "-cosec^2x"
  },
  {
    "expression": "\\sec x",
    "derivative": "\\sec x * \\tan x"
  },
  {
    "expression": "cosec x",
    "derivative": "-cosec x * \\cot x"
  },
  {
    "expression": "9",
    "derivative": "0"
  },
  {
    "expression": "x",
    "derivative": "1"
  },
  {
    "expression": "4x",
    "derivative": "4"
  },
  {
    "expression": "x^2",
    "derivative": "2x"
  },
  {
    "expression": "\\sqrt{x}",
    "derivative": "(1/2)x^-\\frac{1}{2}"
  },
  {
    "expression": "e^x",
    "derivative": "e^x"
  },
  {
    "expression": "10^x",
    "derivative": "\\ln{10}*10^x"
  },
  {
    "expression": "\\ln{x}",
    "derivative": "\\frac{1}{x}"
  },
  {
    "expression": "log_{10}(x)",
    "derivative": "\\frac{1}{x*\\ln(10)}"
  }
];
