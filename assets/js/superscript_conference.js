document.addEventListener('DOMContentLoaded', function() {
    // Target elements specifically on the Talks page
    const conferenceElements = document.querySelectorAll('.conference-name-link, .conference-name');
    
    conferenceElements.forEach(element => {
        const regex = /(\d+)(st|nd|rd|th|e|er)\b/g;
        
        if (!element.textContent.match(regex)) return;
        
        const originalColor = window.getComputedStyle(element).color;
        const temp = document.createElement('div');
        temp.innerHTML = element.innerHTML;
        
        const walkNodes = (node) => {
            if (node.nodeType === 3) { // Text node
                const newText = node.textContent.replace(regex, (match, number, suffix) => {
                    return `${number}<sup class="conference-sup">${suffix}</sup>`;
                });
                
                if (newText !== node.textContent) {
                    const span = document.createElement('span');
                    span.innerHTML = newText;
                    
                    // Check if parent or ancestor elements have italic styling
                    let currentNode = node.parentNode;
                    let isItalicized = false;
                    
                    while (currentNode && currentNode !== element) {
                        const style = window.getComputedStyle(currentNode);
                        if (style.fontStyle === 'italic' || 
                            currentNode.tagName === 'I' || 
                            currentNode.tagName === 'EM') {
                            isItalicized = true;
                            break;
                        }
                        currentNode = currentNode.parentNode;
                    }
                    
                    // Apply italic styling if needed
                    if (isItalicized) {
                        span.style.fontStyle = 'italic';
                        span.querySelectorAll('sup').forEach(sup => {
                            sup.style.fontStyle = 'italic';
                        });
                    }
                    
                    if (element.classList.contains('conference-name-link')) {
                        span.style.color = 'inherit';
                    }
                    
                    node.parentNode.replaceChild(span, node);
                }
            } else {
                Array.from(node.childNodes).forEach(walkNodes);
            }
        };
        
        walkNodes(temp);
        element.innerHTML = temp.innerHTML;
    });
});

const style = document.createElement('style');
style.textContent = `
    .conference-name-link sup.conference-sup,
    .conference-name sup.conference-sup {
        font-style: inherit;
        display: inline;
        vertical-align: super;
        font-size: 0.7em;
        line-height: 0;
        position: relative;
        margin: 0;
        padding: 0;
        top: -0.2em;
        color: inherit;
    }
`;
document.head.appendChild(style);