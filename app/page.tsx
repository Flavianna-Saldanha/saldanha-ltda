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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

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

      {/* SERVIÇOS / CAROUSEL */}
      <section className="py-24 px-6 bg-muted/40">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold">
            Soluções tecnológicas para impulsionar seu negócio
          </h2>

          <p className="mt-4 text-muted-foreground">
            Desenvolvemos sistemas personalizados, aplicações web modernas e
            soluções digitais sob medida para melhorar a gestão e acelerar
            o crescimento da sua empresa.
          </p>

          <div className="mt-16 flex justify-center">
            <Carousel className="w-full max-w-5xl">

              <CarouselContent>

                {/* SLIDE 1 - DASHBOARD */}
                <CarouselItem>

                  <div className="rounded-2xl border bg-background shadow-xl p-8">
										<h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="rounded-xl bg-blue-600/10 p-6">
                        <h3 className="text-lg font-semibold">Receita Mensal</h3>
                        <p className="mt-2 text-2xl font-bold">R$ 82.450</p>
                      </div>

                      <div className="rounded-xl bg-blue-600/10 p-6">
                        <h3 className="text-lg font-semibold">Projetos Ativos</h3>
                        <p className="mt-2 text-2xl font-bold">12</p>
                      </div>

                      <div className="rounded-xl bg-blue-600/10 p-6">
                        <h3 className="text-lg font-semibold">Novos Clientes</h3>
                        <p className="mt-2 text-2xl font-bold">28</p>
                      </div>
                    </div>

                    <div className="mt-8 rounded-xl bg-muted/40 p-6">
                      <div className="h-56 w-full">

                        <svg
                          viewBox="0 0 800 300"
                          className="w-full h-full"
                          preserveAspectRatio="none"
                        >

                          <defs>
                            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
                              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
                            </linearGradient>
                          </defs>

                          <path
                            d="
                            M0 200
                            C80 140, 120 260, 200 180
                            S320 100, 400 160
                            S520 250, 600 140
                            S720 110, 800 170
                            "
                            fill="none"
                            stroke="hsl(var(--primary))"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />

                          <path
                            d="
                            M0 200
                            C80 140, 120 260, 200 180
                            S320 100, 400 160
                            S520 250, 600 140
                            S720 110, 800 170
                            L800 300
                            L0 300
                            Z
                            "
                            fill="url(#areaGradient)"
                          />

                        </svg>

                      </div>
                    </div>
										<div className="mt-10">
											<Link href="/dashboard">
												<Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
													Exemplo de Dashboard Completo
												</Button>
											</Link>
          					</div>
                  </div>

                </CarouselItem>

                {/* SLIDE 2 - LANDING PAGES */}
								<CarouselItem>
									<div className="rounded-2xl border bg-background shadow-xl p-16">

										<h3 className="text-2xl font-bold mb-10">
											Landing Pages
										</h3>

										{/* SCROLL HORIZONTAL */}
										<div className="flex gap-6 overflow-x-auto scroll-smooth pb-6">

											{/* PROJETO 1 */}
											<Card className="min-w-[320px] max-w-[320px] shrink-0 pt-0">

												<Image
													width={700}
													height={400}
													src="/assets/Starbucks.png"
													alt="Starbucks"
													className="aspect-video w-full object-cover"
												/>

												<CardHeader>
													<CardTitle>Starbucks</CardTitle>
													<CardDescription>
														Landing page inspirada no site da Starbucks,
														desenvolvida com layout moderno e responsivo.
													</CardDescription>
												</CardHeader>

												<CardFooter>
													<Button className="w-full">
														<a
															href="https://starbucks-sand-rho.vercel.app/"
															target="_blank"
															rel="noopener noreferrer"
															className="w-full"
														>
															Ver Projeto
														</a>
													</Button>
												</CardFooter>

											</Card>

											{/* PROJETO 2 */}
											<Card className="min-w-[320px] max-w-[320px] shrink-0 pt-0">

												<Image
													width={700}
													height={400}
													src="/assets/apple.png"
													alt="Projeto"
													className="aspect-video w-full object-cover"
												/>

												<CardHeader>
													<CardTitle>Apple Watch Ultra</CardTitle>
													<CardDescription>
														Desenvolvimento de uma interface web conceitual inspirada no Apple Watch Ultra, com front-end moderno
													</CardDescription>
												</CardHeader>

												<CardFooter>
													<Button className="w-full">
														<a
															href="https://apple-watch-ultra.vercel.app/"
															target="_blank"
															rel="noopener noreferrer"
															className="w-full"
														>
															Ver Projeto
														</a>
													</Button>
												</CardFooter>

											</Card>

											{/* PROJETO 3 */}
											<Card className="min-w-[320px] max-w-[320px] shrink-0 pt-0">

												<Image
													width={700}
													height={400}
													src="/assets/english-course.png"
													alt="Projeto"
													className="aspect-video w-full object-cover"
												/>

												<CardHeader>
													<CardTitle>English Course</CardTitle>
													<CardDescription>
														Plataforma web para um curso de inglês focado em fluência prática, pensado para uma boa experiência.
													</CardDescription>
												</CardHeader>

												<CardFooter>
													<Button className="w-full">
														<a
															href="https://english-course-plum.vercel.app/"
															target="_blank"
															rel="noopener noreferrer"
															className="w-full"
														>
															Ver Projeto
														</a>
													</Button>
												</CardFooter>

											</Card>

											<Card className="min-w-[320px] max-w-[320px] shrink-0 pt-0">

												<Image
													width={700}
													height={400}
													src="/assets/portal-noticias.png"
													alt="Projeto"
													className="aspect-video w-full object-cover"
												/>

												<CardHeader>
													<CardTitle>Portal de Notícias</CardTitle>
													<CardDescription>
														Portal de notícias moderno, focado em performance, responsividade e uma experiência de usuário atual e intuitiva.
													</CardDescription>
												</CardHeader>

												<CardFooter>
													<Button className="w-full">
														<a
															href="https://portal-noticias-one.vercel.app/"
															target="_blank"
															rel="noopener noreferrer"
															className="w-full"
														>
															Ver Projeto
														</a>
													</Button>
												</CardFooter>

											</Card>

										</div>

									</div>
								</CarouselItem>

                {/* SLIDE 3 - APLICAÇÕES MOBILE */}
                <CarouselItem>
									<div className="rounded-2xl border bg-background shadow-xl p-16">

										<h3 className="text-2xl font-bold mb-10">
											Aplicações Mobile
										</h3>

										{/* SCROLL HORIZONTAL */}
										<div className="flex gap-6 overflow-x-auto scroll-smooth pb-6">

											{/* PROJETO 1 */}
											<Card className="min-w-[320px] max-w-[320px] shrink-0 pt-0">

												<Image
													width={700}
													height={400}
													src="/assets/Starbucks.png"
													alt="Starbucks"
													className="aspect-video w-full object-cover"
												/>

												<CardHeader>
													<CardTitle>Academia</CardTitle>
													<CardDescription>
														Landing page inspirada no site da Starbucks,
														desenvolvida com layout moderno e responsivo.
													</CardDescription>
												</CardHeader>

												<CardFooter>
													<Button className="w-full">
														<a
															href="https://starbucks-sand-rho.vercel.app/"
															target="_blank"
															rel="noopener noreferrer"
															className="w-full"
														>
															Ver Projeto
														</a>
													</Button>
												</CardFooter>

											</Card>

											{/* PROJETO 2 */}
											<Card className="min-w-[320px] max-w-[320px] shrink-0 pt-0">

												<Image
													width={700}
													height={400}
													src="/assets/apple.png"
													alt="Projeto"
													className="aspect-video w-full object-cover"
												/>

												<CardHeader>
													<CardTitle>Apple Watch Ultra</CardTitle>
													<CardDescription>
														Desenvolvimento de uma interface web conceitual inspirada no Apple Watch Ultra, com front-end moderno
													</CardDescription>
												</CardHeader>

												<CardFooter>
													<Button className="w-full">
														<a
															href="https://apple-watch-ultra.vercel.app/"
															target="_blank"
															rel="noopener noreferrer"
															className="w-full"
														>
															Ver Projeto
														</a>
													</Button>
												</CardFooter>

											</Card>

											{/* PROJETO 3 */}
											<Card className="min-w-[320px] max-w-[320px] shrink-0 pt-0">

												<Image
													width={700}
													height={400}
													src="/assets/english-course.png"
													alt="Projeto"
													className="aspect-video w-full object-cover"
												/>

												<CardHeader>
													<CardTitle>English Course</CardTitle>
													<CardDescription>
														Plataforma web para um curso de inglês focado em fluência prática, pensado para uma boa experiência.
													</CardDescription>
												</CardHeader>

												<CardFooter>
													<Button className="w-full">
														<a
															href="https://english-course-plum.vercel.app/"
															target="_blank"
															rel="noopener noreferrer"
															className="w-full"
														>
															Ver Projeto
														</a>
													</Button>
												</CardFooter>

											</Card>

											<Card className="min-w-[320px] max-w-[320px] shrink-0 pt-0">

												<Image
													width={700}
													height={400}
													src="/assets/portal-noticias.png"
													alt="Projeto"
													className="aspect-video w-full object-cover"
												/>

												<CardHeader>
													<CardTitle>Portal de Notícias</CardTitle>
													<CardDescription>
														Portal de notícias moderno, focado em performance, responsividade e uma experiência de usuário atual e intuitiva.
													</CardDescription>
												</CardHeader>

												<CardFooter>
													<Button className="w-full">
														<a
															href="https://portal-noticias-one.vercel.app/"
															target="_blank"
															rel="noopener noreferrer"
															className="w-full"
														>
															Ver Projeto
														</a>
													</Button>
												</CardFooter>

											</Card>

										</div>

									</div>
								</CarouselItem>

              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />

            </Carousel>
          </div>

          

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold">
          Transforme dados em decisões estratégicas
        </h2>

        <p className="mt-4 text-muted-foreground">
          Comece hoje mesmo e leve sua gestão para o próximo nível.
        </p>

        <Link href="/signup">
          <Button size="lg" className="mt-6 bg-blue-600 hover:bg-blue-700 text-white">
            Faça seu orçamento
          </Button>
        </Link>
      </section>

    </main>
  )
}