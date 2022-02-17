export default function Length(props) {
  return (
    <>
      <input
        className="w-full"
        type="range"
        min="8"
        max="32"
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
      />
      <div className="flex justify-between items-center uppercase text-slate-700 font-bold text-sm">
        <span>Length</span>
        <span>{props.value}</span>
      </div>
    </>
  );
}
