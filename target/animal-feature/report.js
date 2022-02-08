$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/fmi/animal/animal.feature");
formatter.feature({
  "line": 1,
  "name": "Проверка на животно дали отговаря на изискванията да е родител",
  "description": "",
  "id": "проверка-на-животно-дали-отговаря-на-изискванията-да-е-родител",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за проверка на животни",
  "keyword": "Given "
});
formatter.match({
  "location": "AnimalSteps.openAnimalCheckScreen()"
});
formatter.result({
  "duration": 144256000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Проверка на мъжко животно което отговаря на изискванията да бъде родител",
  "description": "",
  "id": "проверка-на-животно-дали-отговаря-на-изискванията-да-е-родител;проверка-на-мъжко-животно-което-отговаря-на-изискванията-да-бъде-родител",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Въведе \"animal1\" за номер на животно",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Животното е \"male\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Животното е на повече от две години",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натисне бутона за проверка",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение: \"Животното отговаря на изискванията да бъде родител\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "animal1",
      "offset": 8
    }
  ],
  "location": "AnimalSteps.въведе_за_номер_на_животно(String)"
});
formatter.result({
  "duration": 1395900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 13
    }
  ],
  "location": "AnimalSteps.checkAnimalGender(String)"
});
formatter.result({
  "duration": 388300,
  "status": "passed"
});
formatter.match({
  "location": "AnimalSteps.checkAnimalAge()"
});
formatter.result({
  "duration": 28000,
  "status": "passed"
});
formatter.match({
  "location": "AnimalSteps.clickCheckButton()"
});
formatter.result({
  "duration": 5952500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Животното отговаря на изискванията да бъде родител",
      "offset": 18
    }
  ],
  "location": "AnimalSteps.checkMessage(String)"
});
formatter.result({
  "duration": 1197700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за проверка на животни",
  "keyword": "Given "
});
formatter.match({
  "location": "AnimalSteps.openAnimalCheckScreen()"
});
formatter.result({
  "duration": 27600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Проверка на мъжко животно което не е на подходяща възраст да бъде родител",
  "description": "",
  "id": "проверка-на-животно-дали-отговаря-на-изискванията-да-е-родител;проверка-на-мъжко-животно-което-не-е-на-подходяща-възраст-да-бъде-родител",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Въведе \"animal2\" за номер на животно",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Животното е \"male\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Животното е на по-малко от две години",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Натисне бутона за проверка",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Вижда съобщение: \"Животното не отговаря на изискванията да бъде родител\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "animal2",
      "offset": 8
    }
  ],
  "location": "AnimalSteps.въведе_за_номер_на_животно(String)"
});
formatter.result({
  "duration": 39900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 13
    }
  ],
  "location": "AnimalSteps.checkAnimalGender(String)"
});
formatter.result({
  "duration": 47300,
  "status": "passed"
});
formatter.match({
  "location": "AnimalSteps.checkUnderageAnimal()"
});
formatter.result({
  "duration": 27800,
  "status": "passed"
});
formatter.match({
  "location": "AnimalSteps.clickCheckButton()"
});
formatter.result({
  "duration": 43800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Животното не отговаря на изискванията да бъде родител",
      "offset": 18
    }
  ],
  "location": "AnimalSteps.checkMessage(String)"
});
formatter.result({
  "duration": 125100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за проверка на животни",
  "keyword": "Given "
});
formatter.match({
  "location": "AnimalSteps.openAnimalCheckScreen()"
});
formatter.result({
  "duration": 33300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Проверка на мъжко животно с невалиден номер",
  "description": "",
  "id": "проверка-на-животно-дали-отговаря-на-изискванията-да-е-родител;проверка-на-мъжко-животно-с-невалиден-номер",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "Въведе \"animal5\" за номер на животно",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Животното е \"male\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Животното е на повече от две години",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Натисне бутона за проверка",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Вижда съобщение: \"Грешни данни\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "animal5",
      "offset": 8
    }
  ],
  "location": "AnimalSteps.въведе_за_номер_на_животно(String)"
});
formatter.result({
  "duration": 43500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 13
    }
  ],
  "location": "AnimalSteps.checkAnimalGender(String)"
});
formatter.result({
  "duration": 60600,
  "status": "passed"
});
formatter.match({
  "location": "AnimalSteps.checkAnimalAge()"
});
formatter.result({
  "duration": 16100,
  "status": "passed"
});
formatter.match({
  "location": "AnimalSteps.clickCheckButton()"
});
formatter.result({
  "duration": 46900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Грешни данни",
      "offset": 18
    }
  ],
  "location": "AnimalSteps.checkMessage(String)"
});
formatter.result({
  "duration": 57200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за проверка на животни",
  "keyword": "Given "
});
formatter.match({
  "location": "AnimalSteps.openAnimalCheckScreen()"
});
formatter.result({
  "duration": 81700,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Проверка на женско животно което отговаря на изискванията да бъде родител",
  "description": "",
  "id": "проверка-на-животно-дали-отговаря-на-изискванията-да-е-родител;проверка-на-женско-животно-което-отговаря-на-изискванията-да-бъде-родител",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "Въведе \"animal3\" за номер на животно",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Животното е \"female\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Животното е на повече от две години",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Животното не е раждало през последните десет месеца",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Натисне бутона за проверка",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Вижда съобщение: \"Животното отговаря на изискванията да бъде родител\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "animal3",
      "offset": 8
    }
  ],
  "location": "AnimalSteps.въведе_за_номер_на_животно(String)"
});
formatter.result({
  "duration": 42400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 13
    }
  ],
  "location": "AnimalSteps.checkAnimalGender(String)"
});
formatter.result({
  "duration": 60800,
  "status": "passed"
});
formatter.match({
  "location": "AnimalSteps.checkAnimalAge()"
});
formatter.result({
  "duration": 16700,
  "status": "passed"
});
formatter.match({
  "location": "AnimalSteps.checkDateOfLastBirth()"
});
formatter.result({
  "duration": 26600,
  "status": "passed"
});
formatter.match({
  "location": "AnimalSteps.clickCheckButton()"
});
formatter.result({
  "duration": 41700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Животното отговаря на изискванията да бъде родител",
      "offset": 18
    }
  ],
  "location": "AnimalSteps.checkMessage(String)"
});
formatter.result({
  "duration": 47900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за проверка на животни",
  "keyword": "Given "
});
formatter.match({
  "location": "AnimalSteps.openAnimalCheckScreen()"
});
formatter.result({
  "duration": 31100,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Проверка на женско животно което не е на подходяща възраст да бъде родител",
  "description": "",
  "id": "проверка-на-животно-дали-отговаря-на-изискванията-да-е-родител;проверка-на-женско-животно-което-не-е-на-подходяща-възраст-да-бъде-родител",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "Въведе \"animal4\" за номер на животно",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Животното е \"female\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Животното е на по-малко от две години",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Животното не е раждало през последните десет месеца",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Натисне бутона за проверка",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Вижда съобщение: \"Животното не отговаря на изискванията да бъде родител\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "animal4",
      "offset": 8
    }
  ],
  "location": "AnimalSteps.въведе_за_номер_на_животно(String)"
});
formatter.result({
  "duration": 40600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 13
    }
  ],
  "location": "AnimalSteps.checkAnimalGender(String)"
});
formatter.result({
  "duration": 48200,
  "status": "passed"
});
formatter.match({
  "location": "AnimalSteps.checkUnderageAnimal()"
});
formatter.result({
  "duration": 18100,
  "status": "passed"
});
formatter.match({
  "location": "AnimalSteps.checkDateOfLastBirth()"
});
formatter.result({
  "duration": 19400,
  "status": "passed"
});
formatter.match({
  "location": "AnimalSteps.clickCheckButton()"
});
formatter.result({
  "duration": 45100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Животното не отговаря на изискванията да бъде родител",
      "offset": 18
    }
  ],
  "location": "AnimalSteps.checkMessage(String)"
});
formatter.result({
  "duration": 214100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за проверка на животни",
  "keyword": "Given "
});
formatter.match({
  "location": "AnimalSteps.openAnimalCheckScreen()"
});
formatter.result({
  "duration": 26600,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Проверка на женско животно което е раждало през последните десет месеца",
  "description": "",
  "id": "проверка-на-животно-дали-отговаря-на-изискванията-да-е-родител;проверка-на-женско-животно-което-е-раждало-през-последните-десет-месеца",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "Въведе \"animal4\" за номер на животно",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Животното е \"female\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Животното е на повече от две години",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Животното е раждало през последните десет месеца",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Натисне бутона за проверка",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Вижда съобщение: \"Животното не отговаря на изискванията да бъде родител\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "animal4",
      "offset": 8
    }
  ],
  "location": "AnimalSteps.въведе_за_номер_на_животно(String)"
});
formatter.result({
  "duration": 48400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 13
    }
  ],
  "location": "AnimalSteps.checkAnimalGender(String)"
});
formatter.result({
  "duration": 314300,
  "status": "passed"
});
formatter.match({
  "location": "AnimalSteps.checkAnimalAge()"
});
formatter.result({
  "duration": 16000,
  "status": "passed"
});
formatter.match({
  "location": "AnimalSteps.животното_е_раждало_през_последните_десет_месеца()"
});
formatter.result({
  "duration": 35200,
  "status": "passed"
});
formatter.match({
  "location": "AnimalSteps.clickCheckButton()"
});
formatter.result({
  "duration": 44600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Животното не отговаря на изискванията да бъде родител",
      "offset": 18
    }
  ],
  "location": "AnimalSteps.checkMessage(String)"
});
formatter.result({
  "duration": 40800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за проверка на животни",
  "keyword": "Given "
});
formatter.match({
  "location": "AnimalSteps.openAnimalCheckScreen()"
});
formatter.result({
  "duration": 36400,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Проверка на женско животно с невалиден номер",
  "description": "",
  "id": "проверка-на-животно-дали-отговаря-на-изискванията-да-е-родител;проверка-на-женско-животно-с-невалиден-номер",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "Въведе \"animal6\" за номер на животно",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "Животното е \"female\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Животното е на повече от две години",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Животното не е раждало през последните десет месеца",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Натисне бутона за проверка",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Вижда съобщение: \"Грешни данни\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "animal6",
      "offset": 8
    }
  ],
  "location": "AnimalSteps.въведе_за_номер_на_животно(String)"
});
formatter.result({
  "duration": 101800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 13
    }
  ],
  "location": "AnimalSteps.checkAnimalGender(String)"
});
formatter.result({
  "duration": 44600,
  "status": "passed"
});
formatter.match({
  "location": "AnimalSteps.checkAnimalAge()"
});
formatter.result({
  "duration": 16800,
  "status": "passed"
});
formatter.match({
  "location": "AnimalSteps.checkDateOfLastBirth()"
});
formatter.result({
  "duration": 58300,
  "status": "passed"
});
formatter.match({
  "location": "AnimalSteps.clickCheckButton()"
});
formatter.result({
  "duration": 37600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Грешни данни",
      "offset": 18
    }
  ],
  "location": "AnimalSteps.checkMessage(String)"
});
formatter.result({
  "duration": 42400,
  "status": "passed"
});
});