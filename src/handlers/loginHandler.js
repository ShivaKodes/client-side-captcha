export function submitHandler(
  evaluateExpression,
  answer,
  expression,
  setCaptcha,
  setExpression,
  generateExpression
) {
  if (evaluateExpression(answer, expression)) {
    setCaptcha(true);
    alert("logged in successfully");
  } else {
    setCaptcha(false);
    alert("Please solve the captcha correctly");
    setExpression(generateExpression());
  }
}
