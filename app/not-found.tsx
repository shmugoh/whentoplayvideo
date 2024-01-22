"use client";

import { Foot } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function NotFoundPage() {
  return (
    <main className="min-h-screen bg-background dark:bg-background flex flex-col mx-auto">
      <div className="flex flex-col p-16 items-center justify-center space-y-8 flex-1 lg:w-fit lg:mx-auto">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          404 - Not Found
        </h1>
        <Button asChild>
          <Link href="/">Go Back</Link>
        </Button>
      </div>
      <Foot />
    </main>
  );
}

export default NotFoundPage;
