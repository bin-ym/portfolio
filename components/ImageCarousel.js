"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageCarousel({ images, projectName }) {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="mb-8">
      {/* Carousel */}
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={images[index]}
            alt={`${projectName} screenshot`}
            width={900}
            height={500}
            className="w-full cursor-pointer"
            onClick={() => setFullscreen(true)}
          />
        </motion.div>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute px-3 py-1 text-white -translate-y-1/2 bg-black/40 rounded left-3 top-1/2"
        >
          ◀
        </button>

        <button
          onClick={next}
          className="absolute px-3 py-1 text-white -translate-y-1/2 bg-black/40 rounded right-3 top-1/2"
        >
          ▶
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 mt-4 overflow-x-auto">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt="thumb"
            width={120}
            height={70}
            onClick={() => setIndex(i)}
            className={`cursor-pointer rounded ${
              i === index ? "ring-2 ring-indigo-500" : ""
            }`}
          />
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={() => setFullscreen(false)}
          >
            <Image
              src={images[index]}
              alt="fullscreen"
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
