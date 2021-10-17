const tabsContent = document.querySelectorAll('.tabs__content');

function showAll() {
  tabsContent.forEach(tab => tab.classList.add(`tabs__content_visible`));
}
function hideAll() {
  tabsContent.forEach(tab => tab.classList.remove(`tabs__content_visible`));
}

document.querySelectorAll(".tabs__input").forEach(tab => {
  tab.addEventListener('click', function(e) {
    const el = e.target;
    if (el.id === 'all-tab') {
      showAll()
    } else {
      hideAll();
      document
        .querySelector(`.tabs__content_${el.id}`)
        .classList
        .add(`tabs__content_visible`);
    }
  });
});

showAll();