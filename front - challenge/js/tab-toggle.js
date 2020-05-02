let width = screen.width;

function showTabContent(e, index, tabContents, tabTitles, tabHighlights) {
  e.preventDefault();
  tabContents.forEach(c => {
    c.style.display = 'none';
  });
  tabTitles.forEach(t => {
    t.style.color = '#9194a1';
  });
  tabHighlights.forEach(h => {
    h.style.display = 'none';
    h.style.width = '0%';
  });
  tabContents[index].style.display = 'flex';
  tabTitles[index].style.color = '#000';
  tabHighlights[index].style.display = 'flex';
  tabHighlights[index].style.animationName = 'extend';
  width <= 768 ?
    tabHighlights[index].style.width = '50%' :
    tabHighlights[index].style.width = '100%';
}

function checkFirstTab(index, tabContent, tabTitle, tabHighlight) {
  if (index === 0) {
    tabContent.style.display = 'flex';
    tabTitle.style.color = '#000';
    tabHighlight.style.display = 'flex';
    width <= 768 ?
      tabHighlights[index].style.width = '50%' :
      tabHighlights[index].style.width = '100%';
  } else {
    tabContent.style.display = 'none';
  }
}

let tabContents = [];
let tabTitles = [];
let tabHighlights = [];

for (let index = 0; index < 3; index++) {
  let tab = document.getElementById('tab' + index);
  let tabContent = document.getElementById('tab-content' + index);
  tabContents.push(tabContent);
  let tabTitle = document.getElementById('tab-title' + index);
  tabTitles.push(tabTitle);
  let tabHighlight = document.getElementById('tab-highlight' + index);
  tabHighlights.push(tabHighlight);
  checkFirstTab(index, tabContent, tabTitle, tabHighlight);
  tab.addEventListener('click', function (e) {
    showTabContent(e, index, tabContents, tabTitles, tabHighlights);
  });
}