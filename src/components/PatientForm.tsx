import { useForm } from 'react-hook-form';

export default function PatientForm() {

    const { register, handleSubmit, formState: {errors} } = useForm()

    const registerPatiente = () => {
        console.log('Nuevo Paciente')
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
            onSubmit={handleSubmit(registerPatiente)}
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
                        required: 'El nombre del paciente es obligatorio'
                    })}
                />
                {errors.name?.message}
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
                />
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
            />
            </div>

            <div className="mb-5">
                <label htmlFor="date" className="text-sm font-bold">
                    Fecha Alta 
                </label>
                <input  
                    id="date"
                    className="w-full p-2  border border-gray-100 rounded"  
                    type="date" 
                />
            </div>
            
            <div className="mb-5">
                <label htmlFor="symptoms" className="text-sm font-bold">
                Síntomas 
                </label>
                <textarea  
                    id="symptoms"
                    className="w-full p-2  border border-gray-100 rounded"  
                    placeholder="Síntomas del paciente" 
                ></textarea>
            </div>

            <input
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-md"
                value='Guardar Paciente'
            />
        </form> 
    </div>
)
}