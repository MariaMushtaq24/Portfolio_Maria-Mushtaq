export default function Contact(){
    return(
        <div className="bg-black bg-[url('/images/bluebackground.jpg')] bg-cover bg-center px-8 sm:py-16 md:py-28 sm:px-12 md:px-28">

            <div className="bg-black bg-opacity-60 max-w-3xl mx-auto p-8 shadow-2xl">
                <h1 className="text-blue-500 font-bold md:text-3xl text-center mb-8"> Contact Me </h1>
                <p className="mb-8 text-gray-200 md:text-lg text-center">Feel free to reach out to me for collaborations or inquiries!</p>

                <form className="sm:space-y-2 md:space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2 text-gray-200">Your Name</label>
                        <input type="text" id="name" placeholder="Enter your full name" 
                        className="bg-gray-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 text-gray-200">Your Email</label>
                        <input type="email" id="email" placeholder="Enter your email address" 
                        className="bg-gray-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-2 text-gray-200">Your Message</label>
                        <textarea id="message" rows={6} placeholder="Write your message" 
                        className="bg-gray-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 mb-2" />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="bg-blue-700 text-white py-3 px-8 rounded-lg hover:bg-blue-500 transition duration-300">
                            Send Message
                        </button>
                    </div>
                </form>
                
                <div className="mt-8 text-gray-200 text-center">
                    <p>Or reach me directly at:</p>
                    <a href="mailto:mariaashaikh25@gmail.com" className="text-blue-500 hover:text-blue-700 hover:underline"> mariaashaikh25@gmal.com</a>
                </div>
            </div>
        </div>
    );
};
