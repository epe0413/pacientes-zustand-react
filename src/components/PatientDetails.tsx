import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailsProps = {
    patient: Patient
}
export default function PatientDetails({patient} : PatientDetailsProps) {
    return (
        <div className="mx-5 my-5 px-5 py-5 bg-white shadow-md rounded-lg">
            
            <PatientDetailItem label= "ID" data={patient.id}/>
            <PatientDetailItem label= "Nombre" data={patient.name}/>
            <PatientDetailItem label= "Propietario" data={patient.caretaker}/>
            <PatientDetailItem label= "Email" data={patient.email}/>
            <PatientDetailItem label= "Fecha Alta" data={patient.date.toString()}/>
            <PatientDetailItem label= "Síntomas" data={patient.symptoms}/>

            <div className="flex justify-between mt-5">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg"
                >Editar</button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
                >Eliminar</button>
            </div>
            
        </div>
    )
}
