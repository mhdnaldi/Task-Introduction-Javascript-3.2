// No.1 Deteksi palindrome
function cekPalindrome(str) {
  let newStr = ''
  for(let i = str.length-1; i>=0; i--) {
    newStr += str[i]
  }
  if(newStr == str) {
    console.log('Palindrome')
  } else {
    console.log('Bukan palindrome');
  }
  return newStr
}
cekPalindrome('malam')
cekPalindrome('javascript')


// No.2 reverseWords
let reverseWords = (str) => {
  let data = str.split(' ').reverse().join(' ').toLowerCase()
  console.log(data);
}
reverseWords('Saya belajar javascript')
