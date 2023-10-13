import { useEffect, useState } from "react"

export default function ResultModal({ result  , setShowResult }) {
    const [bmiResult, setBmiResult] = useState("")
    const [bmiColor, setBmiColor] = useState("bg-blue-300")
    useEffect(() => {
        if (result < 19) {
            setBmiResult("کمبود وزن")
            setBmiColor("bg-yellow-300")
        } else if (result >= 19 && result < 25) {
            setBmiResult("وزن سلامت")
            setBmiColor("bg-green-300")
        } else if (result >= 25 && result < 30) {
            setBmiResult("اضافه وزن")
            setBmiColor("bg-red-300")
        } else if (result >= 30) {
            setBmiResult("چاقی")
            setBmiColor("bg-red-600")
        }
    }, [])

    return (
        <>
            <div className={`w-full h-screen ${bmiColor} absolute top-0 flex items-center justify-center`}>
                <div className="bg-gray-100 p-4 rounded-xl w-[200px] flex flex-col items-center">
                    <div >
                        نتیجه:
                        <span className="font-bold text-xl m-2">
                            {result}
                        </span>
                    </div>
                    <div className="mt-4 text-xl font-bold">
                    {bmiResult}
                    </div>
                    <button
                    onClick={()=>setShowResult(false)}
                    className="w-full bg-blue-600 text-white mt-8 p-2">
                        بستن
                    </button>
                </div>
            </div>
        </>
    )
}