import { useEffect, useState, useCallback } from "react";

const lookup: Record<FilterKey, string> = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()<>{}[]",
};

export default function useGenerator(
  state: Record<FilterKey, boolean>,
  length: number
) {
  const [generated, setGenerated] = useState("");

  const generate = useCallback(() => {
    let generated = "";

    for (let i = 0; i < length; i++) {
      const filters = (
        ["lowercase", "uppercase", "numbers", "symbols"] as FilterKey[]
      ).filter((key) => state[key]);
      const filter: string =
        lookup[filters[Math.floor(Math.random() * filters.length)]];

      generated += filter[Math.floor(Math.random() * filter.length)];
    }

    return generated;
  }, [state, length]);

  useEffect(() => {
    if (Object.entries(state).filter(([key, value]) => value).length === 0) {
      setGenerated("");
      return;
    }

    setGenerated(generate());
  }, [generate]);

  return { generated, regen: () => setGenerated(generate()) };
}
