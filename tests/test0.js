console.log("Clearing local storage");
for (var k in localStorage)
  if (localStorage.hasOwnProperty(k))
    localStorage.removeItem(k);

