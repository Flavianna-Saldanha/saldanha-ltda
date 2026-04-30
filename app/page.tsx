"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import NetworkBackground from "@/components/NetworkBackground";


export default function Home() {
	const { setTheme } = useTheme()

  return (
    <main className="flex flex-col">
			<DropdownMenu>
				<DropdownMenuTrigger asChild className="absolute right-10 top-6">
					<Button variant="outline" size="icon">
						<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
						<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
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

      {/* HERO */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Saldanha Ltda.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Soluções de software personalizadas para impulsionar o crescimento
          e a inovação do seu negócio.
        </p>

        <div className="mt-8 flex gap-4">
          <Link href="/signup">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Faça seu orçamento
            </Button>
          </Link>

          <Link href="/login">
            <Button variant="outline" size="lg">
              Entre em contato
            </Button>
          </Link>
        </div>
      </section>
			
			<NetworkBackground />

    </main>
  )
}