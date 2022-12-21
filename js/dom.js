window.addEventListener("DOMContentLoaded", () => {
  /* Top Menu */
  const menuFinder = document.getElementById("finder");
  const menuFile = document.getElementById("file");
  const menuEdit = document.getElementById("edit");
  const menuView = document.getElementById("view");
  const menuGo = document.getElementById("go");
  const menuWindow = document.getElementById("window");
  const menuHelp = document.getElementById("help");

  const toggleMenuFinder = (clicked) => {
    if (clicked) {
      menuFinder.style.backgroundColor = "#ddddff";
    } else {
      menuFinder.style.backgroundColor = "rgb(255, 244, 243)";
    }
  };

  const toggleMenuFile = (clicked) => {
    if (clicked) {
      menuFile.style.backgroundColor = "#ddddff";
    } else {
      menuFile.style.backgroundColor = "rgb(255, 244, 243)";
    }
  };

  const toggleMenuEdit = (clicked) => {
    if (clicked) {
      menuEdit.style.backgroundColor = "#ddddff";
    } else {
      menuEdit.style.backgroundColor = "rgb(255, 244, 243)";
    }
  };

  const toggleMenuView = (clicked) => {
    if (clicked) {
      menuView.style.backgroundColor = "#ddddff";
    } else {
      menuView.style.backgroundColor = "rgb(255, 244, 243)";
    }
  };

  const toggleMenuGo = (clicked) => {
    if (clicked) {
      menuGo.style.backgroundColor = "#ddddff";
    } else {
      menuGo.style.backgroundColor = "rgb(255, 244, 243)";
    }
  };

  const toggleMenuWindow = (clicked) => {
    if (clicked) {
      menuWindow.style.backgroundColor = "#ddddff";
    } else {
      menuWindow.style.backgroundColor = "rgb(255, 244, 243)";
    }
  };

  const toggleMenuHelp = (clicked) => {
    if (clicked) {
      menuHelp.style.backgroundColor = "#ddddff";
    } else {
      menuHelp.style.backgroundColor = "rgb(255, 244, 243)";
    }
  };

  menuFinder.addEventListener("click", () => toggleMenuFinder(true));
  menuFinder.addEventListener("mouseleave", () => toggleMenuFinder(false));
  menuFile.addEventListener("click", () => toggleMenuFile(true));
  menuFile.addEventListener("mouseleave", () => toggleMenuFile(false));
  menuEdit.addEventListener("click", () => toggleMenuEdit(true));
  menuEdit.addEventListener("mouseleave", () => toggleMenuEdit(false));
  menuView.addEventListener("click", () => toggleMenuView(true));
  menuView.addEventListener("mouseleave", () => toggleMenuView(false));
  menuGo.addEventListener("click", () => toggleMenuGo(true));
  menuGo.addEventListener("mouseleave", () => toggleMenuGo(false));
  menuWindow.addEventListener("click", () => toggleMenuWindow(true));
  menuWindow.addEventListener("mouseleave", () => toggleMenuWindow(false));
  menuHelp.addEventListener("click", () => toggleMenuHelp(true));
  menuHelp.addEventListener("mouseleave", () => toggleMenuHelp(false));

  /* Draggable Desktop Apps  */
  const collision = (rect1, rect2) =>
    !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );

  document.querySelectorAll(".app-image").forEach((img) => {
    let isDragging = false;
    let initialPosition = {};
    let currentPosition = {};

    // Set the initial position of the img element
    img.style.left = "0px";
    img.style.top = "0px";

    img.addEventListener("mousedown", (event) => {
      isDragging = true;
      initialPosition = {
        x: event.clientX,
        y: event.clientY,
      };
    });

    document.addEventListener("mousemove", (event) => {
      if (isDragging) {
        currentPosition = {
          x: event.clientX,
          y: event.clientY,
        };

        let diffX = currentPosition.x - initialPosition.x;
        let diffY = currentPosition.y - initialPosition.y;

        img.style.left = diffX + "px";
        img.style.top = diffY + "px";
      }
    });

    document.addEventListener("mouseup", (event) => {
      isDragging = false;

      // Check if the dragged element is colliding with the target element
      let draggedRect = img.getBoundingClientRect();
      let targetRect = document.querySelector("#trash").getBoundingClientRect();
      if (collision(draggedRect, targetRect)) {
        // Remove the dragged element from the DOM
        img.remove();
        targetRect.style.transform = "scale(1.3)";
      }
    });
  });

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

  /* Safari App */
  const safari = document.getElementById("safari");

  const displaySafari = () => {
    const safariIframe = document.getElementById("safari-iframe");
    document.getElementById("portfolio-iframe").style.display = "none";
    internetWindow.style.display = "block";
    safariIframe.style.display = "block";
  };

  safari.addEventListener("click", displaySafari);

  /* Launchpad App */

  const launchpadClose = document.getElementById("launchpad-close");
  const launchpad = document.getElementById("launchpad");
  const launchpadApp = document.getElementById("launchpad-app");

  const closeLaunchpad = () => (launchpadApp.style.display = "none");
  const displayLaunchpad = () => (launchpadApp.style.display = "block");

  launchpadClose.addEventListener("click", closeLaunchpad);
  launchpad.addEventListener("click", displayLaunchpad);

  /* Calendar App */

  const calendarDot = document.getElementById("calendar-dot");
  const calendarClose = document.getElementById("calendar-close");
  const calendarApp = document.getElementById("calendar-app");
  const calendar = document.getElementById("calendar");

  const toggleCalendarClose = (event) => {
    if (event.type === "mouseover") {
      calendarClose.style.display = "block";
    } else {
      calendarClose.style.display = "none";
    }
  };

  const closeCalendar = () => (calendarApp.style.display = "none");
  const displayCalendar = () => (calendarApp.style.display = "block");

  calendar.addEventListener("click", displayCalendar);
  calendarClose.addEventListener("click", closeCalendar);
  calendarDot.addEventListener("mouseover", toggleCalendarClose);
  calendarDot.addEventListener("mouseleave", toggleCalendarClose);

  /* Facetime App */

  const facetime = document.getElementById("facetime");
  const facetimeDot = document.getElementById("facetime-dot");
  const facetimeClose = document.getElementById("facetime-close");

  displayFacetimeClose = () => {
    facetimeClose.style.display = "block";
  };

  hideFacetimeClose = () => {
    facetimeClose.style.display = "none";
  };

  displayFacetime = () => {
    const webcam = document.getElementById("webcam");
    const facetimeClose = document.getElementById("facetime-close");
    const facetimeApp = document.getElementById("facetime-app");
    const facetimeImage = document.getElementById("facetime-image");

    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      webcam.srcObject = stream;
      facetimeApp.style.display = "block";
      facetimeImage.style.display = "block";
    });

    facetimeClose.addEventListener("click", () => {
      const tracks = webcam.srcObject.getTracks();
      facetimeImage.style.display = "none";
      facetimeApp.style.display = "none";
      tracks.forEach((track) => track.stop());
      webcam.srcObject = null;
    });
  };

  facetimeDot.addEventListener("mouseover", displayFacetimeClose);
  facetimeDot.addEventListener("mouseleave", hideFacetimeClose);
  facetime.addEventListener("click", displayFacetime);

  /* Reminders App */

  const remindersDot = document.getElementById("reminders-dot");
  const remindersClose = document.getElementById("reminders-close");
  const remindersApp = document.getElementById("reminders-app");
  const reminders = document.getElementById("reminders");

  const toggleRemindersClose = (event) => {
    if (event.type === "mouseover") {
      remindersClose.style.display = "block";
    } else {
      remindersClose.style.display = "none";
    }
  };

  const closeReminders = () => (remindersApp.style.display = "none");
  const displayReminders = () => (remindersApp.style.display = "block");

  remindersDot.addEventListener("mouseover", toggleRemindersClose);
  remindersDot.addEventListener("mouseleave", toggleRemindersClose);
  remindersClose.addEventListener("click", closeReminders);
  reminders.addEventListener("click", displayReminders);
});
