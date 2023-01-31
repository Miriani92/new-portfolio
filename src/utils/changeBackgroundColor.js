export const changeBackgroundColor = () => {
  let scrollFromTop = window.scrollY;
  console.log(scrollFromTop);
  if (scrollFromTop > 0 && scrollFromTop < 200) {
    document.body.style.backgroundColor = "#f6f3f3";
  }

  if (scrollFromTop > 200 && scrollFromTop < 2600) {
    document.body.style.backgroundColor = "#dad7d7";
  }
  if (scrollFromTop > 2600) {
    document.body.style.backgroundColor = "#f6f3f3";
  }
};
