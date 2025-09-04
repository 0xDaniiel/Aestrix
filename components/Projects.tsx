"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { projects } from "@/data/index";
import { Unbounded } from "next/font/google";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const Projects = () => {
  return (
    <div className="mb-20 ">
      <FadeInOnScroll>
        <section
          className="mx-auto scroll-mt-24 px-6 sm:px-8 lg:px-8 pt-16 md:pt-20"
          id="projects"
        >
          <h2
            className={`${unbounded.className} text-3xl md:text-4xl font-extrabold mb-10 text-left text-[#011045]`}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#EABF83] to-[#D6A35D] text-transparent bg-clip-text">
              Projects
            </span>
          </h2>

          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {projects.map(
                ({ title, subtitle, description, image, link }, idx) => (
                  <CarouselItem
                    key={idx}
                    className="md:basis-1/2 lg:basis-1/3 px-5 py-3"
                  >
                    <Card className="bg-white rounded-lg border-[#011B78] flex flex-col justify-between h-full p-5 hover:scale-105 hover:shadow-sm transition-transform duration-300 min-h-[420px]">
                      <div className="w-full mb-4 flex-shrink-0">
                        <Image
                          src={image}
                          alt={title}
                          width={600}
                          height={300}
                          className="w-full h-48 object-contain"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-[#011045] mb-1">
                            {title}
                          </h3>
                          {subtitle && (
                            <h4 className="text-base font-medium mb-1">
                              {subtitle}
                            </h4>
                          )}
                          <p className="text-[#011045] text-sm font-light mb-4 line-clamp-3">
                            {description}
                          </p>
                        </div>
                        {link && (
                          <Link
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                    group
                    text-[#011B78] bg-white cursor-pointer text-center
                    px-3 py-2 border-2 border-[#011B78] 
                    shadow-[3px_3px_0px_#011B78] rounded-md
                    hover:bg-[#011B78] hover:text-white
                    hover:translate-x-[2px] hover:translate-y-[2px]
                    hover:shadow-[1px_1px_0px_#011B78]
                    active:translate-x-[2px] active:translate-y-[2px]
                    active:shadow-[1px_1px_0px_#011B78]
                    transition-all duration-200
                  "
                          >
                            Visit Project
                          </Link>
                        )}
                      </div>
                    </Card>
                  </CarouselItem>
                )
              )}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </FadeInOnScroll>
    </div>
  );
};

export default Projects;
