import BaseContainer from "@/components/global/base-container/BaseContainer";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import React from "react";
import { cn } from "../../../lib/utils";
import { Button } from "@/components/ui/button";
import Motion from "@/components/framer-motion/Motion";

const KBHeader = ({
  title,
  description,
  tags,
  hp = false,
}: {
  title: string;
  description: string;
  tags: string[];
  hp?: boolean;
}) => {
  return (
    <BaseContainer>
      <Motion>
        <div
          className={cn("space-y-10 my-10 sm:my-20 ", {
            "text-center": hp,
          })}
        >
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-medium">{title}</h1>
            <h1 className="text-xl sm:text-4xl font-medium">{description}</h1>
          </div>
          <div
            className={cn("space-y-3", {
              "grid place-items-center": hp,
            })}
          >
            <div
              className={cn("w-full flex gap-1", {
                "justify-center items-center": hp,
              })}
            >
              <Input
                placeholder="Search..."
                type="search"
                className="max-w-3xl"
              />
              <Button>Search</Button>
            </div>
            <div className="flex items-center flex-wrap gap-2 ">
              <p className="font-bold text-lg">Popular Topics: </p>
              {tags.map((item, i) => (
                <Badge key={item} className="cursor-pointer">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Motion>
    </BaseContainer>
  );
};

export default KBHeader;
