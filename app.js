// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var prograd_1 = {
    the_driver_name: 'Kabilan'
}
var prograd_2 = {
    the_Navigator_name: 'Saylali'
}
console.log("The driver's name is " + prograd_1.the_driver_name);
console.log("The navigator's name is " + prograd_2.the_Navigator_name);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var l1;
var s1, s2;
s1 = prograd_1.the_driver_name;
s2 = prograd_2.the_Navigator_name;
var l2;
l1 = s1.length;
l2 = s2.length;
if (l1 > l2) {
    console.log("The driver has the longest name, it has " + l1 + "characters");
} else if (l2 > l1) {
    console.log("The Navigator has the longest name, it has " + l2 + "characters");
} else {
    console.log("Wow, you both have equally long names, " + l1 + "characters");
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
vow(s1);
vow(s2);

function vow(str1) {
    var vowel = 'aeiouAEIOU';
    var kab = "";
    var kab1 = "";
    for (var x = 0; x < str1.length; x++) {
        if (vowel.indexOf(str1[x]) !== -1) {
            kab = kab + " " + str1[x];
            kab1 = kab1 + " " + x;
        }

    }
    console.log(str1 + " " + kab + " " + kab1);
}
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
cas(s1);
cas(s2);

function Lower(str) {
    return str.toUpperCase() != str;
}

function cas(str1) {
    var u = 0;
    var l = 0;
    var s = '';
    for (var x = 0; x < str1.length; x++) {
        s = str1.charAt(x);
        if (Lower(s))
            u = u + 1;
        else
            l = l + 1;
        s = '';
    }
    console.log("upperCase " + l + " lowercase " + u);
}
cap(" Kabilan ragumurthi");
// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
function cap(str) {
    var s = str;
    var s1 = "";
    for (var i = 0; i < s.length; i++) {
        if ((s[i]) != " ")
            s1 = s1 + s[i];
        else {
            s1 = s1 + s[i] + ((s[i + 1]).toUpperCase());
            i = i + 1;
        }
    }
    console.log(s1 + " ");
}
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
rem("Saylali");

function rem(str) {
    var s = str;
    var s1 = "";
    for (i = 0; i < str.length; i++) {
        s1 = s[i] + s1;
    }
    console.log(s1);
}
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(s1 + " " + s2);
console.log(s2 + " " + s1);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
console.log(s1);
console.log(s2);
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 