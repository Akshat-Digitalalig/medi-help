import React, { useState } from 'react'
import { LanguageSwitcher } from './LangSwitcher';
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import { hospitalData } from "@/lib/constant/Hospital"
import { Search } from 'lucide-react';
import Image from 'next/image';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useRouter } from 'next/navigation';

export default function UtilsBar() {
    const [isCommandOpen, setIsCommandOpen] = useState(false);
    const [searchResults, setSearchResults] = useState(hospitalData);
    const router = useRouter();
    const handleSearch = (query: string) => {
        if (!query) {
            setSearchResults(hospitalData);
            return;
        }

        const filteredResults = hospitalData.filter((hospital) =>
            hospital.name.toLowerCase().includes(query.toLowerCase())
        );

        setSearchResults(filteredResults);
    };
    return (
        <div className='bg-myblue text-white h-fit flex justify-between items-center '>
            <div className='ml-4 flex '>
                <h1 className='text-sm hidden md:block'>We Are Providing Best Services And Facility! </h1>
                <h1 className='text-sm ml-1 font-semibold'>For any support 📞 +91 98971 86585</h1>
            </div>
            <div className='flex'>
                <LanguageSwitcher />
                <nav className="flex items-center gap-2.5  md:ml-4 md:mr-4 ">
                    {/* Command-based Search Bar */}
                    <button onClick={() => setIsCommandOpen(true)} className="flex items-center border border-white gap-2.5  p-2 rounded-2xl  ">
                        <span className=''><Search size={16} strokeWidth={3}  /> </span>
                    </button>
                    <Command>
                    <CommandDialog open={isCommandOpen} onOpenChange={setIsCommandOpen}>
                    <DialogTitle> </DialogTitle>
                        <CommandInput placeholder="Search Hospitals, Doctors, Treatment, etc..." onValueChange={handleSearch} />
                        <CommandList>
                            {searchResults.length > 0 ? (
                                <CommandGroup heading='Search Results'>
                                    {searchResults.map((hospital, index) => (
                                        <CommandItem  key={index} className='cursor-pointer'>
                                            <ListItems onClick={() => [
                                                router.push(`/hospitals/${hospital.id}`),
                                                setIsCommandOpen(false)
                                            ]} img={hospital.mainImage} name={hospital.name} location={hospital.address.city} />
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            ) : (
                                <CommandEmpty>No results found.</CommandEmpty>
                            )}
                        </CommandList>
                    </CommandDialog>
                </Command>
                </nav>
            </div>
        </div>
    )
}
interface ListItemsProps {
    img: string;
    name: string;
    location: string;
    onClick: () => void;
}

const ListItems: React.FC<ListItemsProps> = ({ img, name, location, onClick }) => {
    return (
        <div className='flex gap-x-2' onClick={onClick}>
            <div>
                <Image src={img} alt='img' className='rounded-lg' height={70} width={70} />
            </div>
            <div>
                <p>{name}</p>
                <p className='text-blue-500'>{location}</p>
            </div>
        </div>
    )
}