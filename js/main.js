var trigger = document.querySelector('.mobile-trigger');
var root = document.documentElement;
if (trigger) {
  trigger.addEventListener('click', function () {
    root.classList.toggle('mobile-open');
    root.classList.remove('sidebar-open');
  });
}

var sidebartrigger = document.querySelector('.sidebar-trigger');
var sidebartriggerclose = document.querySelector('.trigger');
if (sidebartrigger) {
  sidebartrigger.addEventListener('click', function () {
    root.classList.add('sidebar-open');
    root.classList.remove('mobile-open');
  });
}

if (sidebartriggerclose) {
  sidebartriggerclose.addEventListener('click', function () {
    root.classList.remove('sidebar-open');
    root.classList.remove('mobile-open');
  });
}