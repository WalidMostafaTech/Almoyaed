import { Mail, Phone, User } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const ContactUsForm = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(formData.email)) {
            toast.error(t('invalid_email_message'));
            return;
        }

        try {
            const response = await axios.post('https://dashboard.almoyaedgroup.com/api/sendContact', formData,
                {
                    headers: {
                        lang: "ar",
                    },
                }
            );

            if (response.data.status === 'success') {
                toast.success(t('success_message'));
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                toast.error(t('error_message'));
            }
        } catch (error) {
            toast.error(t('error_sending') + ' ' + error.message);
        }
    };

    return (
        <section>
            <ToastContainer />
            <form className="w-full md:max-w-sm p-5 mx-auto md:p-0" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="name" className="block text-[#894413] mb-2 text-sm font-medium dark:text-white">
                        {t('name_label')}
                    </label>
                    <div className="relative">
                        <div className="absolute text-[#894413] inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                            <User size={14} />
                        </div>
                        <input
                            name="name"
                            placeholder={t('name_placeholder')}
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-gray-50 placeholder-[#B3B3B3] font-light border ps-10 py-3 border-[#894413] text-sm rounded-lg focus:ring-[#894413] focus:border-[#894413] block w-full p-2.5"
                            required
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="phone" className="block text-[#894413] mb-2 text-sm font-medium dark:text-white">
                        {t('phone_label')}
                    </label>
                    <div className="relative">
                        <div className="text-[#894413] absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                            <Phone size={14} />
                        </div>
                        <input
                            name="phone"
                            placeholder={t('phone_placeholder')}
                            type="number"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-gray-50 placeholder-[#B3B3B3] font-light border ps-10 py-3 border-[#894413] text-sm rounded-lg focus:ring-[#894413] focus:border-[#894413] block w-full p-2.5"
                            required
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block text-[#894413] mb-2 text-sm font-medium dark:text-white">
                        {t('email_label')}
                    </label>
                    <div className="relative">
                        <div className="absolute text-[#894413] inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                            <Mail size={14} />
                        </div>
                        <input
                            name="email"
                            placeholder={t('email_placeholder')}
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-gray-50 placeholder-[#B3B3B3] font-light border ps-10 py-3 border-[#894413] text-sm rounded-lg focus:ring-[#894413] focus:border-[#894413] block w-full p-2.5"
                            required
                        />
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="message" className="block text-[#894413] mb-2 text-sm font-medium dark:text-white">
                        {t('message_label')}
                    </label>
                    <textarea
                        name="message"
                        placeholder={t('message_placeholder')}
                        id="message"
                        rows={8}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-gray-50 placeholder-[#B3B3B3] font-light border ps-10 py-3 border-[#894413] text-sm rounded-lg focus:ring-[#894413] focus:border-[#894413] block w-full p-2.5"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-[220px] p-3 rounded-[4px] text-white bg-[#894413] font-bold max-w-full hover:bg-hoverPrimary"
                >
                    {t('submit_button')}
                </button>
            </form>
        </section>
    );
}

export default ContactUsForm;
