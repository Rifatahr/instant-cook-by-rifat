

const Banner = () => {
    return (
        <div
            className=" w-full h-96 bg-cover bg-center bg-no-repeat rounded-3xl mb-10  mx-auto -10" 
            style={{
                backgroundImage: `url(https://i.ibb.co.com/wZKsHFSZ/Screenshot-2025-11-25-211108.jpg)`
            }}
        >
            <div className=" md:w-9/12 mx-auto flex flex-col justify-center items-center h-3/4 md:h-full  space-y-6 py-4 text-white text-center my-4  md:gap-5 ">
                
                    <h1 className=" font md:font-bold text-xl md:text-4xl pt-4 ">Discover an exceptional cooking <br />
                        class tailored for you!</h1>
                    <p className="font-extralight md:font-normal">
                        To discover an exceptional cooking class tailored to your needs, first identify your personal preferences and skill level, and then explore available options ranging from local in-person classes to online experiences. 
                    </p>
               
                <div className=" flex flex-col md:flex-row gap-5">
                    <button className="btn btn-active bg-[#0be58a] border-none font-bold rounded-3xl ">Explore Now</button>
        
                    <button className="btn btn-active bg-transparent font-bold text-white rounded-3xl ">Our Feedback</button>
                </div>
            </div>






        </div>


    );
};

export default Banner;