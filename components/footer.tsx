"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";
import { Moon, Sun, Github, Coffee } from "lucide-react";

export function Foot() {
  // UI Hooks
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Separator className="bg-primary" />
      <footer className="bg-grey-200 relative mt-auto py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-wrap justify-center">
            <ul className="flex items-center space-x-4">
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Made with ❤️ in Colombia by{" "}
                <a
                  href="https://twitter.com/shmugo_"
                  className="font-medium text-primary underline underline-offset-4"
                >
                  shmugo
                </a>
              </p>
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://ko-fi.com/shmugo"
              className="flex space-x-2 relative"
            >
              <p className="flex font-medium text-primary underline underline-offset-4">
                Buy me a Coffee
              </p>
              <Coffee className="hover:rotate-6 hover:scale-125" />
            </a>
            <Separator className="h-8" orientation="vertical" />
            <a href="https://github.com/shmugoh/whentoplayvideo">
              <Github className="hover:-rotate-6 hover:scale-125" />
            </a>
            <Separator className="h-8" orientation="vertical" />

            {theme === "light" ? (
              <Moon
                onClick={toggleTheme}
                className="hover:rotate-12 hover:scale-125 hover:cursor-pointer"
              />
            ) : (
              <Sun
                onClick={toggleTheme}
                className="hover:rotate-12 hover:scale-125 hover:cursor-pointer"
              />
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
