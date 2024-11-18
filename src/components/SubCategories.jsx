import React from 'react'
import { Button } from './ui/button'
import { CirclePlus, DeleteIcon, Edit } from 'lucide-react'
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
import img1 from './../assets/provider-19.jpg';
import img2 from './../assets/provider-23.jpg';
import img3 from './../assets/service-47.png';
import img4 from './../assets/service-48.png';
import img5 from './../assets/service-49.png';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination'



const SubCategories = () => {
    return (
        <div className='px-[1vw] my-5'>
            <div className='flex lg:justify-between lg:items-center flex-col lg:flex-row '>
                <h1 className='text-2xl'>Sub Categories - 2 </h1>
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
                            <DialogHeader className='space-y-6'>
                                <DialogTitle className='lg:text-2xl text-xl'>
                                    Add Sub Categories
                                </DialogTitle>
                                {/* <Separator className='text-black'/> */}
                                {/* <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription> */}
                            </DialogHeader>
                            <div className="flex flex-col py-4 space-y-3">
                                <div className="flex  items-center gap-4">
                                    <Label htmlFor="name" className="w-44">
                                        Category
                                    </Label>
                                    <Select >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">Home cleaning & maintanenace</SelectItem>
                                            <SelectItem value="dark">Plumbing</SelectItem>
                                            <SelectItem value="system">Electrical</SelectItem>
                                        </SelectContent>
                                    </Select>

                                </div>
                                <div className="flex  items-center gap-4">
                                    <Label htmlFor="name" className="w-44">
                                        Sub Category
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
                                        Description
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
                                        Includes
                                    </Label>
                                    <Input
                                        id="icon"
                                        type="text"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <Label htmlFor="icon" className="w-44">
                                        Excludes
                                    </Label>
                                    <Input
                                        id="icon"
                                        type="text"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <Label htmlFor="icon" className="w-44">
                                        Images
                                    </Label>
                                    <Input
                                        id="icon"
                                        type="file"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <Label htmlFor="icon" className="w-44">
                                        Video
                                    </Label>
                                    <Input
                                        id="icon"
                                        type="file"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <Label htmlFor="icon" className="w-44">
                                        Price
                                    </Label>
                                    <Input
                                        id="icon"
                                        type="text"
                                        // defaultValue="Rs 399/-"
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
                            <TableHead className='truncate'>Sl No.</TableHead>
                            <TableHead className="w-[250px]">Categories</TableHead>
                            <TableHead className="truncate">Sub Categories</TableHead>
                            <TableHead className='w-[500px]'>Description</TableHead>
                            <TableHead>Includes</TableHead>
                            <TableHead>Excludes</TableHead>
                            <TableHead>Images</TableHead>
                            <TableHead>Video</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>1.</TableCell>
                            <TableCell>Home Cleaning & maintenance</TableCell>
                            <TableCell>Deep home cleaning</TableCell>
                            <TableCell className='w-[500px]'>Home cleaning and maintenance encompass a wide array of tasks aimed at ensuring.</TableCell>
                            <TableCell className='w-[400px]'>Deep cleaning of surfaces</TableCell>
                            <TableCell className='w-[400px]'>Cleaning of external areas like gardens and patios</TableCell>
                            <TableCell className='w-[400px]'>
                                <Dialog>
                                    <DialogTrigger>View Images</DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Added Images</DialogTitle>
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

                            </TableCell>
                            <TableCell className='w-[400px]'>
                                <Dialog>
                                    <DialogTrigger>View Video</DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Video</DialogTitle>
                                            <DialogDescription>
                                                <iframe src="" frameborder="0">
                                                    <img src={img1} alt="" />
                                                </iframe>
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                            <TableCell className='w-[400px]'>Rs 399/-</TableCell>
                            <TableCell>
                                <div className='flex gap-4 items-center'>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Edit className='text-blue-500 size-5' />
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader className='space-y-6'>
                                                <DialogTitle className='lg:text-2xl text-xl'>
                                                    Edit Sub Categories
                                                </DialogTitle>
                                                {/* <Separator className='text-black'/> */}
                                                {/* <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription> */}
                                            </DialogHeader>
                                            <div className="flex flex-col py-4 space-y-3">
                                                <div className="flex  items-center gap-4">
                                                    <Label htmlFor="name" className="w-44">
                                                        Category
                                                    </Label>
                                                    <Select >
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="select category" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="light">Home cleaning & maintanenace</SelectItem>
                                                            <SelectItem value="dark">Plumbing</SelectItem>
                                                            <SelectItem value="system">Electrical</SelectItem>
                                                        </SelectContent>
                                                    </Select>

                                                </div>
                                                <div className="flex  items-center gap-4">
                                                    <Label htmlFor="name" className="w-44">
                                                        Sub Category
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        type="text"
                                                        defaultValue="Deep home cleaning"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="flex  items-center gap-4">
                                                    <Label htmlFor="name" className="w-44">
                                                        Description
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        type="text"
                                                        defaultValue="Home cleaning and maintenance encompass a wide array of tasks aimed at ensuring that a living space remains hygienic, organized, and functioning efficiently."
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <Label htmlFor="icon" className="w-44">
                                                        Includes
                                                    </Label>
                                                    <Input
                                                        id="icon"
                                                        type="text"
                                                        className="col-span-3"
                                                        defaultValue="Deep cleaning of surfaces"
                                                    />
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <Label htmlFor="icon" className="w-44">
                                                        Excludes
                                                    </Label>
                                                    <Input
                                                        id="icon"
                                                        type="text"
                                                        defaultValue="Cleaning of external areas like gardens and patios"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <Label htmlFor="icon" className="w-44">
                                                        Images
                                                    </Label>
                                                    <Input
                                                        id="icon"
                                                        type="file"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <Label htmlFor="icon" className="w-44">
                                                        Video
                                                    </Label>
                                                    <Input
                                                        id="icon"
                                                        type="file"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <Label htmlFor="icon" className="w-44">
                                                        Price
                                                    </Label>
                                                    <Input
                                                        id="icon"
                                                        type="text"
                                                        defaultValue="Rs 399/-"
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
                                            <DeleteIcon className='text-red-500 size-6' />
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

export default SubCategories