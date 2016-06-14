//ToDo: End up list of questions
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
        question: "Consider the following image definition: img id=logo src=companylogo1.gif height=12″ width=12″  Which of the following will change the image to companylogo2.gif when the page loads?",
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
        question: "An image tag is defined as follows:img id=ERImage width=100″ height=100″ onmouseover=ImageChange() src=Image1.jpgThe purpose of the ImageChange() function is to change the image source to Image2.jpg. Which of the following should the ImageChange() function look like?",
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