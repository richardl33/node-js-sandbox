'use strict';

var s = ['j','a','v','a','s','c','r','i','p','t','l','o','o','p','s'];
var vowels = ['a', 'e', 'i', 'o', 'u'];

function vowelsAndConsonants(s) {
   for (var x = 0; x < vowels.length; x++) {
      var vLoop = vowels[x];
      // console.log(vLoop);
      for (var i = 0; i < s.length; i++) {
         var sLoop = s[i]
         // console.log(sLoop);
         function vowels() {
            if (vLoop == sLoop) {
               console.log(s[i]);
            }
         }
      }
   }
   // console.log(sVowels);
}

vowelsAndConsonants(s);