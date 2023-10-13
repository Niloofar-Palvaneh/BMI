import ResultModal from "@/components/resultModal/ResultModal"
import Title from "@/components/title/Title"
import { useEffect, useState } from "react"

export default function Home() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState(null)
  const [submitBMi, setSubmitBMi] = useState(false)

  const setHeightHandler = (e) => {
    setHeight(e.target.value)
  }
  const setWeightHandler = (e) => {
    setWeight(e.target.value)
  }
  const submit = () => {
    setShowResult(true)
    const heightresult = (height / 100) * (height / 100)
    setResult(Math.floor(weight / heightresult))
  }
  useEffect(() => {
    if (weight !== null && height !== null){
      setSubmitBMi(true)
    } else{
      setSubmitBMi(false)
    }
  }, [height , weight])

  return (
    <>
      {
        showResult && <ResultModal result={result} setShowResult={setShowResult} />
      }
      <div className="w-full h-screen flex items-center justify-center bg-blue-200">
        <div className="w-[400px] p-4 bg-white rounded-xl">
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-12">
            BMI
          </h1>
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between w-full ">
              <Title title="قد" />
              <div>
                <div className="border border-gray-300 p-2 rounded">
                  <input
                    value={height}
                    onChange={(e) => setHeightHandler(e)}
                    className="border-none outline-none"
                    type="text" placeholder="180" />
                </div>
                <p className="text-red-500 text-sm">
                  قد را به سانتی متر وارد کنید
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between w-full ">
              <Title title="وزن" />
              <div>
                <div className="border border-gray-300 p-2 rounded">
                  <input
                    value={weight}
                    onChange={(e) => setWeightHandler(e)}
                    className="border-none outline-none"
                    type="text" placeholder="65" />
                </div>
                <p className="text-red-500 text-sm">
                  وزن را به کیلوگرم وارد کنید
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={submit}
            className={`text-white bg-blue-600 p-2 justify-center mt-6 border border-blue-700 w-full ${submitBMi ? "flex" : "hidden"}`}>
            محاسبه
          </button>
        </div>
      </div>
    </>
  )
}
