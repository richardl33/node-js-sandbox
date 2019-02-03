'use strict';

var s = ['j','a','v','a','s','c','r','i','p','t','l','o','o','p','s'];
var vowels = ['a', 'e', 'i', 'o', 'u'];

function vowelsAndConsonants(s) {
   for (var b = 0; b < vowels.length; b++) {
      var bLoop = vowels[b];
      for (var a = 0; a < s.length; a++) {
         var aLoop = s[a];
         if (aLoop == bLoop) {
            console.log(s[a]);
         }
      }
   }
   
   for (var i = 0; i < vowels.length; i++) {
      var vLoop = vowels[i];
      for (var i = 0; i < s.length; i++) {
         var sLoop = s[i];
         if (vLoop !== sLoop && vLoop.indexOf('o') == sLoop.indexOf('o') && vLoop.indexOf('i') == sLoop.indexOf('i')) {
            console.log(s[i]);
         }
      }
   }
}

vowelsAndConsonants(s);