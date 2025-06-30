import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Slidebar from './Slidebar';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import WepSerivceApi from '../../_Service/Setting';
import failBackLogo from "/logo.png"
const Navbar = () => {

    const { data, loading, error } = WepSerivceApi();
    const logo = data?.team?.image

    const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const { t } = useTranslation();
    const toggleLangDropdown = () => {
        setIsLangDropdownOpen((prev) => !prev);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown-button") && !event.target.closest(".dropdown-menu")) {
                setIsDropdownOpen(false);
                setIsLangDropdownOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsLangDropdownOpen(false);
    };
    return (
        <nav className="md:container mx-auto p-4 py-3">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="w-40 p-2">
                    <Link to="/">
                        {logo ? <img loading='lazy' className="w-full h-full" src={logo} alt="logo" /> : <img loading='lazy' className="w-full h-full" src={failBackLogo} alt="logo" />}

                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center lg:gap-10 xl:gap-20 text-[#757575] font-medium ">
                    <Link className={`${location.pathname === "/" ? "active" : ''}`} to="/">{t('home')}</Link>
                    <Link className={`${location.pathname === "/about-us" ? "active" : ''}`} to="/about-us">{t('about')}</Link>
                    <Link className={`${location.pathname === "/services" ? "active" : ''}`} to="/services">{t('services')}</Link>
                    <Link className={`${location.pathname === "/works" ? "active" : ''}`} to="/works">{t('works')}</Link>
                    <Link className={`${location.pathname === "/blog" ? "active" : ''}`} to="/blog">{t('blog')}</Link>
                </div>

                {/* Language and Contact Button */}
                <div className="flex items-center gap-16">
                    {/* Language Selector */}
                    <div className="relative dropdown-button hidden lg:block">
                        <div onClick={toggleLangDropdown} className="flex items-center gap-2 cursor-pointer">
                            <p className="hidden sm:block">{i18n.language === 'ar' ? 'العربية' : 'English'}</p>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                            </svg>
                        </div>
                        {isLangDropdownOpen && (
                            <div className="absolute top-10 right-[-70%] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:divide-gray-600 dropdown-menu">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                    <li>
                                        {i18n.language === 'ar' ?
                                            <button
                                                onClick={() => changeLanguage('en')}
                                                className="block w-full text-center px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-[#686465] dark:hover:text-white"
                                            >
                                                English
                                            </button>
                                            :
                                            <button
                                                onClick={() => changeLanguage('ar')}
                                                className="block w-full text-center text-black px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#686465] dark:hover:text-white"
                                            >
                                                العربيه
                                            </button>
                                        }
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Contact Button */}
                    <div className="flex gap-5 items-center">
                        <Link to="/contact-us" className="hidden sm:block text-sm">
                            <p className="bg-[#686465] hover:bg-[#B4B1B1] text-white font-bold px-10 py-3 md:px-14 md:py-4 rounded-sm">
                                {t('contact')}
                            </p>
                        </Link>
                        <div className='lg:hidden'>
                            <Slidebar />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
