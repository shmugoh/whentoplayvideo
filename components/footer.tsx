"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";
import { Moon, Sun, Github, Coffee } from "lucide-react";

const links = [
  {
    href: "https://ko-fi.com/shmugo",
    text: "Buy me a Coffee",
    icon: <Coffee />,
  },
  {
    href: "https://github.com/shmugoh/whentoplayvideo",
    icon: <Github />,
  },
];

export function Foot() {
  // UI Hooks
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Separator />
      <footer className="bg-muted relative mt-auto py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-wrap justify-center">
            <ul className="flex items-center space-x-4">
              <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                Made with ❤️ in Colombia by{" "}
                <a
                  href="https://twitter.com/shmugo_"
                  className="font-medium text-muted-foreground underline underline-offset-4"
                >
                  shmugo
                </a>
              </p>
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            {links.map(({ href, text, icon }, index) => (
              <React.Fragment key={index}>
                <a href={href} className="flex space-x-2 relative">
                  {text && (
                    <p className="flex font-medium text-muted-foreground underline underline-offset-4">
                      {text}
                    </p>
                  )}
                  {React.cloneElement(icon, {
                    className: "hover:-rotate-6 hover:scale-125",
                  })}
                </a>
                {index < links.length - 1 && (
                  <Separator
                    className="h-8 bg-popover"
                    orientation="vertical"
                  />
                )}
              </React.Fragment>
            ))}

            <Separator className="h-8 bg-popover" orientation="vertical" />

            {theme === "light" ? (
              <Moon
                onClick={toggleTheme}
                className="hover:-rotate-6 hover:scale-125 hover:cursor-pointer"
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
