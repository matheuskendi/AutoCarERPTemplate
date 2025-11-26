import { useEffect, useState } from "react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Users, Car, Wrench, DollarSign, Clock, AlertCircle } from "lucide-react"

type DashboardStats = {
    totalClientes: number
    totalVeiculos: number
    osAberta: number
    osEmAndamento: number
    osAtrasada: number
    faturamentoMes: number
}

export default function Dashboard() {
    const [stats, setStats] = useState<DashboardStats>({
        totalClientes: 0,
        totalVeiculos: 0,
        osAberta: 0,
        osEmAndamento: 0,
        osAtrasada: 0,
        faturamentoMes: 0,
    })

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // TODO: substituir por chamada real à API C#
        // fetch("http://localhost:5000/api/dashboard/resumo")
        //   .then((res) => res.json())
        //   .then((data) => setStats(data))
        //   .finally(() => setLoading(false))

        // Por enquanto, usando mock
        setTimeout(() => {
            setStats({
                totalClientes: 45,
                totalVeiculos: 62,
                osAberta: 8,
                osEmAndamento: 12,
                osAtrasada: 3,
                faturamentoMes: 15750.5,
            })
            setLoading(false)
        }, 500)
    }, [])

    if (loading) {
        return (
            <div className="p-4">
                <p>Carregando dashboard...</p>
            </div>
        )
    }

    return (
        <>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-4"
                    />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Dashboard</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>

            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {/* Card: Total de Clientes */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total de Clientes</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.totalClientes}</div>
                            <p className="text-xs text-muted-foreground">
                                Clientes cadastrados no sistema
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card: Total de Veículos */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total de Veículos</CardTitle>
                            <Car className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.totalVeiculos}</div>
                            <p className="text-xs text-muted-foreground">
                                Veículos em histórico
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card: O.S. em Aberto */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">O.S. em Aberto</CardTitle>
                            <Wrench className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.osAberta}</div>
                            <p className="text-xs text-muted-foreground">
                                Aguardando início
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card: O.S. em Andamento */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">O.S. em Andamento</CardTitle>
                            <Clock className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.osEmAndamento}</div>
                            <p className="text-xs text-muted-foreground">
                                Em execução
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card: O.S. Atrasadas */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">O.S. Atrasadas</CardTitle>
                            <AlertCircle className="h-4 w-4 text-red-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-red-500">{stats.osAtrasada}</div>
                            <p className="text-xs text-muted-foreground">
                                Requer atenção
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card: Faturamento do Mês */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Faturamento (Mês)</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                R$ {stats.faturamentoMes.toLocaleString("pt-BR", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Novembro 2025
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Gráfico/Tabela de Últimas O.S. (placeholder) */}
                <Card className="col-span-full">
                    <CardHeader>
                        <CardTitle>Últimas Ordens de Serviço</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between border-b pb-2">
                                <div>
                                    <p className="font-medium">O.S. #001</p>
                                    <p className="text-sm text-muted-foreground">Cliente: João Silva</p>
                                </div>
                                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                    Em Andamento
                                </span>
                            </div>
                            <div className="flex items-center justify-between border-b pb-2">
                                <div>
                                    <p className="font-medium">O.S. #002</p>
                                    <p className="text-sm text-muted-foreground">Cliente: Maria Santos</p>
                                </div>
                                <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                                  Aberta
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">O.S. #003</p>
                                    <p className="text-sm text-muted-foreground">Cliente: Pedro Costa</p>
                                </div>
                                <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">
                                  Atrasada
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
