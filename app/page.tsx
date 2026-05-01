"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import NetworkBackground from "@/components/node/NetworkBackground";
import NossosSitemas from "@/components/sistemas/NossosSitemas";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <div className="container m-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="absolute right-10 top-6 z-20">
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <section className="relative flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center overflow-hidden">

        <NetworkBackground />

        <div className="relative z-10">
          <h1 className="text-5xl font-bold tracking-tight">
            Saldanha Ltda.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Soluções de software personalizadas para impulsionar o crescimento
            e a inovação do seu negócio.
          </p>

          <div className="mt-8">
            <Link href="/signup">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Faça seu orçamento
              </Button>
            </Link>
          </div>
        </div>
      </section>
			<NossosSitemas />
    </div>
  );
}