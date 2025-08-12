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
    var weight = DecodeNumber('VmpYrVfC1rI=', 504, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VmpYrVfC1rI=', 504, -1000, 1000),DecodeDecimal('WoqqmN5c2VM=', 504, -1000, 1000),DecodeDecimal('WoqqmN5c2VM=', 504, -1000, 1000));
    question.answers.length = 0;
    question.num = 1;
    question.isSingleAns = true;
    question.shortTextQuestion = "What is Winston’s first day in his diary about?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('VmpYrVfC1rI=', 506, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = " He describes a party rally.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gtERZMPX8xA=', 508, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = " He confesses his love for Julia.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('L821qxOzdXo=', 510, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = " He recounts a dream about O’Brien.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('2qhCZNm1+io=', 512, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = " He writes “DOWN WITH BIG BROTHER.”";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 1;
    var weight = DecodeNumber('yUxieoSLOhA=', 514, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yUxieoSLOhA=', 514, -1000, 1000),DecodeDecimal('rJLG+w6Ud5s=', 514, -1000, 1000),DecodeDecimal('rJLG+w6Ud5s=', 514, -1000, 1000));
    question.answers.length = 0;
    question.num = 2;
    question.isSingleAns = true;
    question.shortTextQuestion = "The “fearful physical smell” Winston notices in his apartment refers to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('he3eVLaAPbI=', 516, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "the engine smell in Victory Mansions.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('he3eVLaAPbI=', 518, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Mrs. Parsons’s house.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('H/y3oXRFWnA=', 520, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "the flowers in the canteen.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('YhqkEwaeU7A=', 522, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "the stale air from the broken window.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 2;
    var weight = DecodeNumber('5U2eTXcyWuU=', 524, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5U2eTXcyWuU=', 524, -1000, 1000),DecodeDecimal('r2EmUeZLMas=', 524, -1000, 1000),DecodeDecimal('r2EmUeZLMas=', 524, -1000, 1000));
    question.answers.length = 0;
    question.num = 3;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston buys a diary from:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('5U2eTXcyWuU=', 526, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "the local Victory Market.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BXU+Y8QuyIo=', 528, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Mr. Charrington’s antique shop.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BXU+Y8QuyIo=', 530, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Parsons’s child.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('spSHhej8fGg=', 532, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "the Ministry of Truth canteen.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 3;
    var weight = DecodeNumber('qsc9gs7BeP0=', 534, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qsc9gs7BeP0=', 534, -1000, 1000),DecodeDecimal('+/eqSxIECtU=', 534, -1000, 1000),DecodeDecimal('+/eqSxIECtU=', 534, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s dream about the Golden Country makes him feel:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('qsc9gs7BeP0=', 536, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "afraid of rats.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yuYT92OupRg=', 538, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "nostalgic and free.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yuYT92OupRg=', 540, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = " suspicious of Julia";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hbxZIUOKgnY=', 542, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "oppressed by uniforms.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 4;
    var weight = DecodeNumber('GuP9y3jSLsY=', 544, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('GuP9y3jSLsY=', 544, -1000, 1000),DecodeDecimal('CSe8nOh1gPU=', 544, -1000, 1000),DecodeDecimal('CSe8nOh1gPU=', 544, -1000, 1000));
    question.answers.length = 0;
    question.num = 5;
    question.isSingleAns = true;
    question.shortTextQuestion = "Mrs. Parsons asks Winston to fix:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('GuP9y3jSLsY=', 546, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "her radio.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QnURLM0/1wU=', 548, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "a fuse in the kitchen.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QnURLM0/1wU=', 550, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "her locked diary.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('/WWSo+q1T5k=', 552, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "her plumbing.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 5;
    var weight = DecodeNumber('uajWB0kvJp0=', 554, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('uajWB0kvJp0=', 554, -1000, 1000),DecodeDecimal('A07XvtKrN3s=', 554, -1000, 1000),DecodeDecimal('A07XvtKrN3s=', 554, -1000, 1000));
    question.answers.length = 0;
    question.num = 6;
    question.isSingleAns = true;
    question.shortTextQuestion = "Parsons’s children accuse someone of:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('uajWB0kvJp0=', 556, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "spying.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JLgnkQwHt/g=', 558, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "thoughtcrime.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JLgnkQwHt/g=', 560, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "littering.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Yah2grQ8qeQ=', 562, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "stealing.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 6;
    var weight = DecodeNumber('Rpz1Wb2KT/U=', 564, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Rpz1Wb2KT/U=', 564, -1000, 1000),DecodeDecimal('ZzMe9NzMJQE=', 564, -1000, 1000),DecodeDecimal('ZzMe9NzMJQE=', 564, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = true;
    question.shortTextQuestion = "The Parsons children belong to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Rpz1Wb2KT/U=', 566, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "the Brotherhood.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('B7G5sUipHo8=', 568, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "the Youth League.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xyZhZE5fzKc=', 570, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "the Minipax program.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hGpZv01shQc=', 572, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "the Spies.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 7;
    var weight = DecodeNumber('E5AumzK4y3g=', 574, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('E5AumzK4y3g=', 574, -1000, 1000),DecodeDecimal('X747VV6dIwg=', 574, -1000, 1000),DecodeDecimal('X747VV6dIwg=', 574, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = true;
    question.shortTextQuestion = "After the children leave, Winston feels:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Z4+jdl4KX1c=', 576, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "disgusted.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Z4+jdl4KX1c=', 578, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "terrified.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('27lzUPrv7z0=', 580, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "inspired to rebel.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('dyxQwMo7FPw=', 582, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "cheerful.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 8;
    var weight = DecodeNumber('9GhH5S9ZNAY=', 584, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9GhH5S9ZNAY=', 584, -1000, 1000),DecodeDecimal('MI39Asob9S8=', 584, -1000, 1000),DecodeDecimal('MI39Asob9S8=', 584, -1000, 1000));
    question.answers.length = 0;
    question.num = 9;
    question.isSingleAns = true;
    question.shortTextQuestion = "In Winston’s recurring dream, he encounters:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('9GhH5S9ZNAY=', 586, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "O’Brien.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7oR0oQJTXn0=', 588, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Emmanuel Goldstein.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('avyYe3zfatI=', 590, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Big Brother.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Gx0cvUjQQwo=', 592, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "his mother and sister.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 9;
    var weight = DecodeNumber('7zsJnMd5gLc=', 594, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7zsJnMd5gLc=', 594, -1000, 1000),DecodeDecimal('B/CSuMlDCN4=', 594, -1000, 1000),DecodeDecimal('B/CSuMlDCN4=', 594, -1000, 1000));
    question.answers.length = 0;
    question.num = 10;
    question.isSingleAns = true;
    question.shortTextQuestion = "The telescreen in his flat:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('7zsJnMd5gLc=', 596, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "only watches his hallway.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rUL87X6B7vs=', 598, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "has no volume control. ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rUL87X6B7vs=', 600, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "never turns off.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('afpNe/ojfyA=', 602, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "breaks down often.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 10;
    var weight = DecodeNumber('BL/iDfp6RZE=', 604, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BL/iDfp6RZE=', 604, -1000, 1000),DecodeDecimal('2q1l+yzQZC0=', 604, -1000, 1000),DecodeDecimal('2q1l+yzQZC0=', 604, -1000, 1000));
    question.answers.length = 0;
    question.num = 11;
    question.isSingleAns = true;
    question.shortTextQuestion = "Which slogan does Winston reflect on?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('FTwie0fMWY0=', 606, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Obedience is Power.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FTwie0fMWY0=', 608, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Freedom is Happiness.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('M/Fd+zWoWJc=', 610, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Unity is Peace.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('m1fCClo4bRc=', 612, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Ignorance is Strength. ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 11;
    var weight = DecodeNumber('r0xZkITQbPE=', 614, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('r0xZkITQbPE=', 614, -1000, 1000),DecodeDecimal('HwH/9Fg/8FU=', 614, -1000, 1000),DecodeDecimal('HwH/9Fg/8FU=', 614, -1000, 1000));
    question.answers.length = 0;
    question.num = 12;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s feelings about his job are:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('R5e5wsfkJVA=', 616, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "full of shame. ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('R5e5wsfkJVA=', 618, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "indifferent.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('n1FUt5DwZsw=', 620, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "confused.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nAVQZ8J68T8=', 622, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "enthusiastic.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 12;
    var weight = DecodeNumber('99FcUgMOtWs=', 624, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('99FcUgMOtWs=', 624, -1000, 1000),DecodeDecimal('/aFBnPSpdzE=', 624, -1000, 1000),DecodeDecimal('/aFBnPSpdzE=', 624, -1000, 1000));
    question.answers.length = 0;
    question.num = 13;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s actual work at the Ministry is to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('99FcUgMOtWs=', 626, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "monitor telescreens.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XuWKt+ZVsGU=', 628, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "draft propaganda posters.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ki1LQaTUlc8=', 630, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "guard Goldstein.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nngirTLRR64=', 632, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "rewrite old news articles. ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 13;
    var weight = DecodeNumber('Zj9mjuBSSMo=', 634, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Zj9mjuBSSMo=', 634, -1000, 1000),DecodeDecimal('EfVFO5uPswY=', 634, -1000, 1000),DecodeDecimal('EfVFO5uPswY=', 634, -1000, 1000));
    question.answers.length = 0;
    question.num = 14;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston alters records about:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Zj9mjuBSSMo=', 636, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "children’s crimes.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('suFLWg5Skqo=', 638, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "spy reports.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UdXcmgtX+/Y=', 640, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "weather patterns.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xgGVziHLrok=', 642, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "chocolate rations. ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 14;
    var weight = DecodeNumber('xx3euay+woY=', 644, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xx3euay+woY=', 644, -1000, 1000),DecodeDecimal('yrTktiRMSe4=', 644, -1000, 1000),DecodeDecimal('yrTktiRMSe4=', 644, -1000, 1000));
    question.answers.length = 0;
    question.num = 15;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston thinks of Syme as:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('luS/rMZfDEg=', 646, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "a secret brotherhood member.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('luS/rMZfDEg=', 648, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "a loyal worshiper.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('r0uZeKqW9mY=', 650, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "someone dull.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('6G4NJvGClU4=', 652, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "unintentionally dangerous. ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 15;
    var weight = DecodeNumber('qC0BA6TMqdQ=', 654, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qC0BA6TMqdQ=', 654, -1000, 1000),DecodeDecimal('CenDEh9E0cc=', 654, -1000, 1000),DecodeDecimal('CenDEh9E0cc=', 654, -1000, 1000));
    question.answers.length = 0;
    question.num = 16;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston notices that the new edition of the Newspeak dictionary is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('/YHXS+1+4QE=', 656, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "dangerous.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/YHXS+1+4QE=', 658, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "defunct.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yJVFEI/fiVU=', 660, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "humorous.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('NCH8VPn3JgA=', 662, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = " unfinished.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 16;
    var weight = DecodeNumber('nO20svKdZws=', 664, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('nO20svKdZws=', 664, -1000, 1000),DecodeDecimal('7b0wfy4pvYI=', 664, -1000, 1000),DecodeDecimal('7b0wfy4pvYI=', 664, -1000, 1000));
    question.answers.length = 0;
    question.num = 17;
    question.isSingleAns = true;
    question.shortTextQuestion = "What is the main subject of Syme’s conversation with Winston?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('nO20svKdZws=', 666, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Julia’s rumored activities.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yYXa/Fh27X0=', 668, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The dwindling chocolate rations.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('T9q/6AlNMyM=', 670, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The coming Two Minutes Hate.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('uhWg5QXqEdg=', 672, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Expanding Newspeak vocabulary. ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion18()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 17;
    var weight = DecodeNumber('tnQPvwsIyxA=', 674, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tnQPvwsIyxA=', 674, -1000, 1000),DecodeDecimal('4T679v+zSQI=', 674, -1000, 1000),DecodeDecimal('4T679v+zSQI=', 674, -1000, 1000));
    question.answers.length = 0;
    question.num = 18;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston thinks Syme will eventually be:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('tnQPvwsIyxA=', 676, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "made Inner Party.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QDMxA3i6M4Y=', 678, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "vaporized. ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QDMxA3i6M4Y=', 680, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "outside Oceania.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('HABsQ6aShl8=', 682, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "sent to the Ministry of Love.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 18;
    var weight = DecodeNumber('tXQH2qH01oo=', 684, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tXQH2qH01oo=', 684, -1000, 1000),DecodeDecimal('1oV0otyagWg=', 684, -1000, 1000),DecodeDecimal('1oV0otyagWg=', 684, -1000, 1000));
    question.answers.length = 0;
    question.num = 19;
    question.isSingleAns = true;
    question.shortTextQuestion = "What is nearly impossible in Newspeak?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('tXQH2qH01oo=', 686, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Writing poetry.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('I3kn9wi4f2w=', 688, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Speaking at rallies.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('d800i09ZDtw=', 690, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Spying on neighbors.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('N7V06YeVO44=', 692, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Expressing complexity. ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion20()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 19;
    var weight = DecodeNumber('VYH8QR8AcuE=', 694, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VYH8QR8AcuE=', 694, -1000, 1000),DecodeDecimal('jmw6vG5oB9w=', 694, -1000, 1000),DecodeDecimal('jmw6vG5oB9w=', 694, -1000, 1000));
    question.answers.length = 0;
    question.num = 20;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s feelings about Newspeak are:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('VYH8QR8AcuE=', 696, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "hopeful it will free him.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('imAq5LKYGmU=', 698, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "alarmed by its threat. ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('imAq5LKYGmU=', 700, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "bored with its simplicity.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Fk8ZwOBsIzc=', 702, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "amused by its creativity.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion21()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 20;
    var weight = DecodeNumber('ZCSZkIMb/Eo=', 704, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZCSZkIMb/Eo=', 704, -1000, 1000),DecodeDecimal('pd7lCQzE0xM=', 704, -1000, 1000),DecodeDecimal('pd7lCQzE0xM=', 704, -1000, 1000));
    question.answers.length = 0;
    question.num = 21;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s affair with Julia begins with:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ZCSZkIMb/Eo=', 706, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "a note in Parsons’s diary.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8HwS7PS4cvk=', 708, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "meeting in the antique shop.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ojqigGF5Icw=', 710, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "overhearing her at work.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('t6yM8cmhyS8=', 712, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "exchanging a slip of paper.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion22()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 21;
    var weight = DecodeNumber('yZaqtmoTG3Y=', 714, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yZaqtmoTG3Y=', 714, -1000, 1000),DecodeDecimal('5vz5LF7TJ00=', 714, -1000, 1000),DecodeDecimal('5vz5LF7TJ00=', 714, -1000, 1000));
    question.answers.length = 0;
    question.num = 22;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia slips Winston a note that says:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('yZaqtmoTG3Y=', 716, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "“Meet me by the fountain.”";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9rr2HcBfYAA=', 718, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "“I love you.”";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9rr2HcBfYAA=', 720, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "“Don’t trust O’Brien.”";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('y1Y6yIHX5dY=', 722, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "“I love Big Brother.”";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion23()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 22;
    var weight = DecodeNumber('oU6ENgOz3aw=', 724, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oU6ENgOz3aw=', 724, -1000, 1000),DecodeDecimal('DcNDZTtVoWY=', 724, -1000, 1000),DecodeDecimal('DcNDZTtVoWY=', 724, -1000, 1000));
    question.answers.length = 0;
    question.num = 23;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s immediate reaction to the note is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('oU6ENgOz3aw=', 726, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "fearful.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('AwPdcJbG6q0=', 728, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "elated. ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('AwPdcJbG6q0=', 730, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "indifferent.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('RSqyZlutZVQ=', 732, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "suspicious.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion24()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 23;
    var weight = DecodeNumber('B3qc+lMEIAw=', 734, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('B3qc+lMEIAw=', 734, -1000, 1000),DecodeDecimal('AiWmnsKpQv0=', 734, -1000, 1000),DecodeDecimal('AiWmnsKpQv0=', 734, -1000, 1000));
    question.answers.length = 0;
    question.num = 24;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia claims her rebellion stems from:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('4Q5aOdcddBk=', 736, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "sexual freedom. ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4Q5aOdcddBk=', 738, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "love of thought.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9J372COd13M=', 740, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "political theory.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Kh5AqdJJULA=', 742, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "hatred of suffering.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion25()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 24;
    var weight = DecodeNumber('XVSJiaOWmyQ=', 744, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('XVSJiaOWmyQ=', 744, -1000, 1000),DecodeDecimal('SPVaZ4n6lCY=', 744, -1000, 1000),DecodeDecimal('SPVaZ4n6lCY=', 744, -1000, 1000));
    question.answers.length = 0;
    question.num = 25;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston writes in his diary that the Party wants to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('XVSJiaOWmyQ=', 746, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "increase production.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6PIhfFYemz4=', 748, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "rewrite time.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iG9lBzqpZig=', 750, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "control minds.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('iG9lBzqpZig=', 752, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "abolish ideas.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion26()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 25;
    var weight = DecodeNumber('mnMVKTTl9z4=', 754, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mnMVKTTl9z4=', 754, -1000, 1000),DecodeDecimal('wcPbRsJeT8Q=', 754, -1000, 1000),DecodeDecimal('wcPbRsJeT8Q=', 754, -1000, 1000));
    question.answers.length = 0;
    question.num = 26;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston recalls his mother as:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('mnMVKTTl9z4=', 756, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "secretly rebellious.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EkJWvJrA2cc=', 758, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "cruel and distant.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sXGw1CjRYBs=', 760, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "a Party supporter.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('YYnxqKsI6+w=', 762, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "weak but loving.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion27()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 26;
    var weight = DecodeNumber('E38Jh6AGDVc=', 764, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('E38Jh6AGDVc=', 764, -1000, 1000),DecodeDecimal('wZ8ZcZFGu64=', 764, -1000, 1000),DecodeDecimal('wZ8ZcZFGu64=', 764, -1000, 1000));
    question.answers.length = 0;
    question.num = 27;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston believes that to exist truly is to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('E38Jh6AGDVc=', 766, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "die unnoticed.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jtnqQ/HliR4=', 768, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "conform outwardly.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yx3L83SaVWQ=', 770, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "think independently.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('yx3L83SaVWQ=', 772, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "serve Big Brother.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion28()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 27;
    var weight = DecodeNumber('6lhHmArwHl4=', 774, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6lhHmArwHl4=', 774, -1000, 1000),DecodeDecimal('4QcyXjYKNUI=', 774, -1000, 1000),DecodeDecimal('4QcyXjYKNUI=', 774, -1000, 1000));
    question.answers.length = 0;
    question.num = 28;
    question.isSingleAns = true;
    question.shortTextQuestion = "He realizes hope lies in the:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('6lhHmArwHl4=', 776, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Thought Police.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BaZDNLkGlIU=', 778, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Inner Party.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1KDx0WApe7Y=', 780, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "teleprompters.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Gl+t1hegw0U=', 782, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "proles.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion29()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 28;
    var weight = DecodeNumber('ljjKZaVI0KI=', 784, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ljjKZaVI0KI=', 784, -1000, 1000),DecodeDecimal('wOU5qD8p7U0=', 784, -1000, 1000),DecodeDecimal('wOU5qD8p7U0=', 784, -1000, 1000));
    question.answers.length = 0;
    question.num = 29;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston ventures into the prole district to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('pv1k/mAamPY=', 786, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "buy wine. ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pv1k/mAamPY=', 788, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "meet Julia.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JyMqgfwZtB4=', 790, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "attend a rally.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('8UyTVD2BQd8=', 792, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "escape telescreens.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion30()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 29;
    var weight = DecodeNumber('+oJDYMM/W2E=', 794, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+oJDYMM/W2E=', 794, -1000, 1000),DecodeDecimal('BHiL5YlermA=', 794, -1000, 1000),DecodeDecimal('BHiL5YlermA=', 794, -1000, 1000));
    question.answers.length = 0;
    question.num = 30;
    question.isSingleAns = true;
    question.shortTextQuestion = "He visits Mr. Charrington’s shop to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('+oJDYMM/W2E=', 796, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "sell his diary.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LJh1TzsH4pg=', 798, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "get a map.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LJh1TzsH4pg=', 800, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "report a spy.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('TPowFeTidfQ=', 802, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "purchase pills.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion31()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 30;
    var weight = DecodeNumber('ZXu+Cnq7aZs=', 804, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZXu+Cnq7aZs=', 804, -1000, 1000),DecodeDecimal('Imq5bZJTirw=', 804, -1000, 1000),DecodeDecimal('Imq5bZJTirw=', 804, -1000, 1000));
    question.answers.length = 0;
    question.num = 31;
    question.isSingleAns = true;
    question.shortTextQuestion = "The prole woman he overhears singing seems:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ZXu+Cnq7aZs=', 806, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "indoctrinated fully.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lTPCe9/SknQ=', 808, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "joyfully oblivious.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lTPCe9/SknQ=', 810, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "angry at the Party.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('iLjnLK6h0hU=', 812, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "suspicious and secretive.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion32()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 31;
    var weight = DecodeNumber('ErCw4zko3TI=', 814, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ErCw4zko3TI=', 814, -1000, 1000),DecodeDecimal('s2bGj8OCX8w=', 814, -1000, 1000),DecodeDecimal('s2bGj8OCX8w=', 814, -1000, 1000));
    question.answers.length = 0;
    question.num = 32;
    question.isSingleAns = true;
    question.shortTextQuestion = "What breaks for Winston in the shop?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('NKXZkMjeElw=', 816, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "His resolve.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NKXZkMjeElw=', 818, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A glass paperweight.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8esQJ9s4Isc=', 820, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The telescreen.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('D0O/QrSDzck=', 822, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A door.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion33()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 32;
    var weight = DecodeNumber('NCH8VPn3JgA=', 660, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NCH8VPn3JgA=', 660, -1000, 1000),DecodeDecimal('2zyZMRwjvBo=', 660, -1000, 1000),DecodeDecimal('2zyZMRwjvBo=', 660, -1000, 1000));
    question.answers.length = 0;
    question.num = 33;
    question.isSingleAns = true;
    question.shortTextQuestion = "What event causes a long workday for Winston?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('NCH8VPn3JgA=', 662, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A new telescreen policy";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('s4vNbEtqlSo=', 664, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A power outage";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yYXa/Fh27X0=', 666, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Hate Week preparations ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('yYXa/Fh27X0=', 668, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "An Inner Party speech";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion34()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 33;
    var weight = DecodeNumber('QDTmJtTKC8g=', 670, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QDTmJtTKC8g=', 670, -1000, 1000),DecodeDecimal('SdVSVhYE0Jk=', 670, -1000, 1000),DecodeDecimal('SdVSVhYE0Jk=', 670, -1000, 1000));
    question.answers.length = 0;
    question.num = 34;
    question.isSingleAns = true;
    question.shortTextQuestion = "During the sudden switch in enemies,  Winston is tasked with:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('uhWg5QXqEdg=', 672, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "rewriting all historical records ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uhWg5QXqEdg=', 674, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "memorizing new slogans";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tnQPvwsIyxA=', 676, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "capturing enemy spies";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('wzq79O7t8Lw=', 678, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "burning Party posters";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion35()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 34;
    var weight = DecodeNumber('HABsQ6aShl8=', 680, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HABsQ6aShl8=', 680, -1000, 1000),DecodeDecimal('pqLbKdBF+rk=', 680, -1000, 1000),DecodeDecimal('pqLbKdBF+rk=', 680, -1000, 1000));
    question.answers.length = 0;
    question.num = 35;
    question.isSingleAns = true;
    question.shortTextQuestion = "The slogan changes to reflect a new enemy. Who is the new official enemy?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('HABsQ6aShl8=', 682, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The Brotherhood";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WRYYvZNNTyQ=', 684, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Eurasia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tXQH2qH01oo=', 686, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Goldstein himself";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('d800i09ZDtw=', 688, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Eastasia ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion36()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 35;
    var weight = DecodeNumber('jWI8jBDe0m0=', 690, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jWI8jBDe0m0=', 690, -1000, 1000),DecodeDecimal('ZgRnMv/xCuA=', 690, -1000, 1000),DecodeDecimal('ZgRnMv/xCuA=', 690, -1000, 1000));
    question.answers.length = 0;
    question.num = 36;
    question.isSingleAns = true;
    question.shortTextQuestion = "What does Winston admire about the Party’s manipulation?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('N7V06YeVO44=', 692, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Its total rewriting of history ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('N7V06YeVO44=', 694, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Its loyalty to the proles";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VYH8QR8AcuE=', 696, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Its honesty";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kRHbsgGkRIA=', 698, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Its scientific rigor";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion37()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 36;
    var weight = DecodeNumber('Fk8ZwOBsIzc=', 700, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Fk8ZwOBsIzc=', 700, -1000, 1000),DecodeDecimal('SiPyRyi0XfE=', 700, -1000, 1000),DecodeDecimal('SiPyRyi0XfE=', 700, -1000, 1000));
    question.answers.length = 0;
    question.num = 37;
    question.isSingleAns = true;
    question.shortTextQuestion = "What surprises Winston and Julia in Mr. Charrington’s room?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Fk8ZwOBsIzc=', 702, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "An Inner Party coat";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3kQsGEZ2ZhE=', 704, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A map of Eastasia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZCSZkIMb/Eo=', 706, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A Party slogan carved into the wall";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ojqigGF5Icw=', 708, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A hidden telescreen ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion38()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 37;
    var weight = DecodeNumber('YHAGJuoLqLw=', 710, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YHAGJuoLqLw=', 710, -1000, 1000),DecodeDecimal('v+SzS8l5VKk=', 710, -1000, 1000),DecodeDecimal('v+SzS8l5VKk=', 710, -1000, 1000));
    question.answers.length = 0;
    question.num = 38;
    question.isSingleAns = true;
    question.shortTextQuestion = "What do they see from the window that affects them deeply?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('t6yM8cmhyS8=', 712, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A woman hanging laundry ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('t6yM8cmhyS8=', 714, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Children playing with telescreens";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yZaqtmoTG3Y=', 716, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Goldstein’s symbol";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('mkM3lznrCZI=', 718, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A prole fight";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion39()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 38;
    var weight = DecodeNumber('y1Y6yIHX5dY=', 720, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('y1Y6yIHX5dY=', 720, -1000, 1000),DecodeDecimal('zF9dEmQllu0=', 720, -1000, 1000),DecodeDecimal('zF9dEmQllu0=', 720, -1000, 1000));
    question.answers.length = 0;
    question.num = 39;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston considers the prole woman as:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('y1Y6yIHX5dY=', 722, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "a victim of Big Brother";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oU6ENgOz3aw=', 724, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "a hope for the future";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oU6ENgOz3aw=', 726, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "an enemy in disguise";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('jwVFYkn2La0=', 728, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "a Party loyalist";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion40()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 39;
    var weight = DecodeNumber('RSqyZlutZVQ=', 730, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('RSqyZlutZVQ=', 730, -1000, 1000),DecodeDecimal('XNZziZlHCiQ=', 730, -1000, 1000),DecodeDecimal('XNZziZlHCiQ=', 730, -1000, 1000));
    question.answers.length = 0;
    question.num = 40;
    question.isSingleAns = true;
    question.shortTextQuestion = "Mr. Charrington’s room feels to Winston like:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('RKE75Cp3EdE=', 732, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "a safe haven ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RKE75Cp3EdE=', 734, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "a museum";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('B3qc+lMEIAw=', 736, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "a trap";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4Q5aOdcddBk=', 738, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "a dream";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion41()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 40;
    var weight = DecodeNumber('Kh5AqdJJULA=', 740, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Kh5AqdJJULA=', 740, -1000, 1000),DecodeDecimal('hX9FW/Rs2zM=', 740, -1000, 1000),DecodeDecimal('hX9FW/Rs2zM=', 740, -1000, 1000));
    question.answers.length = 0;
    question.num = 41;
    question.isSingleAns = true;
    question.shortTextQuestion = "Where do Winston and Julia first meet alone?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('WJTz7YksOig=', 742, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The wooded area outside London ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WJTz7YksOig=', 744, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Charrington’s shop";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XVSJiaOWmyQ=', 746, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The Ministry of Truth";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('6PIhfFYemz4=', 748, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Victory Square";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion42()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 41;
    var weight = DecodeNumber('iG9lBzqpZig=', 750, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iG9lBzqpZig=', 750, -1000, 1000),DecodeDecimal('0d9vx7YWbkw=', 750, -1000, 1000),DecodeDecimal('0d9vx7YWbkw=', 750, -1000, 1000));
    question.answers.length = 0;
    question.num = 42;
    question.isSingleAns = true;
    question.shortTextQuestion = "What emotion overtakes Winston during the meeting?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('iG9lBzqpZig=', 752, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Doubt in Julia";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mnMVKTTl9z4=', 754, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Uncontrollable desire ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mnMVKTTl9z4=', 756, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Fear of discovery";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('EkJWvJrA2cc=', 758, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Political confusion";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion43()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 42;
    var weight = DecodeNumber('xYpx01scUW0=', 760, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xYpx01scUW0=', 760, -1000, 1000),DecodeDecimal('XzAOyYLlCpU=', 760, -1000, 1000),DecodeDecimal('XzAOyYLlCpU=', 760, -1000, 1000));
    question.answers.length = 0;
    question.num = 43;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia admits she often:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('xYpx01scUW0=', 762, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Lies about ration coupons";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YYnxqKsI6+w=', 764, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Sleeps with Inner Party members";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jtnqQ/HliR4=', 766, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Rebels through affairs";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('jtnqQ/HliR4=', 768, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Reports Thoughtcrime";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion44()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 43;
    var weight = DecodeNumber('yx3L83SaVWQ=', 770, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yx3L83SaVWQ=', 770, -1000, 1000),DecodeDecimal('FMfk0vAv478=', 770, -1000, 1000),DecodeDecimal('FMfk0vAv478=', 770, -1000, 1000));
    question.answers.length = 0;
    question.num = 44;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston views Julia’s rebellion as:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('yx3L83SaVWQ=', 772, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Dangerous and unwise";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6lhHmArwHl4=', 774, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Simple and satisfying ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6lhHmArwHl4=', 776, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Inconsistent with his own";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('BaZDNLkGlIU=', 778, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Shallow and useless";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion45()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 44;
    var weight = DecodeNumber('HmDtRAy6SJI=', 780, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HmDtRAy6SJI=', 780, -1000, 1000),DecodeDecimal('lb1E/WlZc48=', 780, -1000, 1000),DecodeDecimal('lb1E/WlZc48=', 780, -1000, 1000));
    question.answers.length = 0;
    question.num = 45;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia brings Winston what item as a luxury?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('HmDtRAy6SJI=', 782, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A gold wedding ring";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Gl+t1hegw0U=', 784, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Some wine";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ljjKZaVI0KI=', 786, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A really working radio";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('JyMqgfwZtB4=', 788, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Real chocolate";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion46()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 45;
    var weight = DecodeNumber('8UyTVD2BQd8=', 790, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8UyTVD2BQd8=', 790, -1000, 1000),DecodeDecimal('8weXvwV1RUg=', 790, -1000, 1000),DecodeDecimal('8weXvwV1RUg=', 790, -1000, 1000));
    question.answers.length = 0;
    question.num = 46;
    question.isSingleAns = true;
    question.shortTextQuestion = "What does the thrush’s song represent to Winston?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('8UyTVD2BQd8=', 792, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A coded message";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BJgyXefXOUs=', 794, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Political hope";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+oJDYMM/W2E=', 796, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A sign from O’Brien";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('LJh1TzsH4pg=', 798, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Beauty without purpose ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion47()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 46;
    var weight = DecodeNumber('TPowFeTidfQ=', 800, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('TPowFeTidfQ=', 800, -1000, 1000),DecodeDecimal('9jwzbLqEkQo=', 800, -1000, 1000),DecodeDecimal('9jwzbLqEkQo=', 800, -1000, 1000));
    question.answers.length = 0;
    question.num = 47;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia claims she does not care much for:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('gQAmd31+TdY=', 802, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Politics ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gQAmd31+TdY=', 804, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Winston’s past";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZXu+Cnq7aZs=', 806, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Freedom";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kCqkLAEzavQ=', 808, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Big Brother";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion48()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 47;
    var weight = DecodeNumber('iLjnLK6h0hU=', 810, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iLjnLK6h0hU=', 810, -1000, 1000),DecodeDecimal('mIFNEYB/jys=', 810, -1000, 1000),DecodeDecimal('mIFNEYB/jys=', 810, -1000, 1000));
    question.answers.length = 0;
    question.num = 48;
    question.isSingleAns = true;
    question.shortTextQuestion = "The lovers agree that their primary form of rebellion is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('iLjnLK6h0hU=', 812, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Drawing Party members in";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YsyxIAreKRE=', 814, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Writing a manifesto";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NKXZkMjeElw=', 816, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Making love ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('NKXZkMjeElw=', 818, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Recording conversations";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion49()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 48;
    var weight = DecodeNumber('D0O/QrSDzck=', 820, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('D0O/QrSDzck=', 820, -1000, 1000),DecodeDecimal('8qqiE/caM0s=', 820, -1000, 1000),DecodeDecimal('8qqiE/caM0s=', 820, -1000, 1000));
    question.answers.length = 0;
    question.num = 49;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s physical condition improves due to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('D0O/QrSDzck=', 822, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Access to Inner Party medicine";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8YDyZ1TP/ZY=', 824, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Regular walks and better food ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8YDyZ1TP/ZY=', 826, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Julia’s insistence on exercise";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+msNUiheGlA=', 828, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Parole from the Ministry";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion50()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 49;
    var weight = DecodeNumber('KrooaIgZDtk=', 830, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KrooaIgZDtk=', 830, -1000, 1000),DecodeDecimal('goG7N5LbB5o=', 830, -1000, 1000),DecodeDecimal('goG7N5LbB5o=', 830, -1000, 1000));
    question.answers.length = 0;
    question.num = 50;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston wakes up from a dream about:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('KrooaIgZDtk=', 832, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A prole uprising";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('cX9VZy1gg0Y=', 834, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The Ministry of Love";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ArtXVMycygg=', 836, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "His mother and sister ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ArtXVMycygg=', 838, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Julia being arrested";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion51()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 50;
    var weight = DecodeNumber('H3AwhEJgGdY=', 840, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('H3AwhEJgGdY=', 840, -1000, 1000),DecodeDecimal('/2XKdR8V+8c=', 840, -1000, 1000),DecodeDecimal('/2XKdR8V+8c=', 840, -1000, 1000));
    question.answers.length = 0;
    question.num = 51;
    question.isSingleAns = true;
    question.shortTextQuestion = "What emotion does Winston feel about betraying his mother as a child?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('H3AwhEJgGdY=', 842, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Bitterness and disillusionment";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kxlw6Qo19lo=', 844, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Shame and guilt ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kxlw6Qo19lo=', 846, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Confusion and fear";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('wsakkAexIow=', 848, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Pride and violence";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion52()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 51;
    var weight = DecodeNumber('lYXdXHnxHC0=', 850, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lYXdXHnxHC0=', 850, -1000, 1000),DecodeDecimal('CEP8lmXhUaY=', 850, -1000, 1000),DecodeDecimal('CEP8lmXhUaY=', 850, -1000, 1000));
    question.answers.length = 0;
    question.num = 52;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston realizes the Party is capable of destroying:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('lYXdXHnxHC0=', 852, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "All buildings";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ePFh/YVEkbw=', 854, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The natural environment";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KzkWd7pKZD4=', 856, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The Brotherhood completely";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('B5JA94kZk18=', 858, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The concept of love ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion53()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 52;
    var weight = DecodeNumber('ts6Aj1cPWjk=', 860, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ts6Aj1cPWjk=', 860, -1000, 1000),DecodeDecimal('jcYIH6A5KQQ=', 860, -1000, 1000),DecodeDecimal('jcYIH6A5KQQ=', 860, -1000, 1000));
    question.answers.length = 0;
    question.num = 53;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia gives Winston a set of:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ts6Aj1cPWjk=', 862, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A gold ring";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yJrpB3ZrrJ8=', 864, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Real coffee and sugar packets ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yJrpB3ZrrJ8=', 866, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A government's leaflet";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('YIxNdPny7rQ=', 868, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Prole bread and cheese";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion54()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 53;
    var weight = DecodeNumber('+HvscVxPBsY=', 870, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+HvscVxPBsY=', 870, -1000, 1000),DecodeDecimal('gE6hvU25cuk=', 870, -1000, 1000),DecodeDecimal('gE6hvU25cuk=', 870, -1000, 1000));
    question.answers.length = 0;
    question.num = 54;
    question.isSingleAns = true;
    question.shortTextQuestion = "Their hiding spot is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('938wQQV2Kew=', 872, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A room above Charrington’s shop ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('938wQQV2Kew=', 874, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "An attic in Victory Mansions";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DgFYnlyyfmI=', 876, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A secure Ministry office";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1WfJgxU1cpI=', 878, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A share of the Ministry basement";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion55()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 54;
    var weight = DecodeNumber('+nl6Wt8FmQM=', 880, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+nl6Wt8FmQM=', 880, -1000, 1000),DecodeDecimal('FUk015s8oM0=', 880, -1000, 1000),DecodeDecimal('FUk015s8oM0=', 880, -1000, 1000));
    question.answers.length = 0;
    question.num = 55;
    question.isSingleAns = true;
    question.shortTextQuestion = "In the shop room, Winston writes:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('xmV3H2suRsQ=', 882, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "“I love Julia” ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xmV3H2suRsQ=', 884, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A Party slogan";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('EUNsRXu16rI=', 886, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "“Down with Big Brother”";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('wBpKosdtCJ0=', 888, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A political leaflet";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion56()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 55;
    var weight = DecodeNumber('mDKm/wljC7I=', 890, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mDKm/wljC7I=', 890, -1000, 1000),DecodeDecimal('BUB/064nJzA=', 890, -1000, 1000),DecodeDecimal('BUB/064nJzA=', 890, -1000, 1000));
    question.answers.length = 0;
    question.num = 56;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia is surprised by:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('mDKm/wljC7I=', 892, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Winston’s romantic letters";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('M/BjdefCL28=', 894, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "No telescreens there";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TJGaCX4zlII=', 896, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The diary’s secrecy";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('fYrwPd59bFE=', 898, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "His handwriting in the diary";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion57()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 56;
    var weight = DecodeNumber('KXxtwurUPDU=', 900, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KXxtwurUPDU=', 900, -1000, 1000),DecodeDecimal('HRFu9EuiXSM=', 900, -1000, 1000),DecodeDecimal('HRFu9EuiXSM=', 900, -1000, 1000));
    question.answers.length = 0;
    question.num = 57;
    question.isSingleAns = true;
    question.shortTextQuestion = "What does Winston complain about in the room?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Tov3IhHQaEM=', 902, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The glass paperweight’s age ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Tov3IhHQaEM=', 904, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Rumor of spies";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('B9nyuxGafvo=', 906, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Heat from the telescreen";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Ng0dE5lexyM=', 908, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Julia’s lateness";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion58()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 57;
    var weight = DecodeNumber('AnQYMDAhxZQ=', 910, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('AnQYMDAhxZQ=', 910, -1000, 1000),DecodeDecimal('Y9rX0mxuhOE=', 910, -1000, 1000),DecodeDecimal('Y9rX0mxuhOE=', 910, -1000, 1000));
    question.answers.length = 0;
    question.num = 58;
    question.isSingleAns = true;
    question.shortTextQuestion = "They ignore:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('AnQYMDAhxZQ=', 912, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The smell of smoke";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Pk8Kpl13CGQ=', 914, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Their own heartbeat";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YLt/m9PNxQM=', 916, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A news broadcast outside ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('YLt/m9PNxQM=', 918, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A police siren";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion59()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 58;
    var weight = DecodeNumber('WWvFSyvid0I=', 920, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('WWvFSyvid0I=', 920, -1000, 1000),DecodeDecimal('sk/rs1Y+1kQ=', 920, -1000, 1000),DecodeDecimal('sk/rs1Y+1kQ=', 920, -1000, 1000));
    question.answers.length = 0;
    question.num = 59;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia delays a meeting because:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('+yK/5f15Gdk=', 922, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "She’s at work ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+yK/5f15Gdk=', 924, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Winston disappeared";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rykMN7RGVnc=', 926, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "She fears the Thought Police";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('83O+Vc6yy0s=', 928, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "She’s ill";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion60()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 59;
    var weight = DecodeNumber('t8x/0H+eN74=', 930, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('t8x/0H+eN74=', 930, -1000, 1000),DecodeDecimal('+OxPKDhZDZM=', 930, -1000, 1000),DecodeDecimal('+OxPKDhZDZM=', 930, -1000, 1000));
    question.answers.length = 0;
    question.num = 60;
    question.isSingleAns = true;
    question.shortTextQuestion = "While walking, Julia says the world outside is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('t8x/0H+eN74=', 932, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Full of secret cameras";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KVsoBSj/NJE=', 934, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Bright and hopeful ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KVsoBSj/NJE=', 936, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Colorless and bleak";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('CO0Yhsp3Hpk=', 938, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Nothing but Party control";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion61()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 60;
    var weight = DecodeNumber('CeMrwzZghPw=', 940, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('CeMrwzZghPw=', 940, -1000, 1000),DecodeDecimal('+xWfoUvLEVE=', 940, -1000, 1000),DecodeDecimal('+xWfoUvLEVE=', 940, -1000, 1000));
    question.answers.length = 0;
    question.num = 61;
    question.isSingleAns = true;
    question.shortTextQuestion = "The most dangerous threat they face is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('CeMrwzZghPw=', 942, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Being seen by Parsons";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('eWsEx3W3EfU=', 944, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Mr. Charrington reporting them";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('syUBg1oJSpo=', 946, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The hidden telescreen ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('syUBg1oJSpo=', 948, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The proles discovering them";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion62()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 61;
    var weight = DecodeNumber('1+gteYrzCrY=', 950, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1+gteYrzCrY=', 950, -1000, 1000),DecodeDecimal('eTfZPRenq74=', 950, -1000, 1000),DecodeDecimal('eTfZPRenq74=', 950, -1000, 1000));
    question.answers.length = 0;
    question.num = 62;
    question.isSingleAns = true;
    question.shortTextQuestion = "When do they realize they are watched?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('1+gteYrzCrY=', 952, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Hearing footsteps upstairs";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0AbmMxNT2V4=', 954, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Sensing cold air";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bS8Uk07wW+Q=', 956, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Noticing a new smiley eye";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ld+VPaiKzBo=', 958, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Spotting a microphone";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion63()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 62;
    var weight = DecodeNumber('ktTy6119enE=', 960, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ktTy6119enE=', 960, -1000, 1000),DecodeDecimal('i7Nvw7Bmcy0=', 960, -1000, 1000),DecodeDecimal('i7Nvw7Bmcy0=', 960, -1000, 1000));
    question.answers.length = 0;
    question.num = 63;
    question.isSingleAns = true;
    question.shortTextQuestion = "They hear:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ktTy6119enE=', 962, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Telescreen voices from above";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2MDC6fX+r4U=', 964, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Goldstein’s speech";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CbwI43e8KuY=', 966, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Mr. Charrington’s footsteps ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('CbwI43e8KuY=', 968, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Parsons’s daughter outside";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion64()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 63;
    var weight = DecodeNumber('HZ6JEMxmiOw=', 970, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HZ6JEMxmiOw=', 970, -1000, 1000),DecodeDecimal('g7EyFy1gSt4=', 970, -1000, 1000),DecodeDecimal('g7EyFy1gSt4=', 970, -1000, 1000));
    question.answers.length = 0;
    question.num = 64;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia’s reaction to discovery is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('HZ6JEMxmiOw=', 972, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Calm and secretive";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('akkYoZNq05g=', 974, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Silent acceptance";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('36qjPqys9f0=', 976, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Laughing nervously";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('XCeaLBPRF6w=', 978, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Panicked and aggressive ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion65()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 64;
    var weight = DecodeNumber('EjKYYPpc2DY=', 980, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('EjKYYPpc2DY=', 980, -1000, 1000),DecodeDecimal('YriFcbY4wyE=', 980, -1000, 1000),DecodeDecimal('YriFcbY4wyE=', 980, -1000, 1000));
    question.answers.length = 0;
    question.num = 65;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston writes about:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ljVD2kMt1Js=', 982, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The Brotherhood ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ljVD2kMt1Js=', 984, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Prole rumors";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('l6k8oOgb04E=', 986, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Julia’s past";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('W76dwpydslg=', 988, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Party slogans";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion66()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 65;
    var weight = DecodeNumber('udcvMKy1w6A=', 990, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('udcvMKy1w6A=', 990, -1000, 1000),DecodeDecimal('fn5UjNv43Ac=', 990, -1000, 1000),DecodeDecimal('fn5UjNv43Ac=', 990, -1000, 1000));
    question.answers.length = 0;
    question.num = 66;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston calls his confession:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('udcvMKy1w6A=', 992, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A symbol of betrayal";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jn5fZPS2ySU=', 994, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Meaningless writing";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YRLBK/tiV30=', 996, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A political act";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xWQIAndqH6Q=', 998, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A step to joining the Brotherhood ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion67()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 66;
    var weight = DecodeNumber('t8p3cTp0VZc=', 1000, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('t8p3cTp0VZc=', 1000, -1000, 1000),DecodeDecimal('Q8PMLZqNHDk=', 1000, -1000, 1000),DecodeDecimal('Q8PMLZqNHDk=', 1000, -1000, 1000));
    question.answers.length = 0;
    question.num = 67;
    question.isSingleAns = true;
    question.shortTextQuestion = "He believes the Brotherhood is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('2VNWDcJwfsw=', 1002, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Real and active ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2VNWDcJwfsw=', 1004, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A warning tool";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VRp9bLenk8M=', 1006, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A Party fabrication";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('LEC0jTon4xg=', 1008, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A children's story";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion68()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 67;
    var weight = DecodeNumber('G5DisL9SkSE=', 1010, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('G5DisL9SkSE=', 1010, -1000, 1000),DecodeDecimal('nHFt7rEkp00=', 1010, -1000, 1000),DecodeDecimal('nHFt7rEkp00=', 1010, -1000, 1000));
    question.answers.length = 0;
    question.num = 68;
    question.isSingleAns = true;
    question.shortTextQuestion = "The written confession is hidden within:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('G5DisL9SkSE=', 1012, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A shoe sole";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/NZu22MvSXk=', 1014, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Julia’s coat";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('O9cbu7Mc7xw=', 1016, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A bottle of gin ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('O9cbu7Mc7xw=', 1018, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A wall crack";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion69()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 68;
    var weight = DecodeNumber('SH8Erf31ljA=', 1020, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('SH8Erf31ljA=', 1020, -1000, 1000),DecodeDecimal('VopXt5D+Y1k=', 1020, -1000, 1000),DecodeDecimal('VopXt5D+Y1k=', 1020, -1000, 1000));
    question.answers.length = 0;
    question.num = 69;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston travels to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('VQrEQ0SqUhQ=', 1022, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "O’Brien’s apartment ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VQrEQ0SqUhQ=', 1024, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A prole district";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('L3lObwtboak=', 1026, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The Ministry’s inner office";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7v/WQ1R8yJU=', 1028, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Parliament building";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion70()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 69;
    var weight = DecodeNumber('gWv0FZLptq4=', 1030, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('gWv0FZLptq4=', 1030, -1000, 1000),DecodeDecimal('519jjQejznk=', 1030, -1000, 1000),DecodeDecimal('519jjQejznk=', 1030, -1000, 1000));
    question.answers.length = 0;
    question.num = 70;
    question.isSingleAns = true;
    question.shortTextQuestion = "He visits O’Brien to give him:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ZXCf6ycu67E=', 1032, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The confession and ask for Party help ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZXCf6ycu67E=', 1034, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A Party invitation";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KXIxrYBKTSQ=', 1036, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A code for Goldstein";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('VNoepIS/vJ8=', 1038, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A new Newspeak draft";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion71()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 70;
    var weight = DecodeNumber('QxC4A3vE/A4=', 1040, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QxC4A3vE/A4=', 1040, -1000, 1000),DecodeDecimal('2MAklVjfH7k=', 1040, -1000, 1000),DecodeDecimal('2MAklVjfH7k=', 1040, -1000, 1000));
    question.answers.length = 0;
    question.num = 71;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien tells Winston:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('QxC4A3vE/A4=', 1042, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He is already watched";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XFf9P7Xxg0E=', 1044, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "His paperweight is illegal";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WFyVjpAb5s0=', 1046, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He’s suspected of thoughtcrime ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('WFyVjpAb5s0=', 1048, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Julia reported him";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion72()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 71;
    var weight = DecodeNumber('iZINTX5FdLI=', 1050, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iZINTX5FdLI=', 1050, -1000, 1000),DecodeDecimal('MS/2WMMBNzo=', 1050, -1000, 1000),DecodeDecimal('MS/2WMMBNzo=', 1050, -1000, 1000));
    question.answers.length = 0;
    question.num = 72;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston leaves feeling:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('iZINTX5FdLI=', 1052, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Betrayed";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GgY20CysbKI=', 1054, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Hopeless";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Bj0RZYik1ZE=', 1056, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Reassured ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Bj0RZYik1ZE=', 1058, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Guilty";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion73()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 72;
    var weight = DecodeNumber('L37vKa9JKcg=', 1060, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('L37vKa9JKcg=', 1060, -1000, 1000),DecodeDecimal('4rYI1HIcl9Y=', 1060, -1000, 1000),DecodeDecimal('4rYI1HIcl9Y=', 1060, -1000, 1000));
    question.answers.length = 0;
    question.num = 73;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien’s apartment is filled with:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('L37vKa9JKcg=', 1062, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Telescreens";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aXI4O+0+KWY=', 1064, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Antique books ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('aXI4O+0+KWY=', 1066, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Party posters";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('dHVejJTdbiI=', 1068, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Large crowds";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion74()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 73;
    var weight = DecodeNumber('2Mpz3NEz6HU=', 1070, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2Mpz3NEz6HU=', 1070, -1000, 1000),DecodeDecimal('prHF2j11HD0=', 1070, -1000, 1000),DecodeDecimal('prHF2j11HD0=', 1070, -1000, 1000));
    question.answers.length = 0;
    question.num = 74;
    question.isSingleAns = true;
    question.shortTextQuestion = "They toast using:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('2Mpz3NEz6HU=', 1072, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Vivid tea";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('L0WiqZOeNVI=', 1074, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Government issue rum";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ERgnrkZ5Lt8=', 1076, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Sparkling wine";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ZCJmHAVcGag=', 1078, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Prole liquor ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion75()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 74;
    var weight = DecodeNumber('mNeBPgAfemg=', 1080, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mNeBPgAfemg=', 1080, -1000, 1000),DecodeDecimal('zNqozJpNOdA=', 1080, -1000, 1000),DecodeDecimal('zNqozJpNOdA=', 1080, -1000, 1000));
    question.answers.length = 0;
    question.num = 75;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien reveals: ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('mNeBPgAfemg=', 1082, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He’s Big Brother in disguise";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qkJs5+QXSzU=', 1084, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He reported them";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('l2aru29j/P4=', 1086, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He’s a Thought Police officer";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('6Q26eWAes2o=', 1088, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He supports the Brotherhood ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion76()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 75;
    var weight = DecodeNumber('LjhhN+Ysc/w=', 1090, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('LjhhN+Ysc/w=', 1090, -1000, 1000),DecodeDecimal('8vmNNrD3u/Y=', 1090, -1000, 1000),DecodeDecimal('8vmNNrD3u/Y=', 1090, -1000, 1000));
    question.answers.length = 0;
    question.num = 76;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien gives Winston:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('LjhhN+Ysc/w=', 1092, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A radio";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('y94osgWauCE=', 1094, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A copy of Goldstein’s book ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('y94osgWauCE=', 1096, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A pack of cigarettes";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('bj331ccA+x4=', 1098, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A glass paperweight";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion77()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 76;
    var weight = DecodeNumber('a2vKRqj8KBU=', 1100, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('a2vKRqj8KBU=', 1100, -1000, 1000),DecodeDecimal('QZhd8vOwarU=', 1100, -1000, 1000),DecodeDecimal('QZhd8vOwarU=', 1100, -1000, 1000));
    question.answers.length = 0;
    question.num = 77;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston and Julia say goodbye to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('a2vKRqj8KBU=', 1102, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The prole woman";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('p9hKEJlh7uA=', 1104, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Mr. Charrington ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('p9hKEJlh7uA=', 1106, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Parsons";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('04GRcWhUu0o=', 1108, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "O’Brien";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion78()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 77;
    var weight = DecodeNumber('JSuFdn8j2wk=', 1110, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JSuFdn8j2wk=', 1110, -1000, 1000),DecodeDecimal('OcN8Q6T4ubA=', 1110, -1000, 1000),DecodeDecimal('OcN8Q6T4ubA=', 1110, -1000, 1000));
    question.answers.length = 0;
    question.num = 78;
    question.isSingleAns = true;
    question.shortTextQuestion = "On leaving Charrington’s room, they feel:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('rEOiLxZA/tA=', 1112, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Triumphant and free ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rEOiLxZA/tA=', 1114, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Anxious and guilty";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mWyKs+k8zrc=', 1116, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Suspicious of each other";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('bn9jcbm/GOo=', 1118, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Exhausted and confused";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion79()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 78;
    var weight = DecodeNumber('YzyPnCNnULY=', 1120, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YzyPnCNnULY=', 1120, -1000, 1000),DecodeDecimal('rzc/E1fqhIo=', 1120, -1000, 1000),DecodeDecimal('rzc/E1fqhIo=', 1120, -1000, 1000));
    question.answers.length = 0;
    question.num = 79;
    question.isSingleAns = true;
    question.shortTextQuestion = "Mr. Charrington reveals:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('YzyPnCNnULY=', 1122, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He sympathizes with them";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gKzojeO04IU=', 1124, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He is a Brotherhood member";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KycfV4IIwXQ=', 1126, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He is fleeing Oceania";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('h3ZqahDwbFo=', 1128, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He is a Thought Police agent ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion80()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 79;
    var weight = DecodeNumber('k1TRuE6oR7k=', 1130, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('k1TRuE6oR7k=', 1130, -1000, 1000),DecodeDecimal('lQGYoB9gnqE=', 1130, -1000, 1000),DecodeDecimal('lQGYoB9gnqE=', 1130, -1000, 1000));
    question.answers.length = 0;
    question.num = 80;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston and Julia are:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('k1TRuE6oR7k=', 1132, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Allowed to leave";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vfCiq75W/po=', 1134, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Taken away calmly ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vfCiq75W/po=', 1136, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Released on parole";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('rtgn2ACkV+0=', 1138, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Sent to the proles";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion81()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 80;
    var weight = DecodeNumber('98N9yWcbDME=', 1140, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('98N9yWcbDME=', 1140, -1000, 1000),DecodeDecimal('SkHR4P8CPW8=', 1140, -1000, 1000),DecodeDecimal('SkHR4P8CPW8=', 1140, -1000, 1000));
    question.answers.length = 0;
    question.num = 81;
    question.isSingleAns = true;
    question.shortTextQuestion = "Where are Winston and Julia held?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('njrltg/aqe4=', 1142, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Ministry of Love cells ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('njrltg/aqe4=', 1144, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Parsons’s apartment";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7sWvsPECkAc=', 1146, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Inner Party quarters";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Iy5YIT54KNE=', 1148, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Mr. Charrington’s basement";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion82()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 81;
    var weight = DecodeNumber('hTa12YjxWIg=', 1150, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hTa12YjxWIg=', 1150, -1000, 1000),DecodeDecimal('fFcbMXwiFTY=', 1150, -1000, 1000),DecodeDecimal('fFcbMXwiFTY=', 1150, -1000, 1000));
    question.answers.length = 0;
    question.num = 82;
    question.isSingleAns = true;
    question.shortTextQuestion = "While separated, Winston feels:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('hTa12YjxWIg=', 1152, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Relieved";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FUY36TVk1pg=', 1154, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Indifferent";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xJH/fxqqB5c=', 1156, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Desperate ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xJH/fxqqB5c=', 1158, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Calm";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion83()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 82;
    var weight = DecodeNumber('20fmPYZ2jTY=', 1160, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('20fmPYZ2jTY=', 1160, -1000, 1000),DecodeDecimal('/nsCLOneo/Y=', 1160, -1000, 1000),DecodeDecimal('/nsCLOneo/Y=', 1160, -1000, 1000));
    question.answers.length = 0;
    question.num = 83;
    question.isSingleAns = true;
    question.shortTextQuestion = "The guard warns Winston:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('20fmPYZ2jTY=', 1162, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He will be brainwashed";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wKnQAXviOFI=', 1164, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He can repent with a confession";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('blS/pnG7nIs=', 1166, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He will survive only if he obeys ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('blS/pnG7nIs=', 1168, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He’ll be released soon";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion84()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 83;
    var weight = DecodeNumber('YqxmZYrchB4=', 1170, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YqxmZYrchB4=', 1170, -1000, 1000),DecodeDecimal('qG0eKpX1rcA=', 1170, -1000, 1000),DecodeDecimal('qG0eKpX1rcA=', 1170, -1000, 1000));
    question.answers.length = 0;
    question.num = 84;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s first act in his cell is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('YqxmZYrchB4=', 1172, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Shouting Big Brother’s name";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Q1zXZ9nLMR4=', 1174, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Losing hope entirely ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Q1zXZ9nLMR4=', 1176, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Starting a diary again";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MYz/3F8Pj68=', 1178, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Attempting to escape";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion85()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 84;
    var weight = DecodeNumber('CX8/ensBFNs=', 1180, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('CX8/ensBFNs=', 1180, -1000, 1000),DecodeDecimal('0huK9O43OKk=', 1180, -1000, 1000),DecodeDecimal('0huK9O43OKk=', 1180, -1000, 1000));
    question.answers.length = 0;
    question.num = 85;
    question.isSingleAns = true;
    question.shortTextQuestion = "Who interrogates Winston?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('QxaO3lMsyCo=', 1182, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "O’Brien ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QxaO3lMsyCo=', 1184, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Julia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sPkrQjnUEqc=', 1186, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Parsons";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('L6qzt4q5uGk=', 1188, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A fellow prisoner";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion86()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 85;
    var weight = DecodeNumber('NUzCmIRRtok=', 1190, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NUzCmIRRtok=', 1190, -1000, 1000),DecodeDecimal('qiVKiibOraM=', 1190, -1000, 1000),DecodeDecimal('qiVKiibOraM=', 1190, -1000, 1000));
    question.answers.length = 0;
    question.num = 86;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien uses what to control Winston?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('NUzCmIRRtok=', 1192, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Love";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ovZI8+HIZlc=', 1194, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Threats only";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NFpeoKKSg0s=', 1196, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Sleep deprivation";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('C1Mc5Zcey/Y=', 1198, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Torture ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion87()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 86;
    var weight = DecodeNumber('qxM0acqtKUk=', 1200, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qxM0acqtKUk=', 1200, -1000, 1000),DecodeDecimal('bJocq+rHqfQ=', 1200, -1000, 1000),DecodeDecimal('bJocq+rHqfQ=', 1200, -1000, 1000));
    question.answers.length = 0;
    question.num = 87;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston sees the rats and becomes:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('qxM0acqtKUk=', 1202, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Curious";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IjZ7aakzObY=', 1204, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Amused";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VRqtxibbcns=', 1206, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Terrified ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('VRqtxibbcns=', 1208, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Indifferent";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion88()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 87;
    var weight = DecodeNumber('NiynO1f3dps=', 1210, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NiynO1f3dps=', 1210, -1000, 1000),DecodeDecimal('5UN+kWh3Scg=', 1210, -1000, 1000),DecodeDecimal('5UN+kWh3Scg=', 1210, -1000, 1000));
    question.answers.length = 0;
    question.num = 88;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien offers him:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('NiynO1f3dps=', 1212, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Release if he confesses";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('x+tuNys0tmY=', 1214, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A choice between pain and rats ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('x+tuNys0tmY=', 1216, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A painless death";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xr9n6UY4w/Q=', 1218, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Love services";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion89()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 88;
    var weight = DecodeNumber('z3FVfG9RQog=', 1220, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('z3FVfG9RQog=', 1220, -1000, 1000),DecodeDecimal('q8/NpZXqsB8=', 1220, -1000, 1000),DecodeDecimal('q8/NpZXqsB8=', 1220, -1000, 1000));
    question.answers.length = 0;
    question.num = 89;
    question.isSingleAns = true;
    question.shortTextQuestion = "After torture, Winston:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('G4QAQO3nk3o=', 1222, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Betrays Julia ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('G4QAQO3nk3o=', 1224, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Joins the Thought Police";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MbY3njHDiok=', 1226, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Becomes Inner Party";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('yh6ckZWxoMI=', 1228, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Escapes";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion90()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 89;
    var weight = DecodeNumber('5oCgEAlsXIc=', 1230, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5oCgEAlsXIc=', 1230, -1000, 1000),DecodeDecimal('/SFsO3oQGWY=', 1230, -1000, 1000),DecodeDecimal('/SFsO3oQGWY=', 1230, -1000, 1000));
    question.answers.length = 0;
    question.num = 90;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston admits the Party can make him:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('5oCgEAlsXIc=', 1232, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Avoid truth";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2BtVwXbbhQg=', 1234, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Abolish himself";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JI48SfZ/0U0=', 1236, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Deny Big Brother";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ZLsPWlKCh+A=', 1238, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Love Big Brother ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion91()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 90;
    var weight = DecodeNumber('JSFzaQOhpnY=', 1240, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JSFzaQOhpnY=', 1240, -1000, 1000),DecodeDecimal('V7KVUfy2Utg=', 1240, -1000, 1000),DecodeDecimal('V7KVUfy2Utg=', 1240, -1000, 1000));
    question.answers.length = 0;
    question.num = 91;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien encourages Winston to accept that:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('kE+1SZdIEIo=', 1242, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "2 + 2 = 5 ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kE+1SZdIEIo=', 1244, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Julia is lying";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('md85WpZNrdQ=', 1246, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Goldstein is alive";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('mxe4l+Gu6QI=', 1248, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Proles will rise";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion92()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 91;
    var weight = DecodeNumber('juB/g4fh9kg=', 1250, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('juB/g4fh9kg=', 1250, -1000, 1000),DecodeDecimal('XD/J3DEKF8M=', 1250, -1000, 1000),DecodeDecimal('XD/J3DEKF8M=', 1250, -1000, 1000));
    question.answers.length = 0;
    question.num = 92;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s loyalty is now:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('juB/g4fh9kg=', 1252, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "To Julia";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KGELOCVe2JU=', 1254, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Undecided";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qSD+dChl3ts=', 1256, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Split";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('6cn7ECBuWd0=', 1258, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Fully to Big Brother ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion93()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 92;
    var weight = DecodeNumber('KIid3rASi9I=', 1260, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KIid3rASi9I=', 1260, -1000, 1000),DecodeDecimal('BrcErwLMRVU=', 1260, -1000, 1000),DecodeDecimal('BrcErwLMRVU=', 1260, -1000, 1000));
    question.answers.length = 0;
    question.num = 93;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston is taken to Room 101 to face:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('loaNARLgxk0=', 1262, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "His greatest fear ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('loaNARLgxk0=', 1264, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "O’Brien’s wrath";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('I2gMcLzQewk=', 1266, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Political betrayal";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('9L2DbRomJ7k=', 1268, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The prole uprising";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion94()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 93;
    var weight = DecodeNumber('V9FaPL2rNqk=', 1270, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('V9FaPL2rNqk=', 1270, -1000, 1000),DecodeDecimal('UChzAl0HFQ8=', 1270, -1000, 1000),DecodeDecimal('UChzAl0HFQ8=', 1270, -1000, 1000));
    question.answers.length = 0;
    question.num = 94;
    question.isSingleAns = true;
    question.shortTextQuestion = "In Room 101, Winston sees:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('V9FaPL2rNqk=', 1272, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Spiders";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5QI9RLgW/ds=', 1274, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A secret door";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/WvgDL6TMc0=', 1276, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Big Brother’s photo";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('HvzFYgLhBBw=', 1278, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Jumbo rats ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion95()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 94;
    var weight = DecodeNumber('LVqxNul9cS8=', 1280, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('LVqxNul9cS8=', 1280, -1000, 1000),DecodeDecimal('APdUfzj/9Z8=', 1280, -1000, 1000),DecodeDecimal('APdUfzj/9Z8=', 1280, -1000, 1000));
    question.answers.length = 0;
    question.num = 95;
    question.isSingleAns = true;
    question.shortTextQuestion = "Facing rats, Winston:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('zq5BQtcOmAc=', 1282, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Screams for Julia ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zq5BQtcOmAc=', 1284, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Defies Big Brother";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cAfpWkYHsRw=', 1286, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Holds firm";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('8aOung0KTY0=', 1288, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Laughs";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion96()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 95;
    var weight = DecodeNumber('pyh9/saD4X0=', 1290, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pyh9/saD4X0=', 1290, -1000, 1000),DecodeDecimal('A0KQbn2ZvRs=', 1290, -1000, 1000),DecodeDecimal('A0KQbn2ZvRs=', 1290, -1000, 1000));
    question.answers.length = 0;
    question.num = 96;
    question.isSingleAns = true;
    question.shortTextQuestion = "His cry “Do it to Julia!” shows he:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('pyh9/saD4X0=', 1292, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Remains loyal";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('AkeA+15HqNE=', 1294, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Is defiant";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('x/FL62/JNZI=', 1296, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Will sacrifice Julia";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('x/FL62/JNZI=', 1298, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Plans to escape";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion97()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 96;
    var weight = DecodeNumber('4Ip9oTTHDPM=', 1300, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4Ip9oTTHDPM=', 1300, -1000, 1000),DecodeDecimal('2cDhz03Z4+E=', 1300, -1000, 1000),DecodeDecimal('2cDhz03Z4+E=', 1300, -1000, 1000));
    question.answers.length = 0;
    question.num = 97;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston and Julia meet again:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('4Ip9oTTHDPM=', 1302, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "In separate cells";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('T1Y61Tm6IgM=', 1304, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "In O’Brien’s office";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('l+UY4wlf6so=', 1306, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "In a canteen for ex-prisoners ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('l+UY4wlf6so=', 1308, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "In the prole district";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion98()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 97;
    var weight = DecodeNumber('I/v/n6Ik61Q=', 1310, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('I/v/n6Ik61Q=', 1310, -1000, 1000),DecodeDecimal('yMSSulkBiUs=', 1310, -1000, 1000),DecodeDecimal('yMSSulkBiUs=', 1310, -1000, 1000));
    question.answers.length = 0;
    question.num = 98;
    question.isSingleAns = true;
    question.shortTextQuestion = "Their reunion is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('I/v/n6Ik61Q=', 1312, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Warm and hopeful";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vLeMZxVTxeQ=', 1314, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Violent";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jw135Z1Her4=', 1316, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Cold and empty ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('jw135Z1Her4=', 1318, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Emotional and resistant";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion99()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 98;
    var weight = DecodeNumber('B9IKgfn0eNY=', 1320, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('B9IKgfn0eNY=', 1320, -1000, 1000),DecodeDecimal('2AC55HtkwwA=', 1320, -1000, 1000),DecodeDecimal('2AC55HtkwwA=', 1320, -1000, 1000));
    question.answers.length = 0;
    question.num = 99;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston now feels:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('B9IKgfn0eNY=', 1322, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Deep love for Julia";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OMHZZetUUV0=', 1324, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Anger toward O’Brien";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('PkPhn2jFdrw=', 1326, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Complete indifference ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('PkPhn2jFdrw=', 1328, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Hope for rebellion";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion100()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 99;
    var weight = DecodeNumber('NEKiyycgk08=', 1330, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NEKiyycgk08=', 1330, -1000, 1000),DecodeDecimal('S1zhUnTQGFg=', 1330, -1000, 1000),DecodeDecimal('S1zhUnTQGFg=', 1330, -1000, 1000));
    question.answers.length = 0;
    question.num = 100;
    question.isSingleAns = true;
    question.shortTextQuestion = "At the end, Winston:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Bolsba50QGs=', 1332, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Loves Big Brother ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Bolsba50QGs=', 1334, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Prepares to rebel again";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('uxaSxe1Bw3Q=', 1336, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Instructs Julia to join the Brotherhood";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hI1Ve+E1xmk=', 1338, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Plans to escape to Eastasia";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion101()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 100;
    var weight = DecodeNumber('MylQfsMxEWM=', 1340, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('RePB00H8oNc=', 1340, -1000, 1000),DecodeDecimal('NZCjcrZZHA4=', 1340, -1000, 1000),DecodeDecimal('NZCjcrZZHA4=', 1340, -1000, 1000));
    question.num = 101;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 1 Part 1 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion102()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 101;
    var weight = DecodeNumber('DHfPRW2tyxM=', 1350, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Xqa7FfldJ1M=', 1350, -1000, 1000),DecodeDecimal('MylQfsMxEWM=', 1350, -1000, 1000),DecodeDecimal('MylQfsMxEWM=', 1350, -1000, 1000));
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
    var weight = DecodeNumber('KFRwnfLIE5s=', 1360, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1p5C40u+DUM=', 1360, -1000, 1000),DecodeDecimal('DHfPRW2tyxM=', 1360, -1000, 1000),DecodeDecimal('DHfPRW2tyxM=', 1360, -1000, 1000));
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
    var weight = DecodeNumber('CAr5LuZ5vFI=', 1370, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('GS3OjF/vdsM=', 1370, -1000, 1000),DecodeDecimal('KFRwnfLIE5s=', 1370, -1000, 1000),DecodeDecimal('KFRwnfLIE5s=', 1370, -1000, 1000));
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
    var weight = DecodeNumber('xNg2H/rFR1Q=', 1380, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7bKE6x145rY=', 1380, -1000, 1000),DecodeDecimal('CAr5LuZ5vFI=', 1380, -1000, 1000),DecodeDecimal('CAr5LuZ5vFI=', 1380, -1000, 1000));
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
    var weight = DecodeNumber('klxlOnG7Xwo=', 1390, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('LzEaUlBaFC8=', 1390, -1000, 1000),DecodeDecimal('xNg2H/rFR1Q=', 1390, -1000, 1000),DecodeDecimal('xNg2H/rFR1Q=', 1390, -1000, 1000));
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
    var weight = DecodeNumber('DtAXQFA9lcc=', 1400, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('E/+DTtEa21c=', 1400, -1000, 1000),DecodeDecimal('klxlOnG7Xwo=', 1400, -1000, 1000),DecodeDecimal('klxlOnG7Xwo=', 1400, -1000, 1000));
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
    var weight = DecodeNumber('EuLXgilrllg=', 1410, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mkyS3HFTPvo=', 1410, -1000, 1000),DecodeDecimal('DtAXQFA9lcc=', 1410, -1000, 1000),DecodeDecimal('DtAXQFA9lcc=', 1410, -1000, 1000));
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
    var weight = DecodeNumber('AhUeDvpNpJk=', 1420, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/rxQm8UJpA4=', 1420, -1000, 1000),DecodeDecimal('EuLXgilrllg=', 1420, -1000, 1000),DecodeDecimal('EuLXgilrllg=', 1420, -1000, 1000));
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
    var weight = DecodeNumber('OHm7sbBG410=', 1430, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FQ43He/J7Mg=', 1430, -1000, 1000),DecodeDecimal('AhUeDvpNpJk=', 1430, -1000, 1000),DecodeDecimal('AhUeDvpNpJk=', 1430, -1000, 1000));
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
    var weight = DecodeNumber('s9/DkwtGFd0=', 1440, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('B0Gi+YT5khE=', 1440, -1000, 1000),DecodeDecimal('OHm7sbBG410=', 1440, -1000, 1000),DecodeDecimal('OHm7sbBG410=', 1440, -1000, 1000));
    question.num = 111;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 1 Part 2 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion112()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 111;
    var weight = DecodeNumber('TOxYGZMefqs=', 1450, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rgZi/La76TY=', 1450, -1000, 1000),DecodeDecimal('s9/DkwtGFd0=', 1450, -1000, 1000),DecodeDecimal('s9/DkwtGFd0=', 1450, -1000, 1000));
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
    var weight = DecodeNumber('T0wVNDFxVfk=', 1460, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vazrh69ozZk=', 1460, -1000, 1000),DecodeDecimal('TOxYGZMefqs=', 1460, -1000, 1000),DecodeDecimal('TOxYGZMefqs=', 1460, -1000, 1000));
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
    var weight = DecodeNumber('jMXM/jFG7XY=', 1470, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8n0xcNK246g=', 1470, -1000, 1000),DecodeDecimal('T0wVNDFxVfk=', 1470, -1000, 1000),DecodeDecimal('T0wVNDFxVfk=', 1470, -1000, 1000));
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
    var weight = DecodeNumber('qevdFpRtVog=', 1480, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8n5693278ng=', 1480, -1000, 1000),DecodeDecimal('jMXM/jFG7XY=', 1480, -1000, 1000),DecodeDecimal('jMXM/jFG7XY=', 1480, -1000, 1000));
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
    var weight = DecodeNumber('f9p1mgf1D6o=', 1490, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zyxX9lc/FMY=', 1490, -1000, 1000),DecodeDecimal('qevdFpRtVog=', 1490, -1000, 1000),DecodeDecimal('qevdFpRtVog=', 1490, -1000, 1000));
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
    var weight = DecodeNumber('fkXSpRL3dqI=', 1500, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hlWeKpopl14=', 1500, -1000, 1000),DecodeDecimal('f9p1mgf1D6o=', 1500, -1000, 1000),DecodeDecimal('f9p1mgf1D6o=', 1500, -1000, 1000));
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
    var weight = DecodeNumber('cxG/rCz340o=', 1510, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BJkGt2XwkOY=', 1510, -1000, 1000),DecodeDecimal('fkXSpRL3dqI=', 1510, -1000, 1000),DecodeDecimal('fkXSpRL3dqI=', 1510, -1000, 1000));
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
    var weight = DecodeNumber('h6pqRfyrpsI=', 1879, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('LIpFxzSJMjk=', 1879, -1000, 1000),DecodeDecimal('vYcECvMMwT8=', 1879, -1000, 1000),DecodeDecimal('vYcECvMMwT8=', 1879, -1000, 1000));
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
    var weight = DecodeNumber('2+kM8p/QhW8=', 1889, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1RcYwTASYOI=', 1889, -1000, 1000),DecodeDecimal('h6pqRfyrpsI=', 1889, -1000, 1000),DecodeDecimal('h6pqRfyrpsI=', 1889, -1000, 1000));
    question.num = 120;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 9 Part 2 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}


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
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion52()
{
    const questionIndex = 51;
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
    ClearOpenAns(questionIndex);

}






