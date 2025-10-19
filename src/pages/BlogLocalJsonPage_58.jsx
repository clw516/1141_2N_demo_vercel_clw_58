import { useState } from 'react';

import blogData_xx from '../assets/data/blogData.json';
import Blog_58 from '../components/Blog_58';

const BlogLocalJsonPage_58 = () => {
  const [name, setName] = useState('clw');
  const [id, setId] = useState(213410458);
  const [blogs_xx, setBlogs_58] = useState(blogData_xx);
  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>blogs from local json -- {name}, 213410458 </h2>
        </div>
        <div className='blogs-center'>
          {blogData_xx.map((item) => {
            const { id, title, descrip, category, img } = item;
            return (
              <Blog_58
                key={id}
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={img}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BlogLocalJsonPage_58;
