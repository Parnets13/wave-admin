import React from 'react'
import { Button } from './ui/button'
import { CirclePlus } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Separator } from './ui/separator'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination'
import { Link } from 'react-router-dom'

const AppliedProvider = () => {
    return (
        <div className='px-[1vw] my-5'>
            <div className='flex lg:justify-between lg:items-center flex-col lg:flex-row '>
                <h1 className='text-2xl'>Provider Application</h1>
                <div className='flex lg:gap-4 items-center gap-2 my-3 lg:my-0'>
                    <Input placeholder='Search'></Input>
                </div>
            </div>
            <Separator className='my-4' />
            <div className='overflow-x-auto lg:max-w-[1000px] max-w-[380px] md:max-w-[580px] lg:h-[65vh] h-[58vh] md:h-[70vh]'>
                <Table >
                    <TableHeader>
                        <TableRow>
                            <TableHead className='truncate'>Sl No.</TableHead>
                            <TableHead className='truncate'>Provider Name</TableHead>
                            <TableHead className='truncate'>Applied Date</TableHead>
                            <TableHead className='truncate'>Phone No</TableHead>
                            <TableHead className='truncate'>Email</TableHead>
                            <TableHead className='truncate'>Address</TableHead>
                            <TableHead className='truncate'>Status</TableHead>
                            <TableHead className='truncate'>View All Details</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>1.</TableCell>
                            <TableCell>John Doe</TableCell>
                            <TableCell className='truncate'>14-11-2024</TableCell>
                            <TableCell>1234567890</TableCell>
                            <TableCell className='truncate'>qwerty@gmail.com</TableCell>
                            <TableCell className='truncate'>Bengaluru</TableCell>
                            <TableCell className='truncate'><span className='text-blue-600 bg-blue-100 p-1 rounded-md'>In Progress</span></TableCell>
                           <Link to='/applied_provider_details'> <TableCell className='truncate'><span className='hover:underline cursor-pointer'>Click Here</span></TableCell></Link>
                        </TableRow>
                        <TableRow>
                            <TableCell>2.</TableCell>
                            <TableCell>Jane Smith</TableCell>
                            <TableCell className='truncate'>14-11-2024</TableCell>
                            <TableCell>0987654321</TableCell>
                            <TableCell className='truncate'>example@gmail.com</TableCell>
                            <TableCell className='truncate'>Bengaluru</TableCell>
                            <TableCell className='truncate'><span className='text-green-600 bg-green-100 p-1 rounded-md'>Verified</span></TableCell>
                            <Link to='/applied_provider_details'><TableCell className='truncate'><span className='hover:underline cursor-pointer'>Click Here</span></TableCell></Link>
                        </TableRow>
                        <TableRow>
                            <TableCell>2.</TableCell>
                            <TableCell>Jane Smith</TableCell>
                            <TableCell className='truncate'>14-11-2024</TableCell>
                            <TableCell>0987654321</TableCell>
                            <TableCell className='truncate'>example@gmail.com</TableCell>
                            <TableCell className='truncate'>Bengaluru</TableCell>
                            <TableCell className='truncate'><span className='text-red-600 bg-red-100 p-1 rounded-md'>Rejected</span></TableCell>
                            <Link to='/applied_provider_details'> <TableCell className='truncate'><span className='hover:underline cursor-pointer'>Click Here</span></TableCell></Link>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            <div>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem className='bg-black rounded-md text-white'>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" >2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem className="hidden lg:block">
                            <PaginationLink href="#" >3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}

export default AppliedProvider