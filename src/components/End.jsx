import React, { useRef } from 'react';
import Image from 'next/image'; 
import { useScroll, useTransform, motion } from 'framer-motion';

const End = () => {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const Background = "/images/44.jpg"; // ✅ Correct way to reference an image from the public folder

    return (
        <div
            ref={container}
            className="relative flex items-center justify-center h-screen overflow-hidden"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            {/* <div className="relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between">
                <p className="w-[50vw] text-[2vw] self-end uppercase mix-blend-difference">
                    Red Bull Racing, also known as Red Bull F1, is one of the most dominant teams in modern Formula 1. 
                    Founded in 2005 by the energy drink company Red Bull, the team has consistently been at the forefront 
                    of innovation and performance.
                </p>
                <p className="text-[5vw] uppercase mix-blend-difference">REDBULL RACING</p>
            </div> */}

            {/* Background Image with Motion Effect */}
            <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
                <motion.div style={{ y }} className="relative w-full h-full">
                    <Image 
                        src={Background} 
                        alt="image"
                        fill
                        style={{ objectFit: "cover" }} 
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default End;
