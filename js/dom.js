window.addEventListener("DOMContentLoaded", () => {
  /* Top Menu */

  const menuFinder = document.getElementById("menu-finder");
  const menuFile = document.getElementById("file");
  const menuEdit = document.getElementById("edit");
  const menuView = document.getElementById("view");
  const menuGo = document.getElementById("go");
  const menuWindow = document.getElementById("window");
  const menuHelp = document.getElementById("help");
  const finderList = document.getElementById("finder-list");
  const fileList = document.getElementById("file-list");
  const editList = document.getElementById("edit-list");
  const viewList = document.getElementById("view-list");
  const goList = document.getElementById("go-list");
  const windowList = document.getElementById("window-list");
  const helpApp = document.getElementById("help-app");
  const transparent = "rgba(255, 255, 255, 0)";

  const closeAllMenu = () => {
    finderList.style.display = "none";
    fileList.style.display = "none";
    editList.style.display = "none";
    viewList.style.display = "none";
    goList.style.display = "none";
    windowList.style.display = "none";
  };

  const toggleMenuFinder = (clicked) => {
    if (clicked) {
      menuFinder.style.backgroundColor = "#ddddff";
      finderList.style.display = "block";
    } else {
      menuFinder.style.backgroundColor = transparent;
      closeAllMenu();
    }
  };

  const toggleMenuFile = (clicked) => {
    if (clicked) {
      menuFile.style.backgroundColor = "#ddddff";
      fileList.style.display = "block";
    } else {
      menuFile.style.backgroundColor = transparent;
      closeAllMenu();
    }
  };

  const toggleMenuEdit = (clicked) => {
    if (clicked) {
      menuEdit.style.backgroundColor = "#ddddff";
      editList.style.display = "block";
    } else {
      menuEdit.style.backgroundColor = transparent;
      closeAllMenu();
    }
  };

  const toggleMenuView = (clicked) => {
    if (clicked) {
      menuView.style.backgroundColor = "#ddddff";
      viewList.style.display = "block";
    } else {
      menuView.style.backgroundColor = transparent;
      closeAllMenu();
    }
  };

  const toggleMenuGo = (clicked) => {
    if (clicked) {
      menuGo.style.backgroundColor = "#ddddff";
      goList.style.display = "block";
    } else {
      menuGo.style.backgroundColor = transparent;
      closeAllMenu();
    }
  };

  const toggleMenuWindow = (clicked) => {
    if (clicked) {
      menuWindow.style.backgroundColor = "#ddddff";
      windowList.style.display = "block";
    } else {
      menuWindow.style.backgroundColor = transparent;
      closeAllMenu();
    }
  };

  const toggleMenuHelp = (clicked) => {
    if (clicked) {
      menuHelp.style.backgroundColor = "#ddddff";
      helpApp.style.display = "block";
    } else {
      menuHelp.style.backgroundColor = transparent;
      closeAllMenu();
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

  /* Help App */
  const helpDot = document.getElementById("help-dot");
  const helpClose = document.getElementById("help-close");

  const toggleHelpClose = (event) => {
    helpClose.style.display = event.type === "mouseover" ? "block" : "none";
  };

  const closeHelp = () => (helpApp.style.display = "none");

  helpDot.addEventListener("mouseover", toggleHelpClose);
  helpDot.addEventListener("mouseleave", toggleHelpClose);
  helpClose.addEventListener("click", closeHelp);

  /* For Logo */
  const toggleIntroLogo = (clicked) => {
    if (clicked) {
      logo.style.backgroundColor = "#ddddff";
      introWindow.style.display = "block";
    } else {
      logo.style.backgroundColor = transparent;
    }
  };

  logo.addEventListener("click", () => toggleIntroLogo(true));
  logo.addEventListener("mouseleave", () => toggleIntroLogo(false));

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
    let initialX;
    let initialY;

    img.addEventListener("mousedown", (event) => {
      isDragging = true;
      initialPosition = {
        x: img.offsetLeft,
        y: img.offsetTop,
      };
      initialX = event.clientX;
      initialY = event.clientY;
    });

    document.addEventListener("mousemove", (event) => {
      if (isDragging) {
        currentPosition = {
          x: event.clientX,
          y: event.clientY,
        };

        let diffX = currentPosition.x - initialX;
        let diffY = currentPosition.y - initialY;

        img.style.left = initialPosition.x + diffX + "px";
        img.style.top = initialPosition.y + diffY + "px";
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

  document.querySelectorAll(".app-image").forEach((img) => {
    let isDragging = false;
    let initialPosition = {};
    let currentPosition = {};
    let initialX;
    let initialY;

    img.addEventListener("touchstart", (event) => {
      isDragging = true;
      initialPosition = {
        x: img.offsetLeft,
        y: img.offsetTop,
      };
      initialX = event.touches[0].clientX;
      initialY = event.touches[0].clientY;
    });

    document.addEventListener("touchmove", (event) => {
      if (isDragging) {
        currentPosition = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        };

        let diffX = currentPosition.x - initialX;
        let diffY = currentPosition.y - initialY;

        img.style.left = initialPosition.x + diffX + "px";
        img.style.top = initialPosition.y + diffY + "px";
      }
    });

    document.addEventListener("touchend", (event) => {
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
  const introDot = document.getElementById("intro-dot");
  const settings = document.getElementById("settings");
  const introClose = document.getElementById("close");

  const toggleClose = (event) => {
    introClose.style.display = event.type === "mouseover" ? "block" : "none";
  };

  const closeIntro = () => {
    introWindow.style.display = "none";
  };

  const displayIntro = () => {
    introWindow.style.display = "block";
  };

  introDot.addEventListener("mouseover", toggleClose);
  introDot.addEventListener("mouseleave", toggleClose);
  introClose.addEventListener("click", closeIntro);
  settings.addEventListener("click", displayIntro);

  /* For Finder App */

  const finderDot = document.getElementById("finder-dot");
  const finderClose = document.getElementById("finder-close");
  const finderApp = document.getElementById("finder-app");
  const finder = document.getElementById("finder");
  const recents = document.getElementById("recents");
  const desktop = document.getElementById("desktop");
  const finderText = document.getElementsByClassName("finder-text")[0];
  const documents = document.getElementById("documents");
  const downloads = document.getElementById("downloads");
  const yourMac = document.getElementById("your-mac");

  const finderRecentsContainer = document.getElementById(
    "finder-recents-container"
  );
  const finderDesktopContainer = document.getElementById(
    "finder-desktop-container"
  );
  const finderDocumentsContainer = document.getElementById(
    "finder-documents-container"
  );
  const finderMacContainer = document.getElementById("finder-mac-container");

  const toggleFinderClose = (event) => {
    finderClose.style.display = event.type === "mouseover" ? "block" : "none";
  };

  const closeAllFinder = () => {
    finderDesktopContainer.style.display = "none";
    finderRecentsContainer.style.display = "none";
    finderDocumentsContainer.style.display = "none";
    finderMacContainer.style.display = "none";
  };

  const closeFinder = () => {
    closeAllFinder();
    finderApp.style.display = "none";
    finderText.innerHTML =
      "Welcome to Finder, click on one of the categories on the left to get started.";
  };
  const displayFinder = () => (finderApp.style.display = "block");

  const displayRecents = () => {
    finderText.innerHTML =
      "All of your most recent applications are shown and displayed here.";
    finderRecentsContainer.style.display = "block";
    finderDesktopContainer.style.display = "none";
    finderDocumentsContainer.style.display = "none";
    finderMacContainer.style.display = "none";
  };

  const displayDesktop = () => {
    finderText.innerHTML =
      "All of your Desktop applications are shown and displayed here.";
    finderRecentsContainer.style.display = "none";
    finderDocumentsContainer.style.display = "none";
    finderMacContainer.style.display = "none";
    finderDesktopContainer.style.display = "block";
  };

  const displayDocuments = () => {
    finderText.innerHTML =
      "All of your Documents in your Documents folder are shown and displayed here.";
    finderRecentsContainer.style.display = "none";
    finderDesktopContainer.style.display = "none";
    finderMacContainer.style.display = "none";
    finderDocumentsContainer.style.display = "block";
  };

  const displayDownloads = () => {
    finderText.innerHTML =
      "All of your Downloads are shown here, currently you have no downloads.";
    closeAllFinder();
  };

  const displayMac = () => {
    finderApp.style.display = "block";
    finderText.innerHTML =
      "Further information for your available Devices are shown here, currently you have 1 Device.";
    finderMacContainer.style.display = "block";
    finderRecentsContainer.style.display = "none";
    finderDesktopContainer.style.display = "none";
    finderDocumentsContainer.style.display = "none";
  };

  finderDot.addEventListener("mouseover", toggleFinderClose);
  finderDot.addEventListener("mouseleave", toggleFinderClose);
  finderClose.addEventListener("click", closeFinder);
  finder.addEventListener("click", displayFinder);
  recents.addEventListener("click", displayRecents);
  desktop.addEventListener("click", displayDesktop);
  documents.addEventListener("click", displayDocuments);
  downloads.addEventListener("click", displayDownloads);
  yourMac.addEventListener("click", displayMac);

  /* For Contacts App */

  const contacts = document.getElementById("contacts");
  const contactsApp = document.getElementById("contacts-app");
  const contactsClose = document.getElementById("contacts-close");
  const contactsDot = document.getElementById("contacts-dot");

  const toggleContactsClose = (event) => {
    contactsClose.style.display = event.type === "mouseover" ? "block" : "none";
  };

  const displayContacts = () => (contactsApp.style.display = "block");
  const closeContacts = () => (contactsApp.style.display = "none");

  contacts.addEventListener("click", displayContacts);
  contactsClose.addEventListener("click", closeContacts);
  contactsDot.addEventListener("mouseover", toggleContactsClose);
  contactsDot.addEventListener("mouseleave", toggleContactsClose);

  /* For Stickies App */
  const stickiesClose = document.getElementById("stickies-close");
  const stickies = document.getElementById("stickies");
  const stickiesNote = document.getElementById("stickies-note");

  const closeStickies = () => {
    stickiesNote.style.display = "none";
  };

  const displayStickies = () => {
    stickiesNote.style.display = "block";
  };

  stickiesClose.addEventListener("click", closeStickies);
  stickies.addEventListener("click", displayStickies);

  /* For Portfolio App */
  const internetWindow = document.getElementById("internet-window");
  const internetDot = document.getElementById("internet-dot");
  const portfolio = document.getElementById("portfolio");
  const internetClose = document.getElementById("internet-close");
  const portfolioIframe = document.getElementById("portfolio-iframe");
  const safariIframe = document.getElementById("safari-iframe");

  const toggleInternetClose = (event) => {
    internetClose.style.display = event.type === "mouseover" ? "block" : "none";
  };

  const closeInternetWindow = () => {
    safariIframe.style.display = "none";
    internetWindow.style.display = "none";
    portfolioIframe.style.display = "none";
  };

  const displayPortfolio = () => {
    safariIframe.style.display = "none";
    internetWindow.style.display = "block";
    portfolioIframe.style.display = "block";
  };

  internetDot.addEventListener("click", closeInternetWindow);
  internetDot.addEventListener("mouseover", toggleInternetClose);
  internetDot.addEventListener("mouseleave", toggleInternetClose);
  portfolio.addEventListener("click", displayPortfolio);

  /* Safari App */

  const safari = document.getElementById("safari");

  const displaySafari = () => {
    portfolioIframe.style.display = "none";
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
    calendarClose.style.display = event.type === "mouseover" ? "block" : "none";
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
  const facetimeApp = document.getElementById("facetime-app");
  const webcam = document.getElementById("webcam");
  const facetimeImage = document.getElementById("facetime-image");

  const toggleFacetimeClose = (event) => {
    facetimeClose.style.display = event.type === "mouseover" ? "block" : "none";
  };

  displayFacetime = () => {
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

  facetimeDot.addEventListener("mouseover", toggleFacetimeClose);
  facetimeDot.addEventListener("mouseleave", toggleFacetimeClose);
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

  /* Trash App */
  const trashDot = document.getElementById("trash-dot");
  const trashClose = document.getElementById("trash-close");
  const trashApp = document.getElementById("trash-app");
  const trash = document.getElementById("trash");

  const toggleTrashClose = (event) => {
    if (event.type === "mouseover") {
      trashClose.style.display = "block";
    } else {
      trashClose.style.display = "none";
    }
  };

  const closeTrash = () => (trashApp.style.display = "none");
  const displayTrash = () => (trashApp.style.display = "block");

  trashDot.addEventListener("mouseover", toggleTrashClose);
  trashDot.addEventListener("mouseleave", toggleTrashClose);
  trashClose.addEventListener("click", closeTrash);
  trash.addEventListener("dblclick", displayTrash);

  /* Desktop Apps */

  const harddisk = document.getElementById("harddisk");
  const desktopStickies = document.getElementById("desktop-stickies");
  const desktopPortfolio = document.getElementById("desktop-portfolio");

  harddisk.addEventListener("click", displayMac);
  desktopStickies.addEventListener("click", displayStickies);
  desktopPortfolio.addEventListener("click", displayPortfolio);

  /* Finder Apps */

  const finderHarddisk = document.getElementById("finder-harddisk");
  const finderStickies = document.getElementById("finder-stickies");
  const finderPortfolio = document.getElementById("finder-portfolio");

  finderHarddisk.addEventListener("click", displayMac);
  finderStickies.addEventListener("click", displayStickies);
  finderPortfolio.addEventListener("click", displayPortfolio);

  /* Top Menu List Functions */

  const menuFileClose = document.getElementById("menu-file-close");
  const menuWindowClose = document.getElementById("menu-window-close");
  const menuFinderAbout = document.getElementById("menu-finder-about");
  const menuFinderOpen = document.getElementById("menu-finder-open");
  const menuFinderLaunch = document.getElementById("menu-finder-launch");
  const menuViewAbout = document.getElementById("menu-view-about");
  const menuGoOpen = document.getElementById("menu-go-open");

  const closeEverything = () => {
    calendarApp.style.display = "none";
    remindersApp.style.display = "none";
    launchpadApp.style.display = "none";
    introWindow.style.display = "none";
    internetWindow.style.display = "none";
    stickiesNote.style.display = "none";
    contactsApp.style.display = "none";
    finderApp.style.display = "none";
    facetimeApp.style.display = "none";
    helpApp.style.display = "none";
    trashApp.style.display = "none";
  };

  menuWindowClose.addEventListener("click", closeEverything);
  menuFileClose.addEventListener("click", closeEverything);
  menuFinderAbout.addEventListener("click", displayIntro);
  menuFinderOpen.addEventListener("click", displayFinder);
  menuFinderLaunch.addEventListener("click", displayLaunchpad);
  menuViewAbout.addEventListener("click", displayIntro);
  menuGoOpen.addEventListener("click", displaySafari);

  /* Mobile Apps */
  const mobilePortfolio = document.getElementById("mobile-portfolio");
  const mobileSafari = document.getElementById("mobile-safari");
  const mobileStickies = document.getElementById("mobile-stickies");

  mobilePortfolio.addEventListener("click", displayPortfolio);
  mobileSafari.addEventListener("click", displaySafari);
  mobileStickies.addEventListener("click", displayStickies);
});
