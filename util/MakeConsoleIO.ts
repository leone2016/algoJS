import readline from "readline";

export default function MakeConsoleIO() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (q: string) =>
    new Promise<string>((resolve) => rl.question(q, (ans) => resolve(ans)));

  const close = () => rl.close();

  return { ask, close };
}