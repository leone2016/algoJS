import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function makeConsoleIO() {
    // Create the interface
    const rl = readline.createInterface({ input, output });

    try {
        // Use await for user input
        const answer = await rl.question('What is your name? ');

        const ask = (q: string) => {
            return new Promise<string>((resolve)=> rl.question(q,(ans: any)=> resolve(ans)))
        };

     return { ask, close };
    } finally {
        // Always close the interface
        rl.close();
    }
}

makeConsoleIO();
