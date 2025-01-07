import React, { useState } from 'react';
import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from '@/components/ui/command';
import { hospitalData } from "@/lib/constant/Hospital";
import { Search } from 'lucide-react';
import Image from 'next/image';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useRouter } from 'next/navigation';
import { doctors } from "@/lib/constant/Doctors";
import { allSubTreatmentLinks } from "@/app/treatments/Treatment"

export default function SearchBar() {
	const treatmentLinks = allSubTreatmentLinks();
	const [searchResults, setSearchResults] = useState({
		hospitals: hospitalData.slice(0, 5),
		doctors: doctors.slice(0, 5),
		treatment: treatmentLinks.slice(0, 5),
	});
	const [open, setOpen] = React.useState(false)



	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen((open) => !open)
			}
		}

		document.addEventListener("keydown", down)
		return () => document.removeEventListener("keydown", down)
	}, [])
	const router = useRouter();

	const handleSearch = (query: string) => {
		if (!query) {
			setSearchResults({
				hospitals: hospitalData.slice(0, 10),
				doctors: doctors.slice(0, 10),
				treatment: treatmentLinks.slice(0, 10),
			});
			return;
		}

		// Filter hospitals
		const filteredHospitals = hospitalData.filter((hospital) =>
			hospital.name.toLowerCase().includes(query.toLowerCase())
		).slice(0, 10);

		// Filter doctors
		const filteredDoctors = doctors.filter((doctor) =>
			doctor.name.toLowerCase().includes(query.toLowerCase())
		).slice(0, 10);

		// Filter treatments
		const filteredTreatments = treatmentLinks.filter((treatment) =>
			treatment.name.toLowerCase().includes(query.toLowerCase())
		).slice(0, 10);

		setSearchResults({
			hospitals: filteredHospitals,
			doctors: filteredDoctors,
			treatment: filteredTreatments,
		});
	};
	return (
		<div>
			<nav className="flex items-center ml-8">
				<button onClick={() => setOpen(true)} className="flex items-center text-myblue text-sm border-2 px-3 rounded-2xl  border-myblue gap-2.5 p-1  ">
					<span><Search size={16} strokeWidth={3} /></span>
					<span>Search</span>
				</button>
				<Command>
					<CommandDialog open={open} onOpenChange={setOpen} >
						<DialogTitle className="text-lg font-semibold"></DialogTitle>
						<CommandInput placeholder="Search Hospitals, Doctors, Treatments, etc..." onValueChange={handleSearch} />
						<CommandList>
							{searchResults.hospitals.length > 0 || searchResults.doctors.length > 0 || searchResults.treatment.length > 0 ? (
								<>
									<CommandGroup heading="Hospitals">
										{searchResults.hospitals.map((hospital, index) => (
											<CommandItem key={index} className="cursor-pointer">
												<ListItems
													onClick={() => {
														router.push(`/hospitals/${hospital.id}`);
														setOpen(false);
													}}
													img={hospital.mainImage}
													name={hospital.name}
													location={hospital.address.city}
												/>
											</CommandItem>
										))}
									</CommandGroup>
									<CommandSeparator />
									<CommandGroup heading="Doctors">
										{searchResults.doctors.map((doctor, index) => (
											<CommandItem key={index} className="cursor-pointer">
												<ListItems
													onClick={() => {
														router.push(`/doctors/${doctor.id}`);
														setOpen(false);
													}}
													img={doctor.image}
													name={doctor.name}
													location={doctor.designation}
												/>
											</CommandItem>
										))}
									</CommandGroup>
									
									<CommandSeparator />
									<CommandGroup heading="Treatments">
										{searchResults.treatment.map((treatment, index) => (
											<CommandItem key={index} className="cursor-pointer">
												<div className="flex gap-x-2" onClick={() => {
													router.push(`${treatment.link}`);
													setOpen(false);
												}}>	
													<div>
														{/* <Image src={img} alt="img" className="rounded-lg" height={70} width={70} /> */}
													</div>
													<div>
														<p>{treatment.name} </p>
														{/* <p className="text-blue-500">{location}</p> */}
													</div>
												</div>
											</CommandItem>
										))}
									</CommandGroup>
								</>
							) : (
								<CommandEmpty>No results found.</CommandEmpty>
							)}
						</CommandList>
					</CommandDialog>
				</Command>
			</nav>
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
		<div className="flex gap-x-2" onClick={onClick}>
			<div>
				<Image src={img} alt="img" className="rounded-lg" height={70} width={70} />
			</div>
			<div>
				<p>{name}</p>
				<p className="text-blue-500">{location}</p>
			</div>
		</div>
	);
};

