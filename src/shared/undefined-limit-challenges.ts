import UndefinedLimitChallenge from "./undefined-limit-challenge";

export const UndefinedLimitChallenges: UndefinedLimitChallenge[] = [
  {
    "challenge": "\\lim_{x\\to-5}\\frac{x^2-25}{x^2+2x-15}",
    "step1": "\\lim_{x\\to-5}\\frac{(x-5)(x+5)}{(x-3)(x+5)}",
    "step2": "\\lim_{x\\to-5}\\frac{x-5}{x-3}",
    "answer": "\\frac{5}{4}"
  },
  {
    "challenge": "\\lim_{x\\to8}\\frac{2x^2-17x+8}{8-x}",
    "step1": "\\lim_{x\\to8}\\frac{(2x-1)(x-8)}{-(x-8)}",
    "step2": "\\lim_{x\\to8}\\frac{2x-1}{-1}",
    "answer": "-15"
  },
  {
    "challenge": "\\lim_{x\\to7}\\frac{x^2-4x-21}{3x^2-17x-28}",
    "step1": "\\lim_{x\\to7}\\frac{(x-7)(x+3)}{(3x+4)(x-7)}",
    "step2": "\\lim_{x\\to7}\\frac{x+3}{3x+4}",
    "answer": "\\frac{2}{5}"
  },
  {
    "challenge": "\\lim_{x\\to0}\\frac{(6+x)^2-36}{x}",
    "step1": "\\lim_{x\\to0}\\frac{36+12x+x^2-36}{x}",
    "step2": "\\lim_{x\\to0}\\frac{x(12+x)}{x}",
    "answer": "12"
  },
  {
    "challenge": "\\lim_{x\\to4}\\frac{\\sqrt{x}-2}{x-4}",
    "step1": "\\lim_{x\\to4}\\frac{(\\sqrt{x}-2)}{(x-4)}\\frac{(\\sqrt{x}+2)}{(\\sqrt{x}+2)}",
    "step2": "\\lim_{x\\to4}\\frac{x-4}{(x-4)(\\sqrt{x}+2)}",
    "answer": "\\frac{1}{4}"
  },
  {
    "challenge": "\\lim_{x\\to2}\\frac{x^2-4}{x^2+x-6}",
    "step1": "\\lim_{x\\to2}\\frac{(x-2)(x+2)}{(x-2)(x+3)}",
    "step2": "\\lim_{x\\to2}\\frac{x+2}{x+3}",
    "answer": "\\frac{4}{5}"
  },
  {
    "challenge": "\\lim_{x\\to0}\\frac{(1+x)^2-1}{x}",
    "step1": "\\lim_{x\\to0}\\frac{1+2x+x^2-1}{x}",
    "step2": "\\lim_{x\\to0}\\frac{2x+x^2}{x}",
    "answer": "2"
  },
  {
    "challenge": "\\lim_{x\\to1}\\frac{x^2-x}{x^2+2x-3}",
    "step1": "\\lim_{x\\to1}\\frac{x(x-1)}{(x+3)(x-1)}",
    "step2": "\\lim_{x\\to1}\\frac{x}{x+3}",
    "answer": "\\frac{1}{4}"
  },
  {
    "challenge": "\\lim_{x\\to0}\\frac{\\sqrt {x+2} - \\sqrt 2}{x}",
    "step1": "\\lim_{x\\to0}\\frac{(\\sqrt {x+2})^2 - (\\sqrt 2)^2}{x(\\sqrt {x+2} + \\sqrt 2)}",
    "step2": "\\lim_{x\\to0}\\frac{1}{\\sqrt {x+2} + \\sqrt 2}",
    "answer": "\\frac{1}{2\\sqrt 2}"
  },
  {
    "challenge": "\\lim_{x\\to1}\\frac{x-1}{\\sqrt {x^2+3}-2}",
    "step1": "\\lim_{x\\to1}\\frac{(x-1)(\\sqrt {x^2+3}+2)}{(x^2+3)-2^2}",
    "step2": "\\lim_{x\\to1}\\frac{\\sqrt {x^2+3}+2}{x+1}",
    "answer": "2"
  }
]
