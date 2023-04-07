Feature: Test Entire document rendering

Scenario: Test Footer is rendering with icons
Given I am on the page
    Then I should see the "finder" icon
    And I should see the "launchpad" icon
    And I should see the "safari" icon
    And I should see the "mail" icon
    And I should see the "contacts" icon
    And I should see the "calendar" icon
    And I should see the "stickies" icon
    And I should see the "reminders" icon
    And I should see the "maps" icon
    And I should see the "messages" icon
    And I should see the "facetime" icon
    And I should see the "appstore" icon
    And I should see the "github" icon
    And I should see the "portfolio" icon
    And I should see the "settings" icon
    And I should see the "trash" icon
    And I should see the "mobile-portfolio" icon
    And I should see the "mobile-safari" icon
    And I should see the "mobile-stickies" icon
    And I should see the "mobile-github" icon

Scenario: Test Header is rendering
Given I am on the page
    Then It should render the header
    And I should see the "menu" 
    And I should see the "logo" 
    And I should see the "menu-finder" 
    And I should see the "file" 
    And I should see the "edit" 
    And I should see the "view" 
    And I should see the "go"
    And I should see the "window"
    And I should see the "help"
    And I should see the "battery"
    And I should see the "wifi" 
    And I should see the "time" 

Scenario: Test Apps on desktop is rendering
Given I am on the page
    Then It should render the apps-container 
    And I should see the "harddisk" render
    And I should see the "desktop-stickies" render
    And I should see the "desktop-portfolio" render

Scenario: Test Intro Window on desktop is rendering
Given I am on the page
    Then I should see the intro-window rendering