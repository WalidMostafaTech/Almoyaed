import axios from 'axios';
import i18next from 'i18next';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BlogCard from '../../Components/BlogPage/BlogCard';

const Search = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();
    const lang = i18next.language;
    const { id } = useParams();  // Get the keyword (id) from the URL params
    console.log(query);

    // Fetch blogs data from the API
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('https://dashboard.almoyaedgroup.com/api/Blogs', {
                    headers: {
                        'lang': lang,
                    },
                });
                setBlogs(response.data);
            } catch (err) {
                console.log('Error fetching blogs:', err.message);
            }
        };
        fetchBlogs();
    }, [lang]); 
    const handleSubmit = () => {
        navigate(`/search/${query}`)
    }
    useEffect(() => {
        if (id) {
            setQuery(id);
        }
    }, [id]);
    useEffect(() => {
        let filteredBlogs = blogs;
        if (id) {
            filteredBlogs = blogs.filter(item =>
                item.keywords.some(keyword => keyword.toLowerCase() === id.toLowerCase())
            );
        }

        setResults(filteredBlogs); 
    }, [id, query, blogs]); 

    return (
        <div className="p-5">
            <div className="flex items-center gap-2 mb-5">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="بحث..."
                    className="px-5 py-2 text-sm rounded-lg border outline-none w-full max-w-sm"
                />
                <button
                    onClick={handleSubmit}
                    className="bg-primary text-white rounded-lg px-5 py-[6px] flex items-center"
                >
                    بحث
                </button>
            </div>

            <div className="mt-10">
                {results.length === 0 ? (
                    <p className="text-center text-gray-500">لا توجد نتائج</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {results.map((result) => (
                            <div key={result?.id} className="shadow-md rounded">
                                <Link to={`/blog/${result?.id}`}>
                                    <BlogCard
                                        img={result?.image}
                                        title={result?.title}
                                        des={result?.description}
                                        date={result?.date}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>

                )}
            </div>
        </div>
    );
};

export default Search;
