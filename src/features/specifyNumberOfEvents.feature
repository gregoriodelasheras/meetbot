Feature: Specify number of events

    Scenario: When user hasn’t specified a number, 32 is the default number.

        Given user didn’t specify the number of events he/she wants to see
        When application displays a list of events
        Then the user should be able to see a list with a maximum of 32 events.

    Scenario: User can change the number of events they want to see.

        Given user didn’t indicate the number of events he/she wants to see
        When user changes the number of event elements
        Then the user should be able to see the number of event elements he/she specified.
