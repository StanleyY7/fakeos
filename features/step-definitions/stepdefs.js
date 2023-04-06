const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const { JSDOM } = require("jsdom");

let dom;

Given("I am on the page", () => {
  dom = new JSDOM(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Test Page</title>
      </head>
      <body>
      <footer>
      <div class="dock">
        <ul>
          <li class="icon">
            <img src="assets/finder-icon.png" id="finder" />
          </li>
          <li class="icon">
            <img src="assets/launchpad-icon.png" id="launchpad" />
          </li>
          <li class="icon">
            <img src="assets/safari-icon.png" id="safari" />
          </li>
          <li class="icon">
            <a href="mailto:"> <img src="assets/mail-icon.png" /></a>
          </li>
          <li class="icon">
            <img src="assets/contacts-icon.png" id="contacts" />
          </li>
          <li class="icon">
            <img src="assets/calendar-icon.png" id="calendar" />
          </li>
          <li class="icon">
            <img src="assets/notes-icon.png" id="stickies" />
          </li>
          <li class="icon">
            <img src="assets/reminders-icon.png" id="reminders" />
          </li>
          <li class="icon">
            <a
              href="https://duckduckgo.com/?q=Sydney%2C+NSW&t=h_&ia=places&iaxm=maps&strict_bbox=0&bbox=-33.74968094658189%2C150.9731900225512%2C-34.07927708364575%2C151.5846099461628&metatoken=0"
              target="_blank"
            >
              <img src="assets/maps-icon.png" />
            </a>
          </li>
          <li class="icon">
            <a href="https://simsimi.com/" target="_blank">
              <img src="assets/messages-icon.png"
            /></a>
          </li>
          <li class="icon">
            <img src="assets/facetime-icon.png" id="facetime" />
          </li>
          <li class="icon">
            <a href="https://apps.apple.com/au/genre/ios/id36" target="_blank">
              <img src="assets/appstore-icon.png" />
            </a>
          </li>
          <li class="icon">
            <a href="https://github.com/StanleyY7" target="_blank">
              <img src="assets/github-icon.png" />
            </a>
          </li>
          <li class="icon">
            <img src="assets/my-website-app.png" id="portfolio" />
          </li>
          <li class="icon" id="settings-icon">
            <img src="assets/system-preferences-icon.png" id="settings" />
          </li>
          <li id="border-line"></li>
          <li class="icon" id="border-icon">
            <img src="assets/trash-icon.png" id="trash" />
          </li>
        </ul>
      </div>

      <div class="dock" id="mobile-dock">
        <ul>
          <li class="icon">
            <img src="assets/my-website-app.png" id="mobile-portfolio" />
          </li>
          <li class="icon">
            <img src="assets/safari-icon.png" id="mobile-safari" />
          </li>
          <li class="icon">
            <img src="assets/notes-icon.png" id="mobile-stickies" />
          </li>
          <li class="icon">
            <a href="https://github.com/StanleyY7" target="_blank">
              <img src="assets/github-icon.png" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
      </body>
    </html>
  `);
});

Then("I should see the {string} icon", (icon) => {
  const icons = dom.window.document.querySelectorAll(".icon");
  assert.equal(icons.length, 20);
});
