import axios from 'axios';
import i18next, { t } from 'i18next';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import BlogCard from '../../Components/BlogPage/BlogCard';

const SingleBlog = () => {
  const [blogs, setBlogs] = useState();
  const [error, setError] = useState();
  const { blogid } = useParams()
  const lang = i18next.language;
  const singleBlog = blogs?.filter((i) => i.id === Number(blogid))

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://dashboard.almoyaedgroup.com/api/Blogs', {
          headers: {
            'lang': lang,
          },
        });
        setBlogs(response?.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className='container'>
      {
        singleBlog?.map((i) => (
          <div key={i.id} className='px-10'>
            <img src={i?.image} alt='dfsfsd' className='mx-auto w-[75%] rounded-lg rounded-t-none' />

            <h3 className='font-bold mt-5 mb-5'>{i.title}</h3>
            <p className='text-[#4E4E4E]' dangerouslySetInnerHTML={{ __html: i.description }} />

            <div className="flex flex-wrap gap-3 mt-10">
              {i.keywords.map((k) => (
                <Link
                  to={ `/search/${k}`}
                  key={k}
                  className="px-5 py-1 bg-white border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 hover:text-blue-700 transition duration-300"
                >
                  {k}
                </Link>
              ))}
            </div>

          </div>
        ))
      }
      <div className="my-[70px] md:my-[50px] px-4 md:px-8 flex flex-col gap-12">
        <h2 className="mx-auto font-bold">{t("moreBlogs")}</h2>
        <div className="w-full flex flex-col gap-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs?.slice(0, 3)?.map((item) => (
              <div key={item?.id} className="col-span-1 shadow-md rounded">
                <Link to={`/blog/${item?.id}`}>
                  <BlogCard
                    img={item?.image}
                    title={item?.title}
                    des={item?.description}
                    date={item?.date}
                  />
                </Link>
              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  )
}

export default SingleBlog