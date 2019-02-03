'use strict';

var jsString = ['j','a','v','a','s','c','r','i','p','t','l','o','o','p','s'],
vowels = ['a', 'e', 'i', 'o', 'u'],
sLoop,
vLoop,
x,
i;

function vowelsAndConsonants(s) {
   for (x = 0; x < vowels.length; x++) {
      vLoop = vowels[x];
      for (i = 0; i < s.length; i++) {
         var sLoop = s[i];
         if (sLoop === vLoop) {
            console.log(s[i]);
         }
      }
   }

   for (x = 0; x < vowels.length; x++) {
      vLoop = vowels[x];
      for (x = 0; x < s.length; x++) {
         sLoop = s[x];
         if (vLoop !== sLoop && vLoop.indexOf('o') === sLoop.indexOf('o') && vLoop.indexOf('i') === sLoop.indexOf('i')) {
            console.log(s[x]);
         }
      }
   }
}

vowelsAndConsonants(jsString);