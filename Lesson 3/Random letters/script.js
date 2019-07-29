var arr = new Array(30);
arr.fill(0);

var randomLetters = arr.map(function(elem)
{
    var code = Math.floor(97 + (122 - 97) * Math.random());
    return elem = String.fromCharCode(code);
});

console.log(randomLetters.join(""));

var codeUpperArr = randomLetters.map(function(elem)
{
    return (elem.toUpperCase()).charCodeAt();
    
});

var filterArr = codeUpperArr.filter(function(elem) 
{
    return elem % 5 != 0;
});

var sum = filterArr.reduce(function(sum, elem)
{
    return sum += elem % 5;
}, 0);

console.log(sum);