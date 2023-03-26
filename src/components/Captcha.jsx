import React, { useEffect, useState } from "react";

export default function Captcha({
  setExpression,
  expression,
  answer,
  setAnswer,
}) {
  //   console.log("result", +answer === +eval(expression));

  return (
    <div className=" my-2 min-h-10 grid grid-cols-6 gap-x-2">
      <label htmlFor="captcha" className="label__field">
        Evaluate
      </label>
      <input
        type="text"
        name="captcha"
        id="captcha"
        className="input__field col-start-1 col-span-3"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
      />
      <p className="text-2xl font-bold justify-self-center">=</p>
      <input
        type="text"
        name=""
        id=""
        className="col-start-5 input__field col-span-2"
        placeholder="Answer"
        onChange={(e) => setAnswer(e.target.value)}
        value={answer}
      />
    </div>
  );
}
