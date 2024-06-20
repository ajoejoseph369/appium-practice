Feature: Test the functionality of the app

  Scenario: Test the login functionality
    Given user is on the homepage
    When user clicks the login button
    Then user is redirected to the login page

  Scenario: User tries to login
    Given user is on the login page
    When user enters <username> and <password>
    Then user gets the notification <notification>

    Examples:
      | username | password | notification       |
      |  12@2.nl | 12345678 | You are logged in! |

  Scenario: User tries to fill in a form
    Given user is on the forms page
    When user enters <text> in the input field
    Then user toggles the switch
    Then user selects an item from the dropdown
    Then user clicks on the active button

    Examples:
      | text  |
      | Hello |

  Scenario: User tries scrolling
    Given user is on the swipe page
    When user swipes
    Then success
