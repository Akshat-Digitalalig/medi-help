import React, { useState, useEffect } from "react";
import { LanguageSwitcher } from "./LangSwitcher";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { hospitalData } from "@/lib/constant/Hospital";
import { Search } from "lucide-react";
import Image from "next/image";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import { doctors } from "@/lib/constant/Doctors";
import { allSubTreatmentLinks } from "@/app/treatments/Treatment";

// ---------- Types (adjust as needed) ----------
interface Hospital {
  id: string;
  name: string;
  mainImage: string;
  address: {
    city: string;
  };
  specialties: string[];
}

interface Doctor {
  id: string;
  name: string;
  designation: string;
  image: string;
  tags?: string[];
  specialties?: string[];
}

interface Treatment {
  name: string;
  link: string;
}

// ---------- UtilsBar Component ----------
export default function UtilsBar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  // 1) Original Data
  const treatmentLinks: Treatment[] = allSubTreatmentLinks(); // or your actual data source

  // 2) State to store filtered results
  const [searchResults, setSearchResults] = useState<{
    hospitals: Hospital[];
    doctors: Doctor[];
    treatments: Treatment[];
  }>({
    hospitals: hospitalData,
    doctors: doctors,
    treatments: treatmentLinks,
  });

  // 3) The actual filter function
  const filterData = (input: string) => {
    if (!input) {
      // If query is empty, show all
      return {
        hospitals: hospitalData,
        doctors: doctors,
        treatments: treatmentLinks,
      };
    }

    const q = input.toLowerCase();

    const filteredHospitals = hospitalData.filter((h) => {
      const matchName = h.name.toLowerCase().includes(q);
      const matchCity = h.address.city.toLowerCase().includes(q);
      const matchSpecialty = h.specialties.some((spec) =>
        spec.toLowerCase().includes(q)
      );
      return matchName || matchCity || matchSpecialty;
    });

    const filteredDoctors = doctors.filter((d) => {
      const matchName = d.name.toLowerCase().includes(q);
      const matchDesignation = d.designation.toLowerCase().includes(q);
      const matchTags =
        d.tags?.some((tag) => tag.toLowerCase().includes(q)) ?? false;
      const matchSpecialties =
        d.specialties?.some((spec) => spec.toLowerCase().includes(q)) ?? false;

      return matchName || matchDesignation || matchTags || matchSpecialties;
    });

    const filteredTreatments = treatmentLinks.filter((t) =>
      t.name.toLowerCase().includes(q)
    );

    return {
      hospitals: filteredHospitals,
      doctors: filteredDoctors,
      treatments: filteredTreatments,
    };
  };

  // 4) Re-run filter whenever query changes (including backspace!)
  useEffect(() => {
    setSearchResults(filterData(query));
  }, [query]);

  // 5) Keyboard Shortcut (optional)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="bg-myblue text-white h-fit flex justify-between items-center">
      <div className="ml-4 flex">
        <h1 className="text-sm ml-1 font-semibold flex flex-col sm:flex-row">
          For any support <span className="phone-number">📞 +91 98971 86585</span>
        </h1>
      </div>
      <div className="flex">
        <nav className="hidden md:flex items-center gap-2.5">
          {/* ---- Button to open the Command Dialog ---- */}
          <button
            onClick={() => setOpen(true)}
            className="flex items-center text-sm border w-full px-3 rounded-2xl border-white md:gap-x-4 p-1"
          >
            <span className="flex items-center w-80 gap-x-1"> Search... </span>
            <span>
              <Search size={16} strokeWidth={3} />
            </span>
          </button>

          {/* ---- Command Dialog ---- */}
          <Command>
            <CommandDialog open={open} onOpenChange={setOpen}>
              <DialogTitle className="text-lg font-semibold"></DialogTitle>
              <CommandInput
                placeholder="Search Hospitals, Doctors, Treatments..."
                // Use the state to control the input
                value={query}
                onValueChange={setQuery}
              />
              <CommandList>
                {searchResults.hospitals.length > 0 ||
                searchResults.doctors.length > 0 ||
                searchResults.treatments.length > 0 ? (
                  <>
                    {/* ---- Hospitals ---- */}
                    <CommandGroup heading="Hospitals">
                      {searchResults.hospitals.map((hospital) => (
                        <CommandItem key={hospital.id} className="cursor-pointer">
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

                    {/* ---- Doctors ---- */}
                    <CommandGroup heading="Doctors">
                      {searchResults.doctors.map((doctor) => (
                        <CommandItem key={doctor.id} className="cursor-pointer">
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

                    {/* ---- Treatments ---- */}
                    <CommandGroup heading="Treatments">
                      {searchResults.treatments.map((treatment, index) => (
                        <CommandItem key={index} className="cursor-pointer">
                          <div
                            className="flex gap-x-2 hover:text-myblue"
                            onClick={() => {
                              router.push(treatment.link);
                              setOpen(false);
                            }}
                          >
                            <p className="hover:text-myblue">{treatment.name}</p>
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
        <LanguageSwitcher />
      </div>
    </div>
  );
}

// ---- A Reusable List Item Component ----
interface ListItemsProps {
  img: string;
  name: string;
  location: string;
  onClick: () => void;
}

const ListItems: React.FC<ListItemsProps> = ({ img, name, location, onClick }) => {
  return (
    <div
      className="flex gap-x-4 rounded-lg transition-all duration-300 cursor-pointer items-center"
      onClick={onClick}
    >
      <div className="flex-shrink-0">
        <Image
          src={img}
          alt={name}
          className="rounded-lg object-cover"
          height={80}
          width={80}
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-semibold text-sm truncate">{name}</p>
        <p className="text-blue-500 text-sm truncate">{location}</p>
      </div>
    </div>
  );
};
