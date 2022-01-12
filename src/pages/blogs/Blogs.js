import React from 'react';
import AllBlogs from './allBlogs/AllBlogs';
import BlogPageHeader from './blogPageHeader/BlogPageHeader';

const Blogs = () => {
    return (
        <section id="blog-page">
            <BlogPageHeader/>
            <AllBlogs/>
        </section>
    );
};

export default Blogs;