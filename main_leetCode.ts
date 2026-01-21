import { longestPalindrome } from "./leetCode/longestPalindrome";

async function main() {
    console.log(longestPalindrome("babad"));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
