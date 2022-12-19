window.addEventListener("DOMContentLoaded", () => {
  /* For Intro App */

  const introWindow = document.getElementById("intro-window");
  const dotOne = document.getElementById("dot-one");
  const settings = document.getElementById("settings");

  const displayClose = () => {
    const closeX = document.getElementById("close");
    closeX.style.display = "block";
  };

  const hideClose = () => {
    const displayX = document.getElementById("close");
    displayX.style.display = "none";
  };

  const closeIntro = () => {
    introWindow.style.display = "none";
  };

  const displayIntro = () => {
    introWindow.style.display = "block";
  };

  dotOne.addEventListener("click", closeIntro);
  dotOne.addEventListener("mouseover", displayClose);
  dotOne.addEventListener("mouseleave", hideClose);
  settings.addEventListener("click", displayIntro);

  /* For Logo */
  const toggleIntroLogo = (clicked) => {
    if (clicked) {
      logo.style.backgroundColor = "#ddddff";
      introWindow.style.display = "block";
    } else {
      logo.style.backgroundColor = "rgb(255, 244, 243)";
    }
  };

  logo.addEventListener("click", () => toggleIntroLogo(true));
  logo.addEventListener("mouseleave", () => toggleIntroLogo(false));

  /* For Stickies App */
  const stickiesClose = document.getElementById("stickies-close");
  const stickies = document.getElementById("stickies");
  const stickiesNote = document.getElementById("stickies-note");

  const closeStickies = () => {
    stickiesNote.style.display = "none";
  };

  const openStickies = () => {
    stickiesNote.style.display = "block";
  };

  stickiesClose.addEventListener("click", closeStickies);
  stickies.addEventListener("click", openStickies);

  /* For Portfolio App */

  const internetWindow = document.getElementById("internet-window");
  const portfolioDot = document.getElementById("portfolio-dot");
  const portfolio = document.getElementById("portfolio");

  const displayPortfolioClose = () => {
    const closeInternetWindowX = document.getElementById("portfolio-close");
    closeInternetWindowX.style.display = "block";
  };

  const hidePortfolioClose = () => {
    const displayPortfolioX = document.getElementById("portfolio-close");
    displayPortfolioX.style.display = "none";
  };

  const closeInternetWindow = () => {
    const portfolioIframe = document.getElementById("portfolio-iframe");
    document.getElementById("safari-iframe").style.display = "none";
    internetWindow.style.display = "none";
    portfolioIframe.style.display = "none";
  };

  const displayPortfolio = () => {
    const portfolioIframe = document.getElementById("portfolio-iframe");
    internetWindow.style.display = "block";
    portfolioIframe.style.display = "block";
  };

  portfolioDot.addEventListener("click", closeInternetWindow);
  portfolioDot.addEventListener("mouseover", displayPortfolioClose);
  portfolioDot.addEventListener("mouseleave", hidePortfolioClose);
  portfolio.addEventListener("click", displayPortfolio);

  /* For safari App */
  const safari = document.getElementById("safari");

  const displaySafari = () => {
    const safariIframe = document.getElementById("safari-iframe");
    document.getElementById("portfolio-iframe").style.display = "none";
    internetWindow.style.display = "block";
    safariIframe.style.display = "block";
  };

  safari.addEventListener("click", displaySafari);
});
