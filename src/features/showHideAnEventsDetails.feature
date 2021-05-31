Feature: Show / Hide an event’s details

    Scenario: An event element is collapsed by default.

        Given user hasn’t opened an event item
        When application shows a list of events
        Then the user should be able to see the list of collapsed events.

    Scenario: User can expand an event to see its details.

        Given user hasn’t opened the event element
        When user opens the event element
        Then the user should be able to see the details of the opening event.

    Scenario: User can collapse an event to hide its details.

        Given user has opened the event element
        When user presses the event element
        Then the user should be able to close the details of the event element.
