import * as fs from 'fs/promises';
import { join } from 'path';

// export const main = async () => {
//     console.time(" ------------ Start ------------- ");
//     try {
//         const filePath = join(__dirname, 'test.txt');
//         console.log(`Creating file ${filePath}...`);
//         const fileHandle = await fs.open(filePath, 'w');
//         console.log(`Writing to ${filePath}...`);
//         for (let i = 0; i < 1_000_000; i++) {
//             await fileHandle.write(`This is line number => ${i + 1}\n`);
//         }
//         await fileHandle.close();
//         console.log("Write completed successfully.");
//     } catch (error) {
//         console.error("Error writing to file:", error);
//     }
//     console.timeEnd(" ------------ END ------------- ");
// }

/**
 * DONT DO IT THIS WAY
 * 
 */
export const main = async () => {
    console.time(" ------------ Start ------------- ");
    try {
        const filePath = join(__dirname, 'test.txt');
        const fileHandle = await fs.open(filePath, 'w');
        const stream = fileHandle.createWriteStream();
        for (let i = 0; i < 10_000_000; i++) {
            const buffer = Buffer.from(`${i}`, "utf-8");
            stream.write(buffer);
        }
        stream.end();
        await fileHandle.close();
    } catch (error) {
        console.error("Error writing to file:", error);
    }
    console.timeEnd(" ------------ End ------------- ");
}
main();