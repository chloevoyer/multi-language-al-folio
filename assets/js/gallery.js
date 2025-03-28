document.addEventListener('DOMContentLoaded', function() {
    // Gallery functionality
    function setupGalleries() {
      // Gallery button click handler
      document.querySelectorAll('a.gallery').forEach(function(btn) {
        btn.addEventListener('click', function() {
          const galleryContainer = this.closest('.links').parentElement.querySelector('.gallery-container');
          if (galleryContainer) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling when gallery is open
            galleryContainer.classList.remove('hidden');
          }
        });
      });
  
      // Close gallery when clicking the close button
      document.querySelectorAll('.gallery-close').forEach(function(closeBtn) {
        closeBtn.addEventListener('click', function() {
          document.body.style.overflow = ''; // Restore scrolling
          this.closest('.gallery-container').classList.add('hidden');
        });
      });
  
      // Close gallery when clicking outside the gallery content
      document.querySelectorAll('.gallery-container').forEach(function(container) {
        container.addEventListener('click', function(e) {
          if (e.target === container) {
            document.body.style.overflow = ''; // Restore scrolling
            container.classList.add('hidden');
          }
        });
      });
      
      // Make sure gallery is responsive on window resize
      window.addEventListener('resize', function() {
        document.querySelectorAll('.gallery-container:not(.hidden)').forEach(function(gallery) {
          // You could adjust gallery dimensions here if needed
        });
      });
  
      // Handle gallery navigation
      document.querySelectorAll('.gallery-container').forEach(function(gallery) {
        const items = gallery.querySelectorAll('.gallery-item');
        const indicators = gallery.querySelectorAll('.gallery-indicator');
        const nextBtn = gallery.querySelector('.gallery-next');
        const prevBtn = gallery.querySelector('.gallery-prev');
        
        let currentIndex = 0;
        
        // Function to show a specific slide
        function showSlide(index) {
          // Handle index boundaries
          if (index < 0) index = items.length - 1;
          if (index >= items.length) index = 0;
          
          // Update current index
          currentIndex = index;
          
          // Update slides
          items.forEach((item, i) => {
            if (i === currentIndex) {
              item.classList.add('active');
            } else {
              item.classList.remove('active');
            }
          });
          
          // Update indicators
          indicators.forEach((indicator, i) => {
            if (i === currentIndex) {
              indicator.classList.add('active');
            } else {
              indicator.classList.remove('active');
            }
          });
        }
        
        // Next button click
        if (nextBtn) {
          nextBtn.addEventListener('click', function() {
            showSlide(currentIndex + 1);
          });
        }
        
        // Previous button click
        if (prevBtn) {
          prevBtn.addEventListener('click', function() {
            showSlide(currentIndex - 1);
          });
        }
        
        // Indicator clicks
        indicators.forEach(function(indicator, index) {
          indicator.addEventListener('click', function() {
            showSlide(index);
          });
        });
  
        // Keyboard navigation
        gallery.addEventListener('keydown', function(e) {
          if (e.key === 'ArrowRight') {
            showSlide(currentIndex + 1);
          } else if (e.key === 'ArrowLeft') {
            showSlide(currentIndex - 1);
          } else if (e.key === 'Escape') {
            document.body.style.overflow = ''; // Restore scrolling
            gallery.classList.add('hidden');
          }
        });
      });
    }
  
    // Initialize galleries
    setupGalleries();
  });
  