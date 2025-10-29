

function isPalindrome(palindrome) {

    left = 0;
    rigth = palindrome.length-1;
    while (left < rigth) {
        if (palindrome[left] != palindrome[rigth]) {
            return false;
        } else {
            left++; rigth--;
        }
        return true
    }
}

console.log(isPalindrome("levelss"));
