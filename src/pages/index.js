import Title from "@/components/title/Title"
import { useState } from "react"

export default function Home() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const setHeightHandler = (e) => {
    setHeight(e.target.value)
  }
  const setWeightHandler = (e) => {
    setWeight(e.target.value)
  }
  const submit = ()=>{
    console.log("ok");
  }

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-blue-200">
        <div className="w-[400px] p-4 bg-white rounded-xl">
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-12">
            BMI
          </h1>
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between w-full ">
              <Title title="Height" />
              <div>
                <div className="border border-gray-300 p-2 rounded">
                  <input
                    value={height}
                    onChange={(e) => setHeightHandler(e)}
                    className="border-none outline-none"
                    type="text" placeholder="180" />
                </div>
                <p className="text-red-500 text-sm">
                  Enter the height in CM
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between w-full ">
              <Title title="Weight" />
              <div>
                <div className="border border-gray-300 p-2 rounded">
                  <input
                    value={weight}
                    onChange={(e) => setWeightHandler(e)}
                    className="border-none outline-none"
                    type="text" placeholder="65" />
                </div>
                <p className="text-red-500 text-sm">
                  Enter the weight in kilograms
                </p>
              </div>
            </div>
          </div>
          <button
          onClick={submit}
          className="bg-blue-600 text-white p-2 text-center mt-6 border border-blue-700 w-full">
            submit
          </button>
        </div>
      </div>
    </>
  )
}
