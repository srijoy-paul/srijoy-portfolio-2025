"use client";

import { Skills } from "@/lib/Types";
import { useState } from "react";

type Props = { categories: Skills };

export function SkillsGrid({ categories }: Props) {
  const [filter, setFilter] = useState(Object.keys(categories)[0]);

  return (
    <section
      aria-labelledby="skills-title"
      className="my-8 z-50 border-2 border-green-600"
    >
      <h2 id="skills-title" className="text-2xl font-bold mb-4">
        Skills
      </h2>

      {/* Category Tabs */}
      <div className="flex space-x-4 mb-4">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 rounded-full transition ${
              filter === cat
                ? "bg-purple text-black"
                : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Icons Grid */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-1 text-white"> */}
      <div className="flex flex-wrap gap-3 text-white border border-yellow-300">
        {categories[filter].map((s) => (
          <span
            key={s.name}
            className="flex items-center justify-center border border-pink-400"
          >
            {s.icon && (
              <img
                key={s.name}
                src={s.icon}
                alt={s.name}
                className="h-10 mb-2 text-white"
              />
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
