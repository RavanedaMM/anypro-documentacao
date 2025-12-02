(function(){
  try {
    var links = document.querySelectorAll('.nav-links a');
    var path = window.location.pathname.replace(/\\/g,'/');
    var current = path.split('/').pop();
    links.forEach(function(link){
      var href = link.getAttribute('href');
      if (!href) return;
      var hrefFile = href.split('/').pop();
      if (hrefFile === current) {
        link.classList.add('active');
        link.setAttribute('aria-current','page');
      }
    });
  } catch(e) {
    // swallow errors
  }
})();