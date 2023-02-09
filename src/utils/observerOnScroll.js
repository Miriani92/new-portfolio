export const animateOnScroll = (element, className) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.className = className;
      }
    });
  });
  observer.observe(element);
};
