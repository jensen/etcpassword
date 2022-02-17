import { Switch } from "@headlessui/react";

interface IFilterProps {
  label: string;
  disabled: boolean;
  checked: boolean;
  onChange: () => void;
}

export default function Filter(props: IFilterProps) {
  return (
    <label className="w-full flex justify-between">
      <div className="flex items-center uppercase text-slate-700 text-xs">
        {props.label}
      </div>
      <Switch
        disabled={props.disabled}
        checked={props.checked}
        onChange={props.onChange}
        className={`${props.checked ? "bg-teal-900" : "bg-teal-700"}
relative inline-flex flex-shrink-0 h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Include {props.label}</span>
        <span
          aria-hidden="true"
          className={`${props.checked ? "translate-x-6" : "translate-x-0"}
        pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </label>
  );
}

Filter.defaultProps = {
  disabled: false,
};
