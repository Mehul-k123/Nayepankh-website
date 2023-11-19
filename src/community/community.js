document.addEventListener('DOMContentLoaded', function () {
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const reviewSection = document.getElementById('reviews');

    storedReviews.forEach(function (reviewText) {
        const newReview = document.createElement('div');
        newReview.className = 'review';
        newReview.innerHTML = reviewText;
        reviewSection.appendChild(newReview);
    });
});

function submitReview() {
    const username = document.getElementById('username').value;
    const review = document.getElementById('review').value;

    if (username && review) {
        const reviewSection = document.getElementById('reviews');
        
      
        const newReview = document.createElement('div');
        newReview.className = 'review';
        newReview.innerHTML = `<strong>${username}:</strong> ${review}`;

        
        reviewSection.appendChild(newReview);

      
        const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        storedReviews.push(newReview.innerHTML);
        localStorage.setItem('reviews', JSON.stringify(storedReviews));

        
        document.getElementById('username').value = '';
        document.getElementById('review').value = '';
    } else {
        alert('Please enter both your name and review.');
    }
}
