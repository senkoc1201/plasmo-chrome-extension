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

  return (
    <div className="w-[350px] rounded-2xl bg-[#23262F] p-4 shadow-xl font-sans text-white">
      <div className="flex flex-col items-center mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-blue-400 text-xl">📍</span>
          <span className="font-bold text-xl">Aero</span>
        </div>
        <div className="text-base font-semibold">{carInfo.model}</div>
        <div className="text-sm text-gray-300">{carInfo.route}</div>
        <div className="text-xs text-gray-400 mt-1">
          Pickup: {carInfo.pickup} | Drop-off: {carInfo.dropoff}
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-6">
        {plans.map((plan) => (
          <label
            key={plan.key}
            className={`relative flex items-center rounded-xl px-4 py-3 cursor-pointer border transition-all duration-200 ${
              selected === plan.key
                ? "border-blue-500 bg-[#262B38] shadow-lg"
                : "border-transparent bg-[#23262F] hover:border-gray-600"
            }`}
          >
            <input
              type="radio"
              name="plan"
              value={plan.key}
              checked={selected === plan.key}
              onChange={() => setSelected(plan.key)}
              className="form-radio accent-blue-500 w-5 h-5 mr-4"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-lg">{plan.name}</span>
                {plan.tag && (
                  <span className="ml-1 bg-blue-600 text-xs px-2 py-0.5 rounded-full font-medium">{plan.tag}</span>
                )}
              </div>
              <div className="text-xs text-gray-400 mt-0.5">{plan.description}</div>
            </div>
            <div className="flex flex-col items-end ml-4">
              <span className="text-lg font-bold">${plan.price.toLocaleString()}</span>
              <span className="text-xs text-gray-500 line-through">${plan.oldPrice.toLocaleString()}</span>
            </div>
          </label>
        ))}
      </div>
      <button
        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all duration-150 shadow-md"
      >
        Ship This Car - ${selectedPlan.price.toLocaleString()}
      </button>
    </div>
  )
} 