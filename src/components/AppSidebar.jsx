import { Calendar, Home, Inbox, LayoutDashboard, Search, Settings } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from "./ui/sidebar"
import { Link, Outlet, useLocation } from "react-router-dom"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "./ui/collapsible";
import logo from './../assets/logo.png';
import { Separator } from "./ui/separator";

  


// Menu items.
const dashboard = [
    {
        title: "Dashboard",
        url: "/",
        icon: LayoutDashboard
    }
]

const service = [
    {
        title: "Categories",
        url: "/categories",
        icon: Inbox,
    },
    {
        title: "Sub Categories",
        url: "/sub_categories",
        icon: Calendar,
    },
    {
        title: "Services",
        url: "/service",
        icon: Home,
    },
    {
        title: "Offers",
        url: "/offer",
        icon: Home,
    }
]

const booking = [
    {
        title: "Booking",
        url: "/booking",
        icon: LayoutDashboard
    },
    {
        title: "Refund Request",
        url: "/refund_request",
        icon: LayoutDashboard
    },
    {
        title: "Cash On Delivery",
        url: "/cod",
        icon: LayoutDashboard
    },
    {
        title: "Reviews",
        url: "/reviews",
        icon: Home,
    }
]

const user = [
    {
        title: "Customer",
        url: "/user",
        icon: LayoutDashboard
    }
]

const provider = [
    {
        title: "Provider Verification",
        url: "/applied_provider",
        icon: LayoutDashboard
    },
    {
        title: "Verified Provider",
        url: "/verified_provider",
        icon: LayoutDashboard
    }
]

const report = [
    {
        title: "Booking Report",
        url: "/sales",
        icon: LayoutDashboard
    },
    {
        title: "Revenue Report",
        url: "/revenue",
        icon: LayoutDashboard
    },
    {
        title: "Register Report",
        url: "/register_report",
        icon: LayoutDashboard
    },
   
]

const support = [
    {
        title: "Customer Support",
        url: "/customer_support",
        icon: LayoutDashboard
    }
]





const AppSidebar = () => {
    const location = useLocation();
    return (
        <Sidebar variant=
            'floating' collapsible="icon" >
            <SidebarContent className='gradient text-white rounded-md dark:bg-[#fd2692] dark:text-white'>
                <div className="flex justify-center items-center bg-white mb-1 sticky top-0 z-50"><img src={logo} alt="" className="w-12 my-2" /></div>
                {/* <Separator className='bg-gray-500 shadow-md ' /> */}
                <SidebarGroup className=''>
                    <SidebarGroupLabel className='text-gray-300 uppercase'>dashboard</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {dashboard.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel className='text-gray-300 uppercase'>services</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {service.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel className='text-gray-300 uppercase'>Booking</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {booking.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel className='text-gray-300 uppercase'>Customer</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {user.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel className='text-gray-300 uppercase'>Service Provider</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {provider.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel className='text-gray-300 uppercase'>Report</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {report.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

            </SidebarContent>
        </Sidebar>
    )
}



export default function Layout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-[86rem]">
                <Outlet />
            </main>
        </SidebarProvider>
    )
}
