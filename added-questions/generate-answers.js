var jobworktests = [
    {
        question: "a form contains two fields named id1 and id2. how can you copy the value of the id2 field to id1?",
        answers: [
            "document.forms[0].id1.value=document.forms[0].id2.value"
        ]
    },

    {
        question: "an html form contains 10 checkboxes all named chkitems. which javascript function can be used for checking all the checkboxes together?",
        answers: [
            "function CheckAll() { for (z = 0; z  document.forms[0].chkItems.length; z++) { document.forms[0].chkItems[z].checked=true } }"
        ]
    },

    {
        question: "an image tag is defined as follows: img id=erimage width=100 height=100 onmouseover=imagechange() src=image1.jpg the purpose of the imagechange() function is to change the image sour...",
        answers: [
            "document.getElementById(ERImage).src=Image2.jpg"
        ]
    },

    {
        question: "an image tag is defined as follows: img id=erimage width=100 height=100 onmouseover=imagechange() src=image1.jpg the purpose of the imagechange() function is to change the image source...",
        answers: [
            "document.getElementById(ERImage).src=Image2.jpg"
        ]
    },

    {
        question: "analyze the following code snippet which uses a javascript regular expression character set. what will be the output of this code? html body script type=text/javascript var str = is ...",
        answers: [
            "s"
        ]
    },

    {
        question: "are the two statements below interchangeable? object.property object[property]",
        answers: [
            "Yes"
        ]
    },

    {
        question: "consider the following image definition: img id=logo src=companylogo1.gif height=12 width=12  which of the following will change the image to companylogo2.gif when the page loads?",
        answers: [
            "document.getElementById(logo).src=companylogo2.gif"
        ]
    },

    {
        question: "consider the following image definition: img id=logo src=companylogo1.gif height=12 width=12  which of the following will change the image to companylogo2.gif when the page loads?",
        answers: [
            "document.getElementById(logo).src=companylogo2.gif"
        ]
    },

    {
        question: "consider the following javascript alert: script type=text/javascript function message() { alert(welcome to expertrating!!!) } /script which of the following will run the function when...",
        answers: [
            "body onload=message()"
        ]
    },

    {
        question: "consider the following javascript alert: script type=text/javascript function message() { alert(welcome to expertrating!!!) } /script which of the following will run the function when a...",
        answers: [
            "body onload=message()"
        ]
    },

    {
        question: "consider the following javascript validation function: script type=text/javascript function validatefield() { if(document.forms[0].txtid.value ==) {return false;} ...",
        answers: [
            "input name=txtId type=text onblur=return ValidateField()"
        ]
    },

    {
        question: "consider the following javascript validation function: function validatefield() { if(document.forms[0].txtid.value ==) {return false;} return true; } which of the...",
        answers: [
            "input name=txtId type=text onblur=return ValidateField()"
        ]
    },

    {
        question: "consider the following variable declarations: var a=adam var b=eve which of the following would return the sentence adam and eve?",
        answers: [
            "a.concat( and , b)"
        ]
    },

    {
        question: "consider the three variables: sometext = javascript1.2; pattern = /(w+)(d).(d)/i; outcome = pattern.exec(sometext); what does outcome[0] contain?",
        answers: [
            "JavaScript1.2"
        ]
    },

    {
        question: "having an array object var arr = new array(), what is the best way to add a new item to the end of an array?",
        answers: [
            "arr.push(New Item)"
        ]
    },

    {
        question: "how can a javascript object be printed?",
        answers: [
            "console.log(obj)"
        ]
    },

    {
        question: "how can created cookies be deleted using javascript?",
        answers: [
            "Overwrite with an expiry date in the past"
        ]
    },

    {
        question: "how can global variables be declared in javascript?",
        answers: [
            "Declare the variable between the script tags, and outside a function to make the variable global"
        ]
    },

    {
        question: "how can the operating system of the client machine be detected?",
        answers: [
            "Using the navigator object"
        ]
    },

    {
        question: "how can the users previously navigated page be determined using javascript?",
        answers: [
            "Using the window object"
        ]
    },

    {
        question: "if an image is placed styled with z-index=-1 and a text paragraph is overlapped with it, which one will be displayed on top?",
        answers: [
            "The paragraph."
        ]
    },

    {
        question: "in an html page, the form tag is defined as follows: form onsubmit=return validate() action=http://www.mysite.com/ the validate() function is intended to prevent the form from being submitted...",
        answers: [
            "script type=text/javascript function Validate() { if(document.forms[0].name.value == ) return false; else return true; } /script"
        ]
    },

    {
        question: "performance-wise, which is the fastest way of repeating a string in javascript?",
        answers: [
            "String.prototype.repeat = function(count) { if (count  1) return ; var result = , pattern = this.valueOf(); while (count  0) { if (count & 1) result += pattern; count = 1, pattern += pattern; } return result; };"
        ]
    },

    {
        question: "select the following function that shuffles an array?",
        answers: [
            "function shuffle(array) { var tmp, current, top = array.length; if(top) while(--top) { current = Math.floor(Math.random() * (top + 1)); tmp = array[current]; array[current] = array[top]; array[top] = tmp; } return array; }"
        ]
    },

    {
        question: "the following are the samples for getting a selected value in the from a dropdown list: select id=ddlviewby option value=1test1/option option value=2 selected=selectedtest2/option...",
        answers: [
            "var e = document.getElementById(ddlViewBy); var strUser = e.options[e.selectedIndex].value;"
        ]
    },

    {
        question: "var profits=2489.8237 which of the following code(s) produces the following output? output : 2489.824",
        answers: [
            "profits.toFixed(3)"
        ]
    },

    {
        question: "what does the following javascript code do? contains(a, obj) { for (var i = 0; i  a.length; i++) { if (a[i] === obj) { return true; } } return false; }",
        answers: [
            "It checks if an array contains obj."
        ]
    },

    {
        question: "what is the difference between call() and apply()?",
        answers: [
            "The call() function accepts an argument list of a function, while the apply() function accepts a single array of arguments."
        ]
    },

    {
        question: "what is the error in the statement: var charconvert = tocharcode(x);?",
        answers: [
            "toCharCode() is a non-existent method."
        ]
    },

    {
        question: "what is the final value of the variable bar in the following code? var foo = 9; bar = 5; (function() { var foo = 2; bar= 1; }()) bar = bar + foo;",
        answers: [
            "10"
        ]
    },

    {
        question: "what is the meaning of obfuscation in javascript?",
        answers: [
            "Making code unreadable using advanced algorithms."
        ]
    },

    {
        question: "what is the purpose of while(1) in the following json response? while(1);[[u,[[smssentflag,false],[hideinvitations,false],[remindonrespondedeventsonly,true],[hideinvitations_remindo...",
        answers: [
            "It makes it difficult for a third-party to insert the JSON response into an HTML document with a script tag."
        ]
    },

    {
        question: "what value would javascript assign to an uninitialized variable?",
        answers: [
            "undefined"
        ]
    },

    {
        question: "what will be output of the following code? function testgenerator() { yield first; document.write(step1); yield second; document.write(step2); yield third; docu...",
        answers: [
            "firststep1second"
        ]
    },

    {
        question: "what will be the final value of the variable apt? var apt=2; apt=apt2;",
        answers: [
            "8"
        ]
    },

    {
        question: "what would be the use of the following code? function validate(field) { var valid=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz; var ok=yes; var temp; for(var i=0;i...",
        answers: [
            "It will force a user to enter only English alphabet character values."
        ]
    },

    {
        question: "what would be the value of ind after execution of the following code? var msg=welcome to expertrating var ind= msg.substr(3, 3)",
        answers: [
            "com"
        ]
    },

    {
        question: "when setting cookies with javascript, what will happen to the cookies.txt data if the file exceeds the maximum size?",
        answers: [
            "The file is truncated to the maximum length."
        ]
    },

    {
        question: "which event can be used to validate the value in a field as soon as the user moves out of the field by pressing the tab key?",
        answers: [
            "onblur"
        ]
    },

    {
        question: "which object can be used to ascertain the protocol of the current url?",
        answers: [
            "location"
        ]
    },

    {
        question: "which of following uses the with statement in javascript correctly?",
        answers: [
            "with (document.getElementById(blah).style) { background = black; color = blue; border = 1px solid green; }"
        ]
    },

    {
        question: "which of the following are correct values of variablec, and why? script variablea = [6,8]; variableb =[7,9]; variablec = variablea + variableb; /script",
        answers: [
            "6, 87 and 9. The + operator is not defined for arrays, and it concatenates strings, so it converts the arrays to strings."
        ]
    },

    {
        question: "which of the following are javascript unit testing tools?",
        answers: [
            "Buster.js, YUI Yeti, Jasmine"
        ]
    },

    {
        question: "which of the following are not global methods and properties in e4x?",
        answers: [
            "setName() and setNamespace()"
        ]
    },

    {
        question: "which of the following array methods in javascript runs a function on every item in the array and collects the result from previous calls, but in reverse?",
        answers: [
            "reduceRight()"
        ]
    },

    {
        question: "which of the following best describes a for loop?",
        answers: [
            "for loop consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop."
        ]
    },

    {
        question: "which of the following built-in functions is used to access form elements using their ids?",
        answers: [
            "getElementById(id)"
        ]
    },

    {
        question: "which of the following can be used for disabling the right click event in internet explorer?",
        answers: [
            "event.button == 2"
        ]
    },

    {
        question: "which of the following can be used to escape the  character?",
        answers: [
            ""
        ]
    },

    {
        question: "which of the following can be used to invoke an iframe from a parent page?",
        answers: [
            "window.frames"
        ]
    },

    {
        question: "which of the following choices will change the source of the image to image2.gif when a user clicks on the image?",
        answers: [
            "img id=imageID src=image1.gif width=50 height=60 onmousedown=changeimg(image1.gif) onmouseup=changeimg(image2.gif)"
        ]
    },

    {
        question: "which of the following choices will detect if variablename declares a function? script var variablename= function(){}; /script",
        answers: [
            "typeof variableName;"
        ]
    },

    {
        question: "which of the following choices will turn a string into a javascript function call (case with objects) of the following code snippet? script window.foo = { bar: { baz: function() { ...",
        answers: [
            "window[foo][bar][baz]();"
        ]
    },

    {
        question: "which of the following code snippets changes an image on the page?",
        answers: [
            "var img = document.getElementById(imageId); img.src = newImage.gif;"
        ]
    },

    {
        question: "which of the following code snippets gets an images dimensions (height & width) correctly?",
        answers: [
            "var img = document.getElementById(imageid); var width = img.clientWidth; var height = img.clientHeight;"
        ]
    },

    {
        question: "which of the following code snippets is more efficient, and why? script language=javascript for(i=0;idocument.images.length;i++) document.images[i].src=blank.gif; /...",
        answers: [
            "The second code is more efficient as it employs object caching."
        ]
    },

    {
        question: "which of the following code snippets removes objects from an associative array?",
        answers: [
            "delete array[propertyName];"
        ]
    },

    {
        question: "which of the following code snippets returns [object object]?",
        answers: [
            "script var o = new Object(); o.toString(); /script"
        ]
    },

    {
        question: "which of the following code snippets trims whitespace from the beginning and end of the given string str?",
        answers: [
            "str.replace(/^s+|s+$/g, );"
        ]
    },

    {
        question: "which of the following code snippets will correctly get the length of an object?",
        answers: [
            "script var newObj = new Object(); newObj[firstname] = FirstName; newObj[lastname] = LastName; newObj[age] = 21; Object.size = function(obj) { var size = 0, key; for (key in obj) { if (obj.hasOwnProperty(key)) size++; } return size; }; var size = Object.size(newObj); /script"
        ]
    },

    {
        question: "which of the following code snippets will correctly split str?",
        answers: [
            "script var str = something -- something_else; var substrn = str.split( -- ); /script"
        ]
    },

    {
        question: "which of the following code snippets will return all http headers?",
        answers: [
            "var req = new XMLHttpRequest(); req.open(GET, document.location, false); req.send(null); var headers = req.getAllResponseHeaders().toLowerCase(); alert(headers);"
        ]
    },

    {
        question: "which of the following code snippets will toggle a div elements background color? button id=toggletoggle/button div id=terdchange background color./div",
        answers: [
            "script var button = document.getElementById(toggle); button.onclick = function() { terd.style.backgroundColor = terd.style.backgroundColor == blue ? red : blue; }; /script"
        ]
    },

    {
        question: "which of the following correctly sets a class for an element?",
        answers: [
            "document.getElementById(elementId).setAttribute(className, Someclass);"
        ]
    },

    {
        question: "which of the following correctly uses a timer with a function named rearrange()?",
        answers: [
            "tmr=setTimeout(rearrange (),1)"
        ]
    },

    {
        question: "which of the following descriptions best describes the code below? script var variable1 = { fastfood: spaghetti, length: 10 }; object.freeze(variable1); variable1.price = 50; delete variable1....",
        answers: [
            "Object is frozen, a property named price is not added in the variable1 object, a property named length is not deleted from this object. At the end of the code, object variable1 contains 2 properties."
        ]
    },

    {
        question: "which of the following descriptions is true for the code below? var object0 = {}; object.defineproperty(object0, prop0, { value : 1, enumerable:false, configurable : true }); object.defineproper...",
        answers: [
            "Object object0 contains 4 properties. Property prop1 and property prop3 are available in the for...in loop. Property prop0 and property prop3 are available to delete."
        ]
    },

    {
        question: "which of the following determines whether cookies are enabled in a browser or not?",
        answers: [
            "(navigator.cookieEnabled)? true : false"
        ]
    },

    {
        question: "which of the following is not a valid html event?",
        answers: [
            "onblink"
        ]
    },

    {
        question: "which of the following is not a valid javascript operator?",
        answers: [
            "^"
        ]
    },

    {
        question: "which of the following is not a valid method for looping an array?",
        answers: [
            "var a= [1,2]; a.loop( function(item) { alert(item); })"
        ]
    },

    {
        question: "which of the following is not a valid method in generator-iterator objects in javascript?",
        answers: [
            "stop()"
        ]
    },

    {
        question: "which of the following is the correct syntax for using the javascript exec() object method?",
        answers: [
            "RegExpObject.exec(string)"
        ]
    },

    {
        question: "which of the following is the most secure and efficient way of declaring an array?",
        answers: [
            "var a = []"
        ]
    },

    {
        question: "which of the following is true about settimeout()?",
        answers: [
            "The statement(s) it executes run(s) only once."
        ]
    },

    {
        question: "which of the following javascript regular expression modifiers finds one or more occurrences of a specific character in a string?",
        answers: [
            "+"
        ]
    },

    {
        question: "which of the following methods will copy data to the clipboard?",
        answers: [
            "execCommand(Copy)"
        ]
    },

    {
        question: "which of the following modifiers must be set if the javascript lastindex object property was used during pattern matching?",
        answers: [
            "g"
        ]
    },

    {
        question: "which of the following objects in javascript contains the collection called plugins?",
        answers: [
            "Navigator"
        ]
    },

    {
        question: "which of the following options can be used for adding direct support for xml to javascript?",
        answers: [
            "E4X"
        ]
    },

    {
        question: "which of the following prints abbc?",
        answers: [
            "var b = a; var result = b.toUpperCase() + b + b.toUpperCase() +C[toLowerCase](); alert(result);"
        ]
    },

    {
        question: "which of the following regular expression pattern flags is not valid?",
        answers: [
            "p"
        ]
    },

    {
        question: "which of the following results is returned by the javascript operator typeof for the keyword null?",
        answers: [
            "object"
        ]
    },

    {
        question: "which of the following statements is correct?",
        answers: [
            "Undefined object properties can be checked using the following code: if (typeof something === undefined) alert(something is undefined);"
        ]
    },

    {
        question: "which of the following will change the color of a paragraphs text to blue when a user hovers over it, and reset it back to black when the user hovers out?",
        answers: [
            "p onmouseover=style.color=blue onmouseout=style.color=black The text of the paragraph../p"
        ]
    },

    {
        question: "which of the following will check whether the variable vrast exists or not?",
        answers: [
            "if (typeof vRast ==undefined) {}"
        ]
    },

    {
        question: "which of the following will detect which dom element has the focus?",
        answers: [
            "document.activeElement"
        ]
    },

    {
        question: "which of the following will randomly choose an element from an array named mystuff, given that the number of elements changes dynamically?",
        answers: [
            "randomElement = myStuff[Math.floor(Math.random() * myStuff.length)];"
        ]
    },
];