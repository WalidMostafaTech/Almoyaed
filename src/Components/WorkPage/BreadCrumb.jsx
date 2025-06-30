import { ChevronLeft, House } from "lucide-react";
import { Link } from "react-router-dom"

const BreadCrumb = ({projectCategory}) => {
    const breadcrumbItems = [
        { name: <House />, link: '/' },
        { name: 'اهم الاعمال', link: '/Works' },
        { name: 'مصاعد كهربائية', link: null }, // No link for the current page
    ];
    
    return (
        <>
            <nav className="flex mb-4" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    {breadcrumbItems.map((item, index) => (
                        <li key={index} className="inline-flex items-center text-[#000000] font-semibold">
                            {index > 0 && <span className="mx-2 text-gray-400">
                                <ChevronLeft />
                            </span>}
                            {item.link ? (
                                <Link to={item.link} className="text-gray-700">
                                    {item.name}
                                </Link>
                            ) : (
                                <span className="text-[#715B5C] font-bold">{projectCategory}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav >
        </>
    )
}

export default BreadCrumb