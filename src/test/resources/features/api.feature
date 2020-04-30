Feature: API features

  Scenario: Client want to fetch Name
    Given The client has API URL /getName
    When The client calls /getName
    Then The client receives the Name 100


  Scenario: Client wants to fetch Name on the basis of id
    Given The client has API URL
    When The client calls /getNameById with id 1
    Then The client receives the Name as 101

    When The client calls /getNameById with id 2
    Then The client receives the Name as 102