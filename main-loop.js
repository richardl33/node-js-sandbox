'use strict';

var s = ['j','a','v','a','s','c','r','i','p','t','l','o','o','p','s'];
var vowels = ['a', 'e', 'i', 'o', 'u'];
var sLoop;
var vLoop;
var vowels;
var vowelsNull;

function vowelsAndConsonants() {
   for (var b = 0; b < vowels.length; b++) {
      var bLoop = vowels[b];
      for (var a = 0; a < s.length; a++) {
         var aLoop = s[a];
         if (aLoop == bLoop) {
            console.log(s[a]);
         }
         // if (aLoop !== bLoop && aLoop.indexOf('o') == bLoop.indexOf('o')) {
         //    console.log(s[a]);
         // }
      }
   }

   // for (var i = 0; i < vowels.length; i++) {
   //    vLoop = vowels[i];
   //    for (var i = 0; i < s.length; i++) {
   //       sLoop = s[i];

   //    }
   // }
}

vowelsAndConsonants();