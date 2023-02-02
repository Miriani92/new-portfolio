export const changeBackgroundColor = () => {
  let scrollFromTop = window.scrollY;
  if (scrollFromTop > 0 && scrollFromTop < 200) {
    document.body.style.backgroundColor = "#f6f3f3";
  }

  if (scrollFromTop > 200 && scrollFromTop < 2600) {
    document.body.style.backgroundColor = "#8e8e8e";
  }
  if (scrollFromTop > 2600) {
    document.body.style.backgroundColor = "#f6f3f3";
  }
};
