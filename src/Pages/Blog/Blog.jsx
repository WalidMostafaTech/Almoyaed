import axios from "axios";
import i18next, { t } from "i18next";
import { useEffect, useState } from "react";
import BlogCard from "../../Components/BlogPage/BlogCard";
import { Link } from "react-router-dom";

const Blog = () => {
    const [blogs, setBlogs] = useState();
    const [error, setError] = useState();
    const lang = i18next.language;

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
        <div className="my-[70px] md:my-[120px] px-4 md:px-8 flex flex-col gap-12">
            <h2 className="mx-auto font-bold">{t("blog")}</h2>
            <div className="w-full flex flex-col gap-10">
                <div className="md:container px-3 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs?.map((item) => (
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
    );
};

export default Blog;
