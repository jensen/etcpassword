import type { FirstOption, Option } from "check-password-strength";
import { passwordStrength } from "check-password-strength";
import { useState, useEffect } from "react";

const options: [
  FirstOption<string>,
  Option<string>,
  Option<string>,
  Option<string>
] = [
  {
    id: 0,
    value: "Too weak",
    minDiversity: 0,
    minLength: 0,
  },
  {
    id: 1,
    value: "Weak",
    minDiversity: 2,
    minLength: 10,
  },
  {
    id: 2,
    value: "Medium",
    minDiversity: 3,
    minLength: 12,
  },
  {
    id: 3,
    value: "Strong",
    minDiversity: 4,
    minLength: 16,
  },
];

const styles = [
  "bg-red-600 w-1/4",
  "bg-yellow-600 w-1/2",
  "bg-orange-600 w-3/4",
  "bg-green-600 w-full",
];

interface IStrengthProps {
  password: string;
}

export default function Strength(props: IStrengthProps) {
  const [style, setStyle] = useState("");

  useEffect(() => {
    setStyle(styles[passwordStrength(props.password, options).id]);
  });

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className={`h-2.5 rounded-full ${style}`}></div>
    </div>
  );
}
