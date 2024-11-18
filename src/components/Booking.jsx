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
import cleaning from './../assets/cleaning.png';
import plumbing from './../assets/plumber.png';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "./ui/pagination"

const Booking = () => {
    return (
        <div className='px-[1vw] my-5'>
            <div className='flex lg:justify-between lg:items-center flex-col lg:flex-row '>
                <h1 className='text-2xl'>Booking - 2</h1>
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
                            <TableHead className='truncate'>Customer Name</TableHead>
                            <TableHead className='truncate'>Phone No</TableHead>
                            <TableHead>Address</TableHead>
                            <TableHead className="truncate">Service Booked</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className='truncate'>Payment mode</TableHead>
                            <TableHead className='truncate'>Service Provider</TableHead>
                            <TableHead className='truncate'>Booked on</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>1.</TableCell>
                            <TableCell className="font-medium">John Doe</TableCell>
                            <TableCell>1234567890</TableCell>
                            <TableCell>Bengaluru</TableCell>
                            <TableCell className='truncate'>Home Cleaning</TableCell>
                            <TableCell className='truncate'>Rs 399/-</TableCell>
                            <TableCell>COD</TableCell>
                            <TableCell>J Doe</TableCell>
                            <TableCell className='truncate'>14-11-2024</TableCell>
                            <TableCell className='truncate'>Pending</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2.</TableCell>
                            <TableCell className="font-medium">John Doe</TableCell>
                            <TableCell>1234567890</TableCell>
                            <TableCell>Bengaluru</TableCell>
                            <TableCell className='truncate'>Home Cleaning</TableCell>
                            <TableCell className='truncate'>Rs 399/-</TableCell>
                            <TableCell>COD</TableCell>
                            <TableCell>J Doe</TableCell>
                            <TableCell className='truncate'>14-11-2024</TableCell>
                            <TableCell className='truncate'>Completed</TableCell>
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

export default Booking