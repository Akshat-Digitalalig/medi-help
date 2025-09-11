import React, { useState, useEffect } from "react";
import { LanguageSwitcher } from "./LangSwitcher";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { hospitalData } from "@/lib/constant/Hospital";
import { ClipboardPlus, Search } from "lucide-react";
import Image from "next/image";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import { doctors } from "@/lib/constant/Doctors";
import { allSubTreatmentLinks } from "@/app/treatments/Treatment";
import Link from "next/link";
import NavBarHealthAdvisor from "../Forms/NavBarHealthAdvisor";

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

    const q = input.trim().toLowerCase();

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
    const filteredData = filterData(query);
    console.log(filteredData);
    setSearchResults(filteredData);
  }, [query]);

  useEffect(() => {
    console.log("searchResults ===", searchResults);
  }, [searchResults]);

  // 5) Keyboard Shortcut (optional)
  // useEffect(() => {
  //   const down = (e: KeyboardEvent) => {
  //     if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
  //       e.preventDefault();
  //       setOpen((prev) => !prev);
  //     }
  //   };
  //   document.addEventListener("keydown", down);
  //   return () => document.removeEventListener("keydown", down);
  // }, []);

  return (
    <div className="bg-white text-white h-fit flex justify-between items-center py-0 md:py-2 lg:py-0">
      <div className="ml-4 flex">
        <div className="hidden sm:flex items-center text-sm font-semibold my-text">
  For any support
  <span className="ml-2">
    Ethiopia 📞 +251954676767
    <span className="mx-2">&amp;</span>
    UAE 📞 +971585114522
    <span className="mx-2">&amp;</span>
    India 📞 +919897186585
  </span>
</div>

{/* Mobile Support Bar */}
<div className="sm:hidden fixed top-8 left-0 w-full bg-black/70 text-white px-3 py-2 text-xs text-center z-50">
  Ethiopia 📞 +251954676767 &nbsp; &amp; &nbsp;
  UAE 📞 +971585114522 &nbsp; &amp; &nbsp;
  India 📞 +919897186585
</div>
      </div>
      <div>
        <div className="flex">
          <NavBarHealthAdvisor />
          <Link
            href={"/consult-online"}
            className="hidden md:flex ml-1 lg:hidden items-center justify-center leading-none text-xs font-semibold bg-myred border-none gap-[0px] xl:gap-1 px-1 xl:px-4 py-2 cursor-pointer text-white rounded-md hover:bg-white hover:text-myred hover:border-myred border-2 duration-300"
          >
            Free Consults
            <ClipboardPlus size={25} />
          </Link>
        </div>
      </div>
      <div className="flex">
        <nav className="hidden md:flex md:w-[200px] lg:w-[300px] items-center gap-2.5">
          {/* ---- Button to open the Command Dialog ---- */}
          <button
            onClick={() => setOpen(true)}
            className="flex items-center text-sm border w-full px-3 rounded-2xl my-border md:gap-x-4 p-1"
          >
            <span className="flex items-center w-80 gap-x-1 my-text"> Search... </span>
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
                    {searchResults.hospitals.length > 0 && (
                      <div className="p-4">
                        <div className="text-lg font-semibold mb-4">
                          Hospitals
                        </div>
                        <div className="space-y-4">
                          {searchResults.hospitals.map((hospital) => (
                            <ListItems
                              key={hospital.id}
                              onClick={() => {
                                router.push(`/hospitals/${hospital.id}`);
                                setOpen(false);
                              }}
                              img={hospital.mainImage}
                              name={hospital.name}
                              location={hospital.address.city}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    <CommandSeparator />

                    {/* ---- Doctors ---- */}
                    {searchResults.doctors.length > 0 && (
                      <div className="p-4">
                        <div className="text-lg font-semibold mb-4">
                          Doctors
                        </div>
                        <div className="space-y-4">
                          {searchResults.doctors.map((doctor) => (
                            <ListItems
                              key={doctor.id}
                              onClick={() => {
                                router.push(`/doctors/${doctor.id}`);
                                setOpen(false);
                              }}
                              img={doctor.image}
                              name={doctor.name}
                              location={doctor.designation}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    <CommandSeparator />

                    {/* ---- Treatments ---- */}
                    {searchResults.treatments.length > 0 && (
                      <div className="p-4">
                        <div className="text-lg font-semibold mb-4">
                          Treatments
                        </div>
                        <div className="space-y-4">
                          {searchResults.treatments.map((treatment, index) => (
                            <div
                              key={index}
                              className="cursor-pointer p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                              onClick={() => {
                                setOpen(false);
                                router.push(treatment.link);
                              }}
                            >
                              <p className="text-sm text-gray-800 hover:text-blue-600">
                                {treatment.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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

const ListItems: React.FC<ListItemsProps> = ({
  img,
  name,
  location,
  onClick,
}) => {
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
