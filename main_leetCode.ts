import { longestPalindrome } from "./leetCode/longestPalindrome";
import { minPairRemovalSortArrayII } from "./leetCode/_3510_MinimumPairRemovalSortArrayII";

async function main() {
    console.log(longestPalindrome("babad"));
    console.log(minPairRemovalSortArrayII([5,2,3,1]));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
