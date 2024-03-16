const Banner = () => {
    return (
        <div className="bg-[url(https://i.ibb.co/r6mgQv1/chefs-cover.jpg)] w-full bg-cover bg-center mt-6 md:mt-10 lg:mt-12 rounded-lg md:rounded-xl lg:rounded-2xl">
            <h2 className="text-white text-4xl md:text-5xl  font-bold leading-10 md:leading-[60px] lg:leading-[72px] text-center w-11/12 md:w-5/6 mx-auto pt-20 md:pt-32 lg:pt-40 mb-4 lg:mb-6">Discover an exceptional cooking class tailored for you!</h2>
            <p className="text-white text-lg leading-6 md:leading-7 font-normal w-11/12 mx-auto text-center mb-7 md:mb-9 lg:mb-10">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className="flex justify-center gap-4 md:gap-6 lg:gap-7 pb-20 md:pb-32 lg:pb-40">
            <button className="text-[#150B2B] text-xl font-semibold bg-[#0BE58A] border-transparent rounded-[50px] py-5 px-7">Explore Now</button>
            <button className="text-white text-xl font-semibold bg-transparent rounded-[50px] py-5 px-7 border-[1px] border-white">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;