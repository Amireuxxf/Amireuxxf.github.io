var posts=["posts/b7e07608/","posts/7b72b0de/","posts/9b28f329/","posts/4a098468/","posts/66f81538/","posts/7d637b24/","posts/4a17b156/","posts/4dbbe0bc/","posts/ddfda2a8/","posts/a60727c/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};