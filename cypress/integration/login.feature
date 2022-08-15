Feature: Login to Application 
  @login
  Scenario Outline: Valid Login
      Given I open the sistem 
      When I submit login with <username> and <password>
      Then I should see my user <name>
      Examples:
          | username                        | password      | name         |
          | 'standard_user@mailinator.com'  | 'secret_123'  | 'Standard'   |
  
