import React from 'react'
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
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "./ui/pagination"

const User = () => {
    return (
        <div className='px-[1vw] my-5'>
            <div className='flex lg:justify-between lg:items-center flex-col lg:flex-row '>
                <h1 className='text-2xl'>Customer</h1>
                <div className='flex lg:gap-4 items-center gap-2 my-3 lg:my-0'>
                    <Input placeholder='Search'></Input>
                </div>
            </div>
            <Separator className='my-4' />

         <div className='overflow-x-auto lg:max-w-[1000px] max-w-[380px] md:max-w-[580px] lg:h-[65vh] h-[58vh] md:h-[70vh]'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='truncate'>Sl No.</TableHead>
                            <TableHead className="truncate">Customer Name</TableHead>
                            <TableHead className="truncate">Phone No</TableHead>
                            <TableHead className='w-[300px]'>Email</TableHead>
                            <TableHead>Address</TableHead>
                            <TableHead>No of Booking</TableHead>
                            <TableHead>Account status Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>1.</TableCell>
                            <TableCell>John Doe</TableCell>
                            <TableCell>1234567890</TableCell>
                            <TableCell className='w-[400px]'>qwerty@gmail.com</TableCell>
                            <TableCell className='w-[400px]'>Bengaluru</TableCell>
                            <TableCell className='w-[400px]'>2</TableCell>
                            <TableCell className='w-[400px]'>
                                <select name="" id="" className='border border-gray-400 p-1 rounded-md'>
                                    <option value="active">Active</option>
                                    <option value="block">Block</option>
                                    <option value="unblock">Unblock</option>
                                </select>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2.</TableCell>
                            <TableCell>John Doe</TableCell>
                            <TableCell>1234567890</TableCell>
                            <TableCell className='w-[400px]'>qwerty@gmail.com</TableCell>
                            <TableCell className='w-[400px]'>Bengaluru</TableCell>
                            <TableCell className='w-[400px]'>2</TableCell>
                            <TableCell className='w-[400px]'>
                                <select name="" id="" className='border border-gray-400 p-1 rounded-md'>
                                    <option value="active">Active</option>
                                    <option value="block">Block</option>
                                    <option value="unblock">Unblock</option>
                                </select>
                            </TableCell>
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

export default User