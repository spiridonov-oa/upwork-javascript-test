function textConverter (text) {
    return escapeHtml(text).trim();
}


function escapeHtml(text) {
    return text
        .replace(/\s+/g, " ")
        .replace(/&#039;/g, "")
        .replace(/&lt;/g, "")
        .replace(/&gt;/g, "")
        .replace(/&quot;/g, "")
        .replace(/</g, "")
        .replace(/>/g, "")
        .replace(/«/g, "")
        .replace(/»/g, "")
        .replace(/"/g, "")
        .replace(/'/g, "")
        .replace(/′/g, "")
        .replace(/‘/g, "")
        .replace(/’/g, "")
        .replace(/“/g, "")
        .replace(/”/g, "");
}

var dataToText = "";

var questionBlockSelector = '.question-block';
var questionSelector = '.question';
var answerSelector = '.answer';

$(questionBlockSelector).each(function(num, el) {
    dataToText += "\n{ \n";
    dataToText += "question: ";
    var section = {
        question: '',
        answers: []
    };

    $(this).find(questionSelector).each(function (index, question) {
        section.question += question.childNodes[0].nodeValue.trim();
    });

    section.question = textConverter(section.question);

    dataToText += '"' + section.question + '",\n';

    section.answers = [];
    dataToText += 'answers: [\n';

    var correctAnswers = $(answerSelector, el);
    correctAnswers.each(function(index, answer) {
        var ans = textConverter(answer.innerText);
        section.answers.push(ans);
        dataToText += '"' + ans + '"';
        if (index + 1 < correctAnswers.length){
            dataToText += ',\n';
        }
    });
    dataToText += '\n]';
    dataToText += '\n},\n';
});

console.log(dataToText);