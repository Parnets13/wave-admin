import React from 'react'
import { Button } from './ui/button'
import { CirclePlus, Delete, DeleteIcon, Edit } from 'lucide-react'
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
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination'



const Offers = () => {
    return (
        <div className='px-[1vw] my-5'>
            <div className='flex lg:justify-between lg:items-center flex-col lg:flex-row '>
                <h1 className='text-2xl'>Offers - 2</h1>
                <div className='flex lg:gap-4 items-center gap-2 my-3 lg:my-0'>
                    <Input placeholder='Search'></Input>
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className='flex items-center'>
                                <Button className="bg-black px-5 text-white h-9 hover:opacity-90">
                                    Add <CirclePlus className='size-2' />
                                </Button>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle className='lg:text-2xl text-xl'>
                                    Add Offers
                                </DialogTitle>
                            </DialogHeader>
                            <div className="flex flex-col py-4 space-y-3">
                                <div className="flex  items-center gap-4">
                                    <Label htmlFor="name" className="w-44">
                                        Offers
                                    </Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        // defaultValue="Pedro Duarte"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="flex  items-center gap-4">
                                    <Label htmlFor="name" className="w-44">
                                        Coupon ID
                                    </Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        // defaultValue="Pedro Duarte"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <Label htmlFor="icon" className="w-44">
                                        Image
                                    </Label>
                                    <Input
                                        id="icon"
                                        type="file"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="flex  items-center gap-4">
                                    <Label htmlFor="date" className="w-44">
                                        Start Date
                                    </Label>
                                    <Input
                                        id="date"
                                        type="date"
                                        // defaultValue="Pedro Duarte"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="flex  items-center gap-4">
                                    <Label htmlFor="date" className="w-44">
                                        End Date
                                    </Label>
                                    <Input
                                        id="date"
                                        type="date"
                                        // defaultValue="Pedro Duarte"
                                        className="col-span-3"
                                    />
                                </div>
                            </div>
                            {/* <DialogFooter > */}
                            <div className='flex justify-center items-center'>
                                <Button type="submit" className="bg-black px-5 text-white h-9 hover:opacity-90">Add <CirclePlus className='size-2' /></Button>
                            </div>
                            {/* </DialogFooter> */}
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <Separator className='my-4' />

            <div className='overflow-x-auto lg:max-w-[1000px] max-w-[380px] md:max-w-[580px] lg:h-[65vh] h-[58vh] md:h-[70vh]'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Sl No.</TableHead>
                            <TableHead className="w-[300px]">Offers</TableHead>
                            <TableHead>Coupon ID</TableHead>
                            <TableHead className='truncate'>Start Date</TableHead>
                            <TableHead className='truncate'>End Date</TableHead>
                            <TableHead>Image</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>1.</TableCell>
                            <TableCell className="font-medium">Home Cleaning & maintenance</TableCell>
                            <TableCell>COUPON123</TableCell>
                            <TableCell>15-11-2024</TableCell>
                            <TableCell>24-11-2024</TableCell>
                            <TableCell>
                                <img src={cleaning} alt="" className='w-8' />
                            </TableCell>
                            <TableCell>
                                <div className='flex gap-4 items-center'>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                        <Edit className='text-blue-500 size-5 cursor-pointer' />
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle className='lg:text-2xl text-xl'>
                                                    Edit Offers
                                                </DialogTitle>
                                            </DialogHeader>
                                            <div className="flex flex-col py-4 space-y-3">
                                                <div className="flex  items-center gap-4">
                                                    <Label htmlFor="name" className="w-44">
                                                        Offers
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        type="text"
                                                        defaultValue="Home Cleaning & maintenance"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="flex  items-center gap-4">
                                                    <Label htmlFor="name" className="w-44">
                                                        Coupon ID
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        type="text"
                                                        defaultValue="COUPON123"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <Label htmlFor="icon" className="w-44">
                                                        Image
                                                    </Label>
                                                    <Input
                                                        id="icon"
                                                        type="file"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="flex  items-center gap-4">
                                                    <Label htmlFor="date" className="w-44">
                                                        Start Date
                                                    </Label>
                                                    <Input
                                                        id="date"
                                                        type="date"
                                                        // defaultValue="Pedro Duarte"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="flex  items-center gap-4">
                                                    <Label htmlFor="date" className="w-44">
                                                        End Date
                                                    </Label>
                                                    <Input
                                                        id="date"
                                                        type="date"
                                                        // defaultValue="Pedro Duarte"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                            </div>
                                            {/* <DialogFooter > */}
                                            <div className='flex justify-center items-center'>
                                                <Button type="submit" className="bg-black px-5 text-white h-9 hover:opacity-90">Save</Button>
                                            </div>
                                            {/* </DialogFooter> */}
                                        </DialogContent>
                                    </Dialog>

                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <DeleteIcon className='text-red-500 size-6 cursor-pointer' />
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                                <DialogDescription>
                                                    This action cannot be undone. Are you sure you want to permanently
                                                    delete this file from our servers?
                                                </DialogDescription>
                                            </DialogHeader>
                                            <DialogFooter>
                                                <Button type="submit">Confirm</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2.</TableCell>
                            <TableCell className="font-medium">Plumbing</TableCell>
                            <TableCell>COUPON123</TableCell>
                            <TableCell>15-11-2024</TableCell>
                            <TableCell>24-11-2024</TableCell>
                            <TableCell>
                                <img src={cleaning} alt="" className='w-8' />
                            </TableCell>
                            <TableCell>
                                <div className='flex gap-4 items-center'>
                                <Dialog>
                                        <DialogTrigger asChild>
                                        <Edit className='text-blue-500 size-5 cursor-pointer' />
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle className='lg:text-2xl text-xl'>
                                                    Edit Offers
                                                </DialogTitle>
                                            </DialogHeader>
                                            <div className="flex flex-col py-4 space-y-3">
                                                <div className="flex  items-center gap-4">
                                                    <Label htmlFor="name" className="w-44">
                                                        Offers
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        type="text"
                                                        defaultValue="Home Cleaning & maintenance"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="flex  items-center gap-4">
                                                    <Label htmlFor="name" className="w-44">
                                                        Coupon ID
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        type="text"
                                                        defaultValue="COUPON123"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <Label htmlFor="icon" className="w-44">
                                                        Image
                                                    </Label>
                                                    <Input
                                                        id="icon"
                                                        type="file"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="flex  items-center gap-4">
                                                    <Label htmlFor="date" className="w-44">
                                                        Start Date
                                                    </Label>
                                                    <Input
                                                        id="date"
                                                        type="date"
                                                        // defaultValue="Pedro Duarte"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="flex  items-center gap-4">
                                                    <Label htmlFor="date" className="w-44">
                                                        End Date
                                                    </Label>
                                                    <Input
                                                        id="date"
                                                        type="date"
                                                        // defaultValue="Pedro Duarte"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                            </div>
                                            {/* <DialogFooter > */}
                                            <div className='flex justify-center items-center'>
                                                <Button type="submit" className="bg-black px-5 text-white h-9 hover:opacity-90">Save</Button>
                                            </div>
                                            {/* </DialogFooter> */}
                                        </DialogContent>
                                    </Dialog>

                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <DeleteIcon className='text-red-500 size-6 cursor-pointer' />
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                                <DialogDescription>
                                                    This action cannot be undone. Are you sure you want to permanently
                                                    delete this file from our servers?
                                                </DialogDescription>
                                            </DialogHeader>
                                            <DialogFooter>
                                                <Button type="submit">Confirm</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </div>
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

export default Offers