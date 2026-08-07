document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.querySelector('.demos-overlay');
  var backBtn = document.querySelector('.back-btn');
  var openHash = '#demoOverlay';

  function openOverlay() {
    overlay.classList.remove('closing');
    document.body.classList.add('demo-open');
  }

  function closeOverlay() {
    if (!document.body.classList.contains('demo-open') && !overlay.classList.contains('closing')) {
      return;
    }

    if (location.hash === openHash) {
      history.replaceState(null, '', location.pathname + location.search);
    }

    overlay.classList.add('closing');
    document.body.classList.remove('demo-open');
  }

  overlay.addEventListener('transitionend', function (event) {
    if (event.target !== overlay || event.propertyName !== 'transform') {
      return;
    }
    if (overlay.classList.contains('closing')) {
      overlay.classList.remove('closing');
    }
  });

  backBtn.addEventListener('click', function (event) {
    event.preventDefault();
    closeOverlay();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeOverlay();
    }
  });

  window.addEventListener('hashchange', function () {
    if (location.hash === openHash) {
      openOverlay();
    } else {
      closeOverlay();
    }
  });

  if (location.hash === openHash) {
    openOverlay();
  }
});
