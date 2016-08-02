function findAnswer(sections) {
    document.getElementsByClassName('oTxtMed')[0].remove();

    function selectAnswer(answer, area) {
        console.log(answer);
        var oneOfAnswers = area.getElementsByTagName('pre');
        for (var i = 0; i < oneOfAnswers.length; i++) {
            var label = oneOfAnswers[i];
            var convertedAnswer = textConverter(label.innerText);
            if (convertedAnswer.indexOf(answer) > -1) {
                console.log('convertedAnswer.indexOf(answer) ', convertedAnswer, answer);
                label.style.background = '#4AEF4A';
                label.click();
            } else {
                if (compare(convertedAnswer, answer) > 1) {
                    console.log('compare(convertedAnswer, answer) ', convertedAnswer, answer);
                    label.style.background = '#4AEF4A';
                    label.click();
                }
            }
        }
    }

    sections.forEach(function (section) {
        var form = document.getElementsByTagName('form')[0];
        var questionNode = form.getElementsByTagName('pre')[0];
        var convertedQuestion = textConverter(questionNode.innerText);

        if (convertedQuestion.indexOf(section.question) > -1) {
            console.log('----------------');
            console.log(arrayToString([section]));
            console.log('----------------');
            section.answers.forEach(function (answer) {
                selectAnswer(answer, form);
            });

            console.log('selectAnswer');
        } else {
            if (compare(convertedQuestion, section.question) > 0.7) {
                console.log('----------------');
                console.log(arrayToString([section]));
                console.log('----------------');
                section.answers.forEach(function (answer) {
                    selectAnswer(answer, form);
                });

                console.log('selectAnswer');
            } else {
                console.log('can\'t found answer');
            }
        }
    });
}

var questionsWithoutDuplicates = [
    {
        question: "Which of the following is true about setTimeOut()?",
        answers: [
            "The statement(s) it executes run(s) only once."
        ]
    },

    {
        question: "How can the operating system of the client machine be detected?",
        answers: [
            "Using the navigator object"
        ]
    },

    {
        question: "Which of the following prints AbBc?",
        answers: [
            "var b = a; var result = b.toUpperCase() + b + b.toUpperCase() +C[toLowerCase](); alert(result);"
        ]
    },

    {
        question: "Which of the following descriptions is true for the code below? var object0 = {}; Object.defineProperty(object0, prop0, { value : 1, enumerable:false, configurable : true }); Object.defineProperty(object0, prop1, { value : 2, enumerable:true, configurable : false }); Object.defineProperty(object0, prop2, { value : 3 }); object0.prop3 = 4;",
        answers: [
            "Object object0 contains 4 properties. Property prop1 and property prop3 are available in the for...in loop. Property prop0 and property prop3 are available to delete."
        ]
    },

    {
        question: "Performance-wise, which is the fastest way of repeating a string in JavaScript?",
        answers: [
            "String.prototype.repeat = function(count) { if (count 1) return ; var result = , pattern = this.valueOf(); while (count 0) { if (count & 1) result += pattern; count = 1, pattern += pattern; } return result; };"
        ]
    },

    {
        question: "Consider the following variable declarations: var a=adam var b=eve Which of the following would return the sentence adam and eve?",
        answers: [
            "a.concat( and , b)"
        ]
    },

    {
        question: "Which of the following code snippets will correctly split str?",
        answers: [
            "script var str = something - something_else; var substrn = str.split( - ); /script"
        ]
    },

    {
        question: "Which object can be used to ascertain the protocol of the current URL?",
        answers: [
            "location"
        ]
    },

    {
        question: "Which of the following best describes a for loop?",
        answers: [
            "for loop consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop."
        ]
    },

    {
        question: "Which of the following descriptions best describes the code below? script var variable1 = { fastFood: spaghetti, length: 10 }; Object.freeze(variable1); variable1.price = 50; delete variable1.length; /script",
        answers: [
            "Object is frozen, a property named price is not added in the variable1 object, a property named length is not deleted from this object. At the end of the code, object variable1 contains 2 properties."
        ]
    },

    {
        question: "Which of the following is not a valid HTML event?",
        answers: [
            "onblink"
        ]
    },

    {
        question: "Analyze the following code snippet which uses a Javascript Regular Expression character set. What will be the output of this code? html body script type=text/javascript var str = Is this enough?; var patt1 = new RegExp([^A-J]); var result = str.match(patt1); document.write(result); /script /body /html",
        answers: [
            "s"
        ]
    },

    {
        question: "Consider the following image definition: img id=logo src=companylogo1.gif height=12 width=12 Which of the following will change the image to companylogo2.gif when the page loads?",
        answers: [
            "document.getElementById(logo).src=companylogo2.gif"
        ]
    },

    {
        question: "What is the final value of the variable bar in the following code? var foo = 9; bar = 5; (function() { var foo = 2; bar= 1; }()) bar = bar + foo;",
        answers: [
            "10"
        ]
    },

    {
        question: "Which of the following are JavaScript unit testing tools?",
        answers: [
            "Buster.js, YUI Yeti, Jasmine"
        ]
    },

    {
        question: "Which of the following can be used for disabling the right click event in Internet Explorer?",
        answers: [
            "event.button == 2"
        ]
    },

    {
        question: "An image tag is defined as follows: img id=ERImage width=100 height=100 onmouseover=ImageChange() src=Image1.jpg The purpose of the ImageChange() function is to change the image source to Image2.jpg. Which of the following should the ImageChange() function look like?",
        answers: [
            "document.getElementById(ERImage).src=Image2.jpg"
        ]
    },

    {
        question: "Consider the following JavaScript alert: script type=text/JavaScript function message() { alert(Welcome to ExpertRating!!!) } /script Which of the following will run the function when a user opens the page?",
        answers: [
            "body onload=message()"
        ]
    },

    {
        question: "Which of the following code snippets will correctly get the length of an object?",
        answers: [
            "script var newObj = new Object(); newObj[firstname] = FirstName; newObj[lastname] = LastName; newObj[age] = 21; Object.size = function(obj) { var size = 0, key; for (key in obj) { if (obj.hasOwnProperty(key)) size++; } return size; }; var size = Object.size(newObj); /script"
        ]
    },

    {
        question: "Which of the following Array methods in JavaScript runs a function on every item in the Array and collects the result from previous calls, but in reverse?",
        answers: [
            "reduceRight()"
        ]
    },

    {
        question: "In an HTML page, the form tag is defined as follows: form onsubmit=return Validate() action=http://www.mysite.com/ The validate() function is intended to prevent the form from being submitted if the name field in the form is empty. What should the validate() function look like?",
        answers: [
            "script type=text/javascript function Validate() { if(document.forms[0].name.value == ) return false; else return true; } /script"
        ]
    },

    {
        question: "Which of the following code snippets changes an image on the page?",
        answers: [
            "var img = document.getElementById(imageId); img.src = newImage.gif;"
        ]
    },

    {
        question: "Which of the following results is returned by the JavaScript operator typeof for the keyword null?",
        answers: [
            "object"
        ]
    },

    {
        question: "What will be the final value of the variable apt? var apt=2; apt=apt2;",
        answers: [
            "8"
        ]
    },

    {
        question: "How can a JavaScript object be printed?",
        answers: [
            "console.log(obj)"
        ]
    },

    {
        question: "Which of the following is the correct syntax for using the JavaScript exec() object method?",
        answers: [
            "RegExpObject.exec(string)"
        ]
    },

    {
        question: "Having an array object var arr = new Array(), what is the best way to add a new item to the end of an array?",
        answers: [
            "arr.push(New Item)"
        ]
    },

    {
        question: "Consider the following JavaScript validation function: function ValidateField() { if(document.forms[0].txtId.value ==) {return false;} return true; } Which of the following options will call the function as soon as the user leaves the field?",
        answers: [
            "input name=txtId type=text onblur=return ValidateField()"
        ]
    },

    {
        question: "Which of following uses the with statement in JavaScript correctly?",
        answers: [
            "with (document.getElementById(blah).style) { background = black; color = blue; border = 1px solid green; }"
        ]
    },

    {
        question: "Which of the following modifiers must be set if the JavaScript lastIndex object property was used during pattern matching?",
        answers: [
            "g"
        ]
    },

    {
        question: "Which of the following will check whether the variable vRast exists or not?",
        answers: [
            "if (typeof vRast ==undefined) {}"
        ]
    },

    {
        question: "What would be the use of the following code? function validate(field) { var valid=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz; var ok=yes; var temp; for(var i=0;ifield.value.length;i++) { temp= + field.value.substring(i,i+1) if(valid.indexOf(temp)==-1) { ok=no; } } if(ok==no) { alert(error); field.focus(); } }",
        answers: [
            "It will force a user to enter only English alphabet character values."
        ]
    },

    {
        question: "Which of the following choices will detect if variableName declares a function? script var variableName= function(){}; /script",
        answers: [
            "typeof variableName;"
        ]
    },

    {
        question: "Which of the following choices will change the source of the image to image2.gif when a user clicks on the image?",
        answers: [
            "img id=imageID src=image1.gif width=50 height=60 onmousedown=changeimg(image1.gif) onmouseup=changeimg(image2.gif)"
        ]
    },

    {
        question: "How can created cookies be deleted using JavaScript?",
        answers: [
            "Overwrite with an expiry date in the past"
        ]
    },

    {
        question: "What would be the value of ind after execution of the following code? var msg=Welcome to ExpertRating var ind= msg.substr(3, 3)",
        answers: [
            "com"
        ]
    },

    {
        question: "Are the two statements below interchangeable? object.property object[property]",
        answers: [
            "Yes"
        ]
    },

    {
        question: "Which of the following is not a valid method in generator-iterator objects in JavaScript?",
        answers: [
            "stop()"
        ]
    },

    {
        question: "Which of the following code snippets will return all HTTP headers?",
        answers: [
            "var req = new XMLHttpRequest(); req.open(GET, document.location, false); req.send(null); var headers = req.getAllResponseHeaders().toLowerCase(); alert(headers);"
        ]
    },

    {
        question: "Which of the following is the most secure and efficient way of declaring an array?",
        answers: [
            "var a = []"
        ]
    },

    {
        question: "Which of the following Regular Expression pattern flags is not valid?",
        answers: [
            "p"
        ]
    },

    {
        question: "Which of the following built-in functions is used to access form elements using their IDs?",
        answers: [
            "getElementById(id)"
        ]
    },

    {
        question: "Which of the following statements is correct?",
        answers: [
            "Undefined object properties can be checked using the following code: if (typeof something === undefined) alert(something is undefined);"
        ]
    },

    {
        question: "Which of the following correctly uses a timer with a function named rearrange()?",
        answers: [
            "tmr=setTimeout(rearrange (),1)"
        ]
    },

    {
        question: "Which of the following can be used to escape the character?",
        answers: [
            "\\"
        ]
    },

    {
        question: "Which event can be used to validate the value in a field as soon as the user moves out of the field by pressing the tab key?",
        answers: [
            "onblur"
        ]
    },

    {
        question: "When setting cookies with JavaScript, what will happen to the cookies.txt data if the file exceeds the maximum size?",
        answers: [
            "The file is truncated to the maximum length."
        ]
    },

    {
        question: "Which of the following are not global methods and properties in E4X?",
        answers: [
            "setName() and setNamespace()"
        ]
    },

    {
        question: "Which of the following will change the color of a paragraphs text to blue when a user hovers over it, and reset it back to black when the user hovers out?",
        answers: [
            "p onmouseover=style.color=blue onmouseout=style.color=black The text of the paragraph../p"
        ]
    },

    {
        question: "What is the purpose of while(1) in the following JSON response? while(1);[[u,[[smsSentFlag,false],[hideInvitations,false],[remindOnRespondedEventsOnly,true],[hideInvitations_remindOnRespondedEventsOnly,false_true],[Calendar ID stripped for privacy,false],[smsVerifiedFlag,true]]]]",
        answers: [
            "It makes it difficult for a third-party to insert the JSON response into an HTML document with a script tag."
        ]
    },

    {
        question: "Consider the three variables: someText = JavaScript1.2; pattern = /(\w+)(d).(d)/i; outCome = pattern.exec(someText); What does outCome[0] contain?",
        answers: [
            "JavaScript1.2"
        ]
    },

    {
        question: "Which of the following choices will turn a string into a JavaScript function call (case with objects) of the following code snippet? script window.foo = { bar: { baz: function() { alert(Hello!); } } }; /script",
        answers: [
            "window[foo][bar][baz]();"
        ]
    },

    {
        question: "Which of the following determines whether cookies are enabled in a browser or not?",
        answers: [
            "(navigator.cookieEnabled)? true : false"
        ]
    },

    {
        question: "Which of the following options can be used for adding direct support for XML to JavaScript?",
        answers: [
            "E4X"
        ]
    },

    {
        question: "Which of the following will detect which DOM element has the focus?",
        answers: [
            "document.activeElement"
        ]
    },

    {
        question: "Which of the following will randomly choose an element from an array named myStuff, given that the number of elements changes dynamically?",
        answers: [
            "randomElement = myStuff[Math.floor(Math.random() * myStuff.length)];"
        ]
    },

    {
        question: "How can global variables be declared in JavaScript?",
        answers: [
            "Declare the variable between the script tags, and outside a function to make the variable global"
        ]
    },

    {
        question: "Which of the following objects in JavaScript contains the collection called plugins?",
        answers: [
            "Navigator"
        ]
    },

    {
        question: "What will be output of the following code? function testGenerator() { yield first; document.write(step1); yield second; document.write(step2); yield third; document.write(step3); } var g = testGenerator(); document.write(g.next()); document.write(g.next());",
        answers: [
            "firststep1second"
        ]
    },

    {
        question: "Which of the following methods will copy data to the Clipboard?",
        answers: [
            "execCommand(Copy)"
        ]
    },

    {
        question: "Which of the following code snippets trims whitespace from the beginning and end of the given string str?",
        answers: [
            "str.replace(/^\s+|s+$/g, );"
        ]
    },

    {
        question: "What is the difference between call() and apply()?",
        answers: [
            "The call() function accepts an argument list of a function, while the apply() function accepts a single array of arguments."
        ]
    },

    {
        question: "Which of the following code snippets is more efficient, and why? script language=JavaScript for(i=0;idocument.images.length;i++) document.images[i].src=blank.gif; /script script language=JavaScript var theimages = document.images; for(i=0;itheimages.length;i++) theimages[i].src=blank.gif /script",
        answers: [
            "The second code is more efficient as it employs object caching."
        ]
    },

    {
        question: "What is the meaning of obfuscation in JavaScript?",
        answers: [
            "Making code unreadable using advanced algorithms."
        ]
    },

    {
        question: "Which of the following JavaScript Regular Expression modifiers finds one or more occurrences of a specific character in a string?",
        answers: [
            "+"
        ]
    },

    {
        question: "Which of the following is not a valid JavaScript operator?",
        answers: [
            "^"
        ]
    },

    {
        question: "Which of the following code snippets returns [object object]?",
        answers: [
            "script var o = new Object(); o.toString(); /script"
        ]
    },

    {
        question: "Which of the following can be used to invoke an iframe from a parent page?",
        answers: [
            "window.frames"
        ]
    },

    {
        question: "Select the following function that shuffles an array?",
        answers: [
            "function shuffle(array) { var tmp, current, top = array.length; if(top) while(--top) { current = Math.floor(Math.random() * (top + 1)); tmp = array[current]; array[current] = array[top]; array[top] = tmp; } return array; }"
        ]
    },

    {
        question: "Which of the following code snippets removes objects from an associative array?",
        answers: [
            "delete array[propertyName];"
        ]
    },

    {
        question: "What is the error in the statement: var charConvert = toCharCode(x);?",
        answers: [
            "toCharCode() is a non-existent method."
        ]
    },

    {
        question: "What value would JavaScript assign to an uninitialized variable?",
        answers: [
            "undefined"
        ]
    },

    {
        question: "What does the following JavaScript code do? contains(a, obj) { for (var i = 0; i a.length; i++) { if (a[i] === obj) { return true; } } return false; }",
        answers: [
            "It checks if an array contains obj."
        ]
    },

    {
        question: "If an image is placed styled with z-index=-1 and a text paragraph is overlapped with it, which one will be displayed on top?",
        answers: [
            "The paragraph."
        ]
    },

    {
        question: "Which of the following code snippets gets an images dimensions (height & width) correctly?",
        answers: [
            "var img = document.getElementById(imageid); var width = img.clientWidth; var height = img.clientHeight;"
        ]
    },

    {
        question: "Which of the following are correct values of variableC, and why? script variableA = [6,8]; variableB =[7,9]; variableC = variableA + variableB; /script",
        answers: [
            "6, 87 and 9. The + operator is not defined for arrays, and it concatenates strings, so it converts the arrays to strings."
        ]
    },

    {
        question: "The following are the samples for getting a selected value in the from a dropdown list: select id=ddlViewBy option value=1test1/option option value=2 selected=selectedtest2/option option value=3test3/option /select Which code block is correct?",
        answers: [
            "var e = document.getElementById(ddlViewBy); var strUser = e.options[e.selectedIndex].value;"
        ]
    },

    {
        question: "var profits=2489.8237 Which of the following code(s) produces the following output? output : 2489.824",
        answers: [
            "profits.toFixed(3)"
        ]
    },

    {
        question: "A form contains two fields named id1 and id2. How can you copy the value of the id2 field to id1?",
        answers: [
            "document.forms[0].id1.value=document.forms[0].id2.value"
        ]
    },

    {
        question: "Which of the following code snippets will toggle a div elements background color? button id=toggleToggle/button div id=terdChange Background Color./div",
        answers: [
            "script var button = document.getElementById(toggle); button.onclick = function() { terd.style.backgroundColor = terd.style.backgroundColor == blue ? red : blue; }; /script"
        ]
    },

    {
        question: "How can the users previously navigated page be determined using JavaScript?",
        answers: [
            "Using the window object"
        ]
    },

    {
        question: "Which of the following is not a valid method for looping an array?",
        answers: [
            "var a= [1,2]; a.loop( function(item) { alert(item); })"
        ]
    },

    {
        question: "Which of the following correctly sets a class for an element?",
        answers: [
            "document.getElementById(elementId).setAttribute(className, Someclass);"
        ]
    },

    {
        question: "An HTML form contains 10 checkboxes all named chkItems. Which JavaScript function can be used for checking all the checkboxes together?",
        answers: [
            "function CheckAll() { for (z = 0; z document.forms[0].chkItems.length; z++) { document.forms[0].chkItems[z].checked=true } }"
        ]
    },

    {
        question: "Which of the following is a JavaScript comment?",
        answers: [
            "// comment"
        ]
    },

    {
        question: "var foo = Global; function fun() { log( foo ); var foo = Local; log( foo ); } fun(); What the output of the above to log()?",
        answers: [
            "undefined Local"
        ]
    },

    {
        question: "console.log( typeof [1,2] ) will print out:",
        answers: [
            "object"
        ]
    },

    {
        question: "JavaScript is ...",
        answers: [
            "object based"
        ]
    },

    {
        question: "Every object is linked to a _________ object from which it can inherit properties.",
        answers: [
            "prototype"
        ]
    },

    {
        question: "What is the value of x? var x = typeof NaN;",
        answers: [
            "number"
        ]
    },

    {
        question: "What will be the value of result? function foo(bar) { return bar ? bar == foo : foo(foo); } var result = foo();",
        answers: [
            "true"
        ]
    },

    {
        question: "What values will the output function be called with, in the following code: var foo; var bar = { name: baz, email: fiz@example.com, sendmail: function() { } }; for (foo in bar) { output(foo); }",
        answers: [
            "name, email, sendmail"
        ]
    },

    {
        question: "Consider: var x = [a, b, c]; Which line of code will remove the first element of the array, resulting in x being equal to [b, c]?",
        answers: [
            "x.splice(0, 1);"
        ]
    },

    {
        question: "What is the value of x? var z = [typeof z, typeof y][0]; var x = typeof typeof z;",
        answers: [
            "string"
        ]
    },

    {
        question: "var x = {}; var foo = function () { this.hello = Hi; return this; }; x.bar = foo; What is the value of the following code: x.bar().bar().hello;",
        answers: [
            "Hi"
        ]
    },

    {
        question: "Which of the following assigned values of x will cause (x == x) to return false?",
        answers: [
            "All of the answers"
        ]
    },

    {
        question: "What would this code print out? if (new Boolean(false)) console.log(True); else console.log(False);",
        answers: [
            "True"
        ]
    },

    {
        question: "Which two values are logged by the following code? var x = 5; (function () { console.log(x); var x = 10; console.log(x); }());",
        answers: [
            "undefined 10"
        ]
    },

    {
        question: "Infinity * null will return :",
        answers: [
            "NaN"
        ]
    },

    {
        question: "Assuming alert displays a string of its argument: var a = 10; function example(){ alert(a); var a = 5; } example(); What will be shown if the preceding code is executed?",
        answers: [
            "undefined"
        ]
    },

    {
        question: "What is the result? ? a : b",
        answers: [
            "b"
        ]
    },

    {
        question: "What is the value of x? var x = typeof null;",
        answers: [
            "object"
        ]
    },

    {
        question: "The length property of an Array object is always:",
        answers: [
            "equal to the highest index of that object + 1"
        ]
    },

    {
        question: "var data = [1, 2, 3, 4, 5, 6]; data.shift(); What does data look like?",
        answers: [
            "[2, 3, 4, 5, 6]"
        ]
    },

    {
        question: "Which fact is true about the keyword default?",
        answers: [
            "It catches any case clauses not caught by case statements within a switch statement"
        ]
    },

    {
        question: "Which String prototype method is capable of removing a character from a string?",
        answers: [
            "replace()"
        ]
    },

    {
        question: "What is the value of x after the following statement? var x = 1 == 1;",
        answers: [
            "true"
        ]
    },

    {
        question: "What is the result of the following code snippet? var small = BIG; var BIG = small; console.log(/small/.test(BIG)); console.log(/BIG/.test(small));",
        answers: [
            "true true"
        ]
    },

    {
        question: "What is the result of the following statement: typeof x;",
        answers: [
            "string"
        ]
    },

    {
        question: "Is there a value type for individual string characters?",
        answers: [
            "No, there is only type string for characters."
        ]
    },

    {
        question: "Given a variable named stringVar with a string value, what does the following do? stringVar.toUpperCase();",
        answers: [
            "Return a copy of stringVar with all letters in uppercase"
        ]
    },

    {
        question: "Which is an example of (only) an object literal in Javascript?",
        answers: [
            "var obj = { prop1: property 1, prop2: property 2 };"
        ]
    },

    {
        question: "The loop isnt working. Whats the problem? code var foos = [a, b, c , d, e]; var bars = [x, y, z]; for (var i = 0; i foos.length; i++) { var foo = foos[i]; for (var i = 0; i bars.length; i++) { var bar = bars[i]; /* some code using `bar` */ } } /code",
        answers: [

        ]
    },

    {
        question: "Functions in javascript are always ..",
        answers: [
            "objects"
        ]
    },

    {
        question: "How do you read the first character in a string?",
        answers: [
            "data.charAt(0);"
        ]
    },

    {
        question: "Which of the following have special meanings within the language syntax?",
        answers: [
            "Reserved words"
        ]
    },

    {
        question: "What is the result? 0 ==",
        answers: [
            "true"
        ]
    },

    {
        question: "Primitive types are passed by :",
        answers: [
            "Value"
        ]
    },

    {
        question: "To what type are values converted internally when evaluating a conditional statement?",
        answers: [
            "boolean"
        ]
    },

    {
        question: "var x = foo; x = !!x; What is the value of x?",
        answers: [
            "true"
        ]
    },

    {
        question: "What will calling the below test function log to console? function test(){ console.log(a); var a = hello; console.log(a); }",
        answers: [
            "undefined, hello"
        ]
    },

    {
        question: "How do you assign an anonymous function to a variable?",
        answers: [
            "var anon = function() { };"
        ]
    },

    {
        question: "What is the value of x? var x = 2 + 2;",
        answers: [
            "22"
        ]
    },

    {
        question: "Which of these is not a JavaScript statement?",
        answers: [
            "None, these are all valid statements."
        ]
    },

    {
        question: "Which of the following variable types does not exist in JavaScript?",
        answers: [
            "double"
        ]
    },

    {
        question: "Which of the following is a way to add a new value to the end of an array?",
        answers: [
            "arr[arr.length] = value;"
        ]
    },

    {
        question: "What is the RegExp object constructor used for?",
        answers: [
            "Match text against regular expressions"
        ]
    },

    {
        question: "What does 2 + 3 + 4 evaluate to?",
        answers: [
            "234"
        ]
    },

    {
        question: "When an array index goes out of bounds, what is returned?",
        answers: [
            "undefined"
        ]
    },

    {
        question: "Which is the correct syntax to write array literals in JavaScript?",
        answers: [
            "var x = [blank,blank,blank];"
        ]
    },

    {
        question: "The exploit property:",
        answers: [
            "Does not exist in JavaScript"
        ]
    },

    {
        question: "split() is a method of which constructors prototype?",
        answers: [
            "String.prototype"
        ]
    },

    {
        question: "Which of the following orders can be performed with the Array prototype sort() callback?",
        answers: [
            "All of these"
        ]
    },

    {
        question: "var a = {1:one,2:two,3:three}; var b = Object.keys(a); Whats the value of b?",
        answers: [
            "An array with all of the distinct keys from the obj a"
        ]
    },

    {
        question: "How do you write a conditional statement that will *only* execute the contained code if variable x has a value 5 of type *number*?",
        answers: [
            "if (x === 5) { ... }"
        ]
    },

    {
        question: "What is the value of c? var a = function(){ this.b = 1; } var b = function(){ var b = new a().b; return 5 + b; } var c = b();",
        answers: [
            "6"
        ]
    },

    {
        question: "How do you find the number with the highest value of x and y?",
        answers: [
            "Math.max(x, y)"
        ]
    },

    {
        question: "What is the value of x? var a = false; var x = a ? A : B;",
        answers: [
            "B"
        ]
    },

    {
        question: "Which of the following operators can assign a value to a variable?",
        answers: [
            "All of these"
        ]
    },

    {
        question: "What is the value of x? var x = 1+2+3;",
        answers: [
            "123"
        ]
    },

    {
        question: "Which of the following is the equivalent of the following. if (a) { x = b; } else { x = c; }",
        answers: [
            "x = a ? b : c;"
        ]
    },

    {
        question: "What is the value of x? var obj = {}; obj[function] = 123; x = obj.function;",
        answers: [
            "123"
        ]
    },

    {
        question: "null === undefined",
        answers: [
            "false"
        ]
    },

    {
        question: "Which event fires whenever a control loses focus?",
        answers: [
            "onblur"
        ]
    },

    {
        question: "Which of these is not a logical operator?",
        answers: [
            "&"
        ]
    },

    {
        question: "Which of these operators compares two variables by value AND type?",
        answers: [
            "==="
        ]
    },

    {
        question: "Which message does the following log to the console? bar(); function bar() { console.log(bar); }",
        answers: [
            "bar"
        ]
    },

    {
        question: "Which of the following invokes a user-defined object constructor function?",
        answers: [
            "var x = new myConstructor();"
        ]
    },

    {
        question: "The function call Math.ceil(3.5) returns:",
        answers: [
            "4"
        ]
    },

    {
        question: "In JavaScript, to call a function directly, you use:",
        answers: [
            "function_expression ( arguments_if_any )"
        ]
    },

    {
        question: "How do you declare a function?",
        answers: [
            "function doSomething() {}"
        ]
    },

    {
        question: "How would one declare a string variable?",
        answers: [
            "Any of these"
        ]
    },

    {
        question: "What is the value of a : var a = 3; var b = 2; var c = a; var a=b=c=1;",
        answers: [
            "1"
        ]
    },

    {
        question: "Properties of objects may be accessed using...",
        answers: [
            "the dot notation in JavaScript."
        ]
    },

    {
        question: "What is the value of the array myArr after execution of the following code: var myArr = [1,2,3,4,5]; myArr.shift();",
        answers: [
            "[2,3,4,5]"
        ]
    },

    {
        question: "What does isNaN() do?",
        answers: [
            "Only returns true if the argument is not a number"
        ]
    },

    {
        question: "What keyword is used to define the alternative path to take in a conditional statement?",
        answers: [
            "else"
        ]
    },

    {
        question: "What is the difference between a while loop and a do...while loop?",
        answers: [
            "The code inside a do...while loop will always be executed at least once, even if the condition is false."
        ]
    },

    {
        question: "What is the difference between == and === ?",
        answers: [
            "The == operator converts both operands to the same type, whereas === returns false for different types."
        ]
    },

    {
        question: "Which of these could be a correct way to create an instance of Person?",
        answers: [
            "var john = new Person(John, Doe, 50, blue);"
        ]
    },

    {
        question: "(function( ) { var x = foo( ); function foo( ){ return foobar }; return x; })( ); What does this function return?",
        answers: [
            "foobar"
        ]
    },

    {
        question: "What operator is used for string concatenation?",
        answers: [
            "+"
        ]
    },

    {
        question: "Which is the correct way to write a JavaScript array?",
        answers: [
            "var names = [Tim,Kim,Jim];"
        ]
    },

    {
        question: "USERNAME and userName",
        answers: [
            "Represent the name of different variables"
        ]
    },

    {
        question: "Which of these descriptors applies to JavaScript?",
        answers: [
            "Loosely typed, values of any type can be assigned to any variable."
        ]
    },

    {
        question: "Which of the following is an Error object constructor?",
        answers: [
            "All of these"
        ]
    },

    {
        question: "How do you check what the type of a value in variable x is?",
        answers: [
            "typeof(x);"
        ]
    },

    {
        question: "What is the value of the following expression: 8 % 3",
        answers: [
            "2"
        ]
    },

    {
        question: "var a = 011; parseInt(a); will return:",
        answers: [
            "11"
        ]
    },

    {
        question: "How does a while loop start?",
        answers: [
            "while (i=10)"
        ]
    },

    {
        question: "The `else` statement is ___",
        answers: [
            "used together with the `if` statement to specify the code that should execute when the `if` condition is false."
        ]
    },

    {
        question: "Given the following code, what does myFunc() return? var foo = foo; var bar = bar; function myFunc() { return foo + bar; }",
        answers: [
            "foobar"
        ]
    },

    {
        question: "String literals are written using:",
        answers: [
            "Either double quotes or single quotes: example and example"
        ]
    },

    {
        question: "How is an object property referenced?",
        answers: [
            "myObj.foo"
        ]
    },

    {
        question: "Which symbol is not used in logical operations?",
        answers: [
            "%"
        ]
    },

    {
        question: "Which of these will throw a SyntaxError?",
        answers: [
            "if (x ==== 1) { }"
        ]
    },

    {
        question: "JavaScript supports dynamic typing, you can assign different types of values to the same variable.",
        answers: [
            "true"
        ]
    },

    {
        question: "How do you round the number 7.25, to the nearest whole number?",
        answers: [
            "Math.round(7.25)"
        ]
    },

    {
        question: "How to return the first value of this array? var myArr = [1, 2, 3, 4, 5]; var myVal = ...",
        answers: [
            "myArr[0];"
        ]
    },

    {
        question: "How do you define a function called fName?",
        answers: [
            "function fName() { }"
        ]
    },

    {
        question: "Which of the following is not a reserved word?",
        answers: [
            "program"
        ]
    },

    {
        question: "Which of the following asserts that the variables `A`, `B`, and `C` have unequal values?",
        answers: [
            "A !== B && B !== C && A !== C"
        ]
    },

    {
        question: "What does the break statement do?",
        answers: [
            "Aborts the current loop or switch statement."
        ]
    },

    {
        question: "Which of the following is a valid function definition?",
        answers: [
            "function myFunc(arg1,arg2) { }"
        ]
    },

    {
        question: "Which of the following declares a variable with a value of string type?",
        answers: [
            "var myVar = This is a string;"
        ]
    },

    {
        question: "Are variable identifiers case-sensitive?",
        answers: [
            "Yes"
        ]
    },

    {
        question: "What is the correct JavaScript syntax to insert a comment that can span multiple lines?",
        answers: [
            "/* This comment has more than one line */"
        ]
    },

    {
        question: "The if statement is used to:",
        answers: [
            "Deal with logic that should execute only when a condition is true"
        ]
    },

    {
        question: "Which keyboard character represents the assignment operator?",
        answers: [
            "="
        ]
    },

    {
        question: "String concatenation...",
        answers: [
            "Is the combination of two or more text Strings"
        ]
    },

    {
        question: "Properties of a RegExp object include:",
        answers: [
            "All of these"
        ]
    },

    {
        question: "You use the Math.pow() method to:",
        answers: [
            "Return a number raised to the power of a second number"
        ]
    },

    {
        question: "What is the value of (dog.length)?",
        answers: [
            "3"
        ]
    },

    {
        question: "Which is NOT a way to create a loop in javascript?",
        answers: [
            "repeat (...) { }"
        ]
    },

    {
        question: "What is the value of x? var a = A; var x = a.concat(B);",
        answers: [
            "AB"
        ]
    },

    {
        question: "Which statement loops through an array?",
        answers: [
            "for (var i=0; i myArray.length; i++)"
        ]
    },

    {
        question: "The var statement is used to:",
        answers: [
            "Create a new local variable"
        ]
    },

    {
        question: "function foo(){ var tmp = one_two_three_four_five; return tmp.replace(/_/g, +); } What does foo() return?",
        answers: [
            "one+two+three+four+five"
        ]
    },

    {
        question: "A for loop is written as such: for (first property; second property; third property) {...} What does the third property represent?",
        answers: [
            "An action to take at the end of the current loop cycle"
        ]
    },

    {
        question: "Where do you use the break statement?",
        answers: [
            "To terminate a switch statement, loop, or labeled block."
        ]
    },

    {
        question: "In an array object, what is the key of the first value?",
        answers: [
            "0"
        ]
    },

    {
        question: "Which of the following primitive values exist in JavaScript?",
        answers: [
            "All of these"
        ]
    },

    {
        question: "What keyword is used to begin a conditional statement?",
        answers: [
            "if"
        ]
    },

    {
        question: "What character ends a javascript statement?",
        answers: [
            "A semicolon ;."
        ]
    },

    {
        question: "Which has the correct syntax of a ternary operation?",
        answers: [
            "var x = y === true ? true : false;"
        ]
    },

    {
        question: "JavaScript is an implementation of the ______ language standard.",
        answers: [
            "ECMAScript"
        ]
    },

    {
        question: "If a function doesnt explicitly use the return operator, what will the return value be when the function is invoked?",
        answers: [
            "undefined"
        ]
    },

    {
        question: "What is result of the following expression: var a = test; console.log(!!a);",
        answers: [
            "true"
        ]
    },

    {
        question: "What is the name of the String prototype that appends the given string to the base string and returns the new string?",
        answers: [
            "x.concat(foo)"
        ]
    },

    {
        question: "Which of these is a correct method to create a new array?",
        answers: [
            "var myArray = [];"
        ]
    },

    {
        question: "var data = [A, B, C, D]; data.unshift(X); data.push(Y); What does data look like?",
        answers: [
            "[X, A, B, C, D, Y]"
        ]
    },

    {
        question: "What character combination is used to create a single line comment?",
        answers: [
            "//"
        ]
    },

    {
        question: "Which of the following is the syntax for an object literal (with no properties)?",
        answers: [
            "{};"
        ]
    },

    {
        question: "How can you concatenate multiple strings?",
        answers: [
            "Both of these"
        ]
    },

    {
        question: "How do you assign object properties?",
        answers: [
            "obj[age] = 25 OR obj.age = 25"
        ]
    },

    {
        question: "Consider this code: var x = [Hello]; What value will x[1] return?",
        answers: [
            "undefined"
        ]
    },

    {
        question: "The _______ operator returns a string that identifies the type of its operand.",
        answers: [
            "typeof"
        ]
    },

    {
        question: "When writing an object literal, what is used to separate the properties from each other?",
        answers: [
            "a comma ,"
        ]
    },

    {
        question: "What are curly braces ({ and }) used for?",
        answers: [
            "Block declarations and object literals"
        ]
    },

    {
        question: "What is the value of x? function foo(y) { var z = 10; z = 7; }; var x = foo(bar);",
        answers: [
            "undefined"
        ]
    },

    {
        question: "How do you create an object in JavaScript?",
        answers: [
            "All of these work."
        ]
    },

    {
        question: "Which of the following is not a method in the JSON object according to the ECMAScript specification?",
        answers: [
            "JSON.fromString"
        ]
    },

    {
        question: "How can you get the number of characters in a string ?",
        answers: [
            "1234567.length"
        ]
    },

    {
        question: "What is the result of the following statement: 0 == ;",
        answers: [
            "true"
        ]
    },

    {
        question: "What does null, undefined, string, 20, true and false have in common?",
        answers: [
            "they are primitive values"
        ]
    },

    {
        question: "Given the following code, what is the value of x? var x = [foo, bar]; x.length = 1;",
        answers: [
            "[foo]"
        ]
    },

    {
        question: "Math.random() returns..",
        answers: [
            "a random number between 0 and 1"
        ]
    },

    {
        question: "What is the result of the following expression? ({foo: true}).foo;",
        answers: [
            "true"
        ]
    },

    {
        question: "In the loop, for (first clause; second clause; third clause) { statements; } What does the second clause represent?",
        answers: [
            "A condition to check at the beginning of each loop cycle"
        ]
    },

    {
        question: "What is the value of `x` after the following? var x = hello; (function() { x = goodbye; }());",
        answers: [
            "goodbye"
        ]
    },

    {
        question: "Which is not a primitive data type in JavaScript?",
        answers: [
            "character"
        ]
    },

    {
        question: "What will invoking `foo` return? function foo() { var x = 10; x = 7; };",
        answers: [
            "undefined"
        ]
    },

    {
        question: "What is the value of x? var str = what is this; var x = str.search(is);",
        answers: [
            "5"
        ]
    },

    {
        question: "The this keyword refers to ...",
        answers: [
            "current execution context (could be any value)."
        ]
    },

    {
        question: "& Operator is _____",
        answers: [
            "a bitwise operator"
        ]
    },

    {
        question: "What character combination is used to alter the order of operations by grouping expressions?",
        answers: [
            "( )"
        ]
    },

    {
        question: "var x = Math.ceil(10.126); What is the value of x?",
        answers: [
            "11"
        ]
    },

    {
        question: "What is the type of `null`, according to the `typeof` operator?",
        answers: [
            "object"
        ]
    },

    {
        question: "function b(x, y, a) { arguments[2] = 10; alert(a); } b(1, 2, 3); What is alerted?",
        answers: [
            "10"
        ]
    },

    {
        question: "What is the difference between using call() and apply() to invoke a function with multiple arguments?",
        answers: [
            "apply() is identical to call(), except apply() requires an array as the second parameter"
        ]
    },

    {
        question: "var y = 3, x = y++; What is the value of x?",
        answers: [
            "3"
        ]
    },

    {
        question: "Which of the following types does NOT exist in javascript?",
        answers: [
            "integer"
        ]
    },

    {
        question: "What is the end value of myAddedVar with the following code: var myVar = 5; var myAddedVar = myVar + 10;",
        answers: [
            "510"
        ]
    },

    {
        question: "What does this line do? variable++;",
        answers: [
            "Increments the value of variable but returns the previous value"
        ]
    },

    {
        question: "var a = new Boolean(false); What is (typeof a)?",
        answers: [
            "object"
        ]
    },

    {
        question: "What is the value of x? var x = typeof new String(abc);",
        answers: [
            "object"
        ]
    },

    {
        question: "Which of these will invoke a function?",
        answers: [
            "function.apply(...)"
        ]
    },

    {
        question: "Does NaN equal itself?",
        answers: [
            "No, NaN does not equal itself (== comparison would return false)."
        ]
    },

    {
        question: "What will happen in the console after executing this code? if (foo) { console.log(foo === false); console.log(foo === true); }",
        answers: [
            "false false"
        ]
    },

    {
        question: "What is the value of the function log? var _ = _; log(parseInt(_));",
        answers: [
            "NaN"
        ]
    },

    {
        question: "Which of these is not a built-in object constructor?",
        answers: [
            "Time"
        ]
    },

    {
        question: "Given the following code: var myVar = 5; var myAddedVar = myVar + 10; What is the value of (myAddedVar.constructor === Number)?",
        answers: [
            "false"
        ]
    },

    {
        question: "How would you iterate over the following object? var my_data = {a: Ape, b: Banana, c: Citronella};",
        answers: [
            "for (var key in my_data) {}"
        ]
    },

    {
        question: "What is the value of x after the following code is executed? var x = 0; x = x++;",
        answers: [
            "0"
        ]
    },

    {
        question: "You use the Math.tan( ) method to:",
        answers: [
            "Return the tangent of an angle (in radians)"
        ]
    },

    {
        question: "A javascript variable prefixed with a $ is:",
        answers: [
            "valid javascript syntax as any other character"
        ]
    },

    {
        question: "Math.min() Math.max(); ...will return:",
        answers: [
            "false"
        ]
    },

    {
        question: "What does the following expression return? 1 + 5 + bottles of milk;",
        answers: [
            "6 bottles of milk"
        ]
    },

    {
        question: "Which Object method takes a `propertyName` parameter and returns `true` if the object contains an uninherited property with that key?",
        answers: [
            "obj.hasOwnProperty(propertyName);"
        ]
    },

    {
        question: "Which of the following is NOT a valid way to write a loop that will iterate over the values in the array in variable myArray?",
        answers: [
            "None of these, they are all valid"
        ]
    },

    {
        question: "What is the value of c? var A = function () { this.b = 1; } A.prototype.b = 2; var c = new A().b;",
        answers: [
            "1"
        ]
    },

    {
        question: "What will be the value of x? function A() { this.do = function () { return foo; }; } A.prototype = { do: function () { return bar; } }; var x = new A().do();",
        answers: [
            "foo"
        ]
    },

    {
        question: "What is the right way to combine two arrays into a new array? var a = [a, b, c]; var b = [d, e, f];",
        answers: [
            "var c = a.concat(b);"
        ]
    },

    {
        question: "What is the output? var one; var two = null; console.log(one == two, one === two);",
        answers: [
            "true false"
        ]
    },

    {
        question: "Which are the different ways to affect the this reference in a function?",
        answers: [
            "Invoking a function with the new keyword, invoking through the .call() method, invoking through the .apply() method."
        ]
    },

    {
        question: "What is the difference between the two declaration methods below? var functionOne = function() { /* some code */ } function functionTwo() { /* some code */ }",
        answers: [

        ]
    },

    {
        question: "How does JavaScript interpret numeric constants outside of strict mode?",
        answers: [
            "As octal if they are preceded by a zero, and as hexadecimal if they are preceded by a zero and x"
        ]
    },

    {
        question: "When reserved words are used as keys in object literals they must be ______?",
        answers: [
            "quoted"
        ]
    },

    {
        question: "Mathematical expression, 10 - (12+5).toString(), evaluates to what?",
        answers: [
            "-7"
        ]
    },

    {
        question: "What does the following return? Number(null);",
        answers: [
            "0"
        ]
    },

    {
        question: "What is the value of x.length after running this code? x = [foo]; x.quux = Hello; x[1] = bar;",
        answers: [
            "2"
        ]
    },

    {
        question: "What is the value of x after the code below is executed? var x = ; function foo() { x += foo ; } var bar = function() { x += bar ; }; foo(); var quux = bar = foo; quux();",
        answers: [
            "foo foo"
        ]
    },

    {
        question: "What will be in console after executing this code: console.log(1 + 1 - 1);",
        answers: [
            "10"
        ]
    },

    {
        question: "The expression (typeof NaN === number) evaluates to:",
        answers: [
            "true"
        ]
    },

    {
        question: "What will: typeof typeof(null) return?",
        answers: [
            "string"
        ]
    },

    {
        question: "What will the expression a === b return after the following? var a = { foo: bar }; var b = { foo: bar };",
        answers: [
            "false"
        ]
    },

    {
        question: "How can you remove an element from an array and replace it with a new one ?",
        answers: [
            "array.splice(...)"
        ]
    },

    {
        question: "What will we see in the console after the following code run: var a = Bolt; function f() { if (!a) { var a = Nut; } console.log(a); } f(); console.log(a);",
        answers: [
            "Nut then Bolt"
        ]
    },

    {
        question: "true + true will return :",
        answers: [
            "2"
        ]
    },

    {
        question: "What is the result of: function foo() { output( biz + bar() ); } bar(); var bar = function() { return baz; }",
        answers: [
            "TypeError: Undefined is not a function"
        ]
    },

    {
        question: "What is the value of x? var x = 10/0;",
        answers: [
            "Infinity"
        ]
    },

    {
        question: "What will be the result of this expression: void 0",
        answers: [
            "undefined"
        ]
    },

    {
        question: "What does Math.random() do?",
        answers: [
            "Returns a random number from and including 0 to less than 1."
        ]
    },

    {
        question: "In the following code: function test() { var foo = bar = 5; } test();",
        answers: [
            "Variable foo is a local variable. But bar is a global variable."
        ]
    },

    {
        question: "What are the values of x and y after the invocation of `foo` in following? var x = I am global x; var y = I am global y; function foo() { var y = x = Hello from foo; } foo();",
        answers: [
            "x = Hello from foo; y = I am global y;"
        ]
    },

    {
        question: "var q = null; q++; What is q?",
        answers: [
            "1"
        ]
    },

    {
        question: "Given the following code, what will myFunction(123, false, test) return? function myFunction(param) { return arguments[1] || param; }",
        answers: [
            "123"
        ]
    },

    {
        question: "After the following code: var a = function(){ this.b = 1; this.deleteMe = function(){ delete this; } }; var c = new a(); c.deleteMe(); What is the value of (String(c))?",
        answers: [
            "[object Object]"
        ]
    },

    {
        question: "Which operator has highest precedence?",
        answers: [
            "*"
        ]
    },

    {
        question: "function Question() { this.answered = false; } Question.prototype.rightAnswer = 5; console.log( new Question().rightAnswer, Question.rightAnswer ); What gets printed to the console?",
        answers: [
            "5 undefined"
        ]
    },

    {
        question: "What will the console log when running this code? Function.prototype.a = 1; var a = new Function(); a.prototype.a = 2; var c = new a(); console.log(a.a , c.a);",
        answers: [
            "1 2"
        ]
    },

    {
        question: "Evaluate: undefined + 2",
        answers: [
            "NaN"
        ]
    },

    {
        question: "Evaluate: new Boolean(new Boolean(false)).valueOf()",
        answers: [
            "true"
        ]
    },

    {
        question: "An (inner) function enjoys access to the parameters and variables of all the functions it is nested in. This is called:",
        answers: [
            "Lexical scoping"
        ]
    },

    {
        question: "Object.keys(x)",
        answers: [
            "returns the enumerable properties of x as an array of strings."
        ]
    },

    {
        question: "bar.split().length returns:",
        answers: [
            "1"
        ]
    },

    {
        question: "Math.Pi returns the mathematical constant of Pi. What standard JavaScript method would truncate Math.Pi to 3.14 ?",
        answers: [
            "Math.Pi.toFixed(2)"
        ]
    },

    {
        question: "function foo(){ var tmp = one_two_three_four_five; return tmp.replace(_, +); } What does foo() return?",
        answers: [
            "one+two_three_four_five"
        ]
    },

    {
        question: "var x = { foo: A }; x.constructor.prototype.foo = B; var y = {}; console.log(x.foo); console.log(y.foo); Which two values will be logged?",
        answers: [
            "A B"
        ]
    },

    {
        question: "Evaluate the following expression: ~-(2 + 2)",
        answers: [
            "21"
        ]
    },

    {
        question: "Which of these will create a copy of an array such that changes to the old array will not be reflected in the new array?",
        answers: [
            "var newArray = oldArray.slice(0);"
        ]
    },

    {
        question: "What is the output of the following? var x = 1; console.log(x++ + ++x + x);",
        answers: [
            "7"
        ]
    },

    {
        question: "console.log( ~[]+~![]+~!![] ); Console output is:",
        answers: [
            "-4"
        ]
    },

    {
        question: "What value is passed to function foo as first argument? foo( +5 );",
        answers: [
            "5"
        ]
    },

    {
        question: "What will be printed to the console as a result of this code? var printName = function() { console.log(Matt); printName = function() { console.log(James); }; }; var copy = printName; printName(); copy();",
        answers: [
            "Matt Matt"
        ]
    },

    {
        question: "What is the result of: console.log((!+[]+[]+![]).length);",
        answers: [
            "9"
        ]
    },

    {
        question: "What is the value of x after the following code is run? var obj = { 0: who, 1: what, 2: idontknow}; var x = 1 in obj;",
        answers: [
            "true"
        ]
    },

    {
        question: "Which of the following String prototype method takes a regular expression?",
        answers: [
            "search()"
        ]
    },

    {
        question: "What is the value of mike after this code is run? function Person(name, age) { this.name = name; this.age = parseInt(age, 10); } var mike = Person(Mike, 25);",
        answers: [
            "undefined"
        ]
    },

    {
        question: "var x = ([]+!![])[+!+[]]; What is the value of x?",
        answers: [
            "r"
        ]
    },

    {
        question: "Which of the following expressions evaluates to false?",
        answers: [
            "new Boolean(false) == false"
        ]
    },

    {
        question: "Math.log(x) returns:",
        answers: [
            "Logarithm base e (Eulers number) of x."
        ]
    },

    {
        question: "Which of the following is not a reserved word in the language?",
        answers: [
            "and"
        ]
    },

    {
        question: "What is the result of the below expression? Assume output is a function that outputs a line of text. output(typeof (function() {output(Hello World!)})());",
        answers: [
            "Hello World! undefined"
        ]
    },

    {
        question: "What is the value of x after the following code runs? var x; x++;",
        answers: [
            "NaN"
        ]
    },

    {
        question: "function foo() { this = foo; } var a = foo(); What will the preceding code produce?",
        answers: [
            "ReferenceError: Invalid left-hand side in assignment"
        ]
    },

    {
        question: "What will this code produce: +new Date()",
        answers: [
            "Unix timestamp in milliseconds (UTC timezone)"
        ]
    },

    {
        question: "What is the value of c? var a = function(){ this.b = 1; } var b = function(){ this.b = new a().b; return 5; } var c = b() + new b();",
        answers: [
            "Error thrown when running the code"
        ]
    },

    {
        question: "Which of the following Array prototype method actually modifies the array its been called on?",
        answers: [
            "splice()"
        ]
    },

    {
        question: "What does the following return? Math.max();",
        answers: [
            "-Infinity"
        ]
    },

    {
        question: "Which are the different value types in JavaScript?",
        answers: [
            "boolean, number, string, function, object and undefined"
        ]
    },

    {
        question: "String values have a length property. Why is this property not included in a for-in loop over a string object? var prop, str; str = example; /* str.length === 7 */ for ( prop in str) {}",
        answers: [
            "Because the length property has internal [[Enumerable]] set to false."
        ]
    },

    {
        question: "What will the following code, when evaluated, do? var void = function () {};",
        answers: [
            "Throw a SyntaxError"
        ]
    },

    {
        question: "Object(s) instanceof String === s instanceof String",
        answers: [
            "false"
        ]
    },

    {
        question: "Whats the correct syntax for creating a Date object for January 10, 1998?",
        answers: [
            "new Date(1998, 0, 10);"
        ]
    },

    {
        question: "Evaluate: ![]+[]",
        answers: [
            "false"
        ]
    },

    {
        question: "What is the value of x? var a = abc; var x = a instanceof String;",
        answers: [
            "false"
        ]
    },

    {
        question: "Which of the following is NOT a reserved word in JavaScript?",
        answers: [
            "array"
        ]
    },

    {
        question: "Which of the following descriptions is true for the code below?var object0 = {};Object",
        answers: [
            "Object object0 contains 4 properties. Property prop1 and property prop3 are available in the for…in loop. Property prop0 and property prop3 are available to delete."
        ]
    },

    {
        question: "Which of the following descriptions best describes the code below?scriptvar variable1 = { fastFood: spaghetti, length: 10 };Object",
        answers: [
            "Object is frozen, a property named price is not added in the variable1 object, a property named length is not deleted from this object. At the end of the code, object variable1 contains 2 properties."
        ]
    },

    {
        question: "Consider the following image definition:img id=logo src=companylogo1",
        answers: [
            "document.getElementById(logo).src=companylogo2.gif"
        ]
    },

    {
        question: "An image tag is defined as follows:img id=ERImage width=100 height=100 onmouseover=ImageChange() src=Image1",
        answers: [
            "document.getElementById(ERImage).src=Image2.jpg"
        ]
    },

    {
        question: "In an HTML page, the form tag is defined as follows:form onsubmit=return Validate() action=http://www",
        answers: [
            "script type=text/javascript function Validate() { if(document.forms[0].name.value == ) return false; else return true; } /script"
        ]
    },

    {
        question: "Consider the following JavaScript validation function:script type=text/JavaScriptfunction ValidateField(){if(document",
        answers: [
            "input name=txtId type=text onblur=return ValidateField()"
        ]
    },

    {
        question: "What would be the use of the following code?function validate(field) {var valid=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz;var ok=yes;var temp;for(var i=0;ifield",
        answers: [
            "It will force a user to enter only English alphabet character values."
        ]
    },

    {
        question: "Are the two statements below interchangeable?object",
        answers: [
            "Yes"
        ]
    },

    {
        question: "Consider the three variables:someText = JavaScript1",
        answers: [
            "JavaScript1.2"
        ]
    },

    {
        question: "Which of the following choices will turn a string into a JavaScript function call (case with objects) of the following code snippet?scriptwindow",
        answers: [
            "window[foo][bar][baz]();"
        ]
    },

    {
        question: "What will be output of the following code?function testGenerator() {yield first;document",
        answers: [
            "firststep1second"
        ]
    },

    {
        question: "Which of the following code snippets is more efficient, and why?script language=JavaScriptfor(i=0;idocument",
        answers: [
            "The second code is more efficient as it employs object caching."
        ]
    },

    {
        question: "Consider the following JavaScript validation function:function ValidateField(){ if(document",
        answers: [
            "input name=txtId type=text onblur=return ValidateField()"
        ]
    },

    {
        question: "an html form contains 10 checkboxes all named chkitems. which javascript function can be used for checking all the checkboxes together?",
        answers: [
            "function CheckAll() { for (z = 0; z document.forms[0].chkItems.length; z++) { document.forms[0].chkItems[z].checked=true } }"
        ]
    },

    {
        question: "an image tag is defined as follows: img id=erimage width=100 height=100 onmouseover=imagechange() src=image1.jpg the purpose of the imagechange() function is to change the image sour...",
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
        question: "consider the following javascript alert: script type=text/javascript function message() { alert(welcome to expertrating!!!) } /script which of the following will run the function when...",
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
        question: "consider the three variables: sometext = javascript1.2; pattern = /(w+)(d).(d)/i; outcome = pattern.exec(sometext); what does outcome[0] contain?",
        answers: [
            "JavaScript1.2"
        ]
    },

    {
        question: "how can a javascript object be printed?",
        answers: [
            "console.log(obj)"
        ]
    },

    {
        question: "how can global variables be declared in javascript?",
        answers: [
            "Declare the variable between the script tags, and outside a function to make the variable global"
        ]
    },

    {
        question: "in an html page, the form tag is defined as follows: form onsubmit=return validate() action=http://www.mysite.com/ the validate() function is intended to prevent the form from being submitted...",
        answers: [
            "script type=text/javascript function Validate() { if(document.forms[0].name.value == ) return false; else return true; } /script"
        ]
    },

    {
        question: "the following are the samples for getting a selected value in the from a dropdown list: select id=ddlviewby option value=1test1/option option value=2 selected=selectedtest2/option...",
        answers: [
            "var e = document.getElementById(ddlViewBy); var strUser = e.options[e.selectedIndex].value;"
        ]
    },

    {
        question: "what is the error in the statement: var charconvert = tocharcode(x);?",
        answers: [
            "toCharCode() is a non-existent method."
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
        question: "what will be output of the following code? function testgenerator() { yield first; document.write(step1); yield second; document.write(step2); yield third; docu...",
        answers: [
            "firststep1second"
        ]
    },

    {
        question: "what would be the use of the following code? function validate(field) { var valid=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz; var ok=yes; var temp; for(var i=0;i...",
        answers: [
            "It will force a user to enter only English alphabet character values."
        ]
    },

    {
        question: "which of the following choices will turn a string into a javascript function call (case with objects) of the following code snippet? script window.foo = { bar: { baz: function() { ...",
        answers: [
            "window[foo][bar][baz]();"
        ]
    },

    {
        question: "which of the following code snippets is more efficient, and why? script language=javascript for(i=0;idocument.images.length;i++) document.images[i].src=blank.gif; /...",
        answers: [
            "The second code is more efficient as it employs object caching."
        ]
    },

    {
        question: "which of the following descriptions is true for the code below? var object0 = {}; object.defineproperty(object0, prop0, { value : 1, enumerable:false, configurable : true }); object.defineproper...",
        answers: [
            "Object object0 contains 4 properties. Property prop1 and property prop3 are available in the for...in loop. Property prop0 and property prop3 are available to delete."
        ]
    },

    {
        question: "which of the following is not a valid html event?",
        answers: [
            "onblink"
        ]
    },

    {
        question: "which of the following is true about settimeout()?",
        answers: [
            "The statement(s) it executes run(s) only once."
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
        question: "Which of the following is not a valid Date Object method in JavaScript?",
        answers: [
            "setDay()"
        ]
    },

    {
        question: "Which event can detect when the user highlights text within a text or textarea object?",
        answers: [
            "onSelect"
        ]
    },

    {
        question: "Consider the following code snippet:var myJSONObject = {ircEvent: PRIVMSG, method: newURI, regex: ^http://.*};What is the best way to remove the property regex, so the result would be this code snippet?myJSONObject == {ircEvent: PRIVMSG, method: newURI};",
        answers: [
            "delete myJSONObject.regex;"
        ]
    },

    {
        question: "Which of the following is the best way to show both single and double quotes in the same sentence?",
        answers: [
            "alert(Its game time.);"
        ]
    },

    {
        question: "Which of the following statements is true regarding importing JavaScript files inside of other JavaScript files?",
        answers: [
            "There is an import keyword in JavaScript, which allows importing JS files inside of other JS files."
        ]
    },

    {
        question: "Which of the following shortcuts can be used for writing multiple document.write statements?",
        answers: [
            "with(document) {}"
        ]
    },

    {
        question: "In JavaScript, the encodeURI() function is used to encode special characters. Which of the following special characters is/are an exception to that rule?A. £ B. € C. @ D. $",
        answers: [
            "A and B"
        ]
    },

    {
        question: "Consider the following code:form textarea id=foo name=foo/textarea /formWhich of the following is the best method to get the line number of the forms text area?",
        answers: [
            "script foo.value.split(/ | | /g); /script"
        ]
    },

    {
        question: "Which of the following code snippets shows an alert for an empty string?var a = ;",
        answers: [
            "If(!a){ alert(This is empty string);}"
        ]
    },

    {
        question: "Consider the following code:var setter=new Object() setter.color=blueHow would you delete the color property of the variable seter?",
        answers: [
            "delete setter.color"
        ]
    },

    {
        question: "Is the following statement regarding expression closures in JavaScript true or false?The syntax function(x) {return x*x;} can be written as function(x) x*x.",
        answers: [
            "False"
        ]
    },

    {
        question: "Which of the following statements regarding this String prototype is correct?String.prototype.doSomething = function(suffix) { return this.indexOf(suffix, this.length — suffix.length) !== -1; };",
        answers: [
            "This method determines whether or not a string ends with another string."
        ]
    },

    {
        question: "What will be the result of the following code?document.getElementById(banana).className = document.getElementById(banana).className.replace(/(?:^|s)apple(?!S)/g ,e );",
        answers: [
            "Replace class apple with e in the HTML element which contains ID banana"
        ]
    },

    {
        question: "Which of the following will determine if the users browser is named Netscape?",
        answers: [
            "None of these"
        ]
    },

    {
        question: "Which of the following are not valid HTML events?",
        answers: [
            "onmouseabove",
            "onmousein"
        ]
    },

    {
        question: "Which of the following options is used to access the attributes in E4X?",
        answers: [
            "@"
        ]
    },

    {
        question: "Which of the following can be used to write a JavaScript function that will accept user input?",
        answers: [
            "The prompt method"
        ]
    },

    {
        question: "Which of these options is the most maintainable way to attach JavaScript functionality to an HTML element?",
        answers: [
            "script function fun(){alert(You clicked me!)} /scripta onclick=fun()…/a"
        ]
    },

    {
        question: "Consider the following JavaScript function to change the color of the text box named txtName: function color(col) { document.forms[0].txtName.style.background=col } Which of the following will change the color of the text box to green, as long as the user is pressing a key?",
        answers: [
            "input type=text onkeypress=color(green) onkeyup=color(white) name=txtName"
        ]
    },

    {
        question: "Which of the following statements regarding JSON is incorrect?",
        answers: [
            "Comments in JSON are allowed."
        ]
    },

    {
        question: "What will the following code snippet do? document.alinkColor=green",
        answers: [
            "It makes the color of the active links green"
        ]
    },

    {
        question: "Which of the following choices will remove a selection option from the code below? button idnewbtn onclick=g();Remove/button select name=selectBox id=selectBox option value=option1option1/option option value=option2option2/option option value=option3option3/option option value=option4option4/option /select",
        answers: [
            "script function g(){ var index = 1; var d = document.getElementById(selectBox); var d_nested = d.childNodes[index]; var throwawayNode = d.removeChild(d_nested); } /script"
        ]
    },

    {
        question: "Which of the following is not a JavaScript string method?",
        answers: [
            "ep"
        ]
    },

    {
        question: "Which of the following code snippets shows the correct way to detect an array that does not contain a specific value?",
        answers: [
            "script var aVar = [Banana, Orange, Apple, Mango]; var bVar = fruits.indexOf(Lichi) if(bVar == -1){ //requirement } /script"
        ]
    },

    {
        question: "What would be the default setting for the expires attribute of the document.cookie property?",
        answers: [
            "The duration of the browser session"
        ]
    },

];

findAnswer(questionsWithoutDuplicates);


var allQuestions = getQuestions(questionsWithoutDuplicates);

var operations = 0;

var questionsArray = [];
var duplicates = [];
var warnings = [];

function checkQuestions() {
    allQuestions.forEach(function (item1, ind) {
        setTimeout(function () {
            clearTextValues(item1);
            var duplicate = false;
            questionsArray.forEach(function (item2) {
                if (compare(item1.question, item2.question) > 0.9) {
                    duplicate = true;
                    if (item1.answers.length === item2.answers.length) {
                        item1.answers.sort();
                        item2.answers.sort();

                        item1.answers.forEach(function (answer1, answerIndex) {
                            if (compare(answer1, item2.answers[answerIndex]) < 0.9) {
                                warnings.push(item1);
                                warnings.push(item2);
                                duplicate = false;
                            }
                        });
                    } else {
                        warnings.push(item1);
                    }
                }
            });

            if (!duplicate) {
                questionsArray.push(item1);
            } else {
                duplicates.push(item1);
            }

            changeCounter(allQuestions.length, ind);
        }, 0);
    });
}

//checkQuestions();

function changeCounter (length, index) {
    count = index + 1;
    if (count == length) {
        showInfo();
    } else {
        if (count % 50 == 0 || count == length) {
            $('#count').html(count + ' из ' + length);
        }
    }
}

function showInfo() {
    console.log(arrayToString(questionsArray));

    console.log('allQuestions' + allQuestions.length);
    console.log('questionsArray' + questionsArray.length);
    console.log('duplicates' + duplicates.length);
    console.log('warnings' + warnings.length);

    console.log('operations ', operations);

    //showArray(duplicates);
    //showArray([{question:'-', answers:['=']}]);
    showArray(warnings);
}

function clearTextValues(item) {
    item.question = textConverter(item.question);

    item.answers = item.answers.map(function (answer) {
        return textConverter(answer);
    });
}

function textConverter(text) {
    return escapeHtml(text).trim();
}

function escapeHtml(text) {
    return text
        .replace(/\s+/g, " ")
        .replace(/&#039;/g, "")
        .replace(/&lt;/g, "")
        .replace(/&gt;/g, "")
        .replace(/&quot;/g, "")
        .replace(/[<>«»"'′‘’“”″]/g, "");
}

function showArray(arr) {
    arr.forEach(function (item, i) {
        itemAppendToDom(item, i);
    });
}

function itemAppendToDom(item, i) {
    var questionNode = $('<h3></h3>').html(i + ": " + item.question);
    var node = $('<div></div>').append(questionNode);
    item.answers.forEach(function (answer) {
        node.append($('<p></p>').html(answer));
    });
    node.appendTo('body');
    return node;
}

function arrayToString(arr) {
    var dataToText = "";
    arr.forEach(function (item) {
        dataToText += "\n{ \n";
        dataToText += "question: ";
        dataToText += '"' + item.question + '",\n';
        dataToText += 'answers: [\n';
        item.answers.forEach(function (answer, index) {
            dataToText += '"' + answer + '"';
            if (index + 1 < item.answers.length) {
                dataToText += ',\n';
            }
        });
        dataToText += '\n]';
        dataToText += '\n},\n';
    });

    return dataToText;
}


function compare(text1, text2) {
    if (!isValidStrings(text1, text2)) {
        matching = 0;
    } else if (exactMatch(text1, text2)) {
        matching = 1;
    } else {
        var strings = orderStrings(text1, text2);
        var chunks = chunkStrings(strings);
        var difChunk = compareChunks(chunks);
        var matching = getPercent(chunks[0], chunks[1], difChunk.length);
    }

    return matching;
}

function exactMatch (str1, str2) {
    return str1.indexOf(str2) > -1 || str2.indexOf(str1) > -1;
}

function isValidStrings(str1, str2) {
    return str1.length / str2.length < 2;
}

function orderStrings(str1, str2) {
    var strings = [];
    if (str1.length < str2.length) {
        strings[0] = str2;
        strings[1] = str1;
    } else {
        strings[0] = str1;
        strings[1] = str2;
    }

    return strings;
}

function chunkStrings(strings) {
    var chunks = [[], []];

    if (strings[0].length > 1) {
        for (var i = 1; i < strings[0].length; i++) {
            if (strings[0][i - 1]) {
                chunks[0].push(strings[0][i - 1] + strings[0][i]);
            }
            if (strings[1][i - 1]) {
                chunks[1].push(strings[1][i - 1] + strings[1][i]);
            }
        }
    } else {
        chunks[0].push(strings[0]);
        chunks[1].push(strings[1]);
    }

    return chunks;
}

function compareChunks(chunks) {
    var maxDiff = getMaxDiff(chunks[0], chunks[1]);
    var missingChunks = [];
    var arr1 = chunks[0].slice();
    var arr2 = chunks[1].slice();
    arr1.sort();
    arr2.sort();
    arr1.forEach(function (chunk1, i) {
        var isChunkRemoved = arr2.some(function (chunk2, j) {
            operations++;
            if (chunk1 === chunk2) {
                arr2.splice(j, 1);
                //console.log(arr1,arr2);
                return true;
            }
        });
        if (!isChunkRemoved) {
            missingChunks.push(chunk1);
            //console.log(missingChunks);
        }

    });
    return arr2.concat(missingChunks);
}

function getPercent(chunks1, chunks2, difCount) {
    var chunkLength = chunks1.length + chunks2.length;
    return (chunkLength - difCount) / chunkLength;
}

function getMaxDiff(chunks1, chunks2) {
    var chunkLength = chunks1.length + chunks2.length;
    return chunkLength / 2;
}

/*
 function testCompareChunks () {

 var chunks1 = ['as', 'bs', 'er', 'bn', '&e', 'as', 'dc'];
 var chunks2 = ['as', 'bs', 'er', 'bn', '&f', 'ds'];

 var result = compareChunks (chunks1, chunks2);
 checkResult(5, result.length);


 var chunks3 = ['as', 'bs', 'er', 'bn', '&e', 'as'];
 var chunks4 = ['as', 'bs', 'er', 'bn', '&e', 'ds', 'as', 'as'];
 var result = compareChunks (chunks3, chunks4);
 checkResult(2, result.length);

 }

 function checkResult(exp, result) {
 if (result == exp) {
 console.log('passed');
 } else {
 console.log('expected '+ exp + ' - result '+ result);
 }
 }

 testCompareChunks();
 */

function getQuestions (q) {
    
    var upworktestanswer2015 = [
        {
            question: "Which of the following is true about setTimeOut()?",
            answers: [
                "The statement(s) it executes run(s) only once."
            ]
        },

        {
            question: "How can the operating system of the client machine be detected?",
            answers: [
                "Using the navigator object"
            ]
        },

        {
            question: "Which of the following prints AbBc?",
            answers: [
                "var b = a; var result = b.toUpperCase() + b + b.toUpperCase() +C[toLowerCase](); alert(result);"
            ]
        },

        {
            question: "Which of the following descriptions is true for the code below? var object0 = {}; Object.defineProperty(object0, prop0, { value : 1, enumerable:false, configurable : true }); Object.defineProperty(object0, prop1, { value : 2, enumerable:true, configurable : false }); Object.defineProperty(object0, prop2, { value : 3 }); object0.prop3 = 4;",
            answers: [
                "Object object0 contains 4 properties. Property prop1 and property prop3 are available in the for...in loop. Property prop0 and property prop3 are available to delete."
            ]
        },

        {
            question: "Performance-wise, which is the fastest way of repeating a string in JavaScript?",
            answers: [
                "String.prototype.repeat = function(count) { if (count  1) return ; var result = , pattern = this.valueOf(); while (count  0) { if (count & 1) result += pattern; count = 1, pattern += pattern; } return result; };"
            ]
        },

        {
            question: "Consider the following variable declarations: var a=adam var b=eve Which of the following would return the sentence adam and eve?",
            answers: [
                "a.concat( and , b)"
            ]
        },

        {
            question: "Which of the following code snippets will correctly split str?",
            answers: [
                "script var str = something - something_else; var substrn = str.split( - ); /script"
            ]
        },

        {
            question: "Which object can be used to ascertain the protocol of the current URL?",
            answers: [
                "location"
            ]
        },

        {
            question: "Which of the following best describes a for loop?",
            answers: [
                "for loop consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop."
            ]
        },

        {
            question: "Which of the following descriptions best describes the code below? script var variable1 = { fastFood: spaghetti, length: 10 }; Object.freeze(variable1); variable1.price = 50; delete variable1.length; /script",
            answers: [
                "Object is frozen, a property named price is not added in the variable1 object, a property named length is not deleted from this object. At the end of the code, object variable1 contains 2 properties."
            ]
        },

        {
            question: "Which of the following is not a valid HTML event?",
            answers: [
                "onblink"
            ]
        },

        {
            question: "Analyze the following code snippet which uses a Javascript Regular Expression character set. What will be the output of this code? html body script type=text/javascript var str = Is this enough?; var patt1 = new RegExp([^A-J]); var result = str.match(patt1); document.write(result); /script /body /html",
            answers: [
                "s"
            ]
        },

        {
            question: "Consider the following image definition: img id=logo src=companylogo1.gif height=12 width=12  Which of the following will change the image to companylogo2.gif when the page loads?",
            answers: [
                "document.getElementById(logo).src=companylogo2.gif"
            ]
        },

        {
            question: "What is the final value of the variable bar in the following code? var foo = 9; bar = 5; (function() { var foo = 2; bar= 1; }()) bar = bar + foo;",
            answers: [
                "10"
            ]
        },

        {
            question: "Which of the following are JavaScript unit testing tools?",
            answers: [
                "Buster.js, YUI Yeti, Jasmine"
            ]
        },

        {
            question: "Which of the following can be used for disabling the right click event in Internet Explorer?",
            answers: [
                "event.button == 2"
            ]
        },

        {
            question: "An image tag is defined as follows: img id=ERImage width=100 height=100 onmouseover=ImageChange() src=Image1.jpg The purpose of the ImageChange() function is to change the image source to Image2.jpg. Which of the following should the ImageChange() function look like?",
            answers: [
                "document.getElementById(ERImage).src=Image2.jpg"
            ]
        },

        {
            question: "Consider the following JavaScript alert: script type=text/JavaScript function message() { alert(Welcome to ExpertRating!!!) } /script Which of the following will run the function when a user opens the page?",
            answers: [
                "body onload=message()"
            ]
        },

        {
            question: "Which of the following code snippets will correctly get the length of an object?",
            answers: [
                "script var newObj = new Object(); newObj[firstname] = FirstName; newObj[lastname] = LastName; newObj[age] = 21; Object.size = function(obj) { var size = 0, key; for (key in obj) { if (obj.hasOwnProperty(key)) size++; } return size; }; var size = Object.size(newObj); /script"
            ]
        },

        {
            question: "Which of the following Array methods in JavaScript runs a function on every item in the Array and collects the result from previous calls, but in reverse?",
            answers: [
                "reduceRight()"
            ]
        },

        {
            question: "In an HTML page, the form tag is defined as follows: form onsubmit=return Validate() action=http://www.mysite.com/ The validate() function is intended to prevent the form from being submitted if the name field in the form is empty. What should the validate() function look like?",
            answers: [
                "script type=text/javascript function Validate() { if(document.forms[0].name.value == ) return false; else return true; } /script"
            ]
        },

        {
            question: "Which of the following code snippets changes an image on the page?",
            answers: [
                "var img = document.getElementById(imageId); img.src = newImage.gif;"
            ]
        },

        {
            question: "Which of the following results is returned by the JavaScript operator typeof for the keyword null?",
            answers: [
                "object"
            ]
        },

        {
            question: "What will be the final value of the variable apt? var apt=2; apt=apt2;",
            answers: [
                "8"
            ]
        },

        {
            question: "How can a JavaScript object be printed?",
            answers: [
                "console.log(obj)"
            ]
        },

        {
            question: "Which of the following is the correct syntax for using the JavaScript exec() object method?",
            answers: [
                "RegExpObject.exec(string)"
            ]
        },

        {
            question: "Having an array object var arr = new Array(), what is the best way to add a new item to the end of an array?",
            answers: [
                "arr.push(New Item)"
            ]
        },

        {
            question: "Consider the following JavaScript validation function: function ValidateField() { if(document.forms[0].txtId.value ==) {return false;} return true; } Which of the following options will call the function as soon as the user leaves the field?",
            answers: [
                "input name=txtId type=text onblur=return ValidateField()"
            ]
        },

        {
            question: "Which of following uses the with statement in JavaScript correctly?",
            answers: [
                "with (document.getElementById(blah).style) { background = black; color = blue; border = 1px solid green; }"
            ]
        },

        {
            question: "Consider the following JavaScript validation function: script type=text/JavaScript function ValidateField() { if(document.forms[0].txtId.value ==) {return false;} return true; } /script Which of the following options will call the function as soon as the user leaves the field?",
            answers: [
                "input name=txtId type=text onblur=return ValidateField()"
            ]
        },

        {
            question: "Which of the following modifiers must be set if the JavaScript lastIndex object property was used during pattern matching?",
            answers: [
                "g"
            ]
        },

        {
            question: "Consider the following image definition: img id=logo src=companylogo1.gif height=12 width=12  Which of the following will change the image to companylogo2.gif when the page loads?",
            answers: [
                "document.getElementById(logo).src=companylogo2.gif"
            ]
        },

        {
            question: "Which of the following will check whether the variable vRast exists or not?",
            answers: [
                "if (typeof vRast ==undefined) {}"
            ]
        },

        {
            question: "What would be the use of the following code? function validate(field) { var valid=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz; var ok=yes; var temp; for(var i=0;ifield.value.length;i++) { temp= + field.value.substring(i,i+1) if(valid.indexOf(temp)==-1) { ok=no; } } if(ok==no) { alert(error); field.focus(); } }",
            answers: [
                "It will force a user to enter only English alphabet character values."
            ]
        },

        {
            question: "An image tag is defined as follows: img id=ERImage width=100 height=100 onmouseover=ImageChange() src=Image1.jpg The purpose of the ImageChange() function is to change the image source to Image2.jpg. Which of the following should the ImageChange() function look like?",
            answers: [
                "document.getElementById(ERImage).src=Image2.jpg"
            ]
        },

        {
            question: "Which of the following choices will detect if variableName declares a function? script var variableName= function(){}; /script",
            answers: [
                "typeof variableName;"
            ]
        },

        {
            question: "Which of the following choices will change the source of the image to image2.gif when a user clicks on the image?",
            answers: [
                "img id=imageID src=image1.gif width=50 height=60 onmousedown=changeimg(image1.gif) onmouseup=changeimg(image2.gif)"
            ]
        },

        {
            question: "How can created cookies be deleted using JavaScript?",
            answers: [
                "Overwrite with an expiry date in the past"
            ]
        },

        {
            question: "What would be the value of ind after execution of the following code? var msg=Welcome to ExpertRating var ind= msg.substr(3, 3)",
            answers: [
                "com"
            ]
        },

        {
            question: "Are the two statements below interchangeable? object.property object[property]",
            answers: [
                "Yes"
            ]
        },

        {
            question: "Which of the following is not a valid method in generator-iterator objects in JavaScript?",
            answers: [
                "stop()"
            ]
        },

        {
            question: "Which of the following code snippets will return all HTTP headers?",
            answers: [
                "var req = new XMLHttpRequest(); req.open(GET, document.location, false); req.send(null); var headers = req.getAllResponseHeaders().toLowerCase(); alert(headers);"
            ]
        },

        {
            question: "Consider the following JavaScript alert: script type=text/JavaScript function message() { alert(Welcome to ExpertRating!!!) } /script Which of the following will run the function when a user opens the page?",
            answers: [
                "body onload=message()"
            ]
        },

        {
            question: "Which of the following is the most secure and efficient way of declaring an array?",
            answers: [
                "var a = []"
            ]
        },

        {
            question: "Which of the following Regular Expression pattern flags is not valid?",
            answers: [
                "p"
            ]
        },

        {
            question: "Which of the following built-in functions is used to access form elements using their IDs?",
            answers: [
                "getElementById(id)"
            ]
        },

        {
            question: "Which of the following statements is correct?",
            answers: [
                "Undefined object properties can be checked using the following code: if (typeof something === undefined) alert(something is undefined);"
            ]
        },

        {
            question: "Which of the following correctly uses a timer with a function named rearrange()?",
            answers: [
                "tmr=setTimeout(rearrange (),1)"
            ]
        },

        {
            question: "Which of the following can be used to escape the  character?",
            answers: [
                "\\"
            ]
        },

        {
            question: "Which event can be used to validate the value in a field as soon as the user moves out of the field by pressing the tab key?",
            answers: [
                "onblur"
            ]
        },

        {
            question: "When setting cookies with JavaScript, what will happen to the cookies.txt data if the file exceeds the maximum size?",
            answers: [
                "The file is truncated to the maximum length."
            ]
        },

        {
            question: "Which of the following are not global methods and properties in E4X?",
            answers: [
                "setName() and setNamespace()"
            ]
        },

        {
            question: "Which of the following will change the color of a paragraphs text to blue when a user hovers over it, and reset it back to black when the user hovers out?",
            answers: [
                "p onmouseover=style.color=blue onmouseout=style.color=black The text of the paragraph../p"
            ]
        },

        {
            question: "What is the purpose of while(1) in the following JSON response? while(1);[[u,[[smsSentFlag,false],[hideInvitations,false],[remindOnRespondedEventsOnly,true],[hideInvitations_remindOnRespondedEventsOnly,false_true],[Calendar ID stripped for privacy,false],[smsVerifiedFlag,true]]]]",
            answers: [
                "It makes it difficult for a third-party to insert the JSON response into an HTML document with a script tag."
            ]
        },

        {
            question: "Consider the three variables: someText = JavaScript1.2; pattern = /(\\w+)(\d)\.(\d)/i; outCome = pattern.exec(someText); What does outCome[0] contain?",
            answers: [
                "JavaScript1.2"
            ]
        },

        {
            question: "Which of the following choices will turn a string into a JavaScript function call (case with objects) of the following code snippet? script window.foo = { bar: { baz: function() { alert(Hello!); } } }; /script",
            answers: [
                "window[foo][bar][baz]();"
            ]
        },

        {
            question: "Which of the following determines whether cookies are enabled in a browser or not?",
            answers: [
                "(navigator.cookieEnabled)? true : false"
            ]
        },

        {
            question: "Which of the following options can be used for adding direct support for XML to JavaScript?",
            answers: [
                "E4X"
            ]
        },

        {
            question: "Which of the following will detect which DOM element has the focus?",
            answers: [
                "document.activeElement"
            ]
        },

        {
            question: "Which of the following will randomly choose an element from an array named myStuff, given that the number of elements changes dynamically?",
            answers: [
                "randomElement = myStuff[Math.floor(Math.random() * myStuff.length)];"
            ]
        },

        {
            question: "How can global variables be declared in JavaScript?",
            answers: [
                "Declare the variable between the script tags, and outside a function to make the variable global"
            ]
        },

        {
            question: "Which of the following objects in JavaScript contains the collection called plugins?",
            answers: [
                "Navigator"
            ]
        },

        {
            question: "What will be output of the following code? function testGenerator() { yield first; document.write(step1); yield second; document.write(step2); yield third; document.write(step3); } var g = testGenerator(); document.write(g.next()); document.write(g.next());",
            answers: [
                "firststep1second"
            ]
        },

        {
            question: "Which of the following methods will copy data to the Clipboard?",
            answers: [
                "execCommand(Copy)"
            ]
        },

        {
            question: "Which of the following code snippets trims whitespace from the beginning and end of the given string str?",
            answers: [
                "str.replace(/^\\s+|\s+$/g, );"
            ]
        },

        {
            question: "What is the difference between call() and apply()?",
            answers: [
                "The call() function accepts an argument list of a function, while the apply() function accepts a single array of arguments."
            ]
        },

        {
            question: "Which of the following code snippets is more efficient, and why? script language=JavaScript for(i=0;idocument.images.length;i++) document.images[i].src=blank.gif; /script script language=JavaScript var theimages = document.images; for(i=0;itheimages.length;i++) theimages[i].src=blank.gif /script",
            answers: [
                "The second code is more efficient as it employs object caching."
            ]
        },

        {
            question: "What is the meaning of obfuscation in JavaScript?",
            answers: [
                "Making code unreadable using advanced algorithms."
            ]
        },

        {
            question: "Which of the following JavaScript Regular Expression modifiers finds one or more occurrences of a specific character in a string?",
            answers: [
                "+"
            ]
        },

        {
            question: "Which of the following is not a valid JavaScript operator?",
            answers: [
                "^"
            ]
        },

        {
            question: "Which of the following code snippets returns [object object]?",
            answers: [
                "script var o = new Object(); o.toString(); /script"
            ]
        },

        {
            question: "Which of the following can be used to invoke an iframe from a parent page?",
            answers: [
                "window.frames"
            ]
        },

        {
            question: "Select the following function that shuffles an array?",
            answers: [
                "function shuffle(array) { var tmp, current, top = array.length; if(top) while(--top) { current = Math.floor(Math.random() * (top + 1)); tmp = array[current]; array[current] = array[top]; array[top] = tmp; } return array; }"
            ]
        },

        {
            question: "Which of the following code snippets removes objects from an associative array?",
            answers: [
                "delete array[propertyName];"
            ]
        },

        {
            question: "What is the error in the statement: var charConvert = toCharCode(x);?",
            answers: [
                "toCharCode() is a non-existent method."
            ]
        },

        {
            question: "What value would JavaScript assign to an uninitialized variable?",
            answers: [
                "undefined"
            ]
        },

        {
            question: "What does the following JavaScript code do? contains(a, obj) { for (var i = 0; i  a.length; i++) { if (a[i] === obj) { return true; } } return false; }",
            answers: [
                "It checks if an array contains obj."
            ]
        },

        {
            question: "If an image is placed styled with z-index=-1 and a text paragraph is overlapped with it, which one will be displayed on top?",
            answers: [
                "The paragraph."
            ]
        },

        {
            question: "Which of the following code snippets gets an images dimensions (height & width) correctly?",
            answers: [
                "var img = document.getElementById(imageid); var width = img.clientWidth; var height = img.clientHeight;"
            ]
        },

        {
            question: "Which of the following are correct values of variableC, and why? script variableA = [6,8]; variableB =[7,9]; variableC = variableA + variableB; /script",
            answers: [
                "6, 87 and 9. The + operator is not defined for arrays, and it concatenates strings, so it converts the arrays to strings."
            ]
        },

        {
            question: "The following are the samples for getting a selected value in the from a dropdown list: select id=ddlViewBy option value=1test1/option option value=2 selected=selectedtest2/option option value=3test3/option /select Which code block is correct?",
            answers: [
                "var e = document.getElementById(ddlViewBy); var strUser = e.options[e.selectedIndex].value;"
            ]
        },

        {
            question: "var profits=2489.8237 Which of the following code(s) produces the following output? output : 2489.824",
            answers: [
                "profits.toFixed(3)"
            ]
        },

        {
            question: "A form contains two fields named id1 and id2. How can you copy the value of the id2 field to id1?",
            answers: [
                "document.forms[0].id1.value=document.forms[0].id2.value"
            ]
        },

        {
            question: "Which of the following code snippets will toggle a div elements background color? button id=toggleToggle/button div id=terdChange Background Color./div",
            answers: [
                "script var button = document.getElementById(toggle); button.onclick = function() { terd.style.backgroundColor = terd.style.backgroundColor == blue ? red : blue; }; /script"
            ]
        },

        {
            question: "How can the users previously navigated page be determined using JavaScript?",
            answers: [
                "Using the window object"
            ]
        },

        {
            question: "Which of the following is not a valid method for looping an array?",
            answers: [
                "var a= [1,2]; a.loop( function(item) { alert(item); })"
            ]
        },

        {
            question: "Which of the following correctly sets a class for an element?",
            answers: [
                "document.getElementById(elementId).setAttribute(className, Someclass);"
            ]
        },

        {
            question: "An HTML form contains 10 checkboxes all named chkItems. Which JavaScript function can be used for checking all the checkboxes together?",
            answers: [
                "function CheckAll() { for (z = 0; z  document.forms[0].chkItems.length; z++) { document.forms[0].chkItems[z].checked=true } }"
            ]
        },

        {
            question: "Which of the following is a JavaScript comment?",
            answers: [
                "// comment"
            ]
        },

        {
            question: "var foo = Global; function fun() { log( foo ); var foo = Local; log( foo ); } fun(); What the output of the above to log()?",
            answers: [
                "undefined Local"
            ]
        },

        {
            question: "console.log( typeof [1,2] ) will print out:",
            answers: [
                "object"
            ]
        },

        {
            question: "JavaScript is ...",
            answers: [
                "object based"
            ]
        },

        {
            question: "Every object is linked to a _________ object from which it can inherit properties.",
            answers: [
                "prototype"
            ]
        },

        {
            question: "What is the value of x? var x = typeof NaN;",
            answers: [
                "number"
            ]
        },

        {
            question: "What will be the value of result? function foo(bar) { return bar ? bar == foo : foo(foo); } var result = foo();",
            answers: [
                "true"
            ]
        },

        {
            question: "What values will the output function be called with, in the following code: var foo; var bar = { name: baz, email: fiz@example.com, sendmail: function() { } }; for (foo in bar) { output(foo); }",
            answers: [
                "name, email, sendmail"
            ]
        },

        {
            question: "Consider: var x = [a, b, c]; Which line of code will remove the first element of the array, resulting in x being equal to [b, c]?",
            answers: [
                "x.splice(0, 1);"
            ]
        },

        {
            question: "What is the value of x? var z = [typeof z, typeof y][0]; var x = typeof typeof z;",
            answers: [
                "string"
            ]
        },

        {
            question: "var x = {}; var foo = function () { this.hello = Hi; return this; }; x.bar = foo; What is the value of the following code: x.bar().bar().hello;",
            answers: [
                "Hi"
            ]
        },

        {
            question: "Which of the following assigned values of x will cause (x == x) to return false?",
            answers: [
                "All of the answers"
            ]
        },

        {
            question: "What would this code print out? if (new Boolean(false)) console.log(True); else console.log(False);",
            answers: [
                "True"
            ]
        },

        {
            question: "Which two values are logged by the following code? var x = 5; (function () { console.log(x); var x = 10; console.log(x); }());",
            answers: [
                "undefined 10"
            ]
        },

        {
            question: "Infinity * null will return :",
            answers: [
                "NaN"
            ]
        },

        {
            question: "Assuming alert displays a string of its argument: var a = 10; function example(){ alert(a); var a = 5; } example(); What will be shown if the preceding code is executed?",
            answers: [
                "undefined"
            ]
        },

        {
            question: "What is the result?  ? a : b",
            answers: [
                "b"
            ]
        },

        {
            question: "What is the value of x? var x = typeof null;",
            answers: [
                "object"
            ]
        },

        {
            question: "The length property of an Array object is always:",
            answers: [
                "equal to the highest index of that object + 1"
            ]
        },

        {
            question: "var data = [1, 2, 3, 4, 5, 6]; data.shift(); What does data look like?",
            answers: [
                "[2, 3, 4, 5, 6]"
            ]
        },

        {
            question: "Which fact is true about the keyword default?",
            answers: [
                "It catches any case clauses not caught by case statements within a switch statement"
            ]
        },

        {
            question: "Which String prototype method is capable of removing a character from a string?",
            answers: [
                "replace()"
            ]
        },

        {
            question: "What is the value of x after the following statement? var x = 1 == 1;",
            answers: [
                "true"
            ]
        },

        {
            question: "What is the result of the following code snippet? var small = BIG; var BIG = small; console.log(/small/.test(BIG)); console.log(/BIG/.test(small));",
            answers: [
                "true true"
            ]
        },

        {
            question: "What is the result of the following statement: typeof x;",
            answers: [
                "string"
            ]
        },

        {
            question: "Is there a value type for individual string characters?",
            answers: [
                "No, there is only type string for characters."
            ]
        },

        {
            question: "Given a variable named stringVar with a string value, what does the following do? stringVar.toUpperCase();",
            answers: [
                "Return a copy of stringVar with all letters in uppercase"
            ]
        },

        {
            question: "Which is an example of (only) an object literal in Javascript?",
            answers: [
                "var obj = { prop1: property 1, prop2: property 2 };"
            ]
        },

        {
            question: "The loop isnt working. Whats the problem? code var foos = [a, b, c , d, e]; var bars = [x, y, z]; for (var i = 0; i  foos.length; i++) { var foo = foos[i]; for (var i = 0; i  bars.length; i++) { var bar = bars[i]; /* some code using `bar` */ } } /code",
            answers: [

            ]
        },

        {
            question: "Functions in javascript are always ..",
            answers: [
                "objects"
            ]
        },

        {
            question: "How do you read the first character in a string?",
            answers: [
                "data.charAt(0);"
            ]
        },

        {
            question: "Which of the following have special meanings within the language syntax?",
            answers: [
                "Reserved words"
            ]
        },

        {
            question: "What is the result? 0 ==",
            answers: [
                "true"
            ]
        },

        {
            question: "Primitive types are passed by :",
            answers: [
                "Value"
            ]
        },

        {
            question: "To what type are values converted internally when evaluating a conditional statement?",
            answers: [
                "boolean"
            ]
        },

        {
            question: "var x = foo; x = !!x; What is the value of x?",
            answers: [
                "true"
            ]
        },

        {
            question: "What will calling the below test function log to console? function test(){ console.log(a); var a = hello; console.log(a); }",
            answers: [
                "undefined, hello"
            ]
        },

        {
            question: "How do you assign an anonymous function to a variable?",
            answers: [
                "var anon = function() { };"
            ]
        },

        {
            question: "What is the value of x? var x = 2 + 2;",
            answers: [
                "22"
            ]
        },

        {
            question: "Which of these is not a JavaScript statement?",
            answers: [
                "None, these are all valid statements."
            ]
        },

        {
            question: "Which of the following variable types does not exist in JavaScript?",
            answers: [
                "double"
            ]
        },

        {
            question: "Which of the following is a way to add a new value to the end of an array?",
            answers: [
                "arr[arr.length] = value;"
            ]
        },

        {
            question: "What is the RegExp object constructor used for?",
            answers: [
                "Match text against regular expressions"
            ]
        },

        {
            question: "What does 2 + 3 + 4 evaluate to?",
            answers: [
                "234"
            ]
        },

        {
            question: "When an array index goes out of bounds, what is returned?",
            answers: [
                "undefined"
            ]
        },

        {
            question: "Which is the correct syntax to write array literals in JavaScript?",
            answers: [
                "var x = [blank,blank,blank];"
            ]
        },

        {
            question: "The exploit property:",
            answers: [
                "Does not exist in JavaScript"
            ]
        },

        {
            question: "split() is a method of which constructors prototype?",
            answers: [
                "String.prototype"
            ]
        },

        {
            question: "Which of the following orders can be performed with the Array prototype sort() callback?",
            answers: [
                "All of these"
            ]
        },

        {
            question: "var a = {1:one,2:two,3:three}; var b = Object.keys(a); Whats the value of b?",
            answers: [
                "An array with all of the distinct keys from the obj a"
            ]
        },

        {
            question: "How do you write a conditional statement that will *only* execute the contained code if variable x has a value 5 of type *number*?",
            answers: [
                "if (x === 5) { ... }"
            ]
        },

        {
            question: "What is the value of c? var a = function(){ this.b = 1; } var b = function(){ var b = new a().b; return 5 + b; } var c = b();",
            answers: [
                "6"
            ]
        },

        {
            question: "How do you find the number with the highest value of x and y?",
            answers: [
                "Math.max(x, y)"
            ]
        },

        {
            question: "What is the value of x? var a = false; var x = a ? A : B;",
            answers: [
                "B"
            ]
        },

        {
            question: "Which of the following operators can assign a value to a variable?",
            answers: [
                "All of these"
            ]
        },

        {
            question: "What is the value of x? var x = 1+2+3;",
            answers: [
                "123"
            ]
        },

        {
            question: "Which of the following is the equivalent of the following. if (a) { x = b; } else { x = c; }",
            answers: [
                "x = a ? b : c;"
            ]
        },

        {
            question: "What is the value of x? var obj = {}; obj[function] = 123; x = obj.function;",
            answers: [
                "123"
            ]
        },

        {
            question: "null === undefined",
            answers: [
                "false"
            ]
        },

        {
            question: "Which event fires whenever a control loses focus?",
            answers: [
                "onblur"
            ]
        },

        {
            question: "Which of these is not a logical operator?",
            answers: [
                "&"
            ]
        },

        {
            question: "Which of these operators compares two variables by value AND type?",
            answers: [
                "==="
            ]
        },

        {
            question: "Which message does the following log to the console? bar(); function bar() { console.log(bar); }",
            answers: [
                "bar"
            ]
        },

        {
            question: "Which of the following invokes a user-defined object constructor function?",
            answers: [
                "var x = new myConstructor();"
            ]
        },

        {
            question: "The function call Math.ceil(3.5) returns:",
            answers: [
                "4"
            ]
        },

        {
            question: "In JavaScript, to call a function directly, you use:",
            answers: [
                "function_expression ( arguments_if_any )"
            ]
        },

        {
            question: "How do you declare a function?",
            answers: [
                "function doSomething() {}"
            ]
        },

        {
            question: "How would one declare a string variable?",
            answers: [
                "Any of these"
            ]
        },

        {
            question: "What is the value of a : var a = 3; var b = 2; var c = a; var a=b=c=1;",
            answers: [
                "1"
            ]
        },

        {
            question: "Properties of objects may be accessed using...",
            answers: [
                "the dot notation in JavaScript."
            ]
        },

        {
            question: "What is the value of the array myArr after execution of the following code: var myArr = [1,2,3,4,5]; myArr.shift();",
            answers: [
                "[2,3,4,5]"
            ]
        },

        {
            question: "What does isNaN() do?",
            answers: [
                "Only returns true if the argument is not a number"
            ]
        },

        {
            question: "What keyword is used to define the alternative path to take in a conditional statement?",
            answers: [
                "else"
            ]
        },

        {
            question: "What is the difference between a while loop and a do...while loop?",
            answers: [
                "The code inside a do...while loop will always be executed at least once, even if the condition is false."
            ]
        },

        {
            question: "What is the difference between == and === ?",
            answers: [
                "The == operator converts both operands to the same type, whereas === returns false for different types."
            ]
        },

        {
            question: "Which of these could be a correct way to create an instance of Person?",
            answers: [
                "var john = new Person(John, Doe, 50, blue);"
            ]
        },

        {
            question: "(function( ) { var x = foo( ); function foo( ){ return foobar }; return x; })( ); What does this function return?",
            answers: [
                "foobar"
            ]
        },

        {
            question: "What operator is used for string concatenation?",
            answers: [
                "+"
            ]
        },

        {
            question: "Which is the correct way to write a JavaScript array?",
            answers: [
                "var names = [Tim,Kim,Jim];"
            ]
        },

        {
            question: "USERNAME and userName",
            answers: [
                "Represent the name of different variables"
            ]
        },

        {
            question: "Which of these descriptors applies to JavaScript?",
            answers: [
                "Loosely typed, values of any type can be assigned to any variable."
            ]
        },

        {
            question: "Which of the following is an Error object constructor?",
            answers: [
                "All of these"
            ]
        },

        {
            question: "How do you check what the type of a value in variable x is?",
            answers: [
                "typeof(x);"
            ]
        },

        {
            question: "Which of the following is a JavaScript comment?",
            answers: [
                "// comment"
            ]
        },

        {
            question: "What is the value of the following expression: 8 % 3",
            answers: [
                "2"
            ]
        },

        {
            question: "var a = 011; parseInt(a); will return:",
            answers: [
                "11"
            ]
        },

        {
            question: "var a = 011; parseInt(a); will return:",
            answers: [
                "11"
            ]
        },

        {
            question: "How does a while loop start?",
            answers: [
                "while (i=10)"
            ]
        },

        {
            question: "The `else` statement is ___",
            answers: [
                "used together with the `if` statement to specify the code that should execute when the `if` condition is false."
            ]
        },

        {
            question: "Given the following code, what does myFunc() return? var foo = foo; var bar = bar; function myFunc() { return foo + bar; }",
            answers: [
                "foobar"
            ]
        },

        {
            question: "String literals are written using:",
            answers: [
                "Either double quotes or single quotes: example and example"
            ]
        },

        {
            question: "How is an object property referenced?",
            answers: [
                "myObj.foo"
            ]
        },

        {
            question: "Which symbol is not used in logical operations?",
            answers: [
                "%"
            ]
        },

        {
            question: "Which of these will throw a SyntaxError?",
            answers: [
                "if (x ==== 1) { }"
            ]
        },

        {
            question: "JavaScript supports dynamic typing, you can assign different types of values to the same variable.",
            answers: [
                "true"
            ]
        },

        {
            question: "How do you round the number 7.25, to the nearest whole number?",
            answers: [
                "Math.round(7.25)"
            ]
        },

        {
            question: "How to return the first value of this array? var myArr = [1, 2, 3, 4, 5]; var myVal = ...",
            answers: [
                "myArr[0];"
            ]
        },

        {
            question: "How do you define a function called fName?",
            answers: [
                "function fName() { }"
            ]
        },

        {
            question: "Which of the following is not a reserved word?",
            answers: [
                "program"
            ]
        },

        {
            question: "Which of the following asserts that the variables `A`, `B`, and `C` have unequal values?",
            answers: [
                "A !== B && B !== C && A !== C"
            ]
        },

        {
            question: "What does the break statement do?",
            answers: [
                "Aborts the current loop or switch statement."
            ]
        },

        {
            question: "Which of the following is a valid function definition?",
            answers: [
                "function myFunc(arg1,arg2) { }"
            ]
        },

        {
            question: "Which of the following declares a variable with a value of string type?",
            answers: [
                "var myVar = This is a string;"
            ]
        },

        {
            question: "Are variable identifiers case-sensitive?",
            answers: [
                "Yes"
            ]
        },

        {
            question: "What is the correct JavaScript syntax to insert a comment that can span multiple lines?",
            answers: [
                "/* This comment has more than one line */"
            ]
        },

        {
            question: "The if statement is used to:",
            answers: [
                "Deal with logic that should execute only when a condition is true"
            ]
        },

        {
            question: "Which keyboard character represents the assignment operator?",
            answers: [
                "="
            ]
        },

        {
            question: "String concatenation...",
            answers: [
                "Is the combination of two or more text Strings"
            ]
        },

        {
            question: "Properties of a RegExp object include:",
            answers: [
                "All of these"
            ]
        },

        {
            question: "You use the Math.pow() method to:",
            answers: [
                "Return a number raised to the power of a second number"
            ]
        },

        {
            question: "What is the value of (dog.length)?",
            answers: [
                "3"
            ]
        },

        {
            question: "Which is NOT a way to create a loop in javascript?",
            answers: [
                "repeat (...) { }"
            ]
        },

        {
            question: "What is the value of x? var a = A; var x = a.concat(B);",
            answers: [
                "AB"
            ]
        },

        {
            question: "Which statement loops through an array?",
            answers: [
                "for (var i=0; i  myArray.length; i++)"
            ]
        },

        {
            question: "The var statement is used to:",
            answers: [
                "Create a new local variable"
            ]
        },

        {
            question: "function foo(){ var tmp = one_two_three_four_five; return tmp.replace(/_/g, +); } What does foo() return?",
            answers: [
                "one+two+three+four+five"
            ]
        },

        {
            question: "A for loop is written as such: for (first property; second property; third property) {...} What does the third property represent?",
            answers: [
                "An action to take at the end of the current loop cycle"
            ]
        },

        {
            question: "Where do you use the break statement?",
            answers: [
                "To terminate a switch statement, loop, or labeled block."
            ]
        },

        {
            question: "In an array object, what is the key of the first value?",
            answers: [
                "0"
            ]
        },

        {
            question: "Which of the following primitive values exist in JavaScript?",
            answers: [
                "All of these"
            ]
        },

        {
            question: "What keyword is used to begin a conditional statement?",
            answers: [
                "if"
            ]
        },

        {
            question: "What character ends a javascript statement?",
            answers: [
                "A semicolon ;."
            ]
        },

        {
            question: "Which has the correct syntax of a ternary operation?",
            answers: [
                "var x = y === true ? true : false;"
            ]
        },

        {
            question: "JavaScript is an implementation of the ______ language standard.",
            answers: [
                "ECMAScript"
            ]
        },

        {
            question: "If a function doesnt explicitly use the return operator, what will the return value be when the function is invoked?",
            answers: [
                "undefined"
            ]
        },

        {
            question: "What is result of the following expression: var a = test; console.log(!!a);",
            answers: [
                "true"
            ]
        },

        {
            question: "What is the name of the String prototype that appends the given string to the base string and returns the new string?",
            answers: [
                "x.concat(foo)"
            ]
        },

        {
            question: "Which of these is a correct method to create a new array?",
            answers: [
                "var myArray = [];"
            ]
        },

        {
            question: "var data = [A, B, C, D]; data.unshift(X); data.push(Y); What does data look like?",
            answers: [
                "[X, A, B, C, D, Y]"
            ]
        },

        {
            question: "What character combination is used to create a single line comment?",
            answers: [
                "//"
            ]
        },

        {
            question: "Which of the following is the syntax for an object literal (with no properties)?",
            answers: [
                "{};"
            ]
        },

        {
            question: "How can you concatenate multiple strings?",
            answers: [
                "Both of these"
            ]
        },

        {
            question: "How do you assign object properties?",
            answers: [
                "obj[age] = 25 OR obj.age = 25"
            ]
        },

        {
            question: "Consider this code: var x = [Hello]; What value will x[1] return?",
            answers: [
                "undefined"
            ]
        },

        {
            question: "The _______ operator returns a string that identifies the type of its operand.",
            answers: [
                "typeof"
            ]
        },

        {
            question: "When writing an object literal, what is used to separate the properties from each other?",
            answers: [
                "a comma ,"
            ]
        },

        {
            question: "What are curly braces ({ and }) used for?",
            answers: [
                "Block declarations and object literals"
            ]
        },

        {
            question: "What is the value of x? function foo(y) { var z = 10; z = 7; }; var x = foo(bar);",
            answers: [
                "undefined"
            ]
        },

        {
            question: "How do you create an object in JavaScript?",
            answers: [
                "All of these work."
            ]
        },

        {
            question: "Which of the following is not a method in the JSON object according to the ECMAScript specification?",
            answers: [
                "JSON.fromString"
            ]
        },

        {
            question: "How can you get the number of characters in a string ?",
            answers: [
                "1234567.length"
            ]
        },

        {
            question: "What is the result of the following statement: 0 == ;",
            answers: [
                "true"
            ]
        },

        {
            question: "What does null, undefined, string, 20, true and false have in common?",
            answers: [
                "they are primitive values"
            ]
        },

        {
            question: "Given the following code, what is the value of x? var x = [foo, bar]; x.length = 1;",
            answers: [
                "[foo]"
            ]
        },

        {
            question: "Math.random() returns..",
            answers: [
                "a random number between 0 and 1"
            ]
        },

        {
            question: "What is the result of the following expression? ({foo: true}).foo;",
            answers: [
                "true"
            ]
        },

        {
            question: "In the loop, for (first clause; second clause; third clause) { statements; } What does the second clause represent?",
            answers: [
                "A condition to check at the beginning of each loop cycle"
            ]
        },

        {
            question: "What is the value of `x` after the following? var x = hello; (function() { x = goodbye; }());",
            answers: [
                "goodbye"
            ]
        },

        {
            question: "Which is not a primitive data type in JavaScript?",
            answers: [
                "character"
            ]
        },

        {
            question: "What will invoking `foo` return? function foo() { var x = 10; x = 7; };",
            answers: [
                "undefined"
            ]
        },

        {
            question: "What is the value of x? var str = what is this; var x = str.search(is);",
            answers: [
                "5"
            ]
        },

        {
            question: "The this keyword refers to ...",
            answers: [
                "current execution context (could be any value)."
            ]
        },

        {
            question: "& Operator is _____",
            answers: [
                "a bitwise operator"
            ]
        },

        {
            question: "What character combination is used to alter the order of operations by grouping expressions?",
            answers: [
                "( )"
            ]
        },

        {
            question: "var x = Math.ceil(10.126); What is the value of x?",
            answers: [
                "11"
            ]
        },

        {
            question: "What is the type of `null`, according to the `typeof` operator?",
            answers: [
                "object"
            ]
        },

        {
            question: "function b(x, y, a) { arguments[2] = 10; alert(a); } b(1, 2, 3); What is alerted?",
            answers: [
                "10"
            ]
        },

        {
            question: "What is the difference between using call() and apply() to invoke a function with multiple arguments?",
            answers: [
                "apply() is identical to call(), except apply() requires an array as the second parameter"
            ]
        },

        {
            question: "var y = 3, x = y++; What is the value of x?",
            answers: [
                "3"
            ]
        },

        {
            question: "Which of the following types does NOT exist in javascript?",
            answers: [
                "integer"
            ]
        },

        {
            question: "What is the end value of myAddedVar with the following code: var myVar = 5; var myAddedVar = myVar + 10;",
            answers: [
                "510"
            ]
        },

        {
            question: "What does this line do? variable++;",
            answers: [
                "Increments the value of variable but returns the previous value"
            ]
        },

        {
            question: "var a = new Boolean(false); What is (typeof a)?",
            answers: [
                "object"
            ]
        },

        {
            question: "What is the value of x? var x = typeof new String(abc);",
            answers: [
                "object"
            ]
        },

        {
            question: "Which of these will invoke a function?",
            answers: [
                "function.apply(...)"
            ]
        },

        {
            question: "Does NaN equal itself?",
            answers: [
                "No, NaN does not equal itself (== comparison would return false)."
            ]
        },

        {
            question: "What will happen in the console after executing this code? if (foo) { console.log(foo === false); console.log(foo === true); }",
            answers: [
                "false false"
            ]
        },

        {
            question: "What is the value of the function log? var _ = _; log(parseInt(_));",
            answers: [
                "NaN"
            ]
        },

        {
            question: "Which of these is not a built-in object constructor?",
            answers: [
                "Time"
            ]
        },

        {
            question: "Given the following code: var myVar = 5; var myAddedVar = myVar + 10; What is the value of (myAddedVar.constructor === Number)?",
            answers: [
                "false"
            ]
        },

        {
            question: "How would you iterate over the following object? var my_data = {a: Ape, b: Banana, c: Citronella};",
            answers: [
                "for (var key in my_data) {}"
            ]
        },

        {
            question: "What is the value of x after the following code is executed? var x = 0; x = x++;",
            answers: [
                "0"
            ]
        },

        {
            question: "You use the Math.tan( ) method to:",
            answers: [
                "Return the tangent of an angle (in radians)"
            ]
        },

        {
            question: "A javascript variable prefixed with a $ is:",
            answers: [
                "valid javascript syntax as any other character"
            ]
        },

        {
            question: "Math.min()  Math.max(); ...will return:",
            answers: [
                "false"
            ]
        },

        {
            question: "Math.min()  Math.max(); will return",
            answers: [
                "false"
            ]
        },

        {
            question: "What does the following expression return? 1 + 5 +  bottles of milk;",
            answers: [
                "6 bottles of milk"
            ]
        },

        {
            question: "Which Object method takes a `propertyName` parameter and returns `true` if the object contains an uninherited property with that key?",
            answers: [
                "obj.hasOwnProperty(propertyName);"
            ]
        },

        {
            question: "var foo = Global; function fun() { log( foo ); var foo = Local; log( foo ); } fun(); What the output of the above to log()?",
            answers: [
                "undefined Local"
            ]
        },

        {
            question: "Which of the following is NOT a valid way to write a loop that will iterate over the values in the array in variable myArray?",
            answers: [
                "None of these, they are all valid"
            ]
        },

        {
            question: "What is the value of c? var A = function () { this.b = 1; } A.prototype.b = 2; var c = new A().b;",
            answers: [
                "1"
            ]
        },

        {
            question: "What will be the value of x? function A() { this.do = function () { return foo; }; } A.prototype = { do: function () { return bar; } }; var x = new A().do();",
            answers: [
                "foo"
            ]
        },

        {
            question: "What is the right way to combine two arrays into a new array? var a = [a, b, c]; var b = [d, e, f];",
            answers: [
                "var c = a.concat(b);"
            ]
        },

        {
            question: "What is the output? var one; var two = null; console.log(one == two, one === two);",
            answers: [
                "true false"
            ]
        },

        {
            question: "Which are the different ways to affect the this reference in a function?",
            answers: [
                "Invoking a function with the new keyword, invoking through the .call() method, invoking through the .apply() method."
            ]
        },

        {
            question: "What is the difference between the two declaration methods below? var functionOne = function() { /* some code */ } function functionTwo() { /* some code */ }",
            answers: [

            ]
        },

        {
            question: "How does JavaScript interpret numeric constants outside of strict mode?",
            answers: [
                "As octal if they are preceded by a zero, and as hexadecimal if they are preceded by a zero and x"
            ]
        },

        {
            question: "When reserved words are used as keys in object literals they must be ______?",
            answers: [
                "quoted"
            ]
        },

        {
            question: "Mathematical expression, 10 - (12+5).toString(), evaluates to what?",
            answers: [
                "-7"
            ]
        },

        {
            question: "What does the following return? Number(null);",
            answers: [
                "0"
            ]
        },

        {
            question: "What is the value of x.length after running this code? x = [foo]; x.quux = Hello; x[1] = bar;",
            answers: [
                "2"
            ]
        },

        {
            question: "What is the value of x after the code below is executed? var x = ; function foo() { x += foo ; } var bar = function() { x += bar ; }; foo(); var quux = bar = foo; quux();",
            answers: [
                "foo foo"
            ]
        },

        {
            question: "What will be in console after executing this code: console.log(1 + 1 - 1);",
            answers: [
                "10"
            ]
        },

        {
            question: "The expression (typeof NaN === number) evaluates to:",
            answers: [
                "true"
            ]
        },

        {
            question: "What will: typeof typeof(null) return?",
            answers: [
                "string"
            ]
        },

        {
            question: "What will the expression a === b return after the following? var a = { foo: bar }; var b = { foo: bar };",
            answers: [
                "false"
            ]
        },

        {
            question: "How can you remove an element from an array and replace it with a new one ?",
            answers: [
                "array.splice(...)"
            ]
        },

        {
            question: "What will we see in the console after the following code run: var a = Bolt; function f() { if (!a) { var a = Nut; } console.log(a); } f(); console.log(a);",
            answers: [
                "Nut then Bolt"
            ]
        },

        {
            question: "true + true will return :",
            answers: [
                "2"
            ]
        },

        {
            question: "What is the result of: function foo() { output( biz  + bar() ); } bar(); var bar = function() { return baz; }",
            answers: [
                "TypeError: Undefined is not a function"
            ]
        },

        {
            question: "What is the value of x? var x = 10/0;",
            answers: [
                "Infinity"
            ]
        },

        {
            question: "What will be the result of this expression: void 0",
            answers: [
                "undefined"
            ]
        },

        {
            question: "What does Math.random() do?",
            answers: [
                "Returns a random number from and including 0 to less than 1."
            ]
        },

        {
            question: "In the following code: function test() { var foo = bar = 5; } test();",
            answers: [
                "Variable foo is a local variable. But bar is a global variable."
            ]
        },

        {
            question: "What are the values of x and y after the invocation of `foo` in following? var x = I am global x; var y = I am global y; function foo() { var y = x = Hello from foo; } foo();",
            answers: [
                "x = Hello from foo; y = I am global y;"
            ]
        },

        {
            question: "var q = null; q++; What is q?",
            answers: [
                "1"
            ]
        },

        {
            question: "Given the following code, what will myFunction(123, false, test) return? function myFunction(param) { return arguments[1] || param; }",
            answers: [
                "123"
            ]
        },

        {
            question: "After the following code: var a = function(){ this.b = 1; this.deleteMe = function(){ delete this; } }; var c = new a(); c.deleteMe(); What is the value of (String(c))?",
            answers: [
                "[object Object]"
            ]
        },

        {
            question: "Which operator has highest precedence?",
            answers: [
                "*"
            ]
        },

        {
            question: "function Question() { this.answered = false; } Question.prototype.rightAnswer = 5; console.log( new Question().rightAnswer, Question.rightAnswer ); What gets printed to the console?",
            answers: [
                "5 undefined"
            ]
        },

        {
            question: "What will the console log when running this code? Function.prototype.a = 1; var a = new Function(); a.prototype.a = 2; var c = new a(); console.log(a.a , c.a);",
            answers: [
                "1 2"
            ]
        },

        {
            question: "Evaluate: undefined + 2",
            answers: [
                "NaN"
            ]
        },

        {
            question: "Evaluate: new Boolean(new Boolean(false)).valueOf()",
            answers: [
                "true"
            ]
        },

        {
            question: "An (inner) function enjoys access to the parameters and variables of all the functions it is nested in. This is called:",
            answers: [
                "Lexical scoping"
            ]
        },

        {
            question: "Object.keys(x)",
            answers: [
                "returns the enumerable properties of x as an array of strings."
            ]
        },

        {
            question: "bar.split().length returns:",
            answers: [
                "1"
            ]
        },

        {
            question: "Math.Pi returns the mathematical constant of Pi. What standard JavaScript method would truncate Math.Pi to 3.14 ?",
            answers: [
                "Math.Pi.toFixed(2)"
            ]
        },

        {
            question: "function foo(){ var tmp = one_two_three_four_five; return tmp.replace(_, +); } What does foo() return?",
            answers: [
                "one+two_three_four_five"
            ]
        },

        {
            question: "var x = { foo: A }; x.constructor.prototype.foo = B; var y = {}; console.log(x.foo); console.log(y.foo); Which two values will be logged?",
            answers: [
                "A B"
            ]
        },

        {
            question: "Evaluate the following expression: ~-(2 + 2)",
            answers: [
                "21"
            ]
        },

        {
            question: "Which of these will create a copy of an array such that changes to the old array will not be reflected in the new array?",
            answers: [
                "var newArray = oldArray.slice(0);"
            ]
        },

        {
            question: "What is the output of the following? var x = 1; console.log(x++ + ++x + x);",
            answers: [
                "7"
            ]
        },

        {
            question: "console.log( ~[]+~![]+~!![] ); Console output is:",
            answers: [
                "-4"
            ]
        },

        {
            question: "What value is passed to function foo as first argument? foo( +5 );",
            answers: [
                "5"
            ]
        },

        {
            question: "What will be printed to the console as a result of this code? var printName = function() { console.log(Matt); printName = function() { console.log(James); }; }; var copy = printName; printName(); copy();",
            answers: [
                "Matt Matt"
            ]
        },

        {
            question: "What is the result of: console.log((!+[]+[]+![]).length);",
            answers: [
                "9"
            ]
        },

        {
            question: "What is the value of x after the following code is run? var obj = { 0: who, 1: what, 2: idontknow}; var x = 1 in obj;",
            answers: [
                "true"
            ]
        },

        {
            question: "Which of the following String prototype method takes a regular expression?",
            answers: [
                "search()"
            ]
        },

        {
            question: "What is the value of mike after this code is run? function Person(name, age) { this.name = name; this.age = parseInt(age, 10); } var mike = Person(Mike, 25);",
            answers: [
                "undefined"
            ]
        },

        {
            question: "var x = ([]+!![])[+!+[]]; What is the value of x?",
            answers: [
                "r"
            ]
        },

        {
            question: "Which of the following expressions evaluates to false?",
            answers: [
                "new Boolean(false) == false"
            ]
        },

        {
            question: "Math.log(x) returns:",
            answers: [
                "Logarithm base e (Eulers number) of x."
            ]
        },

        {
            question: "Which of the following is not a reserved word in the language?",
            answers: [
                "and"
            ]
        },

        {
            question: "What is the result of the below expression? Assume output is a function that outputs a line of text. output(typeof (function() {output(Hello World!)})());",
            answers: [
                "Hello World! undefined"
            ]
        },

        {
            question: "What is the value of x after the following code runs? var x; x++;",
            answers: [
                "NaN"
            ]
        },

        {
            question: "function foo() { this = foo; } var a = foo(); What will the preceding code produce?",
            answers: [
                "ReferenceError: Invalid left-hand side in assignment"
            ]
        },

        {
            question: "What will this code produce: +new Date()",
            answers: [
                "Unix timestamp in milliseconds (UTC timezone)"
            ]
        },

        {
            question: "What is the value of c? var a = function(){ this.b = 1; } var b = function(){ this.b = new a().b; return 5; } var c = b() + new b();",
            answers: [
                "Error thrown when running the code"
            ]
        },

        {
            question: "Which of the following Array prototype method actually modifies the array its been called on?",
            answers: [
                "splice()"
            ]
        },

        {
            question: "What does the following return? Math.max();",
            answers: [
                "-Infinity"
            ]
        },

        {
            question: "Which are the different value types in JavaScript?",
            answers: [
                "boolean, number, string, function, object and undefined"
            ]
        },

        {
            question: "String values have a length property. Why is this property not included in a for-in loop over a string object? var prop, str; str = example; /* str.length === 7 */ for ( prop in str) {}",
            answers: [
                "Because the length property has internal [[Enumerable]] set to false."
            ]
        },

        {
            question: "What will the following code, when evaluated, do? var void = function () {};",
            answers: [
                "Throw a SyntaxError"
            ]
        },

        {
            question: "Object(s) instanceof String === s instanceof String",
            answers: [
                "false"
            ]
        },

        {
            question: "Whats the correct syntax for creating a Date object for January 10, 1998?",
            answers: [
                "new Date(1998, 0, 10);"
            ]
        },

        {
            question: "Evaluate: ![]+[]",
            answers: [
                "false"
            ]
        },

        {
            question: "What is the value of x? var a = abc; var x = a instanceof String;",
            answers: [
                "false"
            ]
        },

        {
            question: "Which of the following is NOT a reserved word in JavaScript?",
            answers: [
                "array"
            ]
        },
    ];

    var outsourcingincome = [
        {
            question: "Which of the following is true about setTimeOut()?",
            answers: [
                "The statement(s) it executes run(s) only once."
            ]
        },

        {
            question: "How can the operating system of the client machine be detected?",
            answers: [
                "Using the navigator object"
            ]
        },

        {
            question: "Which of the following prints AbBc?",
            answers: [
                "var b = a; var result = b.toUpperCase() + b + b.toUpperCase() +C[toLowerCase](); alert(result);"
            ]
        },

        {
            question: "Which of the following descriptions is true for the code below?var object0 = {};Object",
            answers: [
                "Object object0 contains 4 properties. Property prop1 and property prop3 are available in the for…in loop. Property prop0 and property prop3 are available to delete."
            ]
        },

        {
            question: "Performance-wise, which is the fastest way of repeating a string in JavaScript?",
            answers: [
                "String.prototype.repeat = function(count) { if (count  1) return ; var result = , pattern = this.valueOf(); while (count  0) { if (count & 1) result += pattern; count = 1, pattern += pattern; } return result; };"
            ]
        },

        {
            question: "Consider the following variable declarations:var a=adamvar b=eveWhich of the following would return the sentence adam and eve?",
            answers: [
                "a.concat( and , b)"
            ]
        },

        {
            question: "Which of the following code snippets will correctly split str?",
            answers: [
                "script var str = something — something_else; var substrn = str.split( — ); /script"
            ]
        },

        {
            question: "Which object can be used to ascertain the protocol of the current URL?",
            answers: [
                "location"
            ]
        },

        {
            question: "Which of the following best describes a for loop?",
            answers: [
                "for loop consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop."
            ]
        },

        {
            question: "Which of the following descriptions best describes the code below?scriptvar variable1 = { fastFood: spaghetti, length: 10 };Object",
            answers: [
                "Object is frozen, a property named price is not added in the variable1 object, a property named length is not deleted from this object. At the end of the code, object variable1 contains 2 properties."
            ]
        },

        {
            question: "Which of the following is not a valid HTML event?",
            answers: [
                "onblink"
            ]
        },

        {
            question: "Analyze the following code snippet which uses a Javascript Regular Expression character set",
            answers: [
                "s"
            ]
        },

        {
            question: "Consider the following image definition:img id=logo src=companylogo1",
            answers: [
                "document.getElementById(logo).src=companylogo2.gif"
            ]
        },

        {
            question: "What is the final value of the variable bar in the following code?var foo = 9;bar = 5;(function() {var foo = 2;bar= 1;}())bar = bar + foo;",
            answers: [
                "10"
            ]
        },

        {
            question: "Which of the following are JavaScript unit testing tools?",
            answers: [
                "Buster.js, YUI Yeti, Jasmine"
            ]
        },

        {
            question: "Which of the following can be used for disabling the right click event in Internet Explorer?",
            answers: [
                "event.button == 2"
            ]
        },

        {
            question: "An image tag is defined as follows:img id=ERImage width=100 height=100 onmouseover=ImageChange() src=Image1",
            answers: [
                "document.getElementById(ERImage).src=Image2.jpg"
            ]
        },

        {
            question: "Consider the following JavaScript alert:script type=text/JavaScriptfunction message() {alert(Welcome to ExpertRating!!!)}/scriptWhich of the following will run the function when a user opens the page?",
            answers: [
                "body onload=message()"
            ]
        },

        {
            question: "Which of the following code snippets will correctly get the length of an object?",
            answers: [
                "script var newObj = new Object(); newObj[firstname] = FirstName; newObj[lastname] = LastName; newObj[age] = 21; Object.size = function(obj) { var size = 0, key; for (key in obj) { if (obj.hasOwnProperty(key)) size++; } return size; }; var size = Object.size(newObj); /script"
            ]
        },

        {
            question: "Which of the following Array methods in JavaScript runs a function on every item in the Array and collects the result from previous calls, but in reverse?",
            answers: [
                "reduceRight()"
            ]
        },

        {
            question: "In an HTML page, the form tag is defined as follows:form onsubmit=return Validate() action=http://www",
            answers: [
                "script type=text/javascript function Validate() { if(document.forms[0].name.value == ) return false; else return true; } /script"
            ]
        },

        {
            question: "Which of the following code snippets changes an image on the page?",
            answers: [
                "var img = document.getElementById(imageId); img.src = newImage.gif;"
            ]
        },

        {
            question: "Which of the following results is returned by the JavaScript operator typeof for the keyword null?",
            answers: [
                "object"
            ]
        },

        {
            question: "What will be the final value of the variable apt?var apt=2;apt=apt2;",
            answers: [
                "8"
            ]
        },

        {
            question: "How can a JavaScript object be printed?",
            answers: [
                "console.log(obj)"
            ]
        },

        {
            question: "Which of the following is the correct syntax for using the JavaScript exec() object method?",
            answers: [
                "RegExpObject.exec(string)"
            ]
        },

        {
            question: "Having an array object var arr = new Array(), what is the best way to add a new item to the end of an array?",
            answers: [
                "arr.push(New Item)"
            ]
        },

        {
            question: "forms[0]",
            answers: [
                "input name=txtId type=text onblur=return ValidateField()"
            ]
        },

        {
            question: "Which of following uses the with statement in JavaScript correctly?",
            answers: [
                "with (document.getElementById(blah).style) { background = black; color = blue; border = 1px solid green; }"
            ]
        },

        {
            question: "Consider the following JavaScript validation function:script type=text/JavaScriptfunction ValidateField(){if(document",
            answers: [
                "input name=txtId type=text onblur=return ValidateField()"
            ]
        },

        {
            question: "Which of the following modifiers must be set if the JavaScript lastIndex object property was used during pattern matching?",
            answers: [
                "g"
            ]
        },

        {
            question: "Consider the following image definition:img id=logo src=companylogo1",
            answers: [
                "document.getElementById(logo).src=companylogo2.gif"
            ]
        },

        {
            question: "Which of the following will check whether the variable vRast exists or not?",
            answers: [
                "if (typeof vRast ==undefined) {}"
            ]
        },

        {
            question: "What would be the use of the following code?function validate(field) {var valid=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz;var ok=yes;var temp;for(var i=0;ifield",
            answers: [
                "It will force a user to enter only English alphabet character values."
            ]
        },

        {
            question: "An image tag is defined as follows:img id=ERImage width=100 height=100 onmouseover=ImageChange() src=Image1",
            answers: [
                "document.getElementById(ERImage).src=Image2.jpg"
            ]
        },

        {
            question: "Which of the following choices will detect if variableName declares a function?scriptvar variableName= function(){};/script",
            answers: [
                "typeof variableName;"
            ]
        },

        {
            question: "Which of the following choices will change the source of the image to image2",
            answers: [
                "img id=imageID src=image1.gif width=50 height=60 onmousedown=changeimg(image1.gif) onmouseup=changeimg(image2.gif)"
            ]
        },

        {
            question: "How can created cookies be deleted using JavaScript?",
            answers: [
                "Overwrite with an expiry date in the past"
            ]
        },

        {
            question: "substr(3, 3)",
            answers: [
                "com"
            ]
        },

        {
            question: "Are the two statements below interchangeable?object",
            answers: [
                "Yes"
            ]
        },

        {
            question: "Which of the following is not a valid method in generator-iterator objects in JavaScript?",
            answers: [
                "stop()"
            ]
        },

        {
            question: "Which of the following code snippets will return all HTTP headers?",
            answers: [
                "var req = new XMLHttpRequest(); req.open(GET, document.location, false); req.send(null); var headers = req.getAllResponseHeaders().toLowerCase(); alert(headers);"
            ]
        },

        {
            question: "Consider the following JavaScript alert:script type=text/JavaScriptfunction message() {alert(Welcome to ExpertRating!!!)}/scriptWhich of the following will run the function when a user opens the page?",
            answers: [
                "body onload=message()"
            ]
        },

        {
            question: "Which of the following is the most secure and efficient way of declaring an array?",
            answers: [
                "var a = []"
            ]
        },

        {
            question: "Which of the following Regular Expression pattern flags is not valid?",
            answers: [
                "p"
            ]
        },

        {
            question: "Which of the following built-in functions is used to access form elements using their IDs?",
            answers: [
                "getElementById(id)"
            ]
        },

        {
            question: "Which of the following statements is correct?",
            answers: [
                "Undefined object properties can be checked using the following code: if (typeof something === undefined) alert(something is undefined);"
            ]
        },

        {
            question: "Which of the following correctly uses a timer with a function named rearrange()?",
            answers: [
                "tmr=setTimeout(rearrange (),1)"
            ]
        },

        {
            question: "Which of the following can be used to escape the  character?",
            answers: [
                "\\"
            ]
        },

        {
            question: "Which event can be used to validate the value in a field as soon as the user moves out of the field by pressing the tab key?",
            answers: [
                "onblur"
            ]
        },

        {
            question: "When setting cookies with JavaScript, what will happen to the cookies",
            answers: [
                "The file is truncated to the maximum length."
            ]
        },

        {
            question: "Which of the following are not global methods and properties in E4X?",
            answers: [
                "setName() and setNamespace()"
            ]
        },

        {
            question: "Which of the following will change the color of a paragraphs text to blue when a user hovers over it, and reset it back to black when the user hovers out?",
            answers: [
                "p onmouseover=style.color=blue onmouseout=style.color=black The text of the paragraph../p"
            ]
        },

        {
            question: "What is the purpose of while(1) in the following JSON response? while(1);[[u,[[smsSentFlag,false],[hideInvitations,false],[remindOnRespondedEventsOnly,true],[hideInvitations_remindOnRespondedEventsOnly,false_true],[Calendar ID stripped for privacy,false],[smsVerifiedFlag,true]]]]",
            answers: [
                "It makes it difficult for a third-party to insert the JSON response into an HTML document with a script tag."
            ]
        },

        {
            question: "Consider the three variables:someText = JavaScript1",
            answers: [
                "JavaScript1.2"
            ]
        },

        {
            question: "Which of the following choices will turn a string into a JavaScript function call (case with objects) of the following code snippet?scriptwindow",
            answers: [
                "window[foo][bar][baz]();"
            ]
        },

        {
            question: "Which of the following determines whether cookies are enabled in a browser or not?",
            answers: [
                "(navigator.cookieEnabled)? true : false"
            ]
        },

        {
            question: "Which of the following options can be used for adding direct support for XML to JavaScript?",
            answers: [
                "E4X"
            ]
        },

        {
            question: "Which of the following will detect which DOM element has the focus?",
            answers: [
                "document.activeElement"
            ]
        },

        {
            question: "Which of the following will randomly choose an element from an array named myStuff, given that the number of elements changes dynamically?",
            answers: [
                "randomElement = myStuff[Math.floor(Math.random() * myStuff.length)];"
            ]
        },

        {
            question: "How can global variables be declared in JavaScript?",
            answers: [
                "Declare the variable between the script tags, and outside a function to make the variable global"
            ]
        },

        {
            question: "Which of the following objects in JavaScript contains the collection called plugins?",
            answers: [
                "Navigator"
            ]
        },

        {
            question: "What will be output of the following code?function testGenerator() {yield first;document",
            answers: [
                "firststep1second"
            ]
        },

        {
            question: "Which of the following methods will copy data to the Clipboard?",
            answers: [
                "execCommand(Copy)"
            ]
        },

        {
            question: "Which of the following code snippets trims whitespace from the beginning and end of the given string str?",
            answers: [
                "str.replace(/^\\s+|\s+$/g, );"
            ]
        },

        {
            question: "What is the difference between call() and apply()?",
            answers: [
                "The call() function accepts an argument list of a function, while the apply() function accepts a single array of arguments."
            ]
        },

        {
            question: "Which of the following code snippets is more efficient, and why?script language=JavaScriptfor(i=0;idocument",
            answers: [
                "The second code is more efficient as it employs object caching."
            ]
        },

        {
            question: "Which of the following JavaScript Regular Expression modifiers finds one or more occurrences of a specific character in a string?",
            answers: [
                "+"
            ]
        },

        {
            question: "Which of the following is not a valid JavaScript operator?",
            answers: [
                "^"
            ]
        },

        {
            question: "Which of the following code snippets returns [object object]?",
            answers: [
                "script var o = new Object(); o.toString(); /script"
            ]
        },

        {
            question: "Which of the following can be used to invoke an iframe from a parent page?",
            answers: [
                "window.frames"
            ]
        },

        {
            question: "Select the following function that shuffles an array?",
            answers: [
                "function shuffle(array) { var tmp, current, top = array.length; if(top) while(–top) { current = Math.floor(Math.random() * (top + 1)); tmp = array[current]; array[current] = array[top]; array[top] = tmp; } return array; }"
            ]
        },

        {
            question: "Which of the following code snippets removes objects from an associative array?",
            answers: [
                "delete array[propertyName];"
            ]
        },

        {
            question: "What is the error in the statement: var charConvert = toCharCode(x);?",
            answers: [
                "toCharCode() is a non-existent method."
            ]
        },

        {
            question: "What value would JavaScript assign to an uninitialized variable?",
            answers: [
                "undefined"
            ]
        },

        {
            question: "If an image is placed styled with z-index=-1 and a text paragraph is overlapped with it, which one will be displayed on top?",
            answers: [
                "The paragraph."
            ]
        },

        {
            question: "Which of the following code snippets gets an images dimensions (height & width) correctly?",
            answers: [
                "var img = document.getElementById(imageid); var width = img.clientWidth; var height = img.clientHeight;"
            ]
        },

        {
            question: "Which of the following are correct values of variableC, and why?scriptvariableA = [6,8];variableB =[7,9];variableC = variableA + variableB;/script",
            answers: [
                "6, 87 and 9. The + operator is not defined for arrays, and it concatenates strings, so it converts the arrays to strings."
            ]
        },

        {
            question: "The following are the samples for getting a selected value in the from a dropdown list:select id=ddlViewByoption value=1test1/optionoption value=2 selected=selectedtest2/optionoption value=3test3/option/selectWhich code block is correct?",
            answers: [
                "var e = document.getElementById(ddlViewBy); var strUser = e.options[e.selectedIndex].value;"
            ]
        },

        {
            question: "var profits=2489",
            answers: [
                "profits.toFixed(3)"
            ]
        },

        {
            question: "A form contains two fields named id1 and id2",
            answers: [
                "document.forms[0].id1.value=document.forms[0].id2.value"
            ]
        },

        {
            question: "Which of the following code snippets will toggle a div elements background color?button id=toggleToggle/buttondiv id=terdChange Background Color",
            answers: [
                "script var button = document.getElementById(toggle); button.focus = function() { terd.style.backgroundColor = terd.style.backgroundColor == blue ? red : blue; }; /script"
            ]
        },

        {
            question: "How can the users previously navigated page be determined using JavaScript?",
            answers: [
                "Using the window object"
            ]
        },

        {
            question: "Which of the following is not a valid method for looping an array?",
            answers: [
                "var a= [1,2]; a.loop( function(item) { alert(item); })"
            ]
        },

        {
            question: "Which of the following correctly sets a class for an element?",
            answers: [
                "document.getElementById(elementId).setAttribute(className, Someclass);"
            ]
        },

        {
            question: "An HTML form contains 10 checkboxes all named chkItems",
            answers: [
                "function CheckAll() { for (z = 0; z  document.forms[0].chkItems.length; z++) { document.forms[0].chkItems[z].checked=true } }"
            ]
        },
    ];

    var upworktest = [
        {
            question: "Which of the following Array methods in JavaScript runs a function on every item in the Array and collects the result from previous calls, but in reverse?",
            answers: [
                "reduceRight()"
            ]
        },

        {
            question: "Which of the following is true about setTimeOut()?",
            answers: [
                "The statement(s) it executes run(s) only once."
            ]
        },

        {
            question: "How can the operating system of the client machine be detected?",
            answers: [
                "Using the navigator object"
            ]
        },

        {
            question: "Which of the following prints AbBc?",
            answers: [
                "var b = a; var result = b.toUpperCase() + b + b.toUpperCase() +C[toLowerCase](); alert(result);"
            ]
        },

        {
            question: "Which of the following descriptions is true for the code below?var object0 = {};Object",
            answers: [
                "Object object0 contains 4 properties. Property prop1 and property prop3 are available in the for…in loop. Property prop0 and property prop3 are available to delete."
            ]
        },

        {
            question: "Performance-wise, which is the fastest way of repeating a string in JavaScript?",
            answers: [
                "String.prototype.repeat = function(count) { if (count  1) return ; var result = , pattern = this.valueOf(); while (count  0) { if (count & 1) result += pattern; count = 1, pattern += pattern; } return result; };"
            ]
        },

        {
            question: "Consider the following variable declarations:var a=adamvar b=eveWhich of the following would return the sentence adam and eve?",
            answers: [
                "a.concat( and , b)"
            ]
        },

        {
            question: "Which of the following code snippets will correctly split str?",
            answers: [
                "script var str = something — something_else; var substrn = str.split( — ); /script"
            ]
        },

        {
            question: "Which object can be used to ascertain the protocol of the current URL?",
            answers: [
                "location"
            ]
        },

        {
            question: "Which of the following best describes a for loop?",
            answers: [
                "for loop consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop."
            ]
        },

        {
            question: "Which of the following descriptions best describes the code below?scriptvar variable1 = { fastFood: spaghetti, length: 10 };Object",
            answers: [
                "Object is frozen, a property named price is not added in the variable1 object, a property named length is not deleted from this object. At the end of the code, object variable1 contains 2 properties."
            ]
        },

        {
            question: "Which of the following is not a valid HTML event?",
            answers: [
                "onblink"
            ]
        },

        {
            question: "Analyze the following code snippet which uses a Javascript Regular Expression character set",
            answers: [
                "s"
            ]
        },

        {
            question: "Consider the following image definition:img id=logo src=companylogo1",
            answers: [
                "document.getElementById(logo).src=companylogo2.gif"
            ]
        },

        {
            question: "What is the final value of the variable bar in the following code?var foo = 9;bar = 5;(function() { var foo = 2; bar= 1;}())bar = bar + foo;",
            answers: [
                "10"
            ]
        },

        {
            question: "Which of the following are JavaScript unit testing tools?",
            answers: [
                "Buster.js, YUI Yeti, Jasmine"
            ]
        },

        {
            question: "Which of the following can be used for disabling the right click event in Internet Explorer?",
            answers: [
                "event.button == 2"
            ]
        },

        {
            question: "An image tag is defined as follows:img id=ERImage width=100 height=100 onmouseover=ImageChange() src=Image1",
            answers: [
                "document.getElementById(ERImage).src=Image2.jpg"
            ]
        },

        {
            question: "Consider the following JavaScript alert:script type=text/JavaScriptfunction message() { alert(Welcome to ExpertRating!!!)}/scriptWhich of the following will run the function when a user opens the page?",
            answers: [
                "body onload=message()"
            ]
        },

        {
            question: "Which of the following code snippets will correctly get the length of an object?",
            answers: [
                "script var newObj = new Object(); newObj[firstname] = FirstName; newObj[lastname] = LastName; newObj[age] = 21; Object.size = function(obj) { var size = 0, key; for (key in obj) { if (obj.hasOwnProperty(key)) size++; } return size; }; var size = Object.size(newObj); /script"
            ]
        },

        {
            question: "In an HTML page, the form tag is defined as follows:form onsubmit=return Validate() action=http://www",
            answers: [
                "script type=text/javascript function Validate() { if(document.forms[0].name.value == ) return false; else return true; } /script"
            ]
        },

        {
            question: "Which of the following code snippets changes an image on the page?",
            answers: [
                "var img = document.getElementById(imageId); img.src = newImage.gif;"
            ]
        },

        {
            question: "Which of the following results is returned by the JavaScript operator typeof for the keyword null?",
            answers: [
                "object"
            ]
        },

        {
            question: "What will be the final value of the variable apt?var apt=2;apt=apt2;",
            answers: [
                "8"
            ]
        },

        {
            question: "How can a JavaScript object be printed?",
            answers: [
                "console.log(obj)"
            ]
        },

        {
            question: "Which of the following is the correct syntax for using the JavaScript exec() object method?",
            answers: [
                "RegExpObject.exec(string)"
            ]
        },

        {
            question: "Having an array object var arr = new Array(), what is the best way to add a new item to the end of an array?",
            answers: [
                "arr.push(New Item)"
            ]
        },

        {
            question: "Consider the following JavaScript validation function:function ValidateField(){ if(document",
            answers: [
                "input name=txtId type=text onblur=return ValidateField()"
            ]
        },

        {
            question: "Which of following uses the with statement in JavaScript correctly?",
            answers: [
                "with (document.getElementById(blah).style) { background = black; color = blue; border = 1px solid green; }"
            ]
        },

        {
            question: "Consider the following JavaScript validation function:script type=text/JavaScriptfunction ValidateField(){ if(document",
            answers: [
                "input name=txtId type=text onblur=return ValidateField()"
            ]
        },

        {
            question: "Which of the following modifiers must be set if the JavaScript lastIndex object property was used during pattern matching?",
            answers: [
                "g"
            ]
        },

        {
            question: "Consider the following image definition:img id=logo src=companylogo1",
            answers: [
                "document.getElementById(logo).src=companylogo2.gif"
            ]
        },

        {
            question: "Which of the following will check whether the variable vRast exists or not?",
            answers: [
                "if (typeof vRast ==undefined) {}"
            ]
        },

        {
            question: "What would be the use of the following code?function validate(field) { var valid=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz; var ok=yes; var temp;for(var i=0;ifield",
            answers: [
                "It will force a user to enter only English alphabet character values."
            ]
        },

        {
            question: "An image tag is defined as follows:img id=ERImage width=100 height=100 onmouseover=ImageChange() src=Image1",
            answers: [
                "document.getElementById(ERImage).src=Image2.jpg"
            ]
        },

        {
            question: "Which of the following choices will detect if variableName declares a function?script var variableName= function(){};/script",
            answers: [
                "typeof variableName;"
            ]
        },

        {
            question: "Which of the following choices will change the source of the image to image2",
            answers: [
                "img id=imageID src=image1.gif width=50 height=60 onmousedown=changeimg(image1.gif) onmouseup=changeimg(image2.gif)"
            ]
        },

        {
            question: "How can created cookies be deleted using JavaScript?",
            answers: [
                "Overwrite with an expiry date in the past"
            ]
        },

        {
            question: "What would be the value of ind after execution of the following code?var msg=Welcome to ExpertRatingvar ind= msg",
            answers: [
                "com"
            ]
        },

        {
            question: "Are the two statements below interchangeable?object",
            answers: [
                "Yes"
            ]
        },

        {
            question: "Which of the following is not a valid method in generator-iterator objects in JavaScript?",
            answers: [
                "stop()"
            ]
        },

        {
            question: "Which of the following code snippets will return all HTTP headers?",
            answers: [
                "var req = new XMLHttpRequest(); req.open(GET, document.location, false); req.send(null); var headers = req.getAllResponseHeaders().toLowerCase(); alert(headers);"
            ]
        },

        {
            question: "Consider the following JavaScript alert:script type=text/JavaScriptfunction message() { alert(Welcome to ExpertRating!!!)}/scriptWhich of the following will run the function when a user opens the page?",
            answers: [
                "body onload=message()"
            ]
        },

        {
            question: "Which of the following is the most secure and efficient way of declaring an array?",
            answers: [
                "var a = []"
            ]
        },

        {
            question: "Which of the following Regular Expression pattern flags is not valid?",
            answers: [
                "p"
            ]
        },

        {
            question: "Which of the following built-in functions is used to access form elements using their IDs?",
            answers: [
                "getElementById(id)"
            ]
        },

        {
            question: "Which of the following statements is correct?",
            answers: [
                "Undefined object properties can be checked using the following code: if (typeof something === undefined) alert(something is undefined);"
            ]
        },

        {
            question: "Which of the following correctly uses a timer with a function named rearrange()?",
            answers: [
                "tmr=setTimeout(rearrange (),1)"
            ]
        },

        {
            question: "Which of the following can be used to escape the  character?",
            answers: [

            ]
        },

        {
            question: "Which event can be used to validate the value in a field as soon as the user moves out of the field by pressing the tab key?",
            answers: [
                "onblur"
            ]
        },

        {
            question: "When setting cookies with JavaScript, what will happen to the cookies",
            answers: [
                "The file is truncated to the maximum length."
            ]
        },

        {
            question: "Which of the following are not global methods and properties in E4X?",
            answers: [
                "setName() and setNamespace()"
            ]
        },

        {
            question: "Which of the following will change the color of a paragraphs text to blue when a user hovers over it, and reset it back to black when the user hovers out?",
            answers: [
                "p onmouseover=style.color=blue onmouseout=style.color=black The text of the paragraph../p"
            ]
        },

        {
            question: "What is the purpose of while(1) in the following JSON response?while(1);[[u,[[smsSentFlag,false],[hideInvitations,false],[remindOnRespondedEventsOnly,true],[hideInvitations_remindOnRespondedEventsOnly,false_true],[Calendar ID stripped for privacy,false],[smsVerifiedFlag,true]]]]",
            answers: [
                "It makes it difficult for a third-party to insert the JSON response into an HTML document with a script tag."
            ]
        },

        {
            question: "Consider the three variables:someText = JavaScript1",
            answers: [
                "JavaScript1.2"
            ]
        },

        {
            question: "Which of the following choices will turn a string into a JavaScript function call (case with objects) of the following code snippet?scriptwindow",
            answers: [
                "window[foo][bar][baz]();"
            ]
        },

        {
            question: "Which of the following determines whether cookies are enabled in a browser or not?",
            answers: [
                "(navigator.cookieEnabled)? true : false"
            ]
        },

        {
            question: "Which of the following options can be used for adding direct support for XML to JavaScript?",
            answers: [
                "E4X"
            ]
        },

        {
            question: "Which of the following will detect which DOM element has the focus?",
            answers: [
                "document.activeElement"
            ]
        },

        {
            question: "Which of the following will randomly choose an element from an array named myStuff, given that the number of elements changes dynamically?",
            answers: [
                "randomElement = myStuff[Math.floor(Math.random() * myStuff.length)];"
            ]
        },

        {
            question: "How can global variables be declared in JavaScript?",
            answers: [
                "Declare the variable between the script tags, and outside a function to make the variable global"
            ]
        },

        {
            question: "Which of the following objects in JavaScript contains the collection called plugins?",
            answers: [
                "Navigator"
            ]
        },

        {
            question: "What will be output of the following code?function testGenerator() { yield first; document",
            answers: [
                "firststep1second"
            ]
        },

        {
            question: "Which of the following methods will copy data to the Clipboard?",
            answers: [
                "execCommand(Copy)"
            ]
        },

        {
            question: "Which of the following code snippets trims whitespace from the beginning and end of the given string str?",
            answers: [
                "str.replace(/^s+|s+$/g, );"
            ]
        },

        {
            question: "What is the difference between call() and apply()?",
            answers: [
                "The call() function accepts an argument list of a function, while the apply() function accepts a single array of arguments."
            ]
        },

        {
            question: "Which of the following code snippets is more efficient, and why?script language=JavaScript for(i=0;idocument",
            answers: [
                "The second code is more efficient as it employs object caching."
            ]
        },

        {
            question: "What is the meaning of obfuscation in JavaScript?",
            answers: [
                "Making code unreadable using advanced algorithms."
            ]
        },

        {
            question: "Which of the following JavaScript Regular Expression modifiers finds one or more occurrences of a specific character in a string?",
            answers: [
                "+"
            ]
        },

        {
            question: "Which of the following is not a valid JavaScript operator?",
            answers: [
                "^"
            ]
        },

        {
            question: "Which of the following code snippets returns [object object]?",
            answers: [
                "script var o = new Object(); o.toString(); /script"
            ]
        },

        {
            question: "Which of the following can be used to invoke an iframe from a parent page?",
            answers: [
                "window.frames"
            ]
        },

        {
            question: "Select the following function that shuffles an array?",
            answers: [
                "function shuffle(array) { var tmp, current, top = array.length; if(top) while(–top) { current = Math.floor(Math.random() * (top + 1)); tmp = array[current]; array[current] = array[top]; array[top] = tmp; } return array; }"
            ]
        },

        {
            question: "Which of the following code snippets removes objects from an associative array?",
            answers: [
                "delete array[propertyName];"
            ]
        },

        {
            question: "What is the error in the statement: var charConvert = toCharCode(x);?",
            answers: [
                "toCharCode() is a non-existent method."
            ]
        },

        {
            question: "What value would JavaScript assign to an uninitialized variable?",
            answers: [
                "undefined"
            ]
        },

        {
            question: "If an image is placed styled with z-index=-1 and a text paragraph is overlapped with it, which one will be displayed on top?",
            answers: [
                "The paragraph."
            ]
        },

        {
            question: "Which of the following code snippets gets an images dimensions (height & width) correctly?",
            answers: [
                "var img = document.getElementById(imageid); var width = img.clientWidth; var height = img.clientHeight;"
            ]
        },

        {
            question: "Which of the following are correct values of variableC, and why?scriptvariableA = [6,8];variableB =[7,9];variableC = variableA + variableB;/script",
            answers: [
                "6, 87 and 9. The + operator is not defined for arrays, and it concatenates strings, so it converts the arrays to strings."
            ]
        },

        {
            question: "The following are the samples for getting a selected value in the from a dropdown list:select id=ddlViewByoption value=1test1/optionoption value=2 selected=selectedtest2/optionoption value=3test3/option/selectWhich code block is correct?",
            answers: [
                "var e = document.getElementById(ddlViewBy); var strUser = e.options[e.selectedIndex].value;"
            ]
        },

        {
            question: "var profits=2489",
            answers: [
                "profits.toFixed(3)"
            ]
        },

        {
            question: "A form contains two fields named id1 and id2",
            answers: [
                "document.forms[0].id1.value=document.forms[0].id2.value"
            ]
        },

        {
            question: "Which of the following code snippets will toggle a div elements background color?button id=toggleToggle/buttondiv id=terdChange Background Color",
            answers: [
                "script var button = document.getElementById(toggle); button.onclick = function() { terd.style.backgroundColor = terd.style.backgroundColor == blue ? red : blue; }; /script"
            ]
        },

        {
            question: "How can the users previously navigated page be determined using JavaScript?",
            answers: [
                "Using the window object"
            ]
        },

        {
            question: "Which of the following is not a valid method for looping an array?",
            answers: [
                "var a= [1,2]; a.loop( function(item) { alert(item); })"
            ]
        },

        {
            question: "Which of the following correctly sets a class for an element?",
            answers: [
                "document.getElementById(elementId).setAttribute(className, Someclass);"
            ]
        },

        {
            question: "An HTML form contains 10 checkboxes all named chkItems",
            answers: [
                "function CheckAll() { for (z = 0; z  document.forms[0].chkItems.length; z++) { document.forms[0].chkItems[z].checked=true } }"
            ]
        },
    ];

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
                "\\"
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

    var upworktestru = [
        {
            question: "Consider the following JavaScript alert:script type=text/JavaScript function message() { alert(Welcome to ExpertRating!!!) } /scriptWhich of the following will run the function when a user opens the page?",
            answers: [
                "body onload=message()"
            ]
        },

        {
            question: "Which of the following is not a valid method in generator-iterator objects in JavaScript?",
            answers: [
                "stop()"
            ]
        },

        {
            question: "How can created cookies be deleted using JavaScript?",
            answers: [
                "Overwrite with an expiry date in the past"
            ]
        },

        {
            question: "Which of the following JavaScript Regular Expression modifiers finds one or more occurrences of a specific character in a string?",
            answers: [
                "+"
            ]
        },

        {
            question: "Which of the following is not a valid Date Object method in JavaScript?",
            answers: [
                "setDay()"
            ]
        },

        {
            question: "Which of the following Array methods in JavaScript runs a function on every item in the Array and collects the result from previous calls, but in reverse?",
            answers: [
                "reduceRight()"
            ]
        },

        {
            question: "When setting cookies with JavaScript, what will happen to the cookies.txt data if the file exceeds the maximum size?",
            answers: [
                "The file is truncated to the maximum length."
            ]
        },

        {
            question: "Which of the following can be used for disabling the right click event in Internet Explorer?",
            answers: [
                "event.button == 2"
            ]
        },

        {
            question: "Which of the following code snippets will toggle a div elements background color?button id=toggleToggle/button div id=terdChange Background Color./div",
            answers: [
                "script var button = document.getElementById(toggle); button.onclick = function() { terd.style.backgroundColor = terd.style.backgroundColor == blue ? red : blue; }; /script"
            ]
        },

        {
            question: "Consider the following JavaScript validation function:function ValidateField() { if(document.forms[0].txtId.value ==) {return false;} return true; }Which of the following options will call the function as soon as the user leaves the field?",
            answers: [
                "input name=txtId type=text onblur=return ValidateField()"
            ]
        },

        {
            question: "What will be output of the following code?function testGenerator() { yield first; document.write(step1);yield second; document.write(step2);yield third; document.write(step3); }var g = testGenerator(); document.write(g.next()); document.write(g.next());",
            answers: [
                "firststep1second"
            ]
        },

        {
            question: "Consider the following image definition: img id=logo src=companylogo1.gif height=12 width=12  Which of the following will change the image to companylogo2.gif when the page loads?",
            answers: [
                "document.getElementById(logo).src=companylogo2.gif"
            ]
        },

        {
            question: "Which of the following are correct values of variableC, and why?script variableA = [6,8]; variableB =[7,9]; variableC = variableA + variableB; /script",
            answers: [
                "6, 87 and 9. The + operator is not defined for arrays, and it concatenates strings, so it converts the arrays to strings."
            ]
        },

        {
            question: "Which of the following determines whether cookies are enabled in a browser or not?",
            answers: [
                "(navigator.cookieEnabled)? true : false"
            ]
        },

        {
            question: "Which of the following modifiers must be set if the JavaScript lastIndex object property was used during pattern matching?",
            answers: [
                "g"
            ]
        },

        {
            question: "An image tag is defined as follows:img id=ERImage width=100 height=100 onmouseover=ImageChange() src=Image1.jpgThe purpose of the ImageChange() function is to change the image source to Image2.jpg. Which of the following should the ImageChange() function look like?",
            answers: [
                "document.getElementById(ERImage).src=Image2.jpg"
            ]
        },

        {
            question: "Which of the following is true about setTimeOut()?",
            answers: [
                "The statement(s) it executes run(s) only once."
            ]
        },

        {
            question: "Which of the following objects in JavaScript contains the collection called plugins?",
            answers: [
                "Navigator"
            ]
        },

        {
            question: "Which of following uses the with statement in JavaScript correctly?",
            answers: [
                "with (document.getElementById(blah).style) { background = black; color = blue; border = 1px solid green; }"
            ]
        },

        {
            question: "Which event can detect when the user highlights text within a text or textarea object?",
            answers: [
                "onSelect"
            ]
        },

        {
            question: "Consider the following code snippet:var myJSONObject = {ircEvent: PRIVMSG, method: newURI, regex: ^http://.*};What is the best way to remove the property regex, so the result would be this code snippet?myJSONObject == {ircEvent: PRIVMSG, method: newURI};",
            answers: [
                "delete myJSONObject.regex;"
            ]
        },

        {
            question: "Which of the following is the best way to show both single and double quotes in the same sentence?",
            answers: [
                "alert(It\s game time.);"
            ]
        },

        {
            question: "Which of the following statements is true regarding importing JavaScript files inside of other JavaScript files?",
            answers: [
                "There is an import keyword in JavaScript, which allows importing JS files inside of other JS files."
            ]
        },

        {
            question: "Which of the following shortcuts can be used for writing multiple document.write statements?",
            answers: [
                "with(document) {}"
            ]
        },

        {
            question: "In JavaScript, the encodeURI() function is used to encode special characters. Which of the following special characters is/are an exception to that rule?A. £ B. € C. @ D. $",
            answers: [
                "A and B"
            ]
        },

        {
            question: "Consider the following code:form textarea id=foo name=foo/textarea /formWhich of the following is the best method to get the line number of the forms text area?",
            answers: [
                "script foo.value.split(/\r\n|\r|\n/g); /script"
            ]
        },

        {
            question: "Which of the following code snippets shows an alert for an empty string?var a = ;",
            answers: [
                "If(!a){ alert(This is empty string);}"
            ]
        },

        {
            question: "Consider the following code:var setter=new Object() setter.color=blueHow would you delete the color property of the variable seter?",
            answers: [
                "delete setter.color"
            ]
        },

        {
            question: "Is the following statement regarding expression closures in JavaScript true or false?The syntax function(x) {return x*x;} can be written as function(x) x*x.",
            answers: [
                "False"
            ]
        },

        {
            question: "Which of the following statements regarding this String prototype is correct?String.prototype.doSomething = function(suffix) { return this.indexOf(suffix, this.length — suffix.length) !== -1; };",
            answers: [
                "This method determines whether or not a string ends with another string."
            ]
        },

        {
            question: "What will be the result of the following code?document.getElementById(banana).className = document.getElementById(banana).className.replace(/(?:^|\s)apple(?!\S)/g ,e );",
            answers: [
                "Replace class apple with e in the HTML element which contains ID banana"
            ]
        },

        {
            question: "Which of the following will determine if the users browser is named Netscape?",
            answers: [
                "None of these"
            ]
        },

        {
            question: "Which of the following are not valid HTML events?",
            answers: [
                "onmouseabove",
                "onmousein"
            ]
        },

        {
            question: "Which of the following options is used to access the attributes in E4X?",
            answers: [
                "@"
            ]
        },

        {
            question: "Which of the following can be used to write a JavaScript function that will accept user input?",
            answers: [
                "The prompt method"
            ]
        },

        {
            question: "Which of these options is the most maintainable way to attach JavaScript functionality to an HTML element?",
            answers: [
                "script function fun(){alert(You clicked me!)} /scripta onclick=fun()…/a"
            ]
        },

    ];

    var upworkcrack = [
        {
            question: "Which of the following code snippets shows an alert for an empty string? var a = ;",
            answers: [
                "If(!a){ alert(This is empty string);}"
            ]
        },

        {
            question: "Which of the following objects in JavaScript contains the collection called plugins?",
            answers: [
                "Navigator"
            ]
        },

        {
            question: "Consider the following JavaScript function to change the color of the text box named txtName: function color(col) { document.forms[0].txtName.style.background=col } Which of the following will change the color of the text box to green, as long as the user is pressing a key?",
            answers: [
                "input type=text onkeypress=color(green) onkeyup=color(white) name=txtName"
            ]
        },

        {
            question: "Analyze the following code snippet which uses a Javascript Regular Expression character set. What will be the output of this code? html body script type=text/javascript var str = Is this enough?; var patt1 = new RegExp([^A-J]); var result = str.match(patt1); document.write(result); /script /body /html",
            answers: [
                "s"
            ]
        },

        {
            question: "Which of the following statements regarding JSON is incorrect?",
            answers: [
                "Comments in JSON are allowed."
            ]
        },

        {
            question: "What would be the value of ind after execution of the following code? var msg=Welcome to ExpertRating var ind= msg.substr(3, 3)",
            answers: [
                "com"
            ]
        },

        {
            question: "Which of the following is not a valid method in generator-iterator objects in JavaScript?",
            answers: [
                "stop()"
            ]
        },

        {
            question: "Which of the following correctly sets a class for an element?",
            answers: [
                "document.getElementById(elementId).setAttribute(className, Someclass);"
            ]
        },

        {
            question: "Which of the following choices will change the source of the image to image2.gif when a user clicks on the image?",
            answers: [
                "img id=imageID src=image1.gif width=50 height=60 onmousedown=changeimg(image1.gif) onmouseup=changeimg(image2.gif)"
            ]
        },

        {
            question: "Consider the following image definition: img id=logo src=companylogo1.gif height=12 width=12  Which of the following will change the image to companylogo2.gif when the page loads?",
            answers: [
                "document.getElementById(logo).src=companylogo2.gif"
            ]
        },

        {
            question: "Which of the following shortcuts can be used for writing multiple document.write statements?",
            answers: [
                "with(document) {}"
            ]
        },

        {
            question: "How can created cookies be deleted using JavaScript?",
            answers: [
                "Overwrite with an expiry date in the past"
            ]
        },

        {
            question: "Which of the following is not a valid method for looping an array?",
            answers: [
                "var a= [1,2]; a.loop( function(item) { alert(item); })"
            ]
        },

        {
            question: "Consider the following JavaScript alert: script type=text/JavaScript function message() { alert(Welcome to ExpertRating!!!) } /script Which of the following will run the function when a user opens the page?",
            answers: [
                "body onload=message()"
            ]
        },

        {
            question: "What will the following code snippet do? document.alinkColor=green",
            answers: [
                "It makes the color of the active links green"
            ]
        },

        {
            question: "Which of the following JavaScript Regular Expression modifiers finds one or more occurrences of a specific character in a string?",
            answers: [
                "+"
            ]
        },

        {
            question: "Which of the following choices will remove a selection option from the code below? button idnewbtn onclick=g();Remove/button select name=selectBox id=selectBox option value=option1option1/option option value=option2option2/option option value=option3option3/option option value=option4option4/option /select",
            answers: [
                "script function g(){ var index = 1; var d = document.getElementById(selectBox); var d_nested = d.childNodes[index]; var throwawayNode = d.removeChild(d_nested); } /script"
            ]
        },

        {
            question: "Which of the following is not a JavaScript string method?",
            answers: [
                "ep"
            ]
        },

        {
            question: "What will be output of the following code? function testGenerator() { yield first; document.write(step1); yield second; document.write(step2); yield third; document.write(step3); } var g = testGenerator(); document.write(g.next()); document.write(g.next());",
            answers: [
                "firststep1second"
            ]
        },

        {
            question: "Which of the following code snippets changes an image on the page?",
            answers: [
                "Answers. a.var img = document.getElementById(imageId); img.src = newImage.gif;"
            ]
        },

        {
            question: "An image tag is defined as follows: img id=ERImage width=100 height=100 onmouseover=ImageChange() src=Image1.jpg The purpose of the ImageChange() function is to change the image source to Image2.jpg. Which of the following should the ImageChange() function look like?",
            answers: [
                "document.getElementById(ERImage).src=Image2.jpg"
            ]
        },

        {
            question: "When setting cookies with JavaScript, what will happen to the cookies.txt data if the file exceeds the maximum size?",
            answers: [
                "The file is truncated to the maximum length."
            ]
        },

        {
            question: "Consider the following code snippet: var myJSONObject = {ircEvent: PRIVMSG, method: newURI, regex: ^http://.*}; What is the best way to remove the property regex, so the result would be this code snippet? myJSONObject == {ircEvent: PRIVMSG, method: newURI};",
            answers: [
                "delete myJSONObject.regex;"
            ]
        },

        {
            question: "Which of the following determines whether cookies are enabled in a browser or not?",
            answers: [
                "(navigator.cookieEnabled)? true : false"
            ]
        },

        {
            question: "var profits=2489.8237 Which of the following code(s) produces the following output? output : 2489.824",
            answers: [
                "profits.toFixed(3)"
            ]
        },

        {
            question: "Consider the following JavaScript validation function: function ValidateField() { if(document.forms[0].txtId.value ==) {return false;} return true; } Which of the following options will call the function as soon as the user leaves the field?",
            answers: [
                "input name=txtId type=text onblur=return ValidateField()"
            ]
        },

        {
            question: "How can the operating system of the client machine be detected?",
            answers: [
                "Using the navigator object"
            ]
        },

        {
            question: "Which of the following modifiers must be set if the JavaScript lastIndex object property was used during pattern matching?",
            answers: [
                "g"
            ]
        },

        {
            question: "Which of the following code snippets shows the correct way to detect an array that does not contain a specific value?",
            answers: [
                "script var aVar = [Banana, Orange, Apple, Mango]; var bVar = fruits.indexOf(Lichi) if(bVar == -1){ //requirement } /script"
            ]
        },

        {
            question: "Which of the following built-in functions is used to access form elements using their IDs?",
            answers: [
                "getElementById(id)"
            ]
        },

        {
            question: "Which of the following options can be used for adding direct support for XML to JavaScript?",
            answers: [
                "E4X"
            ]
        },

        {
            question: "Which of the following code snippets will toggle a div elements background color? button id=toggleToggle/button div id=terdChange Background Color./div",
            answers: [
                "script var button = document.getElementById(toggle); button.onclick = function() { terd.style.backgroundColor = terd.style.backgroundColor == blue ? red : blue; }; /script"
            ]
        },

        {
            question: "Which of the following will determine if the users browser is named Netscape?",
            answers: [
                "None of these"
            ]
        },

        {
            question: "What would be the default setting for the expires attribute of the document.cookie property?",
            answers: [
                "The duration of the browser session"
            ]
        },

        {
            question: "Which of the following will check whether the variable vRast exists or not?",
            answers: [
                "if (typeof vRast ==undefined) {}"
            ]
        },

        {
            question: "Which of the following will change the color of a paragraphs text to blue when a user hovers over it, and reset it back to black when the user hovers out?",
            answers: [
                "p onmouseover=style.color=blue onmouseout=style.color=black The text of the paragraph../p"
            ]
        },

        {
            question: "How can global variables be declared in JavaScript?",
            answers: [
                "Declare the variable between the script tags, and outside a function to make the variable global"
            ]
        },
    ];
    */

    return q || [].concat(upworktestanswer2015,outsourcingincome,upworktest,jobworktests,upworktestru,upworkcrack);
}