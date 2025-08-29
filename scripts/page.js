//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
    InitQuestion12,
    InitQuestion13,
    InitQuestion14,
    InitQuestion15,
    InitQuestion16,
    InitQuestion17,
    InitQuestion18,
    InitQuestion19,
    InitQuestion20,
    InitQuestion21,
    InitQuestion22,
    InitQuestion23,
    InitQuestion24,
    InitQuestion25,
    InitQuestion26,
    InitQuestion27,
    InitQuestion28,
    InitQuestion29,
    InitQuestion30,
    InitQuestion31,
    InitQuestion32,
    InitQuestion33,
    InitQuestion34,
    InitQuestion35,
    InitQuestion36,
    InitQuestion37,
    InitQuestion38,
    InitQuestion39,
    InitQuestion40,
    InitQuestion41,
    InitQuestion42,
    InitQuestion43,
    InitQuestion44,
    InitQuestion45,
    InitQuestion46,
    InitQuestion47,
    InitQuestion48,
    InitQuestion49,
    InitQuestion50,
    InitQuestion51,
    InitQuestion52,
<<<<<<< HEAD
=======
    InitQuestion53,
    InitQuestion54,
    InitQuestion55,
    InitQuestion56,
    InitQuestion57,
    InitQuestion58,
    InitQuestion59,
    InitQuestion60,
    InitQuestion61,
    InitQuestion62,
    InitQuestion63,
    InitQuestion64,
    InitQuestion65,
    InitQuestion66,
    InitQuestion67,
    InitQuestion68,
    InitQuestion69,
    InitQuestion70,
    InitQuestion71,
    InitQuestion72,
    InitQuestion73,
    InitQuestion74,
    InitQuestion75,
    InitQuestion76,
    InitQuestion77,
    InitQuestion78,
    InitQuestion79,
    InitQuestion80,
    InitQuestion81,
    InitQuestion82,
    InitQuestion83,
    InitQuestion84,
    InitQuestion85,
    InitQuestion86,
    InitQuestion87,
    InitQuestion88,
    InitQuestion89,
    InitQuestion90,
    InitQuestion91,
    InitQuestion92,
    InitQuestion93,
    InitQuestion94,
    InitQuestion95,
    InitQuestion96,
    InitQuestion97,
    InitQuestion98,
    InitQuestion99,
    InitQuestion100,
    InitQuestion101,
    InitQuestion102,
    InitQuestion103,
    InitQuestion104,
    InitQuestion105,
    InitQuestion106,
    InitQuestion107,
    InitQuestion108,
    InitQuestion109,
    InitQuestion110,
    InitQuestion111,
    InitQuestion112,
    InitQuestion113,
    InitQuestion114,
    InitQuestion115,
    InitQuestion116,
    InitQuestion117,
    InitQuestion118,
    InitQuestion119,
    InitQuestion120,
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
	window.scrollTo(0, 0);
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 0;
<<<<<<< HEAD
    var weight = DecodeNumber('2Ce7Qwz9g4Y=', 330, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2Ce7Qwz9g4Y=', 330, -1000, 1000),DecodeDecimal('eU8ehQmY/BA=', 330, -1000, 1000),DecodeDecimal('eU8ehQmY/BA=', 330, -1000, 1000));
=======
    var weight = DecodeNumber('OroshOvHp+A=', 210, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3HrC0SD8fNI=', 569, -1000, 1000),DecodeDecimal('TRV1+XAks/o=', 569, -1000, 1000),DecodeDecimal('TRV1+XAks/o=', 569, -1000, 1000));
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    question.answers.length = 0;
    question.num = 1;
    question.isSingleAns = true;
    question.shortTextQuestion = "What is Winston’s first day in his diary about?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
<<<<<<< HEAD
    var valuation1 = DecodeNumber('2Ce7Qwz9g4Y=', 332, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = " He describes a party rally.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qg8OblyYN6s=', 693, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = " He confesses his love for Julia.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('49hzjw8TVrQ=', 695, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = " He writes “DOWN WITH BIG BROTHER.”";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('49hzjw8TVrQ=', 697, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = " He recounts a dream about O’Brien.";
=======
    var valuation1 = DecodeNumber('3HrC0SD8fNI=', 571, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = " He confesses his love for Julia.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qQdnb8/9AgA=', 573, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = " He writes “DOWN WITH BIG BROTHER.”";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qQdnb8/9AgA=', 575, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = " He recounts a dream about O’Brien.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('V7oLOJEiBw4=', 577, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = " He describes a party rally.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 1;
<<<<<<< HEAD
    var weight = DecodeNumber('msGlbqIcZaY=', 699, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('msGlbqIcZaY=', 699, -1000, 1000),DecodeDecimal('aAJSZUJDxx0=', 699, -1000, 1000),DecodeDecimal('aAJSZUJDxx0=', 699, -1000, 1000));
=======
    var weight = DecodeNumber('KA/WZ9XOGHA=', 579, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KA/WZ9XOGHA=', 579, -1000, 1000),DecodeDecimal('wSXXxBTet5k=', 579, -1000, 1000),DecodeDecimal('wSXXxBTet5k=', 579, -1000, 1000));
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    question.answers.length = 0;
    question.num = 2;
    question.isSingleAns = true;
    question.shortTextQuestion = "The “fearful physical smell” Winston notices in his apartment refers to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
<<<<<<< HEAD
    var valuation1 = DecodeNumber('msGlbqIcZaY=', 701, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Mrs. Parsons’s house.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5Ueg16U9M/o=', 703, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "the flowers in the canteen.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VxdqVXYXPhM=', 705, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "the stale air from the broken window.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('9L+0mbFz908=', 707, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "the engine smell in Victory Mansions.";
=======
    var valuation1 = DecodeNumber('KA/WZ9XOGHA=', 581, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "the flowers in the canteen.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('l/JJ3M5zeME=', 583, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Mrs. Parsons’s house.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('R0Q8IR3BJ84=', 585, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "the engine smell in Victory Mansions.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('R0Q8IR3BJ84=', 587, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "the stale air from the broken window.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 2;
<<<<<<< HEAD
    var weight = DecodeNumber('L5CLVF381fo=', 709, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('L5CLVF381fo=', 709, -1000, 1000),DecodeDecimal('yRFzcEXT7vs=', 709, -1000, 1000),DecodeDecimal('yRFzcEXT7vs=', 709, -1000, 1000));
    question.answers.length = 0;
    question.num = 3;
    question.isSingleAns = true;
    question.shortTextQuestion = "Mrs. Parsons asks Winston to fix:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('/jJ8CVkV4EE=', 711, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "a fuse in the kitchen.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/jJ8CVkV4EE=', 713, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "her locked diary.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hNxpbcqzZQk=', 715, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "her plumbing.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Bb99L8Evuw4=', 717, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "her radio.";
=======
    var weight = DecodeNumber('JGNX98UdRXo=', 589, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JGNX98UdRXo=', 589, -1000, 1000),DecodeDecimal('KTnOdjDC2uE=', 589, -1000, 1000),DecodeDecimal('KTnOdjDC2uE=', 589, -1000, 1000));
    question.answers.length = 0;
    question.num = 3;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston buys a diary from:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('JGNX98UdRXo=', 591, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Parsons’s child.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FjvHHJIINpI=', 593, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Mr. Charrington’s antique shop.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('FjvHHJIINpI=', 595, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "the local Victory Market.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1xKtCpQEVsc=', 597, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "the Ministry of Truth canteen.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 3;
<<<<<<< HEAD
    var weight = DecodeNumber('h5bZrGNWwqo=', 719, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('h5bZrGNWwqo=', 719, -1000, 1000),DecodeDecimal('Pc9bGzG43jc=', 719, -1000, 1000),DecodeDecimal('Pc9bGzG43jc=', 719, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = true;
    question.shortTextQuestion = "Parsons’s children accuse someone of:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('a4fkM9i/xhU=', 721, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "thoughtcrime.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('a4fkM9i/xhU=', 723, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "littering.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yZxjZcB3/JA=', 725, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "stealing.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('AJXtq9aX3NU=', 727, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "spying.";
=======
    var weight = DecodeNumber('DPdw/OeBDf8=', 599, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DPdw/OeBDf8=', 599, -1000, 1000),DecodeDecimal('uL14VOzoF3I=', 599, -1000, 1000),DecodeDecimal('uL14VOzoF3I=', 599, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s dream about the Golden Country makes him feel:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('DPdw/OeBDf8=', 601, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = " suspicious of Julia";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bf8ggNRBKaY=', 603, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "nostalgic and free.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bf8ggNRBKaY=', 605, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "afraid of rats.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('t1f5lUxENPo=', 607, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "oppressed by uniforms.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 4;
<<<<<<< HEAD
    var weight = DecodeNumber('ENbQP2jxGNw=', 729, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ENbQP2jxGNw=', 729, -1000, 1000),DecodeDecimal('YR1KA1rWuYs=', 729, -1000, 1000),DecodeDecimal('YR1KA1rWuYs=', 729, -1000, 1000));
    question.answers.length = 0;
    question.num = 5;
    question.isSingleAns = true;
    question.shortTextQuestion = "In Winston’s recurring dream, he encounters:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ENbQP2jxGNw=', 731, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Emmanuel Goldstein.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('517rDRGy4lo=', 733, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Big Brother.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UrtrVU7rTbo=', 735, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "his mother and sister.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('UrtrVU7rTbo=', 737, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "O’Brien.";
=======
    var weight = DecodeNumber('cmX4RZ3BGNE=', 609, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cmX4RZ3BGNE=', 609, -1000, 1000),DecodeDecimal('JBy3erNXtxg=', 609, -1000, 1000),DecodeDecimal('JBy3erNXtxg=', 609, -1000, 1000));
    question.answers.length = 0;
    question.num = 5;
    question.isSingleAns = true;
    question.shortTextQuestion = "Mrs. Parsons asks Winston to fix:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('cmX4RZ3BGNE=', 611, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "her locked diary.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zgryWyBPY8M=', 613, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "a fuse in the kitchen.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zgryWyBPY8M=', 615, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "her radio.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kaQbJImXlaU=', 617, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "her plumbing.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 5;
<<<<<<< HEAD
    var weight = DecodeNumber('frQwL8htXyQ=', 739, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('frQwL8htXyQ=', 739, -1000, 1000),DecodeDecimal('DcDnwZgZsRw=', 739, -1000, 1000),DecodeDecimal('DcDnwZgZsRw=', 739, -1000, 1000));
    question.answers.length = 0;
    question.num = 6;
    question.isSingleAns = true;
    question.shortTextQuestion = "The telescreen in his flat:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ap6kL5HYkAc=', 741, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "has no volume control. ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ap6kL5HYkAc=', 743, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "never turns off.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WKd4j+uguZQ=', 745, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "breaks down often.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('AqRKhjc9+8E=', 747, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "only watches his hallway.";
=======
    var weight = DecodeNumber('w6N1eadkObE=', 619, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('w6N1eadkObE=', 619, -1000, 1000),DecodeDecimal('KwVzGLjHK9Y=', 619, -1000, 1000),DecodeDecimal('KwVzGLjHK9Y=', 619, -1000, 1000));
    question.answers.length = 0;
    question.num = 6;
    question.isSingleAns = true;
    question.shortTextQuestion = "Parsons’s children accuse someone of:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('w6N1eadkObE=', 621, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "littering.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0lMTEZdH3NQ=', 623, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "thoughtcrime.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0lMTEZdH3NQ=', 625, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "spying.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+rioe0sFbzE=', 627, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "stealing.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 6;
<<<<<<< HEAD
    var weight = DecodeNumber('ClACWIis3e4=', 749, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ClACWIis3e4=', 749, -1000, 1000),DecodeDecimal('RKHYOlrve90=', 749, -1000, 1000),DecodeDecimal('RKHYOlrve90=', 749, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s actual work at the Ministry is to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ClACWIis3e4=', 751, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "draft propaganda posters.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XF3vWnX7hFA=', 753, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "guard Goldstein.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('U8iTSourEKQ=', 755, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "rewrite old news articles. ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('U8iTSourEKQ=', 757, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "monitor telescreens.";
=======
    var weight = DecodeNumber('Htflnl7NiME=', 629, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Htflnl7NiME=', 629, -1000, 1000),DecodeDecimal('nIcRLtZr4oM=', 629, -1000, 1000),DecodeDecimal('nIcRLtZr4oM=', 629, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = true;
    question.shortTextQuestion = "The Parsons children belong to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Htflnl7NiME=', 631, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "the Minipax program.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('P2ozo93rBFs=', 633, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "the Youth League.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BrUVtGFAgIw=', 635, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "the Brotherhood.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7U1+1w9Zjko=', 637, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "the Spies.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 7;
<<<<<<< HEAD
    var weight = DecodeNumber('BIdcsvG9SoM=', 759, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BIdcsvG9SoM=', 759, -1000, 1000),DecodeDecimal('PDwXsMIIL88=', 759, -1000, 1000),DecodeDecimal('PDwXsMIIL88=', 759, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston alters records about:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('BIdcsvG9SoM=', 761, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "spy reports.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ui0AhPWTkNk=', 763, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "weather patterns.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dgT4D/Bvqto=', 765, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "chocolate rations. ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('dgT4D/Bvqto=', 767, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "children’s crimes.";
=======
    var weight = DecodeNumber('Vc2lBaNtd4U=', 639, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Vc2lBaNtd4U=', 639, -1000, 1000),DecodeDecimal('0O3qOfzAfcI=', 639, -1000, 1000),DecodeDecimal('0O3qOfzAfcI=', 639, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = true;
    question.shortTextQuestion = "After the children leave, Winston feels:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Vc2lBaNtd4U=', 641, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "inspired to rebel.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MX8JsI4meFo=', 643, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "terrified.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/5R2W39Xhc8=', 645, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "disgusted.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('/5R2W39Xhc8=', 647, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "cheerful.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 8;
<<<<<<< HEAD
    var weight = DecodeNumber('hj1Jas6VfK8=', 769, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hj1Jas6VfK8=', 769, -1000, 1000),DecodeDecimal('hPjFVrv936c=', 769, -1000, 1000),DecodeDecimal('hPjFVrv936c=', 769, -1000, 1000));
    question.answers.length = 0;
    question.num = 9;
    question.isSingleAns = true;
    question.shortTextQuestion = "What is the main subject of Syme’s conversation with Winston?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('hj1Jas6VfK8=', 771, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The dwindling chocolate rations.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('W1vTsayc2H4=', 773, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The coming Two Minutes Hate.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kUX1NruFXcU=', 775, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Expanding Newspeak vocabulary. ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kUX1NruFXcU=', 777, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Julia’s rumored activities.";
=======
    var weight = DecodeNumber('js1RPHahJqE=', 649, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('js1RPHahJqE=', 649, -1000, 1000),DecodeDecimal('FBzrt9jrz6s=', 649, -1000, 1000),DecodeDecimal('FBzrt9jrz6s=', 649, -1000, 1000));
    question.answers.length = 0;
    question.num = 9;
    question.isSingleAns = true;
    question.shortTextQuestion = "In Winston’s recurring dream, he encounters:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('js1RPHahJqE=', 651, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Big Brother.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('39Ri3TeGTDo=', 653, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Emmanuel Goldstein.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xuJsMseIDjQ=', 655, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "O’Brien.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('iLHHf/riWM0=', 657, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "his mother and sister.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 9;
<<<<<<< HEAD
    var weight = DecodeNumber('5mo8mA6WC7M=', 779, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5mo8mA6WC7M=', 779, -1000, 1000),DecodeDecimal('F1b03ek2rTs=', 779, -1000, 1000),DecodeDecimal('F1b03ek2rTs=', 779, -1000, 1000));
    question.answers.length = 0;
    question.num = 10;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston thinks Syme will eventually be:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ZD4oU4km8Dc=', 781, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "vaporized. ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZD4oU4km8Dc=', 783, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "outside Oceania.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('925KEv0ORrk=', 785, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "sent to the Ministry of Love.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('9zGCue5Lw3g=', 787, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "made Inner Party.";
=======
    var weight = DecodeNumber('Mvfm4h/W+cI=', 659, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Mvfm4h/W+cI=', 659, -1000, 1000),DecodeDecimal('RXSfd0KLJZk=', 659, -1000, 1000),DecodeDecimal('RXSfd0KLJZk=', 659, -1000, 1000));
    question.answers.length = 0;
    question.num = 10;
    question.isSingleAns = true;
    question.shortTextQuestion = "The telescreen in his flat:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Mvfm4h/W+cI=', 661, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "never turns off.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1TJZS6HYdt0=', 663, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "has no volume control. ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1TJZS6HYdt0=', 665, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "only watches his hallway.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('SpaDn3tMTeg=', 667, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "breaks down often.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 10;
<<<<<<< HEAD
    var weight = DecodeNumber('LHIOjWxnRLI=', 789, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('LHIOjWxnRLI=', 789, -1000, 1000),DecodeDecimal('5ppfpgf5apM=', 789, -1000, 1000),DecodeDecimal('5ppfpgf5apM=', 789, -1000, 1000));
    question.answers.length = 0;
    question.num = 11;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s affair with Julia begins with:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('LHIOjWxnRLI=', 791, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "meeting in the antique shop.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JwyV0FTZZuc=', 793, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "overhearing her at work.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5ciBOcknEGI=', 795, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "exchanging a slip of paper.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('5ciBOcknEGI=', 797, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "a note in Parsons’s diary.";
=======
    var weight = DecodeNumber('VBA0wiDgQ4o=', 669, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VBA0wiDgQ4o=', 669, -1000, 1000),DecodeDecimal('4IOFUajDoBc=', 669, -1000, 1000),DecodeDecimal('4IOFUajDoBc=', 669, -1000, 1000));
    question.answers.length = 0;
    question.num = 11;
    question.isSingleAns = true;
    question.shortTextQuestion = "Which slogan does Winston reflect on?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('VBA0wiDgQ4o=', 671, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Unity is Peace.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PTnEQQD+uaM=', 673, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Freedom is Happiness.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fDQnSKKOkp0=', 675, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Obedience is Power.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('fDQnSKKOkp0=', 677, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Ignorance is Strength. ";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 11;
<<<<<<< HEAD
    var weight = DecodeNumber('fcbcKncDq8c=', 799, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fcbcKncDq8c=', 799, -1000, 1000),DecodeDecimal('t4JCFMv6M6c=', 799, -1000, 1000),DecodeDecimal('t4JCFMv6M6c=', 799, -1000, 1000));
    question.answers.length = 0;
    question.num = 12;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia slips Winston a note that says:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('eq4CF6FXBEM=', 801, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "“I love you.”";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('eq4CF6FXBEM=', 803, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "“Don’t trust O’Brien.”";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CfNjW954u+o=', 805, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "“I love Big Brother.”";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('9IxJNTEdx50=', 807, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "“Meet me by the fountain.”";
=======
    var weight = DecodeNumber('u8qUhyDGTfU=', 679, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('u8qUhyDGTfU=', 679, -1000, 1000),DecodeDecimal('PH1ImH3F7EQ=', 679, -1000, 1000),DecodeDecimal('PH1ImH3F7EQ=', 679, -1000, 1000));
    question.answers.length = 0;
    question.num = 12;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s feelings about his job are:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('u8qUhyDGTfU=', 681, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "confused.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('K4Xc/mdhjiA=', 683, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "indifferent.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MKPPbAPNyek=', 685, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "full of shame. ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MKPPbAPNyek=', 687, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "enthusiastic.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 12;
<<<<<<< HEAD
    var weight = DecodeNumber('fnZvHBVdulQ=', 809, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fnZvHBVdulQ=', 809, -1000, 1000),DecodeDecimal('xJ44hih6Sxg=', 809, -1000, 1000),DecodeDecimal('xJ44hih6Sxg=', 809, -1000, 1000));
    question.answers.length = 0;
    question.num = 13;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston writes in his diary that the Party wants to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('fnZvHBVdulQ=', 811, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "rewrite time.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('r6PUJ0dztWc=', 813, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "control minds.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('r6PUJ0dztWc=', 815, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "abolish ideas.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('f7P1wVp91Po=', 817, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "increase production.";
=======
    var weight = DecodeNumber('v8z6Fbxduzs=', 689, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('v8z6Fbxduzs=', 689, -1000, 1000),DecodeDecimal('ifWgc5KxC7U=', 689, -1000, 1000),DecodeDecimal('ifWgc5KxC7U=', 689, -1000, 1000));
    question.answers.length = 0;
    question.num = 13;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s actual work at the Ministry is to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('v8z6Fbxduzs=', 691, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "guard Goldstein.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bnsBvorbT9U=', 693, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "draft propaganda posters.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9+nXpvl9QWE=', 695, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "monitor telescreens.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0smh6vpNw40=', 697, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "rewrite old news articles. ";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 13;
<<<<<<< HEAD
    var weight = DecodeNumber('d2PNqM5DBEE=', 819, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('d2PNqM5DBEE=', 819, -1000, 1000),DecodeDecimal('thFVXHegykE=', 819, -1000, 1000),DecodeDecimal('thFVXHegykE=', 819, -1000, 1000));
    question.answers.length = 0;
    question.num = 14;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston recalls his mother as:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('d2PNqM5DBEE=', 821, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "cruel and distant.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LPy/SMMoxb4=', 823, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "a Party supporter.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JRttA1/TiaU=', 825, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "weak but loving.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('JRttA1/TiaU=', 827, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "secretly rebellious.";
=======
    var weight = DecodeNumber('y4FM7TamS5A=', 699, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('y4FM7TamS5A=', 699, -1000, 1000),DecodeDecimal('IXhFzfFj5dc=', 699, -1000, 1000),DecodeDecimal('IXhFzfFj5dc=', 699, -1000, 1000));
    question.answers.length = 0;
    question.num = 14;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston alters records about:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('y4FM7TamS5A=', 701, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "weather patterns.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zb90TLnjjNU=', 703, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "spy reports.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rpe4qToBve0=', 705, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "children’s crimes.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('fiZrAjwsCC0=', 707, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "chocolate rations. ";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 14;
<<<<<<< HEAD
    var weight = DecodeNumber('ySJxqLhDIrw=', 829, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ySJxqLhDIrw=', 829, -1000, 1000),DecodeDecimal('XMmjNaGtL1E=', 829, -1000, 1000),DecodeDecimal('XMmjNaGtL1E=', 829, -1000, 1000));
    question.answers.length = 0;
    question.num = 15;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston ventures into the prole district to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ySJxqLhDIrw=', 831, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "meet Julia.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LGkgA0uLAGw=', 833, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "attend a rally.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TB7mR5jU+ts=', 835, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "escape telescreens.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('RIz0TPS6Ad8=', 837, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "buy wine. ";
=======
    var weight = DecodeNumber('+7wIVCwRMp0=', 709, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+7wIVCwRMp0=', 709, -1000, 1000),DecodeDecimal('J+TGCDiT464=', 709, -1000, 1000),DecodeDecimal('J+TGCDiT464=', 709, -1000, 1000));
    question.answers.length = 0;
    question.num = 15;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston thinks of Syme as:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('+7wIVCwRMp0=', 711, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "someone dull.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('X3ggdRbLCVs=', 713, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "a loyal worshiper.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zQ4bYov+7Do=', 715, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "a secret brotherhood member.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('zQ4bYov+7Do=', 717, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "unintentionally dangerous. ";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 15;
<<<<<<< HEAD
    var weight = DecodeNumber('OWOVpQN8JWM=', 839, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('OWOVpQN8JWM=', 839, -1000, 1000),DecodeDecimal('JcB/CUbz4eo=', 839, -1000, 1000),DecodeDecimal('JcB/CUbz4eo=', 839, -1000, 1000));
    question.answers.length = 0;
    question.num = 16;
    question.isSingleAns = true;
    question.shortTextQuestion = "He visits Mr. Charrington’s shop to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('gicTXoVHeQQ=', 841, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "get a map.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gicTXoVHeQQ=', 843, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "report a spy.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DvjthArGqO4=', 845, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "purchase pills.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('XxoF/vOy1iU=', 847, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "sell his diary.";
=======
    var weight = DecodeNumber('9ktUfiEejq0=', 719, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9ktUfiEejq0=', 719, -1000, 1000),DecodeDecimal('E0pIzhr+7J8=', 719, -1000, 1000),DecodeDecimal('E0pIzhr+7J8=', 719, -1000, 1000));
    question.answers.length = 0;
    question.num = 16;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston notices that the new edition of the Newspeak dictionary is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('9ktUfiEejq0=', 721, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "humorous.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gBl/LU1TQkY=', 723, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "defunct.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xzERTspeTWE=', 725, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "dangerous.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xzERTspeTWE=', 727, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = " unfinished.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 16;
<<<<<<< HEAD
    var weight = DecodeNumber('mgSf9botn9c=', 849, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mgSf9botn9c=', 849, -1000, 1000),DecodeDecimal('lFWivsI2kqk=', 849, -1000, 1000),DecodeDecimal('lFWivsI2kqk=', 849, -1000, 1000));
    question.answers.length = 0;
    question.num = 17;
    question.isSingleAns = true;
    question.shortTextQuestion = "What event causes a long workday for Winston?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('mgSf9botn9c=', 851, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A power outage";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lHSdH3ob7XY=', 853, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Hate Week preparations ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lHSdH3ob7XY=', 855, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "An Inner Party speech";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('3fytxJxJvu0=', 857, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A new telescreen policy";
=======
    var weight = DecodeNumber('T0tHHgAIXf0=', 729, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('T0tHHgAIXf0=', 729, -1000, 1000),DecodeDecimal('5PpUAtKVBd4=', 729, -1000, 1000),DecodeDecimal('5PpUAtKVBd4=', 729, -1000, 1000));
    question.answers.length = 0;
    question.num = 17;
    question.isSingleAns = true;
    question.shortTextQuestion = "What is the main subject of Syme’s conversation with Winston?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('T0tHHgAIXf0=', 731, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The coming Two Minutes Hate.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('tn+Ubeg15Cg=', 733, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The dwindling chocolate rations.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('v8zdceKFV5Y=', 735, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Julia’s rumored activities.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('27m/4pz5cyA=', 737, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Expanding Newspeak vocabulary. ";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion18()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 17;
<<<<<<< HEAD
    var weight = DecodeNumber('WgDH9QvykOI=', 859, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('WgDH9QvykOI=', 859, -1000, 1000),DecodeDecimal('3MICKNXdAtY=', 859, -1000, 1000),DecodeDecimal('3MICKNXdAtY=', 859, -1000, 1000));
    question.answers.length = 0;
    question.num = 18;
    question.isSingleAns = true;
    question.shortTextQuestion = "During the sudden switch in enemies,  Winston is tasked with:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('WgDH9QvykOI=', 861, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "capturing enemy spies";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7E8ha2fC4Xs=', 863, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "memorizing new slogans";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kTyHeY27HBY=', 865, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "rewriting all historical records ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kTyHeY27HBY=', 867, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "burning Party posters";
=======
    var weight = DecodeNumber('Kp9NfF5gboo=', 739, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Kp9NfF5gboo=', 739, -1000, 1000),DecodeDecimal('KCLhYcEzrTQ=', 739, -1000, 1000),DecodeDecimal('KCLhYcEzrTQ=', 739, -1000, 1000));
    question.answers.length = 0;
    question.num = 18;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston thinks Syme will eventually be:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Kp9NfF5gboo=', 741, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "outside Oceania.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('l39Zw8ZoQtg=', 743, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "vaporized. ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('l39Zw8ZoQtg=', 745, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "made Inner Party.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('w9wkixYnpL4=', 747, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "sent to the Ministry of Love.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 18;
<<<<<<< HEAD
    var weight = DecodeNumber('Fk7MN5mHuoU=', 869, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Fk7MN5mHuoU=', 869, -1000, 1000),DecodeDecimal('FvZGBGChk2s=', 869, -1000, 1000),DecodeDecimal('FvZGBGChk2s=', 869, -1000, 1000));
    question.answers.length = 0;
    question.num = 19;
    question.isSingleAns = true;
    question.shortTextQuestion = "What surprises Winston and Julia in Mr. Charrington’s room?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Fk7MN5mHuoU=', 871, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A Party slogan carved into the wall";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fXEN+yDdYSc=', 873, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A map of Eastasia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZW570rcS2MM=', 875, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "An Inner Party coat";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('gEHVLR8b6J0=', 877, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A hidden telescreen ";
=======
    var weight = DecodeNumber('ND/GPos/cNE=', 749, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ND/GPos/cNE=', 749, -1000, 1000),DecodeDecimal('9HMndgDMPR8=', 749, -1000, 1000),DecodeDecimal('9HMndgDMPR8=', 749, -1000, 1000));
    question.answers.length = 0;
    question.num = 19;
    question.isSingleAns = true;
    question.shortTextQuestion = "What is nearly impossible in Newspeak?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ND/GPos/cNE=', 751, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Spying on neighbors.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Dob68rHfj3k=', 753, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Speaking at rallies.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nKlGpDnDMA4=', 755, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Writing poetry.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('5KRaCP6Pnx8=', 757, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Expressing complexity. ";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion20()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 19;
<<<<<<< HEAD
    var weight = DecodeNumber('etSnNFbFFrI=', 879, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('etSnNFbFFrI=', 879, -1000, 1000),DecodeDecimal('aEM4ULKzmNs=', 879, -1000, 1000),DecodeDecimal('aEM4ULKzmNs=', 879, -1000, 1000));
    question.answers.length = 0;
    question.num = 20;
    question.isSingleAns = true;
    question.shortTextQuestion = "What do they see from the window that affects them deeply?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('etSnNFbFFrI=', 881, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Goldstein’s symbol";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZNTLAluN3fs=', 883, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Children playing with telescreens";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VBLoIc9dqjc=', 885, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A woman hanging laundry ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('VBLoIc9dqjc=', 887, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A prole fight";
=======
    var weight = DecodeNumber('385yeTwpnXU=', 759, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('385yeTwpnXU=', 759, -1000, 1000),DecodeDecimal('KjQ84QHAa6U=', 759, -1000, 1000),DecodeDecimal('KjQ84QHAa6U=', 759, -1000, 1000));
    question.answers.length = 0;
    question.num = 20;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s feelings about Newspeak are:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('385yeTwpnXU=', 761, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "bored with its simplicity.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('tZVYFLtbUEM=', 763, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "alarmed by its threat. ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tZVYFLtbUEM=', 765, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "hopeful it will free him.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('2WjrXor04mg=', 767, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "amused by its creativity.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion21()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 20;
<<<<<<< HEAD
    var weight = DecodeNumber('DjUd6BerT+U=', 889, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DjUd6BerT+U=', 889, -1000, 1000),DecodeDecimal('85scm27zOPA=', 889, -1000, 1000),DecodeDecimal('85scm27zOPA=', 889, -1000, 1000));
    question.answers.length = 0;
    question.num = 21;
    question.isSingleAns = true;
    question.shortTextQuestion = "Where do Winston and Julia first meet alone?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('DjUd6BerT+U=', 891, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The Ministry of Truth";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/W42BOWzxuw=', 893, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Charrington’s shop";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XFojciQAcQQ=', 895, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The wooded area outside London ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('XFojciQAcQQ=', 897, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Victory Square";
=======
    var weight = DecodeNumber('RGz9VACML7g=', 769, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('RGz9VACML7g=', 769, -1000, 1000),DecodeDecimal('oNz1C7rNx3M=', 769, -1000, 1000),DecodeDecimal('oNz1C7rNx3M=', 769, -1000, 1000));
    question.answers.length = 0;
    question.num = 21;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s affair with Julia begins with:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('RGz9VACML7g=', 771, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "overhearing her at work.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('31hakHD/Xfk=', 773, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "meeting in the antique shop.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KF9eaV0la04=', 775, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "a note in Parsons’s diary.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('JYnSBHlsBMA=', 777, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "exchanging a slip of paper.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion22()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 21;
<<<<<<< HEAD
    var weight = DecodeNumber('DP8QHI1cBMM=', 899, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DP8QHI1cBMM=', 899, -1000, 1000),DecodeDecimal('/hU8iQTxPd8=', 899, -1000, 1000),DecodeDecimal('/hU8iQTxPd8=', 899, -1000, 1000));
    question.answers.length = 0;
    question.num = 22;
    question.isSingleAns = true;
    question.shortTextQuestion = "What emotion overtakes Winston during the meeting?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('DP8QHI1cBMM=', 901, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Fear of discovery";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xUVJgKnDYds=', 903, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Uncontrollable desire ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xUVJgKnDYds=', 905, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Doubt in Julia";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('f7j/u1/ifpg=', 907, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Political confusion";
=======
    var weight = DecodeNumber('yWCodsM5qWU=', 779, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yWCodsM5qWU=', 779, -1000, 1000),DecodeDecimal('3fuBc/OHEgQ=', 779, -1000, 1000),DecodeDecimal('3fuBc/OHEgQ=', 779, -1000, 1000));
    question.answers.length = 0;
    question.num = 22;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia slips Winston a note that says:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('yWCodsM5qWU=', 781, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "“Don’t trust O’Brien.”";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('omgkuLz8CTg=', 783, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "“I love you.”";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('omgkuLz8CTg=', 785, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "“Meet me by the fountain.”";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xsV6gw+s3CA=', 787, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "“I love Big Brother.”";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion23()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 22;
<<<<<<< HEAD
    var weight = DecodeNumber('AfF9NXGQaCQ=', 909, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('AfF9NXGQaCQ=', 909, -1000, 1000),DecodeDecimal('9FLEgaHT9BA=', 909, -1000, 1000),DecodeDecimal('9FLEgaHT9BA=', 909, -1000, 1000));
    question.answers.length = 0;
    question.num = 23;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia brings Winston what item as a luxury?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('AfF9NXGQaCQ=', 911, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A really working radio";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VRTK5NJ9W6U=', 913, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Some wine";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('IMz18gyLEac=', 915, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A gold wedding ring";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('pqVdk/ZsEok=', 917, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Real chocolate";
=======
    var weight = DecodeNumber('9/fDkvzQvUc=', 789, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9/fDkvzQvUc=', 789, -1000, 1000),DecodeDecimal('Lfc6IN6mKy0=', 789, -1000, 1000),DecodeDecimal('Lfc6IN6mKy0=', 789, -1000, 1000));
    question.answers.length = 0;
    question.num = 23;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s immediate reaction to the note is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('9/fDkvzQvUc=', 791, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "indifferent.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JAtdUvAklFc=', 793, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "elated. ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JAtdUvAklFc=', 795, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "fearful.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('13AXLy26hts=', 797, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "suspicious.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion24()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 23;
<<<<<<< HEAD
    var weight = DecodeNumber('ZoU94LZOKOw=', 919, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZoU94LZOKOw=', 919, -1000, 1000),DecodeDecimal('yoPTwrnjF04=', 919, -1000, 1000),DecodeDecimal('yoPTwrnjF04=', 919, -1000, 1000));
    question.answers.length = 0;
    question.num = 24;
    question.isSingleAns = true;
    question.shortTextQuestion = "What does the thrush’s song represent to Winston?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ZoU94LZOKOw=', 921, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A sign from O’Brien";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('e8lvkjhyUjw=', 923, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Political hope";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0P84gmb1ubM=', 925, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A coded message";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('QhEdN5O0GwY=', 927, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Beauty without purpose ";
=======
    var weight = DecodeNumber('uGVtfZBYAnU=', 799, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('uGVtfZBYAnU=', 799, -1000, 1000),DecodeDecimal('chgNAU7bnr4=', 799, -1000, 1000),DecodeDecimal('chgNAU7bnr4=', 799, -1000, 1000));
    question.answers.length = 0;
    question.num = 24;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia claims her rebellion stems from:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('uGVtfZBYAnU=', 801, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "political theory.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('I7Xnv6XXWPk=', 803, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "love of thought.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MZN/7ALYiLo=', 805, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "sexual freedom. ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MZN/7ALYiLo=', 807, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "hatred of suffering.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion25()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 24;
<<<<<<< HEAD
    var weight = DecodeNumber('IvQ55HL5boM=', 929, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('IvQ55HL5boM=', 929, -1000, 1000),DecodeDecimal('1YPCDvNE8t0=', 929, -1000, 1000),DecodeDecimal('1YPCDvNE8t0=', 929, -1000, 1000));
    question.answers.length = 0;
    question.num = 25;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s physical condition improves due to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('IvQ55HL5boM=', 931, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Julia’s insistence on exercise";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fYtfr0Shjxw=', 933, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Regular walks and better food ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fYtfr0Shjxw=', 935, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Access to Inner Party medicine";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('LEEFHDXTaTw=', 937, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Parole from the Ministry";
=======
    var weight = DecodeNumber('7zhZrt7UCPs=', 809, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7zhZrt7UCPs=', 809, -1000, 1000),DecodeDecimal('YoTojpzQ2lM=', 809, -1000, 1000),DecodeDecimal('YoTojpzQ2lM=', 809, -1000, 1000));
    question.answers.length = 0;
    question.num = 25;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston writes in his diary that the Party wants to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('6kC7fQyvsPM=', 811, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "control minds.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6kC7fQyvsPM=', 813, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "rewrite time.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mabbTEWtyo0=', 815, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "increase production.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nHT/MEtQnxk=', 817, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "abolish ideas.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion26()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 25;
<<<<<<< HEAD
    var weight = DecodeNumber('QTD/w1TZMUk=', 939, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QTD/w1TZMUk=', 939, -1000, 1000),DecodeDecimal('ttjMMyzZmd8=', 939, -1000, 1000),DecodeDecimal('ttjMMyzZmd8=', 939, -1000, 1000));
    question.answers.length = 0;
    question.num = 26;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston wakes up from a dream about:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('1a4hbBWBCWY=', 941, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "His mother and sister ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1a4hbBWBCWY=', 943, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The Ministry of Love";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Og7ecbBnH4Y=', 945, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A prole uprising";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Ds9548NVjEQ=', 947, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Julia being arrested";
=======
    var weight = DecodeNumber('Tnhja8Asvxw=', 819, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Tnhja8Asvxw=', 819, -1000, 1000),DecodeDecimal('6qjr5Uuunvc=', 819, -1000, 1000),DecodeDecimal('6qjr5Uuunvc=', 819, -1000, 1000));
    question.answers.length = 0;
    question.num = 26;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston recalls his mother as:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Tnhja8Asvxw=', 821, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "a Party supporter.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hdAub1xEbSs=', 823, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "cruel and distant.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iQK3qpCGWrQ=', 825, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "secretly rebellious.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('q/0XXlbMdlc=', 827, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "weak but loving.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion27()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 26;
<<<<<<< HEAD
    var weight = DecodeNumber('o4lKMtpSc6M=', 949, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('o4lKMtpSc6M=', 949, -1000, 1000),DecodeDecimal('uN8awhHjGzA=', 949, -1000, 1000),DecodeDecimal('uN8awhHjGzA=', 949, -1000, 1000));
    question.answers.length = 0;
    question.num = 27;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia gives Winston a set of:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('o4lKMtpSc6M=', 951, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A government's leaflet";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NV1tD3EUkcE=', 953, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Real coffee and sugar packets ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NV1tD3EUkcE=', 955, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A gold ring";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('avwHlYaQfxg=', 957, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Prole bread and cheese";
=======
    var weight = DecodeNumber('hUcDzuToJDw=', 829, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hUcDzuToJDw=', 829, -1000, 1000),DecodeDecimal('zk2uLobuyvM=', 829, -1000, 1000),DecodeDecimal('zk2uLobuyvM=', 829, -1000, 1000));
    question.answers.length = 0;
    question.num = 27;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston believes that to exist truly is to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('JzVwy1zgafY=', 831, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "think independently.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JzVwy1zgafY=', 833, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "conform outwardly.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Ulpz/dGjZb0=', 835, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "die unnoticed.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hylehagAYZk=', 837, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "serve Big Brother.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion28()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 27;
<<<<<<< HEAD
    var weight = DecodeNumber('YM1B4Qq8kZA=', 959, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YM1B4Qq8kZA=', 959, -1000, 1000),DecodeDecimal('do+2KFB43FM=', 959, -1000, 1000),DecodeDecimal('do+2KFB43FM=', 959, -1000, 1000));
    question.answers.length = 0;
    question.num = 28;
    question.isSingleAns = true;
    question.shortTextQuestion = "Their hiding spot is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('YM1B4Qq8kZA=', 961, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A secure Ministry office";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mtXKYAGcNiE=', 963, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "An attic in Victory Mansions";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('f+xi4v8JQwM=', 965, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A room above Charrington’s shop ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('f+xi4v8JQwM=', 967, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A share of the Ministry basement";
=======
    var weight = DecodeNumber('64pm4FFV5Ac=', 839, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('64pm4FFV5Ac=', 839, -1000, 1000),DecodeDecimal('zBSK5M/OJC4=', 839, -1000, 1000),DecodeDecimal('zBSK5M/OJC4=', 839, -1000, 1000));
    question.answers.length = 0;
    question.num = 28;
    question.isSingleAns = true;
    question.shortTextQuestion = "He realizes hope lies in the:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('64pm4FFV5Ac=', 841, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "teleprompters.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ShpJ9lvuUCU=', 843, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Inner Party.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lINWmnmEPXM=', 845, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Thought Police.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('CW0YMPHm4Ww=', 847, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "proles.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion29()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 28;
<<<<<<< HEAD
    var weight = DecodeNumber('8Ovs96U26qw=', 969, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8Ovs96U26qw=', 969, -1000, 1000),DecodeDecimal('89Ktgua69pw=', 969, -1000, 1000),DecodeDecimal('89Ktgua69pw=', 969, -1000, 1000));
    question.answers.length = 0;
    question.num = 29;
    question.isSingleAns = true;
    question.shortTextQuestion = "What does Winston complain about in the room?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('8Ovs96U26qw=', 971, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Heat from the telescreen";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7jUZecAT4+Q=', 973, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Rumor of spies";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MUgbCHPCTZc=', 975, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The glass paperweight’s age ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MUgbCHPCTZc=', 977, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Julia’s lateness";
=======
    var weight = DecodeNumber('oqRjGaErZ2k=', 849, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oqRjGaErZ2k=', 849, -1000, 1000),DecodeDecimal('k9ynJH+h7cM=', 849, -1000, 1000),DecodeDecimal('k9ynJH+h7cM=', 849, -1000, 1000));
    question.answers.length = 0;
    question.num = 29;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston ventures into the prole district to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('oqRjGaErZ2k=', 851, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "attend a rally.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('APoMZ0A8rAY=', 853, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "meet Julia.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZQ0UUpPAI/8=', 855, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "buy wine. ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ZQ0UUpPAI/8=', 857, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "escape telescreens.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion30()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 29;
<<<<<<< HEAD
    var weight = DecodeNumber('XIZl1A6ultw=', 979, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('XIZl1A6ultw=', 979, -1000, 1000),DecodeDecimal('RHdiAR3l5vM=', 979, -1000, 1000),DecodeDecimal('RHdiAR3l5vM=', 979, -1000, 1000));
    question.answers.length = 0;
    question.num = 30;
    question.isSingleAns = true;
    question.shortTextQuestion = "They ignore:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('nfTLoJAbptc=', 981, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A news broadcast outside ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nfTLoJAbptc=', 983, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Their own heartbeat";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Mdc1nmvVkXI=', 985, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The smell of smoke";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('dCythh9Qozo=', 987, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A police siren";
=======
    var weight = DecodeNumber('H2rmave2f4o=', 859, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('H2rmave2f4o=', 859, -1000, 1000),DecodeDecimal('lDV49N4IH0M=', 859, -1000, 1000),DecodeDecimal('lDV49N4IH0M=', 859, -1000, 1000));
    question.answers.length = 0;
    question.num = 30;
    question.isSingleAns = true;
    question.shortTextQuestion = "He visits Mr. Charrington’s shop to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('H2rmave2f4o=', 861, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "report a spy.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ODijWqBgPOs=', 863, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "get a map.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ODijWqBgPOs=', 865, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "sell his diary.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('KMVh4GhNPuc=', 867, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "purchase pills.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion31()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 30;
<<<<<<< HEAD
    var weight = DecodeNumber('YBehKnsp3sE=', 989, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YBehKnsp3sE=', 989, -1000, 1000),DecodeDecimal('Arb3SMJjxgA=', 989, -1000, 1000),DecodeDecimal('Arb3SMJjxgA=', 989, -1000, 1000));
    question.answers.length = 0;
    question.num = 31;
    question.isSingleAns = true;
    question.shortTextQuestion = "The most dangerous threat they face is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('M2bbfFcvIK8=', 991, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The hidden telescreen ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('M2bbfFcvIK8=', 993, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Mr. Charrington reporting them";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VaIrF+9VgJE=', 995, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Being seen by Parsons";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('fg5xP9dTxoQ=', 997, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The proles discovering them";
=======
    var weight = DecodeNumber('zNqY6ymMzSE=', 869, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zNqY6ymMzSE=', 869, -1000, 1000),DecodeDecimal('y0xdEAEIo2E=', 869, -1000, 1000),DecodeDecimal('y0xdEAEIo2E=', 869, -1000, 1000));
    question.answers.length = 0;
    question.num = 31;
    question.isSingleAns = true;
    question.shortTextQuestion = "The prole woman he overhears singing seems:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('zNqY6ymMzSE=', 871, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "angry at the Party.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('AGj3waTO+3c=', 873, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "joyfully oblivious.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('AGj3waTO+3c=', 875, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "indoctrinated fully.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Lmk6kyDIubY=', 877, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "suspicious and secretive.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion32()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 31;
<<<<<<< HEAD
    var weight = DecodeNumber('nWI/vgdvte4=', 999, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('nWI/vgdvte4=', 999, -1000, 1000),DecodeDecimal('Eg4NFk6X9O8=', 999, -1000, 1000),DecodeDecimal('Eg4NFk6X9O8=', 999, -1000, 1000));
    question.answers.length = 0;
    question.num = 32;
    question.isSingleAns = true;
    question.shortTextQuestion = "When do they realize they are watched?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('nWI/vgdvte4=', 1001, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Noticing a new smiley eye";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RBaPO2zC7+s=', 1003, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Sensing cold air";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MUm7+oQsI/c=', 1005, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Hearing footsteps upstairs";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('n7xRei42SdA=', 1007, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Spotting a microphone";
=======
    var weight = DecodeNumber('UqPIt/vTC40=', 879, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UqPIt/vTC40=', 879, -1000, 1000),DecodeDecimal('MkyOo7D6hPE=', 879, -1000, 1000),DecodeDecimal('MkyOo7D6hPE=', 879, -1000, 1000));
    question.answers.length = 0;
    question.num = 32;
    question.isSingleAns = true;
    question.shortTextQuestion = "What breaks for Winston in the shop?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('UqPIt/vTC40=', 881, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The telescreen.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xpslSaHi4dI=', 883, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A glass paperweight.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+/Zsx5jX+oM=', 885, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "His resolve.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+/Zsx5jX+oM=', 887, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A door.";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion33()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 32;
<<<<<<< HEAD
    var weight = DecodeNumber('0fZnYNLiPF8=', 1009, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0fZnYNLiPF8=', 1009, -1000, 1000),DecodeDecimal('q71VjH61MDo=', 1009, -1000, 1000),DecodeDecimal('q71VjH61MDo=', 1009, -1000, 1000));
    question.answers.length = 0;
    question.num = 33;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston writes about:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('0fZnYNLiPF8=', 1011, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Julia’s past";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('SMM3ilo/NiQ=', 1013, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Prole rumors";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('e97rG3w6wzg=', 1015, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The Brotherhood ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('e97rG3w6wzg=', 1017, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Party slogans";
=======
    var weight = DecodeNumber('psQ7gvfAEX0=', 889, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('psQ7gvfAEX0=', 889, -1000, 1000),DecodeDecimal('mvEVow8TJus=', 889, -1000, 1000),DecodeDecimal('mvEVow8TJus=', 889, -1000, 1000));
    question.answers.length = 0;
    question.num = 33;
    question.isSingleAns = true;
    question.shortTextQuestion = "What event causes a long workday for Winston?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ZfuyPDRk2wY=', 891, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Hate Week preparations ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZfuyPDRk2wY=', 893, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A power outage";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nOcWYuyw6AI=', 895, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A new telescreen policy";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('gS9ipfdxH/8=', 897, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "An Inner Party speech";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion34()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 33;
<<<<<<< HEAD
    var weight = DecodeNumber('0t/FFMg6y58=', 1019, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0t/FFMg6y58=', 1019, -1000, 1000),DecodeDecimal('bO38Rdg97cs=', 1019, -1000, 1000),DecodeDecimal('bO38Rdg97cs=', 1019, -1000, 1000));
    question.answers.length = 0;
    question.num = 34;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston calls his confession:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('0t/FFMg6y58=', 1021, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A political act";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uKlZcz1QXiQ=', 1023, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Meaningless writing";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Tad4ICnSTpw=', 1025, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A symbol of betrayal";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('FTNssNlAEY0=', 1027, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A step to joining the Brotherhood ";
=======
    var weight = DecodeNumber('LbSSAvmOpuI=', 899, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('LbSSAvmOpuI=', 899, -1000, 1000),DecodeDecimal('qCArC7kZcBE=', 899, -1000, 1000),DecodeDecimal('qCArC7kZcBE=', 899, -1000, 1000));
    question.answers.length = 0;
    question.num = 34;
    question.isSingleAns = true;
    question.shortTextQuestion = "During the sudden switch in enemies,  Winston is tasked with:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('LbSSAvmOpuI=', 901, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "memorizing new slogans";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VM7MPJ3p838=', 903, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "capturing enemy spies";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vFOXERtNL6Q=', 905, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "burning Party posters";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kLhNavyjIvg=', 907, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "rewriting all historical records ";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion35()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 34;
<<<<<<< HEAD
    var weight = DecodeNumber('8oHz9J4g+rE=', 1029, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8oHz9J4g+rE=', 1029, -1000, 1000),DecodeDecimal('NDrHF+5p3Us=', 1029, -1000, 1000),DecodeDecimal('NDrHF+5p3Us=', 1029, -1000, 1000));
    question.answers.length = 0;
    question.num = 35;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston travels to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('8oHz9J4g+rE=', 1031, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The Ministry’s inner office";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pHzOv7xlOq4=', 1033, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A prole district";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KesOKUQAJqQ=', 1035, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "O’Brien’s apartment ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('KesOKUQAJqQ=', 1037, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Parliament building";
=======
    var weight = DecodeNumber('/5kV5DNxO54=', 909, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/5kV5DNxO54=', 909, -1000, 1000),DecodeDecimal('osnGzkg0Uzg=', 909, -1000, 1000),DecodeDecimal('osnGzkg0Uzg=', 909, -1000, 1000));
    question.answers.length = 0;
    question.num = 35;
    question.isSingleAns = true;
    question.shortTextQuestion = "The slogan changes to reflect a new enemy. Who is the new official enemy?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('/5kV5DNxO54=', 911, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Eurasia";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gbUSpp89xgU=', 913, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Goldstein himself";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('d37zXzh7cHE=', 915, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Eastasia ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('d37zXzh7cHE=', 917, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The Brotherhood";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion36()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 35;
<<<<<<< HEAD
    var weight = DecodeNumber('mRXE3WAt3Q8=', 1039, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mRXE3WAt3Q8=', 1039, -1000, 1000),DecodeDecimal('gypa/YZ8bHM=', 1039, -1000, 1000),DecodeDecimal('gypa/YZ8bHM=', 1039, -1000, 1000));
    question.answers.length = 0;
    question.num = 36;
    question.isSingleAns = true;
    question.shortTextQuestion = "He visits O’Brien to give him:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('mRXE3WAt3Q8=', 1041, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A code for Goldstein";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('npsjyjnb/qA=', 1043, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A Party invitation";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kqrDRDyag3s=', 1045, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The confession and ask for Party help ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kqrDRDyag3s=', 1047, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A new Newspeak draft";
=======
    var weight = DecodeNumber('8/a8BQbVjTE=', 919, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8/a8BQbVjTE=', 919, -1000, 1000),DecodeDecimal('XuPQKP43f1A=', 919, -1000, 1000),DecodeDecimal('XuPQKP43f1A=', 919, -1000, 1000));
    question.answers.length = 0;
    question.num = 36;
    question.isSingleAns = true;
    question.shortTextQuestion = "What does Winston admire about the Party’s manipulation?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('8/a8BQbVjTE=', 921, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Its loyalty to the proles";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+YinSHesA/c=', 923, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Its honesty";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gKpiZB8TUiU=', 925, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Its scientific rigor";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('77tgniaNIX8=', 927, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Its total rewriting of history ";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion37()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 36;
<<<<<<< HEAD
    var weight = DecodeNumber('DfsbWrqB4TQ=', 1049, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DfsbWrqB4TQ=', 1049, -1000, 1000),DecodeDecimal('Xo5eaJgwmwA=', 1049, -1000, 1000),DecodeDecimal('Xo5eaJgwmwA=', 1049, -1000, 1000));
    question.answers.length = 0;
    question.num = 37;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien’s apartment is filled with:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('DfsbWrqB4TQ=', 1051, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Party posters";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('cKFUsMlEVew=', 1053, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Antique books ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cKFUsMlEVew=', 1055, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Telescreens";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('L7jMmBXpNn4=', 1057, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Large crowds";
=======
    var weight = DecodeNumber('xUWsg8PEZ6k=', 929, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xUWsg8PEZ6k=', 929, -1000, 1000),DecodeDecimal('4ijJ6Hwf6+U=', 929, -1000, 1000),DecodeDecimal('4ijJ6Hwf6+U=', 929, -1000, 1000));
    question.answers.length = 0;
    question.num = 37;
    question.isSingleAns = true;
    question.shortTextQuestion = "What surprises Winston and Julia in Mr. Charrington’s room?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('xUWsg8PEZ6k=', 931, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A map of Eastasia";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Ucpo4Yuk1Lo=', 933, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A Party slogan carved into the wall";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Fa7iP3FNYJA=', 935, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A hidden telescreen ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Fa7iP3FNYJA=', 937, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "An Inner Party coat";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion38()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 37;
<<<<<<< HEAD
    var weight = DecodeNumber('YOT0daK2T70=', 1059, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YOT0daK2T70=', 1059, -1000, 1000),DecodeDecimal('aF4NNRYppyE=', 1059, -1000, 1000),DecodeDecimal('aF4NNRYppyE=', 1059, -1000, 1000));
    question.answers.length = 0;
    question.num = 38;
    question.isSingleAns = true;
    question.shortTextQuestion = "They toast using:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('YOT0daK2T70=', 1061, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Sparkling wine";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('o6zoVLM5FlA=', 1063, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Government issue rum";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('PiIu7Ldxc7M=', 1065, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Vivid tea";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7Dg7B8Z2d0s=', 1067, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Prole liquor ";
=======
    var weight = DecodeNumber('OY0EUsxL2YM=', 939, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('OY0EUsxL2YM=', 939, -1000, 1000),DecodeDecimal('piGprZ03aAs=', 939, -1000, 1000),DecodeDecimal('piGprZ03aAs=', 939, -1000, 1000));
    question.answers.length = 0;
    question.num = 38;
    question.isSingleAns = true;
    question.shortTextQuestion = "What do they see from the window that affects them deeply?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('OY0EUsxL2YM=', 941, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Children playing with telescreens";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xeTFAasPwLQ=', 943, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Goldstein’s symbol";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Lz82l6TYBe8=', 945, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A prole fight";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('IUUe8yRyJ34=', 947, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A woman hanging laundry ";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion39()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 38;
<<<<<<< HEAD
    var weight = DecodeNumber('D4T0raOQRo8=', 1069, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('D4T0raOQRo8=', 1069, -1000, 1000),DecodeDecimal('Aldnnj9hws8=', 1069, -1000, 1000),DecodeDecimal('Aldnnj9hws8=', 1069, -1000, 1000));
    question.answers.length = 0;
    question.num = 39;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston and Julia say goodbye to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('D4T0raOQRo8=', 1071, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Parsons";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+RA2fd3Drso=', 1073, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Mr. Charrington ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+RA2fd3Drso=', 1075, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The prole woman";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xRuhsmjy9+w=', 1077, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "O’Brien";
=======
    var weight = DecodeNumber('4683yU7r8ls=', 949, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4683yU7r8ls=', 949, -1000, 1000),DecodeDecimal('Gd4Kz/rb3SQ=', 949, -1000, 1000),DecodeDecimal('Gd4Kz/rb3SQ=', 949, -1000, 1000));
    question.answers.length = 0;
    question.num = 39;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston considers the prole woman as:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('pS9I5JfwuZs=', 951, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "a hope for the future";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pS9I5JfwuZs=', 953, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "an enemy in disguise";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+CSb6R/Tl7s=', 955, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "a Party loyalist";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('AAB9yR0Fuyc=', 957, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "a victim of Big Brother";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion40()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 39;
<<<<<<< HEAD
    var weight = DecodeNumber('s2q0G2IRiss=', 1079, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('s2q0G2IRiss=', 1079, -1000, 1000),DecodeDecimal('d1VsvCcCs58=', 1079, -1000, 1000),DecodeDecimal('d1VsvCcCs58=', 1079, -1000, 1000));
    question.answers.length = 0;
    question.num = 40;
    question.isSingleAns = true;
    question.shortTextQuestion = "On leaving Charrington’s room, they feel:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('s2q0G2IRiss=', 1081, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Suspicious of each other";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('d2VMNyPBn9k=', 1083, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Anxious and guilty";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7BvxsOzBcpc=', 1085, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Triumphant and free ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7BvxsOzBcpc=', 1087, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Exhausted and confused";
=======
    var weight = DecodeNumber('AUkFTKnHjhI=', 959, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('AUkFTKnHjhI=', 959, -1000, 1000),DecodeDecimal('LlRiVABa1pA=', 959, -1000, 1000),DecodeDecimal('LlRiVABa1pA=', 959, -1000, 1000));
    question.answers.length = 0;
    question.num = 40;
    question.isSingleAns = true;
    question.shortTextQuestion = "Mr. Charrington’s room feels to Winston like:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('AUkFTKnHjhI=', 961, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "a museum";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NLm3ocy0Dhc=', 963, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "a trap";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('u4Lj6C3KfJI=', 965, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "a dream";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('QkoOW15nMPA=', 967, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "a safe haven ";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion41()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 40;
<<<<<<< HEAD
    var weight = DecodeNumber('hpyvfMEW/9Q=', 1089, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hpyvfMEW/9Q=', 1089, -1000, 1000),DecodeDecimal('sBOmMtICCW0=', 1089, -1000, 1000),DecodeDecimal('sBOmMtICCW0=', 1089, -1000, 1000));
    question.answers.length = 0;
    question.num = 41;
    question.isSingleAns = true;
    question.shortTextQuestion = "Where are Winston and Julia held?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('hpyvfMEW/9Q=', 1091, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Inner Party quarters";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LPPYdsIipz8=', 1093, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Parsons’s apartment";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1rHOE1hR3O0=', 1095, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Ministry of Love cells ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1rHOE1hR3O0=', 1097, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Mr. Charrington’s basement";
=======
    var weight = DecodeNumber('JHlOXWPsoYw=', 969, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JHlOXWPsoYw=', 969, -1000, 1000),DecodeDecimal('xIYgFQeCLiQ=', 969, -1000, 1000),DecodeDecimal('xIYgFQeCLiQ=', 969, -1000, 1000));
    question.answers.length = 0;
    question.num = 41;
    question.isSingleAns = true;
    question.shortTextQuestion = "Where do Winston and Julia first meet alone?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('JHlOXWPsoYw=', 971, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Charrington’s shop";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('s0PQF5dc4nc=', 973, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The Ministry of Truth";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hQNrecs1e/A=', 975, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Victory Square";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('EhHddxlXvVM=', 977, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The wooded area outside London ";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion42()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 41;
<<<<<<< HEAD
    var weight = DecodeNumber('i31VZo4orxA=', 1099, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('i31VZo4orxA=', 1099, -1000, 1000),DecodeDecimal('wXidJMuxwTs=', 1099, -1000, 1000),DecodeDecimal('wXidJMuxwTs=', 1099, -1000, 1000));
    question.answers.length = 0;
    question.num = 42;
    question.isSingleAns = true;
    question.shortTextQuestion = "While separated, Winston feels:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('CPlFAbOMmqs=', 1101, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Desperate ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('CPlFAbOMmqs=', 1103, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Indifferent";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lmNX3Zprh2s=', 1105, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Relieved";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('/KDlwNzOqVM=', 1107, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Calm";
=======
    var weight = DecodeNumber('sOBif/dupr4=', 979, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('sOBif/dupr4=', 979, -1000, 1000),DecodeDecimal('dIsbQByr1ho=', 979, -1000, 1000),DecodeDecimal('dIsbQByr1ho=', 979, -1000, 1000));
    question.answers.length = 0;
    question.num = 42;
    question.isSingleAns = true;
    question.shortTextQuestion = "What emotion overtakes Winston during the meeting?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('VNlaCJ4OglI=', 981, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Uncontrollable desire ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VNlaCJ4OglI=', 983, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Fear of discovery";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jpWu9gr1QtU=', 985, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Political confusion";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MtOQk6RpI6s=', 987, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Doubt in Julia";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion43()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 42;
<<<<<<< HEAD
    var weight = DecodeNumber('IS+rS+CcM54=', 1109, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('IS+rS+CcM54=', 1109, -1000, 1000),DecodeDecimal('t/h4VFW6Pwo=', 1109, -1000, 1000),DecodeDecimal('t/h4VFW6Pwo=', 1109, -1000, 1000));
    question.answers.length = 0;
    question.num = 43;
    question.isSingleAns = true;
    question.shortTextQuestion = "Who interrogates Winston?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('IS+rS+CcM54=', 1111, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Parsons";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ysu6Mqei48U=', 1113, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Julia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('s711HukY4NA=', 1115, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "O’Brien ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('s711HukY4NA=', 1117, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A fellow prisoner";
=======
    var weight = DecodeNumber('2ECaq81KAts=', 989, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2ECaq81KAts=', 989, -1000, 1000),DecodeDecimal('hWBRmfewsy0=', 989, -1000, 1000),DecodeDecimal('hWBRmfewsy0=', 989, -1000, 1000));
    question.answers.length = 0;
    question.num = 43;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia admits she often:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('2ECaq81KAts=', 991, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Sleeps with Inner Party members";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vHbWHxN03eg=', 993, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Rebels through affairs";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vHbWHxN03eg=', 995, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Reports Thoughtcrime";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('lGzsBD2UMCA=', 997, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Lies about ration coupons";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion44()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 43;
<<<<<<< HEAD
    var weight = DecodeNumber('JknrBtnTZek=', 1119, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JknrBtnTZek=', 1119, -1000, 1000),DecodeDecimal('nsBfJMlOBgs=', 1119, -1000, 1000),DecodeDecimal('nsBfJMlOBgs=', 1119, -1000, 1000));
    question.answers.length = 0;
    question.num = 44;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien uses what to control Winston?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('JknrBtnTZek=', 1121, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Sleep deprivation";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9cszgW98fsc=', 1123, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Threats only";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nkliVAX2wik=', 1125, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Love";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0sBpqup299E=', 1127, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Torture ";
=======
    var weight = DecodeNumber('vuiSg6yXwjg=', 999, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vuiSg6yXwjg=', 999, -1000, 1000),DecodeDecimal('67DPPaFkkzM=', 999, -1000, 1000),DecodeDecimal('67DPPaFkkzM=', 999, -1000, 1000));
    question.answers.length = 0;
    question.num = 44;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston views Julia’s rebellion as:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('xvpJpL8mUm4=', 1001, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Simple and satisfying ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xvpJpL8mUm4=', 1003, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Inconsistent with his own";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zEnmy8R6fGs=', 1005, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Shallow and useless";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('rSqFPB2MZs0=', 1007, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Dangerous and unwise";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion45()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 44;
<<<<<<< HEAD
    var weight = DecodeNumber('DUeAz6G4Pyg=', 1129, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DUeAz6G4Pyg=', 1129, -1000, 1000),DecodeDecimal('0kJV/V4K56A=', 1129, -1000, 1000),DecodeDecimal('0kJV/V4K56A=', 1129, -1000, 1000));
    question.answers.length = 0;
    question.num = 45;
    question.isSingleAns = true;
    question.shortTextQuestion = "After torture, Winston:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('DUeAz6G4Pyg=', 1131, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Becomes Inner Party";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GU63fH7CzbY=', 1133, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Joins the Thought Police";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('OGe6frf/DrQ=', 1135, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Betrays Julia ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('OGe6frf/DrQ=', 1137, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Escapes";
=======
    var weight = DecodeNumber('DbO/Wmp3PBM=', 1009, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DbO/Wmp3PBM=', 1009, -1000, 1000),DecodeDecimal('QD3aYPm03ZU=', 1009, -1000, 1000),DecodeDecimal('QD3aYPm03ZU=', 1009, -1000, 1000));
    question.answers.length = 0;
    question.num = 45;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia brings Winston what item as a luxury?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('DbO/Wmp3PBM=', 1011, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Some wine";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('omPdudiJVss=', 1013, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A really working radio";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2YGFBua4upE=', 1015, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Real chocolate";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('2YGFBua4upE=', 1017, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A gold wedding ring";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion46()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 45;
<<<<<<< HEAD
    var weight = DecodeNumber('Cr10KE+Ip0Y=', 1139, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Cr10KE+Ip0Y=', 1139, -1000, 1000),DecodeDecimal('SFOfE/Ytd8Q=', 1139, -1000, 1000),DecodeDecimal('SFOfE/Ytd8Q=', 1139, -1000, 1000));
    question.answers.length = 0;
    question.num = 46;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston admits the Party can make him:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Cr10KE+Ip0Y=', 1141, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Deny Big Brother";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('drmpoP4LQy8=', 1143, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Abolish himself";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YLD3Kzymp1Q=', 1145, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Avoid truth";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('glXFpjCy+tY=', 1147, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Love Big Brother ";
=======
    var weight = DecodeNumber('oDr+oKsS+eM=', 1019, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oDr+oKsS+eM=', 1019, -1000, 1000),DecodeDecimal('Zm6q3bAN6qk=', 1019, -1000, 1000),DecodeDecimal('Zm6q3bAN6qk=', 1019, -1000, 1000));
    question.answers.length = 0;
    question.num = 46;
    question.isSingleAns = true;
    question.shortTextQuestion = "What does the thrush’s song represent to Winston?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('oDr+oKsS+eM=', 1021, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Political hope";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Mwn8d8VF8L8=', 1023, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A sign from O’Brien";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Zkn4WV/Vrwg=', 1025, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Beauty without purpose ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Zkn4WV/Vrwg=', 1027, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A coded message";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion47()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 46;
<<<<<<< HEAD
    var weight = DecodeNumber('T3ooOZevP/c=', 1149, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('T3ooOZevP/c=', 1149, -1000, 1000),DecodeDecimal('p8aMZml2jWs=', 1149, -1000, 1000),DecodeDecimal('p8aMZml2jWs=', 1149, -1000, 1000));
    question.answers.length = 0;
    question.num = 47;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston is taken to Room 101 to face:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('T3ooOZevP/c=', 1151, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Political betrayal";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5d6p7pBlFiI=', 1153, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "O’Brien’s wrath";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1EUPwc4cdKc=', 1155, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "His greatest fear ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1EUPwc4cdKc=', 1157, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The prole uprising";
=======
    var weight = DecodeNumber('RthROmf5yOk=', 1029, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('RthROmf5yOk=', 1029, -1000, 1000),DecodeDecimal('sCPavbrGO1c=', 1029, -1000, 1000),DecodeDecimal('sCPavbrGO1c=', 1029, -1000, 1000));
    question.answers.length = 0;
    question.num = 47;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia claims she does not care much for:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('RthROmf5yOk=', 1031, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Winston’s past";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('loR8HxltfCM=', 1033, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Freedom";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vjZLyXA58HQ=', 1035, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Big Brother";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ExRGcgnFxA0=', 1037, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Politics ";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion48()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 47;
<<<<<<< HEAD
    var weight = DecodeNumber('BfpWT5jX1IY=', 1159, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BfpWT5jX1IY=', 1159, -1000, 1000),DecodeDecimal('UX8At09VkZM=', 1159, -1000, 1000),DecodeDecimal('UX8At09VkZM=', 1159, -1000, 1000));
    question.answers.length = 0;
    question.num = 48;
    question.isSingleAns = true;
    question.shortTextQuestion = "In Room 101, Winston sees:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('BfpWT5jX1IY=', 1161, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Big Brother’s photo";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MEIXkIIBxvQ=', 1163, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A secret door";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('l6DW2/uMcfM=', 1165, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Spiders";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1tzcQFiZM14=', 1167, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Jumbo rats ";
=======
    var weight = DecodeNumber('TBAT7GF8j3o=', 1039, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('TBAT7GF8j3o=', 1039, -1000, 1000),DecodeDecimal('6UI7GVxRIb8=', 1039, -1000, 1000),DecodeDecimal('6UI7GVxRIb8=', 1039, -1000, 1000));
    question.answers.length = 0;
    question.num = 48;
    question.isSingleAns = true;
    question.shortTextQuestion = "The lovers agree that their primary form of rebellion is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('TBAT7GF8j3o=', 1041, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Writing a manifesto";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VmmaM70jFEw=', 1043, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Making love ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VmmaM70jFEw=', 1045, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Recording conversations";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('yyxWlOPDDj0=', 1047, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Drawing Party members in";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion49()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 48;
<<<<<<< HEAD
    var weight = DecodeNumber('5G6gqMvS+a4=', 1169, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5G6gqMvS+a4=', 1169, -1000, 1000),DecodeDecimal('2JWlW8+ss40=', 1169, -1000, 1000),DecodeDecimal('2JWlW8+ss40=', 1169, -1000, 1000));
    question.answers.length = 0;
    question.num = 49;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston and Julia meet again:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('biDl5pNv8CY=', 1171, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "In a canteen for ex-prisoners ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('biDl5pNv8CY=', 1173, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "In O’Brien’s office";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LEyf3YmkUSk=', 1175, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "In separate cells";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('wK31opqpn84=', 1177, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "In the prole district";
=======
    var weight = DecodeNumber('qLmLxJTGKms=', 1049, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qLmLxJTGKms=', 1049, -1000, 1000),DecodeDecimal('FZEDYfNwXIM=', 1049, -1000, 1000),DecodeDecimal('FZEDYfNwXIM=', 1049, -1000, 1000));
    question.answers.length = 0;
    question.num = 49;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s physical condition improves due to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('8fkpLW/NTu0=', 1051, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Regular walks and better food ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8fkpLW/NTu0=', 1053, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Julia’s insistence on exercise";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NVwlzWWYGkg=', 1055, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Parole from the Ministry";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('qd9Yjo7V5kM=', 1057, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Access to Inner Party medicine";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion50()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 49;
<<<<<<< HEAD
    var weight = DecodeNumber('3dPHKgtwGLw=', 1179, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3dPHKgtwGLw=', 1179, -1000, 1000),DecodeDecimal('SsGWcg/8iWg=', 1179, -1000, 1000),DecodeDecimal('SsGWcg/8iWg=', 1179, -1000, 1000));
    question.answers.length = 0;
    question.num = 50;
    question.isSingleAns = true;
    question.shortTextQuestion = "Their reunion is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('nYDPKDe8JYc=', 1181, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Cold and empty ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nYDPKDe8JYc=', 1183, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Violent";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4NvOD7MY+XQ=', 1185, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Warm and hopeful";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('oJRilvULggM=', 1187, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Emotional and resistant";
=======
    var weight = DecodeNumber('ofRlb4dYW2w=', 1059, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ofRlb4dYW2w=', 1059, -1000, 1000),DecodeDecimal('i35KIGnBG9s=', 1059, -1000, 1000),DecodeDecimal('i35KIGnBG9s=', 1059, -1000, 1000));
    question.answers.length = 0;
    question.num = 50;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston wakes up from a dream about:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ofRlb4dYW2w=', 1061, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The Ministry of Love";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Za0j1mQ6GfM=', 1063, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "His mother and sister ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Za0j1mQ6GfM=', 1065, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Julia being arrested";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('dJxtuf3wxn8=', 1067, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A prole uprising";
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion51()
{
<<<<<<< HEAD
    const type = QMAKE_OPENANS;
    const questionIndex = 50;
    var weight = DecodeNumber('Qq6/Cvr/wp8=', 708, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yRFzcEXT7vs=', 708, -1000, 1000),DecodeDecimal('9L+0mbFz908=', 708, -1000, 1000),DecodeDecimal('9L+0mbFz908=', 708, -1000, 1000));
    question.num = 51;
=======
    const type = QMAKE_MULTIANS;
    const questionIndex = 50;
    var weight = DecodeNumber('rYNRuOQ8HtI=', 1069, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rYNRuOQ8HtI=', 1069, -1000, 1000),DecodeDecimal('r3ELJULISLI=', 1069, -1000, 1000),DecodeDecimal('r3ELJULISLI=', 1069, -1000, 1000));
    question.answers.length = 0;
    question.num = 51;
    question.isSingleAns = true;
    question.shortTextQuestion = "What emotion does Winston feel about betraying his mother as a child?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('f8IOJWN9y/U=', 1071, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Shame and guilt ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('f8IOJWN9y/U=', 1073, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Confusion and fear";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DfAEwFi3qZo=', 1075, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Pride and violence";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('QrBm9FS6eag=', 1077, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Bitterness and disillusionment";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion52()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 51;
    var weight = DecodeNumber('NBPj5hYqbMg=', 1079, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NBPj5hYqbMg=', 1079, -1000, 1000),DecodeDecimal('TpUr5FX5RoE=', 1079, -1000, 1000),DecodeDecimal('TpUr5FX5RoE=', 1079, -1000, 1000));
    question.answers.length = 0;
    question.num = 52;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston realizes the Party is capable of destroying:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('NBPj5hYqbMg=', 1081, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The natural environment";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aQghNDH0zao=', 1083, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The Brotherhood completely";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('y8a8fknjrnM=', 1085, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The concept of love ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('y8a8fknjrnM=', 1087, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "All buildings";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion53()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 52;
    var weight = DecodeNumber('il+1pqyg/Bo=', 1089, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('il+1pqyg/Bo=', 1089, -1000, 1000),DecodeDecimal('WPuej0tPxvk=', 1089, -1000, 1000),DecodeDecimal('WPuej0tPxvk=', 1089, -1000, 1000));
    question.answers.length = 0;
    question.num = 53;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia gives Winston a set of:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('aSExQTNVMS8=', 1091, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Real coffee and sugar packets ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aSExQTNVMS8=', 1093, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A government's leaflet";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/eIV50p/A4o=', 1095, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Prole bread and cheese";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('VVLuEDn/zLc=', 1097, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A gold ring";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion54()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 53;
    var weight = DecodeNumber('Dw2TIDhwAig=', 1099, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Dw2TIDhwAig=', 1099, -1000, 1000),DecodeDecimal('IuEMWxlveKQ=', 1099, -1000, 1000),DecodeDecimal('IuEMWxlveKQ=', 1099, -1000, 1000));
    question.answers.length = 0;
    question.num = 54;
    question.isSingleAns = true;
    question.shortTextQuestion = "Their hiding spot is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Dw2TIDhwAig=', 1101, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "An attic in Victory Mansions";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('cm10RW9sBN8=', 1103, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A secure Ministry office";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bCv8wKGAeSY=', 1105, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A share of the Ministry basement";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('8QuyqVUI9uw=', 1107, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A room above Charrington’s shop ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion55()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 54;
    var weight = DecodeNumber('DesvkQq3TLM=', 1109, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DesvkQq3TLM=', 1109, -1000, 1000),DecodeDecimal('8rQ/Om3tq+w=', 1109, -1000, 1000),DecodeDecimal('8rQ/Om3tq+w=', 1109, -1000, 1000));
    question.answers.length = 0;
    question.num = 55;
    question.isSingleAns = true;
    question.shortTextQuestion = "In the shop room, Winston writes:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('DesvkQq3TLM=', 1111, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A Party slogan";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+gXiyHoTzbc=', 1113, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "“Down with Big Brother”";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jwIRg6i8WvE=', 1115, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A political leaflet";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('S24QpN4g9Cc=', 1117, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "“I love Julia” ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion56()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 55;
    var weight = DecodeNumber('eQ3CtU4UdSM=', 1119, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('eQ3CtU4UdSM=', 1119, -1000, 1000),DecodeDecimal('MS4PNZ1cMaY=', 1119, -1000, 1000),DecodeDecimal('MS4PNZ1cMaY=', 1119, -1000, 1000));
    question.answers.length = 0;
    question.num = 56;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia is surprised by:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('eQ3CtU4UdSM=', 1121, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "No telescreens there";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Eq4DVOwD+kk=', 1123, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The diary’s secrecy";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cfCoN/dsdEg=', 1125, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "His handwriting in the diary";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('cfCoN/dsdEg=', 1127, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Winston’s romantic letters";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion57()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 56;
    var weight = DecodeNumber('VMICXw4PAWw=', 1129, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VMICXw4PAWw=', 1129, -1000, 1000),DecodeDecimal('CtLkMAhcdZw=', 1129, -1000, 1000),DecodeDecimal('CtLkMAhcdZw=', 1129, -1000, 1000));
    question.answers.length = 0;
    question.num = 57;
    question.isSingleAns = true;
    question.shortTextQuestion = "What does Winston complain about in the room?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('VMICXw4PAWw=', 1131, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Rumor of spies";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VkDviLsUB0k=', 1133, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Heat from the telescreen";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KDMFJcqVh+M=', 1135, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Julia’s lateness";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('XE/7EeHYT3E=', 1137, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The glass paperweight’s age ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion58()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 57;
    var weight = DecodeNumber('eoQJRS8uQ0o=', 1139, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('eoQJRS8uQ0o=', 1139, -1000, 1000),DecodeDecimal('zz3nOiTnJSU=', 1139, -1000, 1000),DecodeDecimal('zz3nOiTnJSU=', 1139, -1000, 1000));
    question.answers.length = 0;
    question.num = 58;
    question.isSingleAns = true;
    question.shortTextQuestion = "They ignore:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('eoQJRS8uQ0o=', 1141, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Their own heartbeat";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4u7IJttt2ao=', 1143, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A news broadcast outside ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4u7IJttt2ao=', 1145, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A police siren";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('sgbA2X2dxt0=', 1147, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The smell of smoke";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion59()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 58;
    var weight = DecodeNumber('RBpoLqV1ucg=', 1149, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('RBpoLqV1ucg=', 1149, -1000, 1000),DecodeDecimal('uR6yifQOUy8=', 1149, -1000, 1000),DecodeDecimal('uR6yifQOUy8=', 1149, -1000, 1000));
    question.answers.length = 0;
    question.num = 59;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia delays a meeting because:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('RBpoLqV1ucg=', 1151, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Winston disappeared";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UUP5CKABtas=', 1153, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "She fears the Thought Police";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mpzM6iviElM=', 1155, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "She’s ill";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+fsfIjToaFw=', 1157, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "She’s at work ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion60()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 59;
    var weight = DecodeNumber('W68NoMM534o=', 1159, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('W68NoMM534o=', 1159, -1000, 1000),DecodeDecimal('AltajjvU23U=', 1159, -1000, 1000),DecodeDecimal('AltajjvU23U=', 1159, -1000, 1000));
    question.answers.length = 0;
    question.num = 60;
    question.isSingleAns = true;
    question.shortTextQuestion = "While walking, Julia says the world outside is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Z3OEGbhQqZg=', 1161, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Bright and hopeful ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Z3OEGbhQqZg=', 1163, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Colorless and bleak";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9wCegCMV2tc=', 1165, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Nothing but Party control";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('wfGnj0kDYVk=', 1167, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Full of secret cameras";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion61()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 60;
    var weight = DecodeNumber('cSJDxTiM7R0=', 1169, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cSJDxTiM7R0=', 1169, -1000, 1000),DecodeDecimal('Q3SsjZXArYQ=', 1169, -1000, 1000),DecodeDecimal('Q3SsjZXArYQ=', 1169, -1000, 1000));
    question.answers.length = 0;
    question.num = 61;
    question.isSingleAns = true;
    question.shortTextQuestion = "The most dangerous threat they face is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('cSJDxTiM7R0=', 1171, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Mr. Charrington reporting them";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('amA7ulQvQrc=', 1173, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The hidden telescreen ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('amA7ulQvQrc=', 1175, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The proles discovering them";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('onfniycqLTA=', 1177, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Being seen by Parsons";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion62()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 61;
    var weight = DecodeNumber('8DgmVKLBkeM=', 1179, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8DgmVKLBkeM=', 1179, -1000, 1000),DecodeDecimal('uXd4kIxd5us=', 1179, -1000, 1000),DecodeDecimal('uXd4kIxd5us=', 1179, -1000, 1000));
    question.answers.length = 0;
    question.num = 62;
    question.isSingleAns = true;
    question.shortTextQuestion = "When do they realize they are watched?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('8DgmVKLBkeM=', 1181, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Sensing cold air";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JWcJFY7i3XA=', 1183, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Noticing a new smiley eye";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hovTCDdR7FE=', 1185, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Spotting a microphone";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hovTCDdR7FE=', 1187, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Hearing footsteps upstairs";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion63()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 62;
    var weight = DecodeNumber('mTSXfimb0d8=', 1189, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mTSXfimb0d8=', 1189, -1000, 1000),DecodeDecimal('6s5rxc4N70w=', 1189, -1000, 1000),DecodeDecimal('6s5rxc4N70w=', 1189, -1000, 1000));
    question.answers.length = 0;
    question.num = 63;
    question.isSingleAns = true;
    question.shortTextQuestion = "They hear:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('mTSXfimb0d8=', 1191, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Goldstein’s speech";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PE5nmab0/0c=', 1193, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Mr. Charrington’s footsteps ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('PE5nmab0/0c=', 1195, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Parsons’s daughter outside";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('enXDhpgXGHU=', 1197, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Telescreen voices from above";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion64()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 63;
    var weight = DecodeNumber('CKuhcU4ViFA=', 1199, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('CKuhcU4ViFA=', 1199, -1000, 1000),DecodeDecimal('QmXm3Lo74Mw=', 1199, -1000, 1000),DecodeDecimal('QmXm3Lo74Mw=', 1199, -1000, 1000));
    question.answers.length = 0;
    question.num = 64;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia’s reaction to discovery is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('CKuhcU4ViFA=', 1201, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Silent acceptance";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OuuqiJpmJyc=', 1203, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Laughing nervously";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZxPkYMZRtdQ=', 1205, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Panicked and aggressive ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ZxPkYMZRtdQ=', 1207, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Calm and secretive";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion65()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 64;
    var weight = DecodeNumber('7CukzXJpNfY=', 1209, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7CukzXJpNfY=', 1209, -1000, 1000),DecodeDecimal('IP4X+F7jl4U=', 1209, -1000, 1000),DecodeDecimal('IP4X+F7jl4U=', 1209, -1000, 1000));
    question.answers.length = 0;
    question.num = 65;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston writes about:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('7CukzXJpNfY=', 1211, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Prole rumors";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XOr6jXdiDgY=', 1213, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Julia’s past";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DKxJUWdLu9w=', 1215, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Party slogans";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ERmmXu6eoxE=', 1217, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The Brotherhood ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion66()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 65;
    var weight = DecodeNumber('JBa/feHLB1U=', 1219, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JBa/feHLB1U=', 1219, -1000, 1000),DecodeDecimal('Qfb+EQEU768=', 1219, -1000, 1000),DecodeDecimal('Qfb+EQEU768=', 1219, -1000, 1000));
    question.answers.length = 0;
    question.num = 66;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston calls his confession:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('JBa/feHLB1U=', 1221, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Meaningless writing";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qLiu5Kr7+2M=', 1223, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A political act";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Keux/ARpCcU=', 1225, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A step to joining the Brotherhood ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Keux/ARpCcU=', 1227, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A symbol of betrayal";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion67()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 66;
    var weight = DecodeNumber('ic4it+iMHK0=', 1229, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ic4it+iMHK0=', 1229, -1000, 1000),DecodeDecimal('QWO26OziJs0=', 1229, -1000, 1000),DecodeDecimal('QWO26OziJs0=', 1229, -1000, 1000));
    question.answers.length = 0;
    question.num = 67;
    question.isSingleAns = true;
    question.shortTextQuestion = "He believes the Brotherhood is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ic4it+iMHK0=', 1231, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A warning tool";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zTTUzG4fl1I=', 1233, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A Party fabrication";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('y98QsMkgRM0=', 1235, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A children's story";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('CkzbAZpMbKQ=', 1237, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Real and active ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion68()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 67;
    var weight = DecodeNumber('ED+AskrBJME=', 1239, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ED+AskrBJME=', 1239, -1000, 1000),DecodeDecimal('L6Bn3/mWzYg=', 1239, -1000, 1000),DecodeDecimal('L6Bn3/mWzYg=', 1239, -1000, 1000));
    question.answers.length = 0;
    question.num = 68;
    question.isSingleAns = true;
    question.shortTextQuestion = "The written confession is hidden within:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ED+AskrBJME=', 1241, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Julia’s coat";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('COcfepl1t0Y=', 1243, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A bottle of gin ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('COcfepl1t0Y=', 1245, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A wall crack";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('LjzG6qVGHgY=', 1247, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A shoe sole";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion69()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 68;
    var weight = DecodeNumber('zR+EzKrfNhs=', 1249, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zR+EzKrfNhs=', 1249, -1000, 1000),DecodeDecimal('5DIv0j9fi7M=', 1249, -1000, 1000),DecodeDecimal('5DIv0j9fi7M=', 1249, -1000, 1000));
    question.answers.length = 0;
    question.num = 69;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston travels to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('zR+EzKrfNhs=', 1251, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A prole district";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5oQpchEjsl8=', 1253, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The Ministry’s inner office";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('uy7VHvoEtPU=', 1255, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Parliament building";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('y4paxVKMiC4=', 1257, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "O’Brien’s apartment ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion70()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 69;
    var weight = DecodeNumber('m5l5xCc2QNA=', 1259, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('m5l5xCc2QNA=', 1259, -1000, 1000),DecodeDecimal('SblX+rQ2lNI=', 1259, -1000, 1000),DecodeDecimal('SblX+rQ2lNI=', 1259, -1000, 1000));
    question.answers.length = 0;
    question.num = 70;
    question.isSingleAns = true;
    question.shortTextQuestion = "He visits O’Brien to give him:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('m5l5xCc2QNA=', 1261, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A Party invitation";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6RaiLw33QOA=', 1263, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A code for Goldstein";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YJCMHUNBm1E=', 1265, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A new Newspeak draft";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('BEBYxWHFvEM=', 1267, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The confession and ask for Party help ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion71()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 70;
    var weight = DecodeNumber('lSn2Dgf2qSo=', 1269, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lSn2Dgf2qSo=', 1269, -1000, 1000),DecodeDecimal('XyN1eYmwdJo=', 1269, -1000, 1000),DecodeDecimal('XyN1eYmwdJo=', 1269, -1000, 1000));
    question.answers.length = 0;
    question.num = 71;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien tells Winston:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('lSn2Dgf2qSo=', 1271, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "His paperweight is illegal";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2ALfqGSVnT0=', 1273, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He’s suspected of thoughtcrime ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2ALfqGSVnT0=', 1275, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Julia reported him";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('gZAdn+ec+6Y=', 1277, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He is already watched";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion72()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 71;
    var weight = DecodeNumber('w7NnQEDSHbw=', 1279, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('w7NnQEDSHbw=', 1279, -1000, 1000),DecodeDecimal('vxRzQfRGl+0=', 1279, -1000, 1000),DecodeDecimal('vxRzQfRGl+0=', 1279, -1000, 1000));
    question.answers.length = 0;
    question.num = 72;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston leaves feeling:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('w7NnQEDSHbw=', 1281, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Hopeless";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vkEwPfN3zdA=', 1283, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Reassured ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vkEwPfN3zdA=', 1285, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Guilty";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ufjkY0Xj01I=', 1287, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Betrayed";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion73()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 72;
    var weight = DecodeNumber('Ahh4iZDIBEo=', 1289, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ahh4iZDIBEo=', 1289, -1000, 1000),DecodeDecimal('lmkNX9vVBG8=', 1289, -1000, 1000),DecodeDecimal('lmkNX9vVBG8=', 1289, -1000, 1000));
    question.answers.length = 0;
    question.num = 73;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien’s apartment is filled with:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('x0MumFCSGK0=', 1291, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Antique books ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('x0MumFCSGK0=', 1293, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Party posters";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('f7CyZytdDO4=', 1295, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Large crowds";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('tGBvnEUIxrc=', 1297, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Telescreens";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion74()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 73;
    var weight = DecodeNumber('LLRh8ZcTCnc=', 1299, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('LLRh8ZcTCnc=', 1299, -1000, 1000),DecodeDecimal('zwKxUe1bswU=', 1299, -1000, 1000),DecodeDecimal('zwKxUe1bswU=', 1299, -1000, 1000));
    question.answers.length = 0;
    question.num = 74;
    question.isSingleAns = true;
    question.shortTextQuestion = "They toast using:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('LLRh8ZcTCnc=', 1301, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Government issue rum";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sSu7qRGHjYA=', 1303, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Sparkling wine";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UK6ThE4/sFA=', 1305, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Prole liquor ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('UK6ThE4/sFA=', 1307, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Vivid tea";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion75()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 74;
    var weight = DecodeNumber('92Ty209modY=', 1309, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('92Ty209modY=', 1309, -1000, 1000),DecodeDecimal('y/ArRE4gw0I=', 1309, -1000, 1000),DecodeDecimal('y/ArRE4gw0I=', 1309, -1000, 1000));
    question.answers.length = 0;
    question.num = 75;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien reveals: ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('92Ty209modY=', 1311, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He reported them";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1BOzKQq6Mdc=', 1313, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He’s a Thought Police officer";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1e9lcAmfjZU=', 1315, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He supports the Brotherhood ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1e9lcAmfjZU=', 1317, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He’s Big Brother in disguise";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion76()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 75;
    var weight = DecodeNumber('5UlG93dKhQM=', 1319, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5UlG93dKhQM=', 1319, -1000, 1000),DecodeDecimal('0tgee++Cwck=', 1319, -1000, 1000),DecodeDecimal('0tgee++Cwck=', 1319, -1000, 1000));
    question.answers.length = 0;
    question.num = 76;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien gives Winston:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('MlMng02Ae1M=', 1321, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A copy of Goldstein’s book ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MlMng02Ae1M=', 1323, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A pack of cigarettes";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xKPHHf3AhXQ=', 1325, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A glass paperweight";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('89AXmfrooG0=', 1327, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A radio";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion77()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 76;
    var weight = DecodeNumber('JfDzE9VpSMA=', 1329, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JfDzE9VpSMA=', 1329, -1000, 1000),DecodeDecimal('GS2j1Avsp+4=', 1329, -1000, 1000),DecodeDecimal('GS2j1Avsp+4=', 1329, -1000, 1000));
    question.answers.length = 0;
    question.num = 77;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston and Julia say goodbye to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('yC9fuwWkTqs=', 1331, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Mr. Charrington ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yC9fuwWkTqs=', 1333, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Parsons";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Bqh9IBYklM4=', 1335, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "O’Brien";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('VLOMkNBSsLE=', 1337, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The prole woman";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion78()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 77;
    var weight = DecodeNumber('PT10PHWxEDE=', 1339, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PT10PHWxEDE=', 1339, -1000, 1000),DecodeDecimal('TRa9qKkTmAE=', 1339, -1000, 1000),DecodeDecimal('TRa9qKkTmAE=', 1339, -1000, 1000));
    question.answers.length = 0;
    question.num = 78;
    question.isSingleAns = true;
    question.shortTextQuestion = "On leaving Charrington’s room, they feel:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('PT10PHWxEDE=', 1341, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Anxious and guilty";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Xeh6gEkDDYU=', 1343, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Suspicious of each other";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TiptS1qfSew=', 1345, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Exhausted and confused";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('zXS5unJH4kI=', 1347, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Triumphant and free ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion79()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 78;
    var weight = DecodeNumber('T0f2Ta+rei8=', 1349, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('T0f2Ta+rei8=', 1349, -1000, 1000),DecodeDecimal('hWJYm4N4ZS4=', 1349, -1000, 1000),DecodeDecimal('hWJYm4N4ZS4=', 1349, -1000, 1000));
    question.answers.length = 0;
    question.num = 79;
    question.isSingleAns = true;
    question.shortTextQuestion = "Mr. Charrington reveals:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('T0f2Ta+rei8=', 1351, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He is a Brotherhood member";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('eU9hdzg2BCk=', 1353, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He is fleeing Oceania";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('FCPhqUs5pp8=', 1355, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He is a Thought Police agent ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('FCPhqUs5pp8=', 1357, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He sympathizes with them";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion80()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 79;
    var weight = DecodeNumber('Yx+4F9rlq6o=', 1359, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Yx+4F9rlq6o=', 1359, -1000, 1000),DecodeDecimal('+j3wV2XUbQw=', 1359, -1000, 1000),DecodeDecimal('+j3wV2XUbQw=', 1359, -1000, 1000));
    question.answers.length = 0;
    question.num = 80;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston and Julia are:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('jGiQfraX2Ug=', 1361, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Taken away calmly ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jGiQfraX2Ug=', 1363, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Released on parole";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('SCMASGFB1wI=', 1365, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Sent to the proles";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('BxQGmrSh1MI=', 1367, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Allowed to leave";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion81()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 80;
    var weight = DecodeNumber('6j9N/wimx7Q=', 1369, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6j9N/wimx7Q=', 1369, -1000, 1000),DecodeDecimal('weFoIHA/wmg=', 1369, -1000, 1000),DecodeDecimal('weFoIHA/wmg=', 1369, -1000, 1000));
    question.answers.length = 0;
    question.num = 81;
    question.isSingleAns = true;
    question.shortTextQuestion = "Where are Winston and Julia held?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('6j9N/wimx7Q=', 1371, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Parsons’s apartment";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zx+W3cs5W0c=', 1373, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Inner Party quarters";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('aBbmz8+kSkY=', 1375, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Mr. Charrington’s basement";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('9E/a3t8bXN8=', 1377, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Ministry of Love cells ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion82()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 81;
    var weight = DecodeNumber('24GAYeKhcrY=', 1379, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('24GAYeKhcrY=', 1379, -1000, 1000),DecodeDecimal('t/BYFA9xW8k=', 1379, -1000, 1000),DecodeDecimal('t/BYFA9xW8k=', 1379, -1000, 1000));
    question.answers.length = 0;
    question.num = 82;
    question.isSingleAns = true;
    question.shortTextQuestion = "While separated, Winston feels:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('24GAYeKhcrY=', 1381, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Indifferent";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('euzL9rGu09c=', 1383, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Desperate ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('euzL9rGu09c=', 1385, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Calm";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('wpcWiHAmNxU=', 1387, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Relieved";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion83()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 82;
    var weight = DecodeNumber('dwgyO8usnrM=', 1389, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dwgyO8usnrM=', 1389, -1000, 1000),DecodeDecimal('J1CK1j5yUVk=', 1389, -1000, 1000),DecodeDecimal('J1CK1j5yUVk=', 1389, -1000, 1000));
    question.answers.length = 0;
    question.num = 83;
    question.isSingleAns = true;
    question.shortTextQuestion = "The guard warns Winston:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('dwgyO8usnrM=', 1391, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He can repent with a confession";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('CuvVbh0tyMI=', 1393, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He will survive only if he obeys ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CuvVbh0tyMI=', 1395, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He’ll be released soon";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('9M59RJpJjyo=', 1397, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He will be brainwashed";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion84()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 83;
    var weight = DecodeNumber('7gLD/i6QVRc=', 1399, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7gLD/i6QVRc=', 1399, -1000, 1000),DecodeDecimal('irDdwtMR5RU=', 1399, -1000, 1000),DecodeDecimal('irDdwtMR5RU=', 1399, -1000, 1000));
    question.answers.length = 0;
    question.num = 84;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s first act in his cell is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('PtHeX23NyDc=', 1401, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Losing hope entirely ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PtHeX23NyDc=', 1403, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Starting a diary again";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('p/uzCzI7tMk=', 1405, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Attempting to escape";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('gtU1zlNBRXs=', 1407, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Shouting Big Brother’s name";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion85()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 84;
    var weight = DecodeNumber('ay1o2Y8UFbk=', 1409, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ay1o2Y8UFbk=', 1409, -1000, 1000),DecodeDecimal('dQC4II7Q8Uo=', 1409, -1000, 1000),DecodeDecimal('dQC4II7Q8Uo=', 1409, -1000, 1000));
    question.answers.length = 0;
    question.num = 85;
    question.isSingleAns = true;
    question.shortTextQuestion = "Who interrogates Winston?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ay1o2Y8UFbk=', 1411, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Julia";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HrXLwMlNMhQ=', 1413, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Parsons";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7CdYLNfIpIU=', 1415, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A fellow prisoner";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('LVrc6iWkBkc=', 1417, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "O’Brien ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion86()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 85;
    var weight = DecodeNumber('Jkh4DUmq44Y=', 1419, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Jkh4DUmq44Y=', 1419, -1000, 1000),DecodeDecimal('sXc4dlR1yrE=', 1419, -1000, 1000),DecodeDecimal('sXc4dlR1yrE=', 1419, -1000, 1000));
    question.answers.length = 0;
    question.num = 86;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien uses what to control Winston?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Jkh4DUmq44Y=', 1421, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Threats only";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('K9XDWQc3Zbo=', 1423, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Sleep deprivation";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qIQyRXVsWTo=', 1425, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Torture ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('qIQyRXVsWTo=', 1427, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Love";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion87()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 86;
    var weight = DecodeNumber('T9wxTmDz+mw=', 1429, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('T9wxTmDz+mw=', 1429, -1000, 1000),DecodeDecimal('Mg0Y8ALadOI=', 1429, -1000, 1000),DecodeDecimal('Mg0Y8ALadOI=', 1429, -1000, 1000));
    question.answers.length = 0;
    question.num = 87;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston sees the rats and becomes:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('T9wxTmDz+mw=', 1431, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Amused";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iuaaMjEqR34=', 1433, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Terrified ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iuaaMjEqR34=', 1435, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Indifferent";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('14jBSnBIklA=', 1437, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Curious";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion88()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 87;
    var weight = DecodeNumber('5xHqgAIFh8E=', 1439, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5xHqgAIFh8E=', 1439, -1000, 1000),DecodeDecimal('qws8hZOp7LA=', 1439, -1000, 1000),DecodeDecimal('qws8hZOp7LA=', 1439, -1000, 1000));
    question.answers.length = 0;
    question.num = 88;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien offers him:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('PZ3yhYakAQQ=', 1441, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A choice between pain and rats ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PZ3yhYakAQQ=', 1443, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A painless death";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/UoJZHWtL/s=', 1445, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Love services";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('y8JupS3PsH8=', 1447, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Release if he confesses";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion89()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 88;
    var weight = DecodeNumber('HPTsXgfBLXU=', 1449, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HPTsXgfBLXU=', 1449, -1000, 1000),DecodeDecimal('5FFUJUEN/i8=', 1449, -1000, 1000),DecodeDecimal('5FFUJUEN/i8=', 1449, -1000, 1000));
    question.answers.length = 0;
    question.num = 89;
    question.isSingleAns = true;
    question.shortTextQuestion = "After torture, Winston:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('HPTsXgfBLXU=', 1451, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Joins the Thought Police";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LUp8Vs/nlMg=', 1453, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Becomes Inner Party";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('p7eyA8PfBoU=', 1455, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Escapes";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('8sOhZBlxVdI=', 1457, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Betrays Julia ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion90()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 89;
    var weight = DecodeNumber('9MX/i2yA2o4=', 1459, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9MX/i2yA2o4=', 1459, -1000, 1000),DecodeDecimal('ivef0chsA24=', 1459, -1000, 1000),DecodeDecimal('ivef0chsA24=', 1459, -1000, 1000));
    question.answers.length = 0;
    question.num = 90;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston admits the Party can make him:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('9MX/i2yA2o4=', 1461, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Abolish himself";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GvqLfDK/8oQ=', 1463, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Deny Big Brother";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2RQ+ROUFRUc=', 1465, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Love Big Brother ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('2RQ+ROUFRUc=', 1467, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Avoid truth";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion91()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 90;
    var weight = DecodeNumber('pV3U7GNEyAU=', 1469, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pV3U7GNEyAU=', 1469, -1000, 1000),DecodeDecimal('e/hkEX+N1j4=', 1469, -1000, 1000),DecodeDecimal('e/hkEX+N1j4=', 1469, -1000, 1000));
    question.answers.length = 0;
    question.num = 91;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien encourages Winston to accept that:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('pV3U7GNEyAU=', 1471, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Julia is lying";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vC6ljKDmMLo=', 1473, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Goldstein is alive";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KMUzeOPyUj4=', 1475, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Proles will rise";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nmIDC9nZeNc=', 1477, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "2 + 2 = 5 ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion92()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 91;
    var weight = DecodeNumber('pLqR17N53Xo=', 1479, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pLqR17N53Xo=', 1479, -1000, 1000),DecodeDecimal('pF2M2VTKfeY=', 1479, -1000, 1000),DecodeDecimal('pF2M2VTKfeY=', 1479, -1000, 1000));
    question.answers.length = 0;
    question.num = 92;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s loyalty is now:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('pLqR17N53Xo=', 1481, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Undecided";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fYDjX+RDtZQ=', 1483, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Split";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VnxcXRmVvv4=', 1485, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Fully to Big Brother ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('VnxcXRmVvv4=', 1487, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "To Julia";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion93()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 92;
    var weight = DecodeNumber('e9FUXtXdw18=', 1489, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('e9FUXtXdw18=', 1489, -1000, 1000),DecodeDecimal('lb8qmi/JCFA=', 1489, -1000, 1000),DecodeDecimal('lb8qmi/JCFA=', 1489, -1000, 1000));
    question.answers.length = 0;
    question.num = 93;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston is taken to Room 101 to face:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('e9FUXtXdw18=', 1491, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "O’Brien’s wrath";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LdxTTA1tIPc=', 1493, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Political betrayal";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('H/ddeSo5mc4=', 1495, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The prole uprising";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('bOw6y7E9Daw=', 1497, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "His greatest fear ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion94()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 93;
    var weight = DecodeNumber('S9BrhcgSqiw=', 1499, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('S9BrhcgSqiw=', 1499, -1000, 1000),DecodeDecimal('CHIQ/1cRPtU=', 1499, -1000, 1000),DecodeDecimal('CHIQ/1cRPtU=', 1499, -1000, 1000));
    question.answers.length = 0;
    question.num = 94;
    question.isSingleAns = true;
    question.shortTextQuestion = "In Room 101, Winston sees:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('S9BrhcgSqiw=', 1501, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A secret door";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nSAJ5MEPVtk=', 1503, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Big Brother’s photo";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HCb0X16m4c0=', 1505, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Jumbo rats ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('HCb0X16m4c0=', 1507, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Spiders";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion95()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 94;
    var weight = DecodeNumber('csyWD+Fi6Dk=', 1509, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('csyWD+Fi6Dk=', 1509, -1000, 1000),DecodeDecimal('wzXw31s3gYU=', 1509, -1000, 1000),DecodeDecimal('wzXw31s3gYU=', 1509, -1000, 1000));
    question.answers.length = 0;
    question.num = 95;
    question.isSingleAns = true;
    question.shortTextQuestion = "Facing rats, Winston:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('csyWD+Fi6Dk=', 1511, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Defies Big Brother";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IUTfc7GlT/o=', 1513, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Holds firm";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2LXj+EJUXP8=', 1515, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Laughs";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('B6N831RYNKg=', 1517, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Screams for Julia ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion96()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 95;
    var weight = DecodeNumber('Ucu/m+hKzcU=', 1519, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ucu/m+hKzcU=', 1519, -1000, 1000),DecodeDecimal('JIj3O9v0L38=', 1519, -1000, 1000),DecodeDecimal('JIj3O9v0L38=', 1519, -1000, 1000));
    question.answers.length = 0;
    question.num = 96;
    question.isSingleAns = true;
    question.shortTextQuestion = "His cry “Do it to Julia!” shows he:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Ucu/m+hKzcU=', 1521, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Is defiant";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EzzjQFXlL88=', 1523, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Will sacrifice Julia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('EzzjQFXlL88=', 1525, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Plans to escape";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('RY/1BPqCL7s=', 1527, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Remains loyal";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion97()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 96;
    var weight = DecodeNumber('qFFAf55y0/Y=', 1529, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qFFAf55y0/Y=', 1529, -1000, 1000),DecodeDecimal('W3g5QcL4sTE=', 1529, -1000, 1000),DecodeDecimal('W3g5QcL4sTE=', 1529, -1000, 1000));
    question.answers.length = 0;
    question.num = 97;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston and Julia meet again:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('qFFAf55y0/Y=', 1531, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "In O’Brien’s office";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('q3GFNehb9I0=', 1533, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "In a canteen for ex-prisoners ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('q3GFNehb9I0=', 1535, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "In the prole district";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7c7mCd4Imm8=', 1537, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "In separate cells";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion98()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 97;
    var weight = DecodeNumber('D+367Boa+gk=', 1539, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('D+367Boa+gk=', 1539, -1000, 1000),DecodeDecimal('Cyf8As0efu0=', 1539, -1000, 1000),DecodeDecimal('Cyf8As0efu0=', 1539, -1000, 1000));
    question.answers.length = 0;
    question.num = 98;
    question.isSingleAns = true;
    question.shortTextQuestion = "Their reunion is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('D+367Boa+gk=', 1541, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Violent";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pEJrb2j9dpk=', 1543, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Cold and empty ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pEJrb2j9dpk=', 1545, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Emotional and resistant";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('knTO0nS4krA=', 1547, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Warm and hopeful";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion99()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 98;
    var weight = DecodeNumber('ib+U5+CZr94=', 1549, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ib+U5+CZr94=', 1549, -1000, 1000),DecodeDecimal('vKU8XoI/etU=', 1549, -1000, 1000),DecodeDecimal('vKU8XoI/etU=', 1549, -1000, 1000));
    question.answers.length = 0;
    question.num = 99;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston now feels:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ib+U5+CZr94=', 1551, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Anger toward O’Brien";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('S3PKof8iMNk=', 1553, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Complete indifference ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('S3PKof8iMNk=', 1555, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Hope for rebellion";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ZBNF8o/AjbM=', 1557, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Deep love for Julia";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion100()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 99;
    var weight = DecodeNumber('gnHKIC42G9s=', 1559, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('gnHKIC42G9s=', 1559, -1000, 1000),DecodeDecimal('DSNO8oo2qyE=', 1559, -1000, 1000),DecodeDecimal('DSNO8oo2qyE=', 1559, -1000, 1000));
    question.answers.length = 0;
    question.num = 100;
    question.isSingleAns = true;
    question.shortTextQuestion = "At the end, Winston:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('gnHKIC42G9s=', 1561, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Prepares to rebel again";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pGQqDr1YLig=', 1563, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Instructs Julia to join the Brotherhood";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('FNPI4Du7A6E=', 1565, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Plans to escape to Eastasia";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('lMaSgcW/sR0=', 1567, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Loves Big Brother ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion101()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 100;
    var weight = DecodeNumber('KgyvMpJ5luk=', 1371, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zx+W3cs5W0c=', 1371, -1000, 1000),DecodeDecimal('weCD+aQ2pmc=', 1371, -1000, 1000),DecodeDecimal('weCD+aQ2pmc=', 1371, -1000, 1000));
    question.num = 101;
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 1 Part 1 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
<<<<<<< HEAD
function InitQuestion52()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 51;
    var weight = DecodeNumber('BxOfisjzIYY=', 555, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('IoZdnQO7ND0=', 555, -1000, 1000),DecodeDecimal('+hNXXtQHdQA=', 555, -1000, 1000),DecodeDecimal('+hNXXtQHdQA=', 555, -1000, 1000));
    question.num = 52;
=======
function InitQuestion102()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 101;
    var weight = DecodeNumber('bngi0eBThZQ=', 1381, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7SjDJb8DFdc=', 1381, -1000, 1000),DecodeDecimal('KgyvMpJ5luk=', 1381, -1000, 1000),DecodeDecimal('KgyvMpJ5luk=', 1381, -1000, 1000));
    question.num = 102;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 2 Part 1 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion103()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 102;
    var weight = DecodeNumber('kjMoilCCICU=', 1391, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PKQcWrF9SeQ=', 1391, -1000, 1000),DecodeDecimal('bngi0eBThZQ=', 1391, -1000, 1000),DecodeDecimal('bngi0eBThZQ=', 1391, -1000, 1000));
    question.num = 103;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 3 Part 1 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion104()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 103;
    var weight = DecodeNumber('0B80F0A3CoA=', 1401, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PtHeX23NyDc=', 1401, -1000, 1000),DecodeDecimal('kjMoilCCICU=', 1401, -1000, 1000),DecodeDecimal('kjMoilCCICU=', 1401, -1000, 1000));
    question.num = 104;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 4 Part 1 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion105()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 104;
    var weight = DecodeNumber('44AoUbtfQGU=', 1411, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HrXLwMlNMhQ=', 1411, -1000, 1000),DecodeDecimal('0B80F0A3CoA=', 1411, -1000, 1000),DecodeDecimal('0B80F0A3CoA=', 1411, -1000, 1000));
    question.num = 105;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 6 Part 1 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion106()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 105;
    var weight = DecodeNumber('s9yWwSJ9J8w=', 1421, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('K9XDWQc3Zbo=', 1421, -1000, 1000),DecodeDecimal('44AoUbtfQGU=', 1421, -1000, 1000),DecodeDecimal('44AoUbtfQGU=', 1421, -1000, 1000));
    question.num = 106;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 5 Part 1 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion107()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 106;
    var weight = DecodeNumber('ZHKvP7E0erU=', 1431, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('G/b4VMgDN/o=', 1431, -1000, 1000),DecodeDecimal('s9yWwSJ9J8w=', 1431, -1000, 1000),DecodeDecimal('s9yWwSJ9J8w=', 1431, -1000, 1000));
    question.num = 107;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 7 Part 1 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion108()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 107;
    var weight = DecodeNumber('J117uHeKhH0=', 1441, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PZ3yhYakAQQ=', 1441, -1000, 1000),DecodeDecimal('ZHKvP7E0erU=', 1441, -1000, 1000),DecodeDecimal('ZHKvP7E0erU=', 1441, -1000, 1000));
    question.num = 108;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 8 Part 1 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion109()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 108;
    var weight = DecodeNumber('vLxmBwNXHBM=', 1451, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('LUp8Vs/nlMg=', 1451, -1000, 1000),DecodeDecimal('J117uHeKhH0=', 1451, -1000, 1000),DecodeDecimal('J117uHeKhH0=', 1451, -1000, 1000));
    question.num = 109;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 9 Part 1 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion110()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 109;
    var weight = DecodeNumber('qqlDuO3sCY0=', 1461, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('GvqLfDK/8oQ=', 1461, -1000, 1000),DecodeDecimal('vLxmBwNXHBM=', 1461, -1000, 1000),DecodeDecimal('vLxmBwNXHBM=', 1461, -1000, 1000));
    question.num = 110;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 10 Part 1 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion111()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 110;
    var weight = DecodeNumber('TOe+E3EPeI8=', 1471, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vC6ljKDmMLo=', 1471, -1000, 1000),DecodeDecimal('qqlDuO3sCY0=', 1471, -1000, 1000),DecodeDecimal('qqlDuO3sCY0=', 1471, -1000, 1000));
    question.num = 111;
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 1 Part 2 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
<<<<<<< HEAD
=======
/* Code generated function */
function InitQuestion112()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 111;
    var weight = DecodeNumber('fMC9LyJEEa4=', 1481, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fYDjX+RDtZQ=', 1481, -1000, 1000),DecodeDecimal('TOe+E3EPeI8=', 1481, -1000, 1000),DecodeDecimal('TOe+E3EPeI8=', 1481, -1000, 1000));
    question.num = 112;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 2 Part 2 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion113()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 112;
    var weight = DecodeNumber('LVtk2Ktfsl0=', 1491, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('LdxTTA1tIPc=', 1491, -1000, 1000),DecodeDecimal('fMC9LyJEEa4=', 1491, -1000, 1000),DecodeDecimal('fMC9LyJEEa4=', 1491, -1000, 1000));
    question.num = 113;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 3 Part 2 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion114()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 113;
    var weight = DecodeNumber('zX7GEh3dDFw=', 1501, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('nSAJ5MEPVtk=', 1501, -1000, 1000),DecodeDecimal('LVtk2Ktfsl0=', 1501, -1000, 1000),DecodeDecimal('LVtk2Ktfsl0=', 1501, -1000, 1000));
    question.num = 114;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 4 Part 2 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion115()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 114;
    var weight = DecodeNumber('5yGc3OsIwik=', 1511, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('IUTfc7GlT/o=', 1511, -1000, 1000),DecodeDecimal('zX7GEh3dDFw=', 1511, -1000, 1000),DecodeDecimal('zX7GEh3dDFw=', 1511, -1000, 1000));
    question.num = 115;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 5 Part 2 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion116()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 115;
    var weight = DecodeNumber('S+zeB84VlIs=', 1521, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('We46Eylmge8=', 1521, -1000, 1000),DecodeDecimal('5yGc3OsIwik=', 1521, -1000, 1000),DecodeDecimal('5yGc3OsIwik=', 1521, -1000, 1000));
    question.num = 116;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 6 Part 2 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion117()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 116;
    var weight = DecodeNumber('VrPhnfTa5kE=', 1531, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('i09YEDGzNuA=', 1531, -1000, 1000),DecodeDecimal('S+zeB84VlIs=', 1531, -1000, 1000),DecodeDecimal('S+zeB84VlIs=', 1531, -1000, 1000));
    question.num = 117;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 7 Part 2 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion118()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 117;
    var weight = DecodeNumber('1DHwywHBnBo=', 1541, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FAW0jISirZw=', 1541, -1000, 1000),DecodeDecimal('VrPhnfTa5kE=', 1541, -1000, 1000),DecodeDecimal('VrPhnfTa5kE=', 1541, -1000, 1000));
    question.num = 118;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 8 Part 2 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion119()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 118;
    var weight = DecodeNumber('4aTzJ5RnQO4=', 1551, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3Grcgal2IbU=', 1551, -1000, 1000),DecodeDecimal('1DHwywHBnBo=', 1551, -1000, 1000),DecodeDecimal('1DHwywHBnBo=', 1551, -1000, 1000));
    question.num = 119;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 10 Part 2 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion120()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 119;
    var weight = DecodeNumber('2jPVdYqp9A0=', 1561, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pGQqDr1YLig=', 1561, -1000, 1000),DecodeDecimal('4aTzJ5RnQO4=', 1561, -1000, 1000),DecodeDecimal('4aTzJ5RnQO4=', 1561, -1000, 1000));
    question.num = 120;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 9 Part 2 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d


/* Code generated function */
function ClearQuestion1()
{
    const questionIndex = 0;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion2()
{
    const questionIndex = 1;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion3()
{
    const questionIndex = 2;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion4()
{
    const questionIndex = 3;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion5()
{
    const questionIndex = 4;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion6()
{
    const questionIndex = 5;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion7()
{
    const questionIndex = 6;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion8()
{
    const questionIndex = 7;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion9()
{
    const questionIndex = 8;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion10()
{
    const questionIndex = 9;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion11()
{
    const questionIndex = 10;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion12()
{
    const questionIndex = 11;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion13()
{
    const questionIndex = 12;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion14()
{
    const questionIndex = 13;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion15()
{
    const questionIndex = 14;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion16()
{
    const questionIndex = 15;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion17()
{
    const questionIndex = 16;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion18()
{
    const questionIndex = 17;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion19()
{
    const questionIndex = 18;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion20()
{
    const questionIndex = 19;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion21()
{
    const questionIndex = 20;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion22()
{
    const questionIndex = 21;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion23()
{
    const questionIndex = 22;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion24()
{
    const questionIndex = 23;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion25()
{
    const questionIndex = 24;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion26()
{
    const questionIndex = 25;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion27()
{
    const questionIndex = 26;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion28()
{
    const questionIndex = 27;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion29()
{
    const questionIndex = 28;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion30()
{
    const questionIndex = 29;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion31()
{
    const questionIndex = 30;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion32()
{
    const questionIndex = 31;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion33()
{
    const questionIndex = 32;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion34()
{
    const questionIndex = 33;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion35()
{
    const questionIndex = 34;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion36()
{
    const questionIndex = 35;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion37()
{
    const questionIndex = 36;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion38()
{
    const questionIndex = 37;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion39()
{
    const questionIndex = 38;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion40()
{
    const questionIndex = 39;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion41()
{
    const questionIndex = 40;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion42()
{
    const questionIndex = 41;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion43()
{
    const questionIndex = 42;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion44()
{
    const questionIndex = 43;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion45()
{
    const questionIndex = 44;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion46()
{
    const questionIndex = 45;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion47()
{
    const questionIndex = 46;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion48()
{
    const questionIndex = 47;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion49()
{
    const questionIndex = 48;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion50()
{
    const questionIndex = 49;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion51()
{
    const questionIndex = 50;
<<<<<<< HEAD
    ClearOpenAns(questionIndex);
=======
    ClearSingleAnswerChoices(questionIndex);
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d

}
/* Code generated function */
function ClearQuestion52()
{
    const questionIndex = 51;
<<<<<<< HEAD
=======
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion53()
{
    const questionIndex = 52;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion54()
{
    const questionIndex = 53;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion55()
{
    const questionIndex = 54;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion56()
{
    const questionIndex = 55;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion57()
{
    const questionIndex = 56;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion58()
{
    const questionIndex = 57;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion59()
{
    const questionIndex = 58;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion60()
{
    const questionIndex = 59;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion61()
{
    const questionIndex = 60;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion62()
{
    const questionIndex = 61;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion63()
{
    const questionIndex = 62;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion64()
{
    const questionIndex = 63;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion65()
{
    const questionIndex = 64;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion66()
{
    const questionIndex = 65;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion67()
{
    const questionIndex = 66;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion68()
{
    const questionIndex = 67;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion69()
{
    const questionIndex = 68;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion70()
{
    const questionIndex = 69;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion71()
{
    const questionIndex = 70;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion72()
{
    const questionIndex = 71;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion73()
{
    const questionIndex = 72;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion74()
{
    const questionIndex = 73;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion75()
{
    const questionIndex = 74;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion76()
{
    const questionIndex = 75;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion77()
{
    const questionIndex = 76;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion78()
{
    const questionIndex = 77;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion79()
{
    const questionIndex = 78;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion80()
{
    const questionIndex = 79;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion81()
{
    const questionIndex = 80;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion82()
{
    const questionIndex = 81;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion83()
{
    const questionIndex = 82;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion84()
{
    const questionIndex = 83;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion85()
{
    const questionIndex = 84;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion86()
{
    const questionIndex = 85;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion87()
{
    const questionIndex = 86;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion88()
{
    const questionIndex = 87;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion89()
{
    const questionIndex = 88;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion90()
{
    const questionIndex = 89;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion91()
{
    const questionIndex = 90;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion92()
{
    const questionIndex = 91;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion93()
{
    const questionIndex = 92;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion94()
{
    const questionIndex = 93;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion95()
{
    const questionIndex = 94;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion96()
{
    const questionIndex = 95;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion97()
{
    const questionIndex = 96;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion98()
{
    const questionIndex = 97;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion99()
{
    const questionIndex = 98;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion100()
{
    const questionIndex = 99;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion101()
{
    const questionIndex = 100;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion102()
{
    const questionIndex = 101;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion103()
{
    const questionIndex = 102;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion104()
{
    const questionIndex = 103;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion105()
{
    const questionIndex = 104;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion106()
{
    const questionIndex = 105;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion107()
{
    const questionIndex = 106;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion108()
{
    const questionIndex = 107;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion109()
{
    const questionIndex = 108;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion110()
{
    const questionIndex = 109;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion111()
{
    const questionIndex = 110;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion112()
{
    const questionIndex = 111;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion113()
{
    const questionIndex = 112;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion114()
{
    const questionIndex = 113;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion115()
{
    const questionIndex = 114;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion116()
{
    const questionIndex = 115;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion117()
{
    const questionIndex = 116;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion118()
{
    const questionIndex = 117;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion119()
{
    const questionIndex = 118;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion120()
{
    const questionIndex = 119;
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
    ClearOpenAns(questionIndex);

}






