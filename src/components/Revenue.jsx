import React from 'react'
import { FileText, TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "./ui/chart"
import { Button } from './ui/button'
const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
]
const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#0a67f2",
    },
}

const Revenue = () => {
    return (
        <Card className='lg:w-[90%]'>
            <CardHeader >
                <div className='flex justify-between '>
                    <div>
                        <CardTitle>Total Revenue</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </div>
                    <div>
                        <select name="" id="" className='border border-gray-300 p-1 rounded-md'>
                            <option value="" key="">Last 1 days</option>
                            <option value="" key="">Last 7 days</option>
                            <option value="" key="">Last 30 days</option>
                            <option value="" key="">Last 3 months</option>
                            <option value="" key="">Last 6 months</option>
                            <option value="" key="">Last 1 year</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-3 my-3">
                    <Button className='bg-transparent text-black border border-black hover:bg-transparent hover:opacity-80'>Download as CSV <FileText /></Button>
                    <Button>Download as Pdf<FileText /></Button>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            top: 20,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total revenue generated in terms of thounsand for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}

export default Revenue