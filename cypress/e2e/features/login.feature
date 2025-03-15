# login.feature
Feature: Login
  As a user
  I want to be able to log in
  So I can access the app

  Scenario: Successful login
    Given I am on the login page
    When I enter my credentials
      | username | password |
      | user1    | pass1    |
    Then I should be logged # login.feature
    Feature: Login
      As a user
      I want to be able to log in
      So I can access the app
    
      Scenario: Successful login
        Given I am on the login page
        When I enter my credentials
          | username | password |
          | user1    | pass1    |
        Then I should be logged in