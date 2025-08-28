import React from 'react';
import newsImg1 from "../../../../src/assets/LatestNews/Latest-News-Img-1.png";
import newsImg2 from "../../../../src/assets/LatestNews/Latest-News-Img-2.png";
import newsImg3 from "../../../../src/assets/LatestNews/Latest-News-Img-3.png";

const LatestNews = () => {
    const news = [
        {
            title: "Embrace the Art of Color Harmony",
            text: "Explore our collection of carefully chosen products expert advice and inspiring stories designed to help you discover your full potential. Whether you are seeking inspiration advice or the perfect product to elevate your routine.",
            image: newsImg1
        },
        {
            title: "Discover the Secrets of Timeless Beauty",
            text: "Unlock timeless beauty secrets and gain expert advice with our inspiring stories and curated content. Whether you're seeking guidance or the perfect product, we're here to help you elevate your beauty regimen.",
            image: newsImg2
        },
        {
            title: "Elevate Your Everyday Routine",
            text: "Find your perfect routine with our expert advice and inspiring content. Our carefully selected products and guides are designed to help you discover and enhance your natural glow and elevate your daily life.",
            image: newsImg3
        }
    ];

    return (
        <section className="bg-base-100 py-20 px-4 sm:px-8 lg:px-16 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-16 text-base-content">
            Latest News and Blog
        </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-[1444px] auto-rows-fr">            
                {/* News 1 */}
                <div className="flex flex-col sm:flex-row lg:flex-col-reverse">
                    {/* news image */}
                    <div className="">
                        <img src={newsImg2} alt='' />
                    </div>
                    {/* news content  */}
                    <div className="card w-full bg-base-200 shadow-xl">
                        <div className="card-body">
                            <h3 className="card-title text-base-content text-xl font-semibold mb-4">{news[0].title}</h3>
                            <p className="text-base-content/70 text-sm leading-relaxed mb-4">{news[0].text}</p>
                            <div className="card-actions">
                            <button className="btn btn-outline btn-primary rounded-full px-8">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News 2 */}
                <div className="flex flex-col sm:flex-row lg:flex-col">
                    {/* news image */}
                    <div className="">
                        <img src={newsImg1} alt='' />
                    </div>
                    {/* news content  */}
                    <div className="card w-full bg-base-200 shadow-xl">
                        <div className="card-body">
                            <h3 className="card-title text-base-content text-xl font-semibold mb-4">{news[1].title}</h3>
                            <p className="text-base-content/70 text-sm leading-relaxed mb-4">{news[1].text}</p>
                            <div className="card-actions">
                            <button className="btn btn-outline btn-primary rounded-full px-8">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News 3 */}
                <div className="flex flex-col sm:flex-row lg:flex-col-reverse">
                    {/* news image */}
                    <div className="">
                        <img src={newsImg3} alt='' />
                    </div>

                    {/* news content  */}
                    <div className="card w-full bg-base-200 shadow-xl">
                        <div className="card-body">
                            <h3 className="card-title text-base-content text-xl font-semibold mb-4">{news[2].title}</h3>
                            <p className="text-base-content/70 text-sm leading-relaxed mb-4">{news[2].text}</p>
                            <div className="card-actions">
                            <button className="btn btn-outline btn-primary rounded-full px-8">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestNews;
