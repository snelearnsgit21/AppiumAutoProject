Feature: EriBank Mobile App Login Feature

  Scenario Outline: As a user, I can log into the EriBank

    Given I launch the EriBank app
    When I login with <username> and <password>
    Then I should see the balance page

    Examples:
      | username | password             | message                        |
      | company | company | You logged into a secure area! and should EriBank logo |
      | c3   | company               | Your username is invalid!      |
      | company   | c3               | Your username or password is invalid!      |
