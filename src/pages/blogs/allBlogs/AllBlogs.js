import React, { useEffect, useState } from 'react';
import './allBlog.css';

const AllBlogs = () => {

    const [blogData, setBlogData] = useState([]);
    
    useEffect(() => {
        fetch('/blogData.json')
        .then((response) => response.json())
        .then((data) => setBlogData(data))
        .catch((error) => console.log(error.message))
    },[])

    return (
        <section id="all-blogs-section">
            <div className="container">
                <div className="all-blogs-section-title">
                    <h2>Our <span>Blogs</span></h2>
                    <hr />
                </div>
                <div className="all-blogs-container">
                    {
                       blogData.map((data) => (
                           <div className="single-blog" key={data.id}>
                               <div className="single-blog-image">
                                   <img src={data.blogImage} alt={data.blogTitle.slice(0,10)} />
                               </div>
                               <div className="single-blog-into">
                                   <div className="container-fluid">
                                       <div className="create-time-and-person">
                                           <span> <i className="fas fa-calendar" /> {data.createDate}</span>
                                           <span><i className="fas fa-user" /> {data.createBy}</span>
                                       </div>
                                       <article className="blog-text">
                                            <div className="single-blog-title">
                                               <h2>{data.blogTitle}</h2>
                                            </div>
                                            <div className="single-blog-details">
                                                <p>{data.blogDetails}</p>
                                            </div>
                                       </article>
                                       <div className="read-more-btn">
                                           <button>Read More</button>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       )) 
                    }
                </div>
            </div>
        </section>
    );
};

export default AllBlogs;