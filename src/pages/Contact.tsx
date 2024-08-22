import React, { useState } from 'react';
import Header from "../components/Header";
import { Boxes } from "../components/ui/background-boxes";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const showToast = (message: string, isSuccess: boolean) => {
        const toastElement = document.createElement('div');
        toastElement.classList.add(
            'fixed',
            'z-50',
            'top-4',
            'right-4',
            'px-4',
            'py-3',
            'rounded-md',
            'shadow-lg',
            'transition-all',
            'duration-300',
            isSuccess ? 'bg-green-500' : 'bg-red-500',
            'text-white'
        );
        toastElement.setAttribute('data-aos', 'fade-left');
        toastElement.textContent = message;

        document.body.appendChild(toastElement);

        setTimeout(() => {
            toastElement.classList.add('opacity-0');
            setTimeout(() => {
                toastElement.remove();
            }, 300);
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
            showErrorToast('All fields are required.');
            return;
        }

        try {
            setIsLoading(true);
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact/save`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            if (response.ok) {
                const data = await response.json();
                console.log('Response data:', data);
                showSuccessToast('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                console.error('Response not OK. Status:', response.status);
                try {
                    const errorData = await response.json();
                    console.error('Error data:', errorData);
                } catch (e) {
                    console.error('Failed to parse error response:', e);
                }
                showErrorToast('An error occurred while sending the message. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            showErrorToast('An error occurred while sending the message. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const showSuccessToast = (message: string) => {
        showToast(message, true);
    };

    const showErrorToast = (message: string) => {
        showToast(message, false);
    };

    return (
        <>
        <Header />
        <div className="relative px-4 py-16 h-screen w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />
            <div className="z-30 border overflow-y-auto overflow-x-hidden border-none md:border-lavender-100 border-opacity-50 px-4 sm:px-8 md:px-16 rounded-xl bg-transparent md:bg-purple-100 md:bg-opacity-20 backdrop-blur-none md:backdrop-blur-sm w-full sm:w-auto">
                <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto py-12 md:py-16">
                    <div className="flex flex-col gap-6" data-aos="fade-right" data-aos-duration="800">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold text-gray-200">Get in Touch</h2>
                            <p className="text-gray-400">Have a question or want to work together? Send me a message.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-6 h-6 text-purple-200"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                                <div className="text-lg font-medium text-gray-200">meftahahmedreda02@email.com</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-6 h-6 text-purple-200"
                                >
                                    <path
                                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect width="4" height="12" x="2" y="9"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            <a
                                className="text-lg font-medium text-gray-200 relative before:absolute before:inset-x-0 before:h-[2px] before:bottom-0 before:bg-purple-200 before:origin-center before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
                                href="https://www.linkedin.com/in/ahmed-reda-meftah-015641281/"
                                rel="ugc"
                                >
                                LinkedIn
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-6 h-6 text-purple-200"
                            >
                                <path
                                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                        <a
                            className="text-lg font-medium text-gray-200 relative before:absolute before:inset-x-0 before:h-[2px] before:bottom-0 before:bg-purple-200 before:origin-center before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
                            href="https://github.com/itserror808"
                            rel="ugc"
                            >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6" data-aos="fade-left" data-aos-duration="800">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-gray-200">Contact Me</h2>
                    <p className="text-gray-400">Fill out the form below and I'll get back to you as soon as possible.</p>
                </div>
                <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="flex h-10 w-full rounded-md border border-transparent hover:border-purple-200 bg-purple-100 bg-opacity-10 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 text-white disabled:cursor-not-allowed disabled:opacity-50 duration-200"
                            id="name"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="flex h-10 w-full rounded-md border border-transparent hover:border-purple-200 bg-purple-100 bg-opacity-10 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 text-white disabled:cursor-not-allowed disabled:opacity-50 duration-200"
                            id="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="flex h-24 resize-none w-full rounded-md border border-transparent hover:border-purple-200 bg-purple-100 bg-opacity-10 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 text-white disabled:cursor-not-allowed disabled:opacity-50 duration-200"
                            id="message"
                            placeholder="Enter your message"
                        ></textarea>
                    </div>
                    <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-200 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-purple-200 text-gray-200 hover:bg-purple-300 h-10 px-4 py-2"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center">
                                <svg
                                    className="animate-spin h-5 w-5 text-gray-200"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                <span className="ml-2">Sending...</span>
                            </div>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>
            </div>
        </div>
        </div>
</div>
</>
);
};

export default Contact;