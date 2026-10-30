(function () {
  'use strict';

  var API_BASE = '/umami-api/api';
  var SHARE_ID = 'ZAyggxA3OwwmB6Lg';
  var PREFIXES = ['/blog/', '/photography/', '/albums/', '/publications/'];
  var LIKE_EVENT = 'like';

  var path = location.pathname;
  var isPost = PREFIXES.some(function (p) { return path.indexOf(p) === 0 && path !== p; });
  var article = document.querySelector('article');
  if (!isPost || !article) return;
 
  var storageKey = 'liked:' + path;
  function hasLiked() { try { return localStorage.getItem(storageKey) === '1'; } catch (e) { return false; } }
  function setLiked() { try { localStorage.setItem(storageKey, '1'); } catch (e) {} }
 
  var tokenPromise = null;
  function getAuth() {
    if (!tokenPromise) {
      tokenPromise = fetch(API_BASE + '/share/' + encodeURIComponent(SHARE_ID))
        .then(function (r) { if (!r.ok) throw new Error('share ' + r.status); return r.json(); });
    }
    return tokenPromise;
  }
 
  function api(endpoint, params) {
    return getAuth().then(function (auth) {
      var qs = new URLSearchParams(Object.assign({ startAt: '0', endAt: String(Date.now()), path: path }, params || {}));
      return fetch(API_BASE + '/websites/' + auth.websiteId + '/' + endpoint + '?' + qs, {
        headers: { 'x-umami-share-token': auth.token, 'x-umami-share-context': '1' }
      }).then(function (r) { if (!r.ok) throw new Error(endpoint + ' ' + r.status); return r.json(); });
    });
  }
 
  // --- widget ---
  var bar = document.createElement('div');
  bar.style.cssText = 'display:flex;gap:12px;align-items:center;justify-content:flex-start;margin:0 0 8px 0;font-size:14px;color:rgba(255,255,255,0.75);';
  var views = document.createElement('span');
  views.textContent = '… views';
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.style.cssText = 'padding:6px 14px;border-radius:999px;border:0.5px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.06);color:inherit;cursor:pointer;font-size:14px;';
  bar.appendChild(views);
  bar.appendChild(btn);
  article.insertBefore(bar, article.firstChild);
 
  var likes = null;
  function renderLike() {
    var liked = hasLiked();
    btn.textContent = (liked ? '♥ Liked' : '♡ Like') + (likes === null ? '' : ' (' + likes + ')');
    btn.disabled = liked;
    btn.style.opacity = liked ? '0.7' : '1';
    btn.style.cursor = liked ? 'default' : 'pointer';
  }
  renderLike();
 
  function loadViews() {
    return api('stats').then(function (s) {
      var n = s && (s.pageviews && typeof s.pageviews === 'object' ? s.pageviews.value : s.pageviews);
      views.textContent = (n === undefined ? '?' : n) + ' views';
    }).catch(function () { views.textContent = ''; });
  }
 
  function loadLikes() {
    return api('metrics', { type: 'event' }).then(function (rows) {
      var row = (rows || []).filter(function (r) { return r.x === LIKE_EVENT; })[0];
      likes = row ? row.y : 0;
      renderLike();
    }).catch(function () { likes = null; renderLike(); });
  }
 
  btn.addEventListener('click', function () {
    if (hasLiked()) return;
    if (window.umami && typeof window.umami.track === 'function') {
      window.umami.track(LIKE_EVENT);
      setLiked();
      likes = (likes || 0) + 1;
      renderLike();
    }
  });
 
  loadViews();
  loadLikes();
})();
 