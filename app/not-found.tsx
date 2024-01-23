"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="flex flex-col p-16 items-center justify-center space-y-8 flex-1 lg:w-fit lg:mx-auto">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        404 - Not Found
      </h1>
      <Button asChild>
        <Link href="/">Go Back</Link>
      </Button>
    </div>
  );
}

export default NotFoundPage;
