'use strict';

var s = ['j','a','v','a','s','c','r','i','p','t','l','o','o','p','s'],
vowels = ['a', 'e', 'i', 'o', 'u'],
x,
vLoop;

function vowelsAndConsonants(s,vowels) {
   for (x = 0; x < vowels.length; x++) {
      vLoop = vowels[x];
      for (var a = 0; a < s.length; a++) {
         var aLoop = s[a];
         if (aLoop == vLoop) {
            console.log(s[a]);
         }
      }
   }

   for (x = 0; x < vowels.length; x++) {
      vLoop = vowels[x];
      for (x = 0; x < s.length; x++) {
         var sLoop = s[x];
         if (vLoop !== sLoop && vLoop.indexOf('o') == sLoop.indexOf('o') && vLoop.indexOf('i') == sLoop.indexOf('i')) {
            console.log(s[x]);
         }
      }
   }
}

vowelsAndConsonants(s,vowels);