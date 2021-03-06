const panels = document.querySelectorAll('.panel');

const removeActiveClasses = (panels) => {
  panels.forEach((panel) => {
    if (panel.classList.contains('active')) {
      panel.classList.remove('active');
    }
  });
};

const addExpandEvent = (panels) => {
  panels.forEach((panel) => {
    panel.addEventListener('click', () => {
      removeActiveClasses(panels);
      panel.classList.add('active');
    });
  });
};

addExpandEvent(panels);
