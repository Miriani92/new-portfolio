export const animateOnScroll = (element, className, color) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (color) document.body.style.backgroundColor = color;
        if (className) entry.target.className = className;
      }
    });
  });
  observer.observe(element);
};
