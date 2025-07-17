export function AlertError({ msg }: { msg: string | Array<string> }) {
  return <p className="text-sm text-red-500 mt-1">{msg}</p>;
}
