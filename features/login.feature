Feature: Test the functionality of the app

  Scenario: user tries drag and drop functionality
    Given user is on the drag and drop page
    When user drags and drops tiles
    Then operation is complete
