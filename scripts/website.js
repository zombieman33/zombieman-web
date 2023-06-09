var dropdownContent = document.getElementById('dropdownContent');
var searchInput = document.getElementById('searchInput');
var searchEngineBtn = document.getElementById('searchEngineBtn');

function toggleDropdown() {
  dropdownContent.classList.toggle('show');
}

function setSearchEngine(searchUrl, searchEngine) {
  searchInput.dataset.searchUrl = searchUrl;
  searchEngineBtn.textContent = searchEngine;
  toggleDropdown();
}

searchInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    search();
  }
});

function search() {
  var query = searchInput.value.trim();
  var searchUrl = searchInput.dataset.searchUrl || 'https://www.google.com/search?q=';
  if (query !== '') {
    var domainRegex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})(\/.*)?$/;
    var match = query.match(domainRegex);
    if (match) {
      var url = (match[1] ? '' : 'https://') + match[2] + match[3] + (match[4] || '');
      window.open(url, '_blank');
    } else {
      searchUrl += encodeURIComponent(query);
      window.open(searchUrl, '_blank');
    }
  }
}
function toggleGamesDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle('show');
}
