function wordsReverser(string){
    return string.split(' ').map(function(word) { 
        var rev = word.split('').reverse().join('');
        if (['.',','].indexOf(rev[0]) > -1) {
          rev = rev.slice(1) + rev[0];
        }
        return rev;
    }).join(' ');
}
console.log("The String is : This is a sunny day");
console.log("The Reverse String is : "+ wordsReverser("This is a sunny day"));

