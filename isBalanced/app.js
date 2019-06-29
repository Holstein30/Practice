//  Take a string and return true or false indicating whether its curly braces are balanced

isBalanced("}{"); // false
isBalanced("{{}"); // false
isBalanced("{}{}"); // true
isBalanced("foo { bar { baz } boo }"); // true
isBalanced("foo { bar { baz }"); // false
isBalanced("foo { bar } }"); // false
