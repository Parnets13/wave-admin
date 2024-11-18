import React from 'react'
import { BriefcaseBusiness, EllipsisVertical, ShoppingCart, UserRound, UsersRound } from 'lucide-react'
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { Bar, BarChart } from "recharts"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"


const Dashboard = () => {
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
      color: " #0a67f2",
    },
  }

  const chartData1 = [{ month: "january", desktop: 1260, mobile: 570 }]
  const chartConfig1 = {
    desktop: {
      label: "Desktop",
      color: "#0a67f2",
    },
    mobile: {
      label: "Mobile",
      color: "#fd2692",
    },
  }
  return (
    <div className='p-3'>
      <div className='flex flex-col lg:flex-row gap-4 mx-auto '>
        <Card className='lg:w-[32%] w-full h-[100px] flex justify-between p-3 border-b-4 border-blue-300'>
          <div>
            <h1 className='text-xl'>Customer</h1>
            <span className='text-4xl font-bold'>1500</span>
          </div>
          <div className='bg-blue-100 size-10 flex justify-center items-center rounded-full'> <UserRound className='rounded-full text-blue-800  size-5 ' /></div>
        </Card>
        <Card className='lg:w-[32%] w-full h-[100px] flex justify-between p-3 border-b-4 border-blue-300'>
          <div>
            <h1 className='text-xl'>Provider</h1>
            <span className='text-4xl font-bold'>50</span>
          </div>
          <div className='bg-blue-100 size-10 flex justify-center items-center rounded-full'> <UsersRound className='rounded-full text-blue-800  size-5 ' /></div>
        </Card>
        
        <Card className='lg:w-[32%] w-full h-[100px] flex justify-between p-3 border-b-4 border-blue-300'>
          <div>
            <h1 className='text-xl'>Service</h1>
            <span className='text-4xl font-bold'>25</span>
          </div>
          <div className='bg-blue-100 size-10 flex justify-center items-center rounded-full'> <BriefcaseBusiness className='rounded-full text-blue-800  size-5 '/></div>
        </Card>
        <Card className='lg:w-[32%] w-full h-[100px] flex justify-between p-3 border-b-4 border-blue-300'>
          <div>
            <h1 className='text-xl'>Booking</h1>
            <span className='text-4xl font-bold'>1000+</span>
          </div>
          <div className='bg-blue-100 size-10 flex justify-center items-center rounded-full'><ShoppingCart className='rounded-full text-blue-800  size-5 '/></div>
        </Card>
      </div>

      <div className='my-3 flex gap-4 flex-col lg:flex-row'>
        <Card className='lg:w-[33%] w-full'>
          <CardHeader >
            <div className='flex justify-between items-center'>
              <div >
                <CardTitle>Total Booking</CardTitle>
                <CardDescription>
                  Showing total sales for the last 6 months
                </CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger><EllipsisVertical /></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Filter By</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Daily</DropdownMenuItem>
                  <DropdownMenuItem>Monthly</DropdownMenuItem>
                  <DropdownMenuItem>Yearly</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="var(--color-desktop)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
            <div className="flex w-full items-start gap-2 text-sm">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  January - June 2024
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>

        <Card className='lg:w-[33%] w-full'>
          <CardHeader >
            <div className='flex justify-between items-center'>
              <div className='w-[75%]'>
                <CardTitle>Total Revenue</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger><EllipsisVertical /></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Filter By</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Daily</DropdownMenuItem>
                  <DropdownMenuItem>Monthly</DropdownMenuItem>
                  <DropdownMenuItem>Yearly</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
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

        <Card className="flex flex-col lg:w-[33%] w-full ">
          <CardHeader className="items-center pb-0">
            <CardTitle>Booking Statistics</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 items-center pb-0">
            <ChartContainer
              config={chartConfig1}
              className="mx-auto aspect-square w-full max-w-[250px]"
            >
              <RadialBarChart
                data={chartData1}
                endAngle={180}
                innerRadius={80}
                outerRadius={130}
              >
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) - 16}
                              className="fill-foreground text-2xl font-bold"
                            >
                              1830
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 4}
                              className="fill-muted-foreground"
                            >
                              Booking
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </PolarRadiusAxis>
                <RadialBar
                  dataKey="desktop"
                  stackId="a"
                  cornerRadius={5}
                  fill="var(--color-desktop)"
                  className="stroke-transparent stroke-2"
                />
                <RadialBar
                  dataKey="mobile"
                  fill="var(--color-mobile)"
                  stackId="a"
                  cornerRadius={5}
                  className="stroke-transparent stroke-2"
                />
              </RadialBarChart>
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

export default Dashboard