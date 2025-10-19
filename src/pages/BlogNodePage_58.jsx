import { useState, useEffect } from 'react';

// import blogData_xx from '../assets/data/blogData.json';
import Blog_58 from '../components/Blog_58';

const api_url = 'http://localhost:5000/api/blog_58';

const BlogNodePage_58 = () => {
  const [name, setName] = useState('clw');
  const [id, setId] = useState(213410458);
  const [blogs_58, setBlogs_58] = useState([]);

  const fetchBlogFromNodeServer = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('blogs', data);
      setBlogs_58(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogFromNodeServer();
  }, []);

  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from Node -- {name}, {id},{' '}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs_58.map((item) => {
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

export default BlogNodePage_58;
