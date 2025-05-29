import "./popup.css"
import { useState } from "react"

const plans = [
  {
    key: "better",
    name: "Better",
    price: 1800,
    oldPrice: 2100,
    description: "Covers Delays & Damage",
    tag: "Most Popular"
  },
  {
    key: "good",
    name: "Good",
    price: 1500,
    oldPrice: 1800,
    description: "Basic Transport"
  },
  {
    key: "best",
    name: "Best",
    price: 2100,
    oldPrice: 2400,
    description: "Full Insurance + White Glove"
  }
]

const carInfo = {
  model: "2012 Lexus IS 350",
  route: "Salt Lake City → Las Vegas",
  pickup: "Jan. 1",
  dropoff: "Jan 8"
}

export default function Popup() {
  const [selected, setSelected] = useState("better")
  const selectedPlan = plans.find((p) => p.key === selected)
  const [isOpen, setIsOpen] = useState(true)
  if (!isOpen) return null

  return (
    <div className="w-[350px] rounded-2xl bg-gray-800 p-4 shadow-xl font-sans text-white">
      <button
        onClick={() => setIsOpen(false)}
        className="absolute left-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 text-gray-400 hover:text-gray-300"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
        <span className="sr-only">Close</span>
      </button>

      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center gap-2">
          <img src="/1.png" alt="Chrome Logo" className="w-7 h-7" />
          <span className="text-[27px] font-semibold">Aero</span>
        </div>
      </div>

      <div className="mb-6 text-center">
        <h2 className="text-xl font-bold">2012 Lexus IS 350</h2>
        <div className="text-gray-400 mt-1">
          Salt Lake City → Las Vegas
        </div>
        <div className="text-gray-400 mt-1">
          Pickup: Jan 1 | Drop-off: Jan 8
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-6">
        {plans.map((plan) => (
          <button
            key={plan.key}
            onClick={() => setSelected(plan.key)}
            className={`relative flex items-center justify-between rounded-[22px] px-4 py-3 cursor-pointer border transition-all duration-200 ${selected === plan.key
                ? 'border-blue-500' : ''
              }`}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-600 mr-3"></div>
              <div className="flex flex-col justify-start items-start">
                <div className="font-semibold text-lg">{plan.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{plan.description}</div>
              </div>
            </div>
            <div className="flex flex-col items-end ml-4">
              {plan.tag && (
                <span className="bg-blue-600 text-xs px-2 py-0.5 rounded-full font-medium">{plan.tag}</span>
              )}
              <span className="text-lg font-bold">${plan.price.toLocaleString()}</span>
              <span className="text-xs text-red-400 line-through">${plan.oldPrice.toLocaleString()}</span>
            </div>
          </button>
        ))}
      </div>
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-[16px] py-3 px-4 rounded-[30px]"
      >
        Ship This Car - ${selectedPlan.price.toLocaleString()}
      </button>
    </div>
  )
} 