'use client';
import { useEffect } from 'react';
import Lenis from 'lenis'
import Intro from '@/components/Intro';
import Description from '@/components/Description';
import Section from '@/components/Section';
import Desc from '@/components/Desc';
import End from '@/components/End';
export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Intro />
      <Description />
      <Section />
      <Desc/>
      <End/>
      <div className="h-screen flex flex-col items-center justify-center text-center px-10 bg-black text-white">
        <h2 className="text-6xl font-bold uppercase text-red-600">Red Bull Racing Achievements</h2>
        <p className="mt-6 text-xl max-w-4xl leading-relaxed">
          Red Bull Racing has cemented itself as one of the most dominant teams in Formula 1 history. 
          Since its debut in 2005, the team has won multiple **Drivers' Championships** and **Constructors' Titles**, 
          challenging the sport's most legendary teams.  
        </p>
        <p className="mt-4 text-xl max-w-4xl leading-relaxed">
          With iconic drivers like **Sebastian Vettel** and **Max Verstappen**, Red Bull has achieved remarkable success, 
          including a record-breaking **2023 season** where Verstappen secured the most wins in a single season.  
          Their aggressive aerodynamics, innovative engineering, and strategic brilliance make them a force to be reckoned with.
        </p>
        <p className="mt-4 text-xl max-w-4xl leading-relaxed">
          From Vettel's **four consecutive titles (2010-2013)** to Verstappen's **back-to-back dominance (2021-2023)**,  
          Red Bull continues to redefine performance, speed, and excellence in Formula 1.
        </p>
      </div>
    </main>
  );
}