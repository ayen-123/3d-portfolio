"use client";
import React from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
} from "../ui/responsive-dialog";
import { ScrollArea } from "../ui/scroll-area";
import { motion } from "motion/react";

import recognitions, { Recognition } from "@/data/recognitions";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";
import ScrollingPreview from "../scrolling-preview";

const RecognitionsSection = () => {
  return (
    <SectionWrapper id="recognitions" className="max-w-7xl mx-auto md:min-h-[130vh] px-4">
      <SectionHeader id="recognitions" title="Recognitions" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recognitions.map((recognition) => (
          <RecognitionCard key={recognition.id} recognition={recognition} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const RecognitionCard = ({ recognition }: { recognition: Recognition }) => {
  return (
    <div className="flex items-center justify-center">
      <ResponsiveDialog>
        <ResponsiveDialogTrigger className="bg-transparent flex justify-center w-full">
          <div
            className="group relative w-full max-w-[400px] h-auto rounded-lg overflow-hidden ring-1 ring-white/5"
            style={{ aspectRatio: "3/2" }}
          >
            <ScrollingPreview
              src={recognition.src}
              alt={recognition.title}
              bg={`/assets/backgrounds/${recognition.id}.jpg`}
            />
            <div className="absolute w-full h-24 bottom-0 left-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10">
              <div className="flex flex-col h-full items-start justify-end p-4">
                <div className="text-lg text-left [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                  {recognition.title}
                </div>
                <div className="text-xs bg-primary text-primary-foreground rounded-lg w-fit px-2">
                  {recognition.category}
                </div>
              </div>
            </div>
          </div>
        </ResponsiveDialogTrigger>

        <ResponsiveDialogContent className="md:max-w-4xl md:h-[85vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0">
          {/* Sticky header */}
          <div className="shrink-0 border-b border-border bg-background/80 backdrop-blur-sm px-8 py-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <h4 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight truncate">
                  {recognition.title}
                </h4>
                <span className="shrink-0 text-[11px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-0.5">
                  {recognition.category}
                </span>
              </div>
            </div>
          </div>

          {/* Scrollable content */}
          <ScrollArea className="flex-1" type="always" data-lenis-prevent>
            <div className="px-8 py-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {recognition.content}
              </motion.div>
            </div>
          </ScrollArea>
        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </div>
  );
};

export default RecognitionsSection;