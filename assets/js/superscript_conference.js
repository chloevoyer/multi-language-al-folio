document.addEventListener('DOMContentLoaded', function() {
    // Get all conference names/titles
    const conferenceElements = document.querySelectorAll('.conference-name-link, .conference-name');
    
    conferenceElements.forEach(element => {
        // Regular expression to match numbers followed by ordinal suffixes
        const regex = /(\d+)(st|nd|rd|th|e|er)\b/g;
        
        // Replace text content while preserving any HTML
        element.innerHTML = element.innerHTML.replace(regex, function(match, number, suffix) {
            return number + '<sup>' + suffix + '</sup>';
        });
    });
});