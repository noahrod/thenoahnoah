;(function() {
    console.log('Search script loaded');
    var searchIndex = null;
    var searchResults = document.getElementById('search-results');
    
    // Only run on pages with the search results container
    if (!searchResults) {
        console.log('Search results container not found - not on search page?');
        return;
    }
    
    console.log('Search results container found');

    var urlParams = new URLSearchParams(window.location.search);
    var query = urlParams.get('s') || urlParams.get('q');
    
    console.log('Search query:', query);

    var searchInput = document.querySelector('.search-field');
    if (query && searchInput) {
        searchInput.value = query;
    }

    if (!query) {
        searchResults.innerHTML = '<p>Please enter a search term.</p>';
        return;
    }
    
    searchResults.innerHTML = '<p>Loading search results...</p>';

    // Load search index
    var indexUrl = '/index.json';
    if (typeof hugoBaseUrl !== 'undefined') {
        indexUrl = hugoBaseUrl + 'index.json';
    }
    
    fetch(indexUrl)
        .then(function(response) {
            console.log('Index fetch response:', response.status);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function(data) {
            console.log('Search index loaded, items:', data.length);
            searchIndex = data;
            performSearch(query);
        })
        .catch(function(err) {
            console.error('Error loading search index:', err);
            searchResults.innerHTML = '<p>Error loading search index: ' + err.message + '</p>';
        });
    
    function performSearch(query) {
        console.log('Performing search for:', query);
        if (!searchIndex) {
            console.error('Search index not loaded yet');
            return;
        }
        
        var results = [];
        var lowerQuery = query.toLowerCase();
        
        searchIndex.forEach(function(page) {
            var title = page.title ? page.title.toLowerCase() : '';
            var content = page.content ? page.content.toLowerCase() : '';
            var summary = page.summary ? page.summary.toLowerCase() : '';
            
            if (title.indexOf(lowerQuery) !== -1 || 
                content.indexOf(lowerQuery) !== -1 || 
                summary.indexOf(lowerQuery) !== -1) {
                results.push(page);
            }
        });
        
        console.log('Results found:', results.length);

        if (results.length === 0) {
            searchResults.innerHTML = '<p>No results found for "' + escapeHtml(query) + '"</p>';
        } else {
            var html = '<h3 class="page-title">Found ' + results.length + ' result(s) for "' + escapeHtml(query) + '"</h3>';
            
            results.forEach(function(result) {
                var summary = result.summary || '';
                if (summary.length > 200) {
                    summary = summary.substring(0, 200) + '...';
                }

                var dateStr = '';
                if (result.date) {
                    try {
                        var date = new Date(result.date);
                        var options = { year: 'numeric', month: 'long', day: 'numeric' };
                        dateStr = date.toLocaleDateString('en-US', options);
                    } catch(e) {
                         dateStr = result.date;
                    }
                }

                html += '<article class="post type-post">';
                html += '<div class="card card-blog-post">';
                html += '<div class="card_body">';
                html += '<div>';
                
                html += '<h2 class="card_title"><a href="' + result.permalink + '">' + result.title + '</a></h2>';
                
                if (dateStr) {
                    html += '<div class="entry-meta">';
                    html += '<span class="posted-on"><i class="fa fa-calendar"></i> <a href="' + result.permalink + '"><time>' + dateStr + '</time></a></span>';
                    html += '</div>';
                }

                html += '<p>' + summary + '</p>';
                html += '<a href="' + result.permalink + '" class="btn btn-primary read-more-btn">Read More</a>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '</article>';
            });
            
            searchResults.innerHTML = html;
        }
    }
    
    function escapeHtml(text) {
        var map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    }
})();
