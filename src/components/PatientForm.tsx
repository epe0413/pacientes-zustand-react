import { useForm } from 'react-hook-form';
import Error from './Error';
import type { DraftPatient } from '../types';
import { usePatientStore } from '../store';
import { useEffect } from 'react';

export default function PatientForm() {

    // const { addPatient } = usePatientStore()
    const addPatient = usePatientStore(state => state.addPatient)
    const activeId = usePatientStore(state => state.activeId)
    const patients = usePatientStore(state => state.patients)
    const updatePatient = usePatientStore(state => state.updatePatient)

    const { register, handleSubmit, setValue, formState: {errors}, reset } = useForm<DraftPatient>()
    
    useEffect(() => {
        if(activeId) {
            const activePatient = patients.filter( patient => patient.id === activeId)[0]
            setValue('name', activePatient.name)
            setValue('caretaker', activePatient.caretaker)
            setValue('date', activePatient.date)
            setValue('email', activePatient.email)
            setValue('symptoms', activePatient.symptoms)
        }
    }, [activeId])
    
    const registerPatient = (data: DraftPatient) => {
        if(activeId){
            updatePatient(data)
        } else {
            addPatient(data);
        }

        reset()
    }


return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-2 text-center mb-5">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form 
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            noValidate
            onSubmit={handleSubmit(registerPatient)}
        >
            <div className="mb-3">
                <label htmlFor="name" className="text-sm font-bold">
                    Paciente 
                </label>
                <input  
                    id="name"
                    className="w-full p-2 border border-gray-100 rounded"  
                    type="text" 
                    placeholder="Nombre del Paciente" 
                    {...register('name', {
                        required: 'El nombre del paciente es obligatorio',
                        // maxLength: {
                        //     value: 8,
                        //     message:'Máximo 8 Caracteres'
                        // }
                    })}
                />
                {errors.name && (
                    <Error>{errors.name?.message}</Error>
                )}
                {/* {errors.maxLength && (
                    <Error>{errors.maxLength?.message}</Error>
                )} */}
                
            </div>

            <div className="mb-5">
                <label htmlFor="caretaker" className="text-sm font-bold">
                    Propietario 
                </label>
                <input  
                    id="caretaker"
                    className="w-full p-2  border border-gray-100 rounded"  
                    type="text" 
                    placeholder="Nombre del Propietario"
                    {...register('caretaker', {
                        required: 'El Propietario es obligatorio',
                    })}
                />
                {errors.caretaker && (
                    <Error>{errors.caretaker?.message}</Error>
                )}
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="text-sm font-bold">
                    Email 
                </label>
                <input  
                    id="email"
                    className="w-full p-2  border border-gray-100 rounded"  
                    type="email" 
                    placeholder="Email de Registro"
                    {...register("email", {
                        required: "El Email es Obligatorio",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Email No Válido'
                        }
                    })}
                />
                {errors.email && (
                    <Error>{errors.email?.message}</Error>
                )}
            </div>

            <div className="mb-5">
                <label htmlFor="date" className="text-sm font-bold">
                    Fecha Alta 
                </label>
                <input  
                    id="date"
                    className="w-full p-2  border border-gray-100 rounded"  
                    type="date" 
                    {...register('date', {
                        required: 'La fecha de alta es obligatoria',
                    })}
                />
                {errors.date && (
                    <Error>{errors.date?.message}</Error>
                )}
            </div>
            
            <div className="mb-5">
                <label htmlFor="symptoms" className="text-sm font-bold">
                Síntomas 
                </label>
                <textarea  
                    id="symptoms"
                    className="w-full p-2  border border-gray-100 rounded"  
                    placeholder="Síntomas del paciente" 
                    {...register('symptoms', {
                        required: 'Los síntomas son obligatorios',
                    })}
                />
                {errors.symptoms && (
                    <Error>{errors.symptoms?.message}</Error>
                )}
            </div>

            <input
                type="submit"
                className="bg-indigo-600 w-full p-2 text-white font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-md"
                value='Guardar Paciente'
            />
        </form> 
    </div>
)
}