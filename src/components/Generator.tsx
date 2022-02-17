import { useState } from "react";
import Filter from "./Filter";
import Strength from "./Strength";
import Length from "./Length";
import useFilters from "../hooks/useFilters";
import useGenerator from "../hooks/useGenerator";
import useClipboard from "~/hooks/useClipbaord";

interface IGeneratorProps {}

export default function Generator(props: IGeneratorProps) {
  const clip = useClipboard();
  const { state, actions } = useFilters();
  const [length, setLength] = useState(16);

  const { generated, regen } = useGenerator(state, length);

  return (
    <div className="w-full flex flex-col">
      <section className="">
        <input
          className="w-full p-2 border-2 border-slate-600 text-sm"
          value={generated}
          onChange={(event) => event.preventDefault()}
        />
      </section>
      <section className="py-4">
        <Strength password={generated} />
      </section>
      <section>
        <Length value={length} onChange={setLength} />
      </section>
      <section className="flex flex-col space-y-2 py-4">
        <Filter
          label="Lowercase"
          checked={state.lowercase}
          onChange={actions.lowercase}
        />
        <Filter
          label="Uppercase"
          checked={state.uppercase}
          onChange={actions.uppercase}
        />
        <Filter
          label="Numbers"
          checked={state.numbers}
          onChange={actions.numbers}
        />
        <Filter
          label="Symbols"
          checked={state.symbols}
          onChange={actions.symbols}
        />
      </section>
      <section className="space-y-2">
        <button
          className="w-full px-4 py-2 text-white bg-green-500"
          onClick={regen}
        >
          Generate
        </button>
        <button
          className="w-full px-4 py-2 text-white bg-purple-500"
          onClick={() => clip(generated)}
        >
          Copy To Clipboard
        </button>
      </section>
    </div>
  );
}
