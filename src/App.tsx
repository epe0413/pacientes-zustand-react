import PatientForm from "./components/PatientForm"
import PatientsList from "./components/PatientsList"

function App() {

  return (
    <>
      <header className="bg-white py-2 shadow-md w-full md:fixed md:top-0 md:left-0">
        <h1 className="font-black text-2xl text-center md:w-2/3 md:mx-auto">
          Seguimiento de Pacientes {''}
          <span className="text-indigo-700 ">Veterinaria</span>
        </h1>
      </header>

      <div className="container mx-auto mt-5 md:pt-6">

        <div className="mt-4 md:flex">
          <PatientForm/>
          <PatientsList/>
        </div>
      </div>
    </>
  )
}

export default App
