let switcherLis = document.querySelectorAll("ul.shuffle li");
let images = document.querySelectorAll(".row .box");

switcherLis.forEach((li) => {
  li.addEventListener("click", () => {
    switcherLis.forEach((btn) => btn.classList.remove("active"));
    li.classList.add("active");
    images.forEach((img) => {
      img.style.display = "none";
    });

    const filterValue = li.getAttribute("data-filter");
    if (filterValue === ".all") {
      images.forEach((img) => {
        img.style.display = "block";
      });
    } else {
      document.querySelectorAll(filterValue).forEach((el) => {
        el.style.display = "block";
      });
    }
  });
});

