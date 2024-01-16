import React from 'react';
import "./Blog.css"
// import blog from "../assets/blog.png"
const Blog = () => {
    return (
        <div>
            <h1 className='blogg'>Our Blog</h1>
            <div className='total'>
                <div className='bigimg'>
                    <p className='bigimgcol'>Basic amenities needed for comfortable Villas</p>
                </div>
                <div className='box1'>
                    <p className='box1col'>Compact and Efficient,preferred <br></br> for students.</p>
                </div>
                <div className='box2'>
                    <p className='box2col'>Unique layout plans and luxury <br></br>amenities</p>
                </div>
                <div className='total2'>
                    <div className='box3'>
                        <p className='box3col'> Duplex and stylish, independent house</p>
                    </div>
                    <div className='box4'>
                        <p className='box4col'>Attraction furnished villa surrounded <br></br>by a canopy of leaves</p>
                    </div>
                </div>
            </div>
            <div className="enddd">
                   <h1 className='enddd'>dummy</h1>
                </div>
        </div>


    );
}

export default Blog;