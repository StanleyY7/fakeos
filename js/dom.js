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
  const logo = document.getElementById("logo");

  const displayIntroLogo = () => {
    logo.style.backgroundColor = "#ddddff";
    introWindow.style.display = "block";
  };

  const noBackgroundLogo = () => {
    logo.style.backgroundColor = "rgb(255, 244, 243)";
  };

  logo.addEventListener("click", displayIntroLogo);
  logo.addEventListener("mouseleave", noBackgroundLogo);

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
    internetWindow.style.display = "block";
    safariIframe.style.display = "block";
  };

  safari.addEventListener("click", displaySafari);
});
