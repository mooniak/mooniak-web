const onScroll = (headerHeight) => {
  const navWithBg = document.getElementById('mainnav');
  const navLogoWithBg = document.getElementById('mainnav-logo');
  const { hash, pathname } = window.location;

  if (hash || (!hash && pathname === '/')) {
    // 60% of the header then css change
    if ((headerHeight * 0.6 < window.scrollY)) {
      navWithBg.classList.add('nav-with-bg');
      if (navLogoWithBg) { navLogoWithBg.classList.add('nav-logo-with-bg'); }
    } else {
      navWithBg.classList.remove('nav-with-bg');
      if (navLogoWithBg) { navLogoWithBg.classList.remove('nav-logo-with-bg'); }
    }
  } else {
    navWithBg.classList.add('nav-with-bg');
    if (navLogoWithBg) { navLogoWithBg.classList.add('nav-logo-with-bg'); }
  }
};

export default onScroll;
