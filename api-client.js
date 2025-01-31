const axios = require('axios');

// Function to fetch posts from JSONPlaceholder
async function fetchPosts() {
    try {
        // Get first 5 posts
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
        
        console.log('\n=== Posts from API ===');
        response.data.forEach(post => {
            console.log(`\nPost #${post.id}`);
            console.log('Title:', post.title);
            console.log('Body:', post.body);
            console.log('------------------------');
        });

        // Some API response analysis
        console.log('\n=== API Response Analysis ===');
        console.log('Status:', response.status);
        console.log('Number of posts:', response.data.length);
        console.log('Headers:', response.headers);

    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Execute the function
fetchPosts();