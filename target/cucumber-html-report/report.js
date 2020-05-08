$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/api.feature");
formatter.feature({
  "line": 1,
  "name": "API features",
  "description": "",
  "id": "api-features",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Client want to fetch Name",
  "description": "",
  "id": "api-features;client-want-to-fetch-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "The client has API URL /getName",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The client calls /getName",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The client receives the Name 100",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 9,
  "name": "Client wants to fetch Name on the basis of id",
  "description": "",
  "id": "api-features;client-wants-to-fetch-name-on-the-basis-of-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "The client has API URL",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "The client calls /getNameById with id 1",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The client receives the Name as 101",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "The client calls /getNameById with id 2",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The client receives the Name as 102",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("features/calculator.feature");
formatter.feature({
  "line": 1,
  "name": "arithmetic operations",
  "description": "",
  "id": "arithmetic-operations",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "client wants to add two numbers",
  "description": "",
  "id": "arithmetic-operations;client-wants-to-add-two-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the client calls /calc/add with values 1 and 2",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "the client receives answer as 3",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 7,
  "name": "client wants to subtract two numbers",
  "description": "",
  "id": "arithmetic-operations;client-wants-to-subtract-two-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "the client calls /calc/sub with values 5 and 3",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the client receives answer as 2",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "client wancucumber.propertiests to multiply two numbers",
  "description": "",
  "id": "arithmetic-operations;client-wancucumber.propertiests-to-multiply-two-numbers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "the client calls /calc/mul with values \u003cnumber1\u003e and \u003cnumber2\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the client receives answer as \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "arithmetic-operations;client-wancucumber.propertiests-to-multiply-two-numbers;",
  "rows": [
    {
      "cells": [
        "number1",
        "number2",
        "result"
      ],
      "line": 19,
      "id": "arithmetic-operations;client-wancucumber.propertiests-to-multiply-two-numbers;;1"
    },
    {
      "cells": [
        "2",
        "3",
        "6"
      ],
      "line": 20,
      "id": "arithmetic-operations;client-wancucumber.propertiests-to-multiply-two-numbers;;2"
    },
    {
      "cells": [
        "4",
        "6",
        "24"
      ],
      "line": 21,
      "id": "arithmetic-operations;client-wancucumber.propertiests-to-multiply-two-numbers;;3"
    },
    {
      "cells": [
        "7",
        "8",
        "56"
      ],
      "line": 22,
      "id": "arithmetic-operations;client-wancucumber.propertiests-to-multiply-two-numbers;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "client wancucumber.propertiests to multiply two numbers",
  "description": "",
  "id": "arithmetic-operations;client-wancucumber.propertiests-to-multiply-two-numbers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "the client calls /calc/mul with values 2 and 3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the client receives answer as 6",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 21,
  "name": "client wancucumber.propertiests to multiply two numbers",
  "description": "",
  "id": "arithmetic-operations;client-wancucumber.propertiests-to-multiply-two-numbers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "the client calls /calc/mul with values 4 and 6",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the client receives answer as 24",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 22,
  "name": "client wancucumber.propertiests to multiply two numbers",
  "description": "",
  "id": "arithmetic-operations;client-wancucumber.propertiests-to-multiply-two-numbers;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "the client calls /calc/mul with values 7 and 8",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the client receives answer as 56",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});