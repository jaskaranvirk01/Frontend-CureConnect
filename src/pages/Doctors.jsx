import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext"
const Doctors = () => {
    const { speciality } = useParams();
    const { doctors } = useContext(AppContext);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const Navigate = useNavigate();

    const applyFilters = () => {
        if (speciality) {
            setFilteredDoctors(doctors.filter(doc => doc.speciality === speciality));
        } else {
            setFilteredDoctors(doctors);
        }
    }

    useEffect(() => {
        applyFilters();
    }, [doctors, speciality]);

    return (
        <div>
            <p className='text-gray-600'>Browse through the doctors specialist.</p>
            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5 '>
                <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilters ? "bg-[#5f6fff] text-white" : ""}`} onClick={() => setShowFilters(prev => !prev)}>Filters</button>
                <div className={` flex-col gap-4 text-sm text-gray-600 ${showFilters ? "flex" : "hidden sm:flex"}`}>
                    <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === "General physician" ? Navigate("/doctors") : Navigate("/doctors/General physician")}>General physician</p>
                    <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === "Gynecologist" ? Navigate("/doctors") : Navigate("/doctors/Gynecologist")}>Gynecologist</p>
                    <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === "Dermatologist" ? Navigate("/doctors") : Navigate("/doctors/Dermatologist")}>Dermatologist</p>
                    <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === "Pediatricians" ? Navigate("/doctors") : Navigate("/doctors/Pediatricians")}>Pediatricians</p>
                    <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === "Neurologist" ? Navigate("/doctors") : Navigate("/doctors/Neurologist")}>Neurologist</p>
                    <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === "Gastroenterologist" ? Navigate("/doctors") : Navigate("/doctors/Gastroenterologist")}>Gastroenterologist</p>
                </div>
                {/* -----------main area---------- */}
                <div className='w-full grid custom-cols gap-4 gap-y-6'>
                    {filteredDoctors.map((item, index) => (
                        <div onClick={() => Navigate(`/appointment/${item._id}`)} key={index} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
                            <img className="bg-blue-50" src={item.image} alt="doctor image" />
                            <div className="p-4">
                                <div className={`flex items-center gap-2 text-sm text-center${item.available ? " text-green-500" : " text-gray-500"} `}>
                                    <p className={`w-2 h-2 ${item.available ? " bg-green-500" : " bg-gray-500"} rounded-full`}></p><p>{item.available ? "Available" : "Not Available"}</p>
                                </div>
                                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                                <p className="text-gray-600 text-sm">{item.speciality}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Doctors
