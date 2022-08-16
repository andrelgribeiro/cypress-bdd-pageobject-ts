Feature: SignUp to Application 
  @signup
  Scenario: Valid signup with successfull
      Given I have a new user to create
      And I open the sistem
      When I access the signup form
      When I fill all fields correctly and click on Register button
      Then I should see the confirmation
