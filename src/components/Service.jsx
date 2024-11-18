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

const Service = () => {
    return (
        <div className='px-[1vw] my-5'>
            <div className='flex lg:justify-between lg:items-center flex-col lg:flex-row '>
                <h1 className='text-2xl'>Services - 2</h1>
                <div className='flex lg:gap-4 items-center gap-2 my-3 lg:my-0'>
                    <Input placeholder='Search'></Input>

                </div>
            </div>
            <Separator className='my-4' />

            <div className='overflow-x-auto lg:max-w-[1000px] max-w-[380px] md:max-w-[580px] lg:h-[65vh] h-[58vh] md:h-[70vh]'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Sl No.</TableHead>
                            <TableHead className="w-[]">Categories</TableHead>
                            <TableHead className="w-[]">Sub Categories</TableHead>
                            <TableHead className="w-[]">Service Provider</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>1.</TableCell>
                            <TableCell className="font-medium">Home Cleaning & maintenance</TableCell>
                            <TableCell className="font-medium">Deep home cleaning</TableCell>
                            <TableCell>
                                <select name="" id="" className='border border-gray-300 p-2 rounded-md'>
                                    <option value="" key="">View Provider</option>
                                    <option value="" key="">John Doe</option>
                                    <option value="" key="">J Doe</option>
                                </select>
                            </TableCell>
                            <TableCell>Rs 399/-</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2.</TableCell>
                            <TableCell className="font-medium">Home Cleaning & maintenance</TableCell>
                            <TableCell className="font-medium">Plumbing </TableCell>
                            <TableCell>
                                <select name="" id="" className='border border-gray-300 p-2 rounded-md'>
                                    <option value="" key="">View Provider</option>
                                    <option value="" key="">John Doe</option>
                                    <option value="" key="">J Doe</option>
                                </select>
                            </TableCell>
                            <TableCell>Rs 399/-</TableCell>
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

export default Service