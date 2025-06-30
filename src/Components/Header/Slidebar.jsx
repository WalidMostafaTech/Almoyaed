import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { X } from 'lucide-react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import WepSerivceApi from '../../_Service/Setting';

const Sidebar = () => {
    const { data } = WepSerivceApi();
    const logo1 = data?.team?.image;
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    const location = useLocation().pathname;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => setIsOpen(prev => !prev);
    const toggleLangDropdown = () => setIsLangDropdownOpen(prev => !prev);
    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false);
            setIsDropdownOpen(false);
            setIsLangDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsLangDropdownOpen(false);
    };

    return (
        <div className="relative" ref={sidebarRef}>
            <button className="p-4 text-black rounded" onClick={toggleSidebar}>
                {isOpen ? '' : <img className='w-[40px]' src={assets.slideIcon} alt="icon" />}
            </button>

            <div className={`fixed inset-0 w-[58%] md:w-[40%] bg-white text-black font-semibold transform transition-transform duration-300 lg:relative lg:translate-x-0 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col items-center text-center h-screen">
                    <img className='w-[150px] mt-5 ' loading='lazy' src={logo1} alt="logo" />
                    <div className='absolute right-5 top-5 opacity-40'>
                        {/* <X strokeWidth={3} onClick={() => setIsOpen(false)} /> */}
                    </div>
                    <nav className="flex-grow mt-2 flex items-center flex-col gap-5">
                        <ul className='block'>
                            <Link onClick={() => setIsOpen(false)} to="/" className={`${location === "/" ? "font-bold" : ""} p-4 block cursor-pointer mb-1 text-base`}>{t('home')}</Link>
                            <Link onClick={() => setIsOpen(false)} to="/about-us" className={`${location === "/about-us" ? "font-bold" : ""} p-4 block cursor-pointer mb-1 text-base`}>{t('about')}</Link>
                            <Link onClick={() => setIsOpen(false)} to="/services" className={`${location === "/services" ? "font-bold" : ""} p-4 block cursor-pointer mb-1 text-base`}>{t('services')}</Link>
                            <Link onClick={() => setIsOpen(false)} to="/works" className={`${location === "/works" ? "font-bold" : ""} p-4 block cursor-pointer mb-1 text-base`}>{t('works')}</Link>
                        </ul>
                        <div className="relative">
                            <div onClick={toggleLangDropdown} className="flex items-center gap-2 cursor-pointer">
                                <p>{i18n.language === 'ar' ? 'العربية' : 'English'}</p>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                                </svg>
                            </div>
                            {isLangDropdownOpen && (
                                <div className="absolute top-10 right-[-70%] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                    <ul className="py-2 text-sm text-gray-700">
                                        <li>
                                            <button
                                                onClick={() => changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}
                                                className="block w-full text-center px-4 py-2 text-black hover:bg-gray-100"
                                            >
                                                {i18n.language === 'ar' ? 'العربية' : 'English'}
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <Link to="/contact-us" className="text-md block mt-6">
                            <p className="bg-[#686465] hover:bg-[#B4B1B1] text-white font-bold px-14 py-3 rounded-sm">
                                اتصل بنا
                            </p>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
