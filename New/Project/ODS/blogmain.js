document.addEventListener("DOMContentLoaded", function () {
    const blogPostsContainer = document.getElementById("blog-posts");

    // Sample data for blog posts (can be replaced with an API or CMS integration)
    const blogPosts = [
        {
            title: "Top SEO Strategies for 2025",
            date: "March 5, 2025",
            excerpt: "Stay ahead of the competition with these advanced SEO strategies to improve your website's visibility.",
            link: "blog1.html"
        },
        {
            title: "Boost Your PPC Campaigns with These Tips",
            date: "March 1, 2025",
            excerpt: "Learn expert tips to maximize your PPC campaign ROI and drive better results.",
            link: "blog2.html"
        },
        {
            title: "Content Marketing Trends in 2025",
            date: "February 20, 2025",
            excerpt: "Explore the latest trends in content marketing to stay relevant and engaging.",
            link: "blog3.html"
        }
    ];

    // Generate and display blog posts
    function displayBlogPosts() {
        blogPosts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("blog-card");

            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p class="blog-date">${post.date}</p>
                <p>${post.excerpt}</p>
                <a href="${post.link}" class="read-more">Read More</a>
            `;

            blogPostsContainer.appendChild(postElement);
        });
    }

    displayBlogPosts();
});
