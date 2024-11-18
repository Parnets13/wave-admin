import React, { useState } from 'react'
import avatar from './../assets/avatar-16.jpg';
import { CircleCheck, SquareArrowOutUpRight } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import aadhar from './../assets/aadhar.pdf';
import pan from './../assets/pan.pdf';
import img1 from './../assets/provider-19.jpg';
import img2 from './../assets/provider-23.jpg';
import img3 from './../assets/service-48.png';
import img4 from './../assets/service-47.png';
import img5 from './../assets/service-49.png';
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
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
import { Label, Pie, PieChart } from "recharts"
import { Button } from './ui/button';
import { Toggle } from './ui/toggle';
import { toast, Toaster } from "sonner"

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

const chartConfig1 = {
    desktop: {
        label: "Desktop",
        color: "#fd2692",
    },
}



const chartData2 = [
    { browser: "completed", visitors: 1600, fill: "var(--color-chrome)" },
    { browser: "pending", visitors: 230, fill: "var(--color-safari)" },
]
const chartConfig2 = {
    visitors: {
        label: "Booking",
    },
    chrome: {
        label: "Completed",
        color: "#0a67f2",
    },
    safari: {
        label: "Pending",
        color: "#fd2692",
    }
}




const ServiceProviderDetails = () => {
    return (
        <div className='p-3'>
            <Toaster position="top-center" />
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-medium'>John Doe - PRV123456</h1>
                <Toggle onClick={() =>
                    toast.success("Provider Account deactivated successfully")
                }>Deactivate</Toggle>
            </div>
            <div>
                <fieldset className='border border-gray-300 rounded-md p-3 w-full '>
                    <legend className='font-medium p-3'>Personal Information</legend>
                    <div className='flex gap-10 lg:flex-between flex-col lg:flex-row'>
                        <img src={avatar} alt="" className='rounded-full w-40  mx-auto lg:mx-0' />
                        <div>
                            <div className='flex gap-3'>
                                <label htmlFor="" className='w-16'>Name:</label>
                                <h1 className='font-medium'>John Doe</h1>
                            </div>
                            <div className='flex gap-3'>
                                <label htmlFor="" className='w-16'>Email:</label>
                                <h1 className='font-medium'>JohnDoe@gmail.com</h1>
                            </div>
                            <div className='flex gap-3'>
                                <label htmlFor="" className='w-16'>Phone :</label>
                                <h1 className='font-medium'>1234567890</h1>
                            </div>
                            <div className='flex gap-3'>
                                <label htmlFor="" className='w-16'>Address:</label>
                                <h1 className='font-medium'>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</h1>
                            </div>
                            <div className='flex gap-3'>
                                <label htmlFor="" className='w-16'>Pan No:</label>
                                <h1 className='font-medium'>PAN123456</h1>
                            </div>
                            <div className='flex gap-3'>
                                <label htmlFor="" className='w-16'>Aadhaar</label>
                                <h1 className='font-medium'>123456789012</h1>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <fieldset className='border border-gray-300 rounded-md p-3 w-full '>
                <legend className='font-medium p-3'>Uploaded Documents</legend>
                <div className='flex flex-wrap items-center gap-10'>
                    <Dialog>
                        <DialogTrigger className='font-medium'><p className='flex items-center gap-1 font-medium'>Aadhar Card <SquareArrowOutUpRight className='size-4' /></p></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Aadhar Card</DialogTitle>
                                <DialogDescription>
                                    <iframe src={aadhar} width="100%" height="400px"> This browser does not support PDFs. Please download the PDF to view it: <a href="path/to/your/pdf-file.pdf">Download PDF</a>. </iframe>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger className='font-medium'> <p className='flex items-center gap-1 font-medium'>PAN Card <SquareArrowOutUpRight className='size-4' /></p></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Aadhar Card</DialogTitle>
                                <DialogDescription>
                                    <iframe src={pan} width="100%" height="500px"> This browser does not support PDFs. Please download the PDF to view it: <a href="path/to/your/pdf-file.pdf">Download PDF</a>. </iframe>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger className='font-medium'><p className='flex items-center gap-1 font-medium'>License <SquareArrowOutUpRight className='size-4' /></p></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Aadhar Card</DialogTitle>
                                <DialogDescription>
                                    <iframe src={pan} width="100%" height="500px"> This browser does not support PDFs. Please download the PDF to view it: <a href="path/to/your/pdf-file.pdf">Download PDF</a>. </iframe>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger className='font-medium'><p className='flex items-center gap-1 font-medium'>Images <SquareArrowOutUpRight className='size-4' /></p></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Aadhar Card</DialogTitle>
                                <DialogDescription>
                                    <div className='flex flex-wrap gap-3 my-3'>
                                        <img src={img1} alt="" className='w-32 rounded-md' />
                                        <img src={img2} alt="" className='w-32 rounded-md' />
                                        <img src={img3} alt="" className='w-32 rounded-md' />
                                        <img src={img4} alt="" className='w-32 rounded-md' />
                                        <img src={img5} alt="" className='w-32 rounded-md' />
                                    </div>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger className='font-medium'>  <p className='flex items-center gap-1 font-medium'>Video <SquareArrowOutUpRight className='size-4' /></p></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Aadhar Card</DialogTitle>
                                <DialogDescription>
                                    <iframe src={aadhar} width="100%" height="500px"> This browser does not support PDFs. Please download the PDF to view it: <a href="path/to/your/pdf-file.pdf">Download PDF</a>. </iframe>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </fieldset>

            <h1 className='text-2xl font-medium mb-5 mt-10'>Provider Performance</h1>

            <div className='flex gap-5 flex-col lg:flex-row'>
                <Card className='lg:w-[32%] w-full'>
                    <CardHeader>
                        <CardTitle>Booking</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <BarChart accessibilityLayer data={chartData}>
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
                                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 font-medium leading-none">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="leading-none text-muted-foreground">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>

                <Card className='lg:w-[32%] w-full'>
                    <CardHeader>
                        <CardTitle>Earning</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig1}>
                            <BarChart accessibilityLayer data={chartData}>
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
                                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 font-medium leading-none">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="leading-none text-muted-foreground">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>

                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Provider Performance</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer
                            config={chartConfig2}
                            className="mx-auto aspect-square max-h-[250px]"
                        >
                            <PieChart>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Pie
                                    data={chartData2}
                                    dataKey="visitors"
                                    nameKey="browser"
                                    innerRadius={60}
                                    strokeWidth={5}
                                >
                                    <Label
                                        content={({ viewBox }) => {
                                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                return (
                                                    <text
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        textAnchor="middle"
                                                        dominantBaseline="middle"
                                                    >
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={viewBox.cy}
                                                            className="fill-foreground text-3xl font-bold"
                                                        >
                                                            1830
                                                        </tspan>
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={(viewBox.cy || 0) + 24}
                                                            className="fill-muted-foreground"
                                                        >
                                                            Booking
                                                        </tspan>
                                                    </text>
                                                )
                                            }
                                        }}
                                    />
                                </Pie>
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="leading-none text-muted-foreground">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default ServiceProviderDetails