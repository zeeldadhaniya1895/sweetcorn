"use client";
import { Button } from "@/components/ui/button";
import { ChangeEvent, FormEvent, useState } from "react";
import Chaki from "@/actions/project"

export default function Crop() { // Renamed the function to start with a capital letter, which is a convention for React components.
    interface FormData {
        soilType: string;
        n: string;
        p: string;
        k: string;
        temperature: string;
        humidity: string;
        ph: string;
        state: string;
        rainfall: string;
    }

    const MyForm: React.FC = () => {
        const [formData, setFormData] = useState<FormData>({
            soilType: '',
            n: '',
            p: '',
            k: '',
            temperature: '',
            humidity: '',
            ph: '',
            state: '',
            rainfall: ''
        });

        const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const { id, value } = event.target;
            setFormData((prevData) => ({ ...prevData, [id]: value }));
        };
        const SubmitFunction = (event: FormEvent) => {
            event.preventDefault();
            console.log('Form Data:', formData);
            alert(Chaki(formData));
        };


        return (
            <div className="bg-[url('/crop.jpg')] w-full h-screen bg-cover bg-center">
                <div className="w-full flex justify-center">
                    <div className="flex justify-evenly p-4 m-4 mt-[6.25rem] rounded-[1.5rem] items-center h-[80vh] w-[80rem] bg-[#ecebb76b] hover:shadow-md hover:border-spacing-60">
                        <div className="text-[#043A3A] h-[80%] w-[25%]  text-4xl text-center ">
                            Enter your soil details, and we'll reveal the perfect crops for your land. Unlock the potential of your farm with expert recommendations tailored just for you!</div>
                        <div className="bg-[#88D66C] h-[80%] w-[65%] flex justify-center items-center overflow-y-auto">
                            <form className="w-full max-w-lg" onSubmit={SubmitFunction}>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-1/20 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="soilType">
                                            Soil type
                                        </label>
                                        <div className="relative">
                                            <select
                                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="soilType"
                                                onChange={handleInputChange} // Added onChange event to update state
                                            >
                                                <option value="" disabled selected hidden>Select an option</option>
                                                <option>Red soil</option>
                                                <option>Sandy soil</option>
                                                <option>Laterite soil</option>
                                                <option>Clayey soil</option>
                                                <option>Desert soil</option>
                                                <option>Sandy loam</option>
                                                <option>Sandy Clay loam</option>
                                                <option>Black soil</option>
                                                <option>Regur soil</option>
                                                <option>Inceptisols</option>
                                                <option>Loamy soil</option>
                                                <option>Delta alluvium</option>
                                                <option>Alluvial soil</option>
                                                <option>Mountain soil</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/5 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="n">
                                            Nitrogen
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="n"
                                            type="text"
                                            placeholder="N"
                                            onChange={handleInputChange} // Added onChange event to update state
                                        />
                                    </div>
                                    <div className="w-1/5 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="p">
                                            phosphorus
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="p"
                                            type="text"
                                            placeholder="P"
                                            onChange={handleInputChange} // Added onChange event to update state
                                        />
                                    </div>
                                    <div className="w-1/5 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="k">
                                            Potassium
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="k"
                                            type="text"
                                            placeholder="K"
                                            onChange={handleInputChange} // Added onChange event to update state
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-1/3 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="temperature">
                                            Temperature
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="temperature"
                                            type="text"
                                            placeholder="Temperature"
                                            onChange={handleInputChange} // Added onChange event to update state
                                        />
                                    </div>
                                    <div className="w-1/3 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="humidity">
                                            Humidity
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="humidity"
                                            type="text"
                                            placeholder="Humidity"
                                            onChange={handleInputChange} // Added onChange event to update state
                                        />
                                    </div>
                                    <div className="w-1/3 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="ph">
                                            pH
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="ph"
                                            type="text"
                                            placeholder="pH"
                                            onChange={handleInputChange} // Added onChange event to update state
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="state">
                                            State
                                        </label>
                                        <div className="relative">
                                            <select
                                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="state"
                                                onChange={handleInputChange} // Added onChange event to update state
                                            >
                                                <option value="" disabled selected hidden>Select an option</option>
                                                <option>Andhra Pradesh</option>
                                                <option>Arunachal Pradesh</option>
                                                <option>AnandMand Nickobar</option>
                                                <option>Assam</option>
                                                <option>Bihar</option>
                                                <option>Chhattisgarh</option>
                                                <option>Goa</option>
                                                <option>Gujarat</option>
                                                <option>Haryana</option>
                                                <option>Himachal Pradesh</option>
                                                <option>Jharkhand</option>
                                                <option>Karnataka</option>
                                                <option>Kerala</option>
                                                <option>Madhya Pradesh</option>
                                                <option>Maharashtra</option>
                                                <option>Manipur</option>
                                                <option>Meghalaya</option>
                                                <option>Mizoram</option>
                                                <option>Nagaland</option>
                                                <option>Odisha</option>
                                                <option>Punjab</option>
                                                <option>Rajasthan</option>
                                                <option>Sikkim</option>
                                                <option>Tamil Nadu</option>
                                                <option>Telangana</option>
                                                <option>Tripura</option>
                                                <option>Uttar Pradesh</option>
                                                <option>Uttarakhand</option>
                                                <option>West Bengal</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="rainfall">
                                            Rainfall
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="rainfall"
                                            type="text"
                                            placeholder="Rainfall"
                                            onChange={handleInputChange} // Added onChange event to update state
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <Button className="text-sm" type="submit" size="lg">Submit</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return <MyForm />;
}
