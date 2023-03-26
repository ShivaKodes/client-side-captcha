export function generateExpression() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const operator = Math.floor(Math.random() * 2);
  if (operator === 0) {
    return `${num1} + ${num2}`;
  } else {
    return `${num1} - ${num2}`;
  }
}

export function evaluateExpression(answer, expression) {
  return +answer === +eval(expression);
}
