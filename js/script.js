const outputTime = () => {
  const options = { weekday: "short", hour: "numeric", minute: "numeric" };
  let dateTime = new Date();

  document.getElementById("time").innerHTML = dateTime.toLocaleDateString(
    "en-US",
    options
  );
  setTimeout(outputTime, 1);
};

outputTime();
