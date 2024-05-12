import { usePatientStore } from "../store";
import PatientDetails from "./PatientDetails";

export default function PatientsList() {
        const patients = usePatientStore(state => state.patients)

    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
            {patients.length ? (
                <>
                    <h2 className="font-black text-xl text-center">Listado de pacientes</h2>
                    <p className="text-lg mt-2 mb-5 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                    {patients.map( patient => (
                        <PatientDetails
                            key={patient.id}
                            patient={patient}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-xl text-center">No hay pacientes</h2>
                    <p className="text-lg mt-2 mb-5 text-center">
                        Comienza agregando pacientes {''}
                        <span className="text-indigo-600 font-bold">y apareceran este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}
