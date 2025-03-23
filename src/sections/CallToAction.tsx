"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);
  const animation = useRef<AnimationPlaybackControls>(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );
  }, []);

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHovered]);

  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          ref={scope}
          animate={{ x: "-50%" }}
          className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-violet-700 text-7xl">&#10038;</span>
              <a href="mailto:qubit.flowdev@gmail.com?subject=Quero%20saber%20mais&body=Olá,%20gostaria%20de%20mais%20informações.">
                <span className="group-hover:text-violet-700">
                  💡 Descubra como escalar sua empresa!
                </span>
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
