/* Year-end Virtual Insider Session: page behavior.
   Covers the header button, the mobile bar, scroll-and-focus, the thank-you state (called by the HubSpot embed's onFormSubmitted) and the snowfall markup.
   No libraries. The snowflake drift runs in CSS. */
(function () {
  'use strict';

  var body = document.body;
  var card = document.getElementById('register');
  var formHost = document.getElementById('vis-form');
  var thanks = document.getElementById('vis-thanks');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* Header button and mobile bar: show while the form card is out of view. */
  if (card && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      var visible = entries[0].isIntersecting;
      body.classList.toggle('form-offscreen', !visible);
    }, { threshold: 0.1 });
    io.observe(card);
  } else {
    body.classList.add('form-offscreen');
  }

  /* Every "Save your seat" link scrolls to the form card, then focuses the first field. */
  function firstField() {
    return formHost ? formHost.querySelector('input, select, textarea') : null;
  }

  function goToForm(event) {
    if (!card) { return; }
    event.preventDefault();
    var behavior = reduceMotion.matches ? 'auto' : 'smooth';
    /* window.scrollTo, not scrollIntoView: the hero is overflow hidden with decorations past its edges, and scrollIntoView would scroll the hero's own content too. */
    var margin = parseFloat(window.getComputedStyle(card).scrollMarginTop) || 0;
    var top = card.getBoundingClientRect().top + window.pageYOffset - margin;
    window.scrollTo({ top: top, behavior: behavior });
    var field = firstField();
    var target = field || (thanks && !thanks.hidden ? thanks : card);
    try { target.focus({ preventScroll: true }); } catch (e) { target.focus(); }
    if (history.replaceState) { history.replaceState(null, '', '#register'); }
  }

  var links = document.querySelectorAll('a[href="#register"]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', goToForm);
  }

  /* Slow snowfall behind the hero, the Q&A band and the closing band. Columns: left %, size px, duration s, delay s, opacity, rest %, variant. */
  var SNOW = {
    '.hero': [
      [4, 12, 34, -6, 0.45, 22, 'a'], [11, 8, 42, -19, 0.3, 61, 'c'], [19, 16, 28, -11, 0.4, 40, 'b'],
      [27, 10, 38, -2, 0.35, 78, 'c'], [34, 14, 31, -24, 0.45, 15, 'a'], [42, 8, 44, -9, 0.3, 52, 'c'],
      [49, 12, 36, -15, 0.4, 88, 'b'], [57, 18, 26, -4, 0.35, 33, 'a'], [64, 10, 40, -27, 0.3, 69, 'c'],
      [71, 14, 30, -13, 0.45, 48, 'b'], [78, 8, 46, -21, 0.3, 12, 'c'], [85, 16, 29, -7, 0.4, 82, 'a'],
      [91, 10, 37, -17, 0.35, 27, 'c'], [96, 12, 33, -30, 0.4, 58, 'b'], [15, 6, 48, -35, 0.25, 94, 'c'],
      [62, 6, 50, -41, 0.25, 6, 'c']
    ],
    '.qa-band': [
      [3, 10, 32, -5, 0.4, 24, 'a'], [12, 8, 40, -18, 0.3, 66, 'c'], [22, 14, 27, -9, 0.35, 44, 'b'],
      [33, 8, 44, -26, 0.3, 80, 'c'], [41, 12, 35, -12, 0.4, 14, 'a'], [52, 8, 38, -31, 0.3, 56, 'c'],
      [63, 16, 29, -7, 0.35, 36, 'b'], [74, 8, 46, -22, 0.3, 90, 'c'], [88, 12, 33, -15, 0.4, 20, 'a'],
      [96, 8, 41, -37, 0.3, 72, 'c']
    ],
    '.closing': [
      [5, 10, 30, -8, 0.4, 30, 'a'], [16, 8, 38, -20, 0.3, 70, 'c'], [30, 12, 26, -3, 0.35, 50, 'b'],
      [45, 8, 42, -14, 0.3, 18, 'c'], [60, 14, 28, -25, 0.4, 84, 'a'], [73, 8, 36, -11, 0.3, 42, 'c'],
      [86, 12, 32, -29, 0.35, 64, 'b'], [95, 10, 40, -17, 0.3, 10, 'c']
    ]
  };

  Object.keys(SNOW).forEach(function (sel) {
    var host = document.querySelector(sel);
    if (!host) { return; }
    var wrap = document.createElement('div');
    wrap.className = 'snowfall';
    wrap.setAttribute('aria-hidden', 'true');
    SNOW[sel].forEach(function (f) {
      var el = document.createElement('div');
      el.className = 'snow';
      el.style.setProperty('--x', f[0] + '%');
      el.style.setProperty('--s', f[1] + 'px');
      el.style.setProperty('--d', f[2] + 's');
      el.style.setProperty('--delay', f[3] + 's');
      el.style.setProperty('--o', f[4]);
      el.style.setProperty('--rest', f[5] + '%');
      el.innerHTML = '<svg><use href="#flake-' + f[6] + '"/></svg>';
      wrap.appendChild(el);
    });
    host.insertBefore(wrap, host.firstChild);
  });

  /* Thank-you state. HubSpot's onFormSubmitted calls window.visShowThanks. */
  function showThanks() {
    if (!formHost || !thanks) { return; }
    formHost.hidden = true;
    thanks.hidden = false;
    try { thanks.focus({ preventScroll: true }); } catch (e) { thanks.focus(); }
  }
  window.visShowThanks = showThanks;

})();
