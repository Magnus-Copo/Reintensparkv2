"use client";

import { useState } from "react";

export type AccordionItem = {
  title: string;
  content: string[];
};

interface AccordionProps {
  readonly items: AccordionItem[];
}

export function Accordion({ items }: Readonly<AccordionProps>) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.title}
            className="rounded-[24px] border border-white/10 bg-card/70 p-5"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between text-left text-white"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="text-2xl font-semibold">{item.title}</span>
              <span className="text-primary">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen ? (
              <ul className="mt-4 space-y-2 text-base text-white/70">
                {item.content.map((content) => (
                  <li key={content} className="flex gap-3">
                    <span className="text-primary">▹</span>
                    <span>{content}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
