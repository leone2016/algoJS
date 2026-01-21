/*
5. Longest Palindromic Substring
Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"

Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters.
**/
/**
 * @param {string} s
 * @return {string}
 */
export const longestPalindrome = (s: string) => {
    // Preprocesar: insertar '#' entre caracteres
    // "babad" → "^#b#a#b#a#d#$"
    let t = '^';
    for (let char of s) {
        t += '#' + char;
    }
    t += '#$';
    
    const n = t.length;
    const p = new Array(n).fill(0);  // p[i] = radio del palíndromo centrado en i
    let center = 0, right = 0;
    
    for (let i = 1; i < n - 1; i++) {
        const mirror = 2 * center - i;
        
        if (i < right) {
            p[i] = Math.min(right - i, p[mirror]);
        }
        
        // Expandir alrededor de i
        while (t[i + p[i] + 1] === t[i - p[i] - 1]) {
            p[i]++;
        }
        
        // Actualizar centro y límite derecho
        if (i + p[i] > right) {
            center = i;
            right = i + p[i];
        }
    }
    
    // Encontrar el palíndromo más largo
    let maxLen = 0;
    let centerIndex = 0;
    for (let i = 1; i < n - 1; i++) {
        if (p[i] > maxLen) {
            maxLen = p[i];
            centerIndex = i;
        }
    }
    
    const start = Math.floor((centerIndex - maxLen) / 2);
    return s.substring(start, start + maxLen);
    
    //  TIME OUT
    // let n = s.length;
    // let longest = "";

    // const isPal = (str)=>{
    //     let left = 0, right = str.length - 1;
    //     while( left < right){
    //         if(str[left] !== str[right]) return false;
    //         left ++;
    //         right --;
    //     }
    //     return true;
    // }
    // for (let i = 0; i < n; i++) {
    //     for (let j = i; j < n; j++) {
    //         const subString = s.slice(i, j + 1);
    //         if (isPal(subString) && subString.length > longest.length ){
    //             longest = subString;
    //         }    
    //     }

    // }

    // return longest;
};