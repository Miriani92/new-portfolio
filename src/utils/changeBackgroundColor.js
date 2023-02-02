export const changeBackgroundColor = () => {
  let scrollFromTop = window.scrollY;
  if (scrollFromTop > 0 && scrollFromTop < 200) {
    document.body.style.backgroundColor = "#f6f3f3";
  }

  if (scrollFromTop > 200 && scrollFromTop < 2600) {
    document.body.style.backgroundColor = "#a8b2d1";
  }
  if (scrollFromTop > 2600) {
    document.body.style.backgroundColor = "#f6f3f3";
  }
};
