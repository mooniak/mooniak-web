import '../App.css';

const onScroll = (headerHeight) => {
  const normalNav = document.getElementById('mainnav');
  const hiddenText = document.getElementById('hiddenText');

  const { hash, pathname } = window.location;

  if (hash || (!hash && pathname === '/')) {
    // 60% of the header then css change
    if ((headerHeight * 0.4 < window.scrollY)) {
      normalNav.classList.add('nav-visible');
    } else {
      normalNav.classList.remove('nav-visible');
    }

    if ((headerHeight * 0.6 < window.scrollY)) {
      hiddenText.classList.add('nav-text-visible');
    } else {
      hiddenText.classList.remove('nav-text-visible');
    }
  } else {
    // normalNav.classList.add('nav-visible');
    // hiddenText.classList.add('nav-text-visible');
  }
};

export default onScroll;
