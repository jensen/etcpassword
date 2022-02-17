export default function useClipboard() {
  return (text: string) => navigator.clipboard.writeText(text);
}
