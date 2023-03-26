import React, { useEffect, useState } from "react";
import Captcha from "./Captcha";
import { generateExpression, evaluateExpression } from "../utils/captchaUtils";
import { submitHandler } from "../handlers/loginHandler";
import Input from "./Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState(false);
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    setExpression(generateExpression());
  }, []);

  //generate expression

  function handleSubmit(e) {
    e.preventDefault();
    submitHandler(
      evaluateExpression,
      answer,
      expression,
      setCaptcha,
      setExpression,
      generateExpression
    );
  }

  return (
    <div className="bg-white w-full sm:w-1/2 max-w-md min-h-1/2 flex flex-col items-center rounded-xl drop-shadow-xl">
      <h1 className="text-3xl font-semibold my-2">Login</h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-col px-5 gap-2">
        <Input
          type="text"
          name="firstname"
          id="firstname"
          className="input__field"
          placeholder="First Name"
          value={firstName}
          label="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          minLength="1"
        />
        <Input
          type="text"
          name="lastname"
          id="lastname"
          className="input__field"
          placeholder="Last Name"
          value={lastName}
          label="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          minLength="1"
        />
        <Input
          type="email"
          name="email"
          id="email"
          className="input__field"
          placeholder="Email"
          value={email}
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          id="password"
          className="input__field"
          placeholder="Password"
          value={password}
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          minLength="6"
        />

        <Captcha
          setExpression={setExpression}
          expression={expression}
          answer={answer}
          setAnswer={setAnswer}
        />
        <button
          type="submit"
          className="bg-slate-500 mb-5 mt-2 py-1 hover:bg-slate-600 font-medium "
          onClick={() => evaluateExpression()}
        >
          Login
        </button>
      </form>
    </div>
  );
}
