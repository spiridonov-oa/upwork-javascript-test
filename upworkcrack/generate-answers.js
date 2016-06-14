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
            "img id=imageID src=image1.gif width=50″ height=60″ onmousedown=changeimg(image1.gif) onmouseup=changeimg(image2.gif)"
        ]
    },

    {
        question: "Consider the following image definition: img id=logo src=companylogo1.gif height=12″ width=12″  Which of the following will change the image to companylogo2.gif when the page loads?",
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
        question: "Which of the following choices will remove a selection option from the code below? button idnewbtn onclick=g();Remove/button select name=selectBox id=selectBox option value=option1″option1/option option value=option2″option2/option option value=option3″option3/option option value=option4″option4/option /select",
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
        question: "An image tag is defined as follows: img id=ERImage width=100″ height=100″ onmouseover=ImageChange() src=Image1.jpg The purpose of the ImageChange() function is to change the image source to Image2.jpg. Which of the following should the ImageChange() function look like?",
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
]