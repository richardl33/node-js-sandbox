function vowelsAndConsonants(s) {
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