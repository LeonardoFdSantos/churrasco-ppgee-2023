import Thermometer from 'react-thermometer-component';

const thermos = [
    {
        id: 1,
        Name: "GEPOC",
        value: 0,
        valueMax: 30, 
    },
    {
        id: 2,
        Name: "GEDRE",
        value: 0,
        valueMax: 18, 
    },
    {
        id: 3,
        Name: "CEESP",
        value: 13,
        valueMax: 18, 
    },
  ]
  
  export default function Page() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pagamentos</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Pagamentos realizados para o Churrasco do PPGEE 2023
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {thermos.map((grupo)=>(
                <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={grupo.href}>
                    <span className="absolute inset-0" />
                    {grupo.Name}
                  </a>
                </h3>
                <Thermometer
                    theme="light"
                    value={(grupo.value/grupo.valueMax)*100}
                    max="100"
                    steps="10"
                    format="%"
                    size="large"
                    height="300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }