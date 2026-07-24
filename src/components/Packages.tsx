"use client";
import { useState } from "react"
import Packageform from "./Packageform";

export default function Packages() {
const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
const [openFeature, setOpenFeature] = useState<string | null>(null);

const packages = [
    {
      name: "Starter Website",
      oldPrice: "$598",
      price: "$399",
      features: ["2 Pages Website", "2 Stock Images", "Jquery Slider"],
      moreFeatures: [
        "Contact Form",
        "Basic SEO",
        "1 Revision",
      ],
      highlighted: false,
    },
    {
      name: "Advance Website",
      oldPrice: "$1,198",
      price: "$799",
      features: [
        "5 Web Pages",
        "Content Management System",
        "Jquery Slider / Flash Banner",
        "5 Stock Images",
        "Free 12 Month Hosting",
      ],
       moreFeatures: [
        "Advanced SEO",
        "Speed Optimization",
        "3 Revisions",
      ],
      highlighted: true,
    },
    {
      name: "Advanced Professional",
      oldPrice: "$1,648",
      price: "$1,099",
      features: [
        "10 Web Pages",
        "Mobile Responsive Design",
        "Content Management System",
        "Free Domain Registration",
        "Free 12 Month Hosting",
      ],
      moreFeatures: [
        "Premium Support",
        "Unlimited Revisions",
        "Performance Optimization",
      ],
      highlighted: false,
    },
]


    return (
        <>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`rounded-xl shadow-lg p-8 relative ${
              pkg.highlighted
                ? "bg-red-600 text-white scale-105"
                : "bg-white text-black"
            }`}
          >
            <h3 className="text-xl font-bold mb-4">{pkg.name}</h3>

            <div className="mb-6">
              <span className="line-through text-lg opacity-70 mr-2">
                {pkg.oldPrice}
              </span>
              <span className="text-5xl font-extrabold">
                {pkg.price}
              </span>
            </div>

            <ul className="space-y-3 mb-6 max-h-[130px] overflow-y-scroll overflow-hidden">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span>✓ {feature}</span>
                </li>
              ))}
            </ul>

            <button
                onClick={() =>
                  setOpenFeature(openFeature === pkg.name ? null : pkg.name)
                }
                className="w-full flex justify-between items-center border-t pt-4 pb-4 font-semibold"
              >
                <span>More Features</span>
                <span className="text-2xl">
                  {openFeature === pkg.name ? "−" : "+"}
                </span>
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFeature === pkg.name ? "max-h-40 mb-4" : "max-h-0"
                }`}
              >
                <ul className="space-y-2 text-sm opacity-90">
                  {pkg.moreFeatures.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

            <button
              onClick={() => setSelectedPackage(pkg.name)}
              className={`w-full py-3 rounded font-semibold ${
                pkg.highlighted
                  ? "bg-white text-red-600"
                  : "bg-black text-white"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}

            {selectedPackage && (
                <Packageform
                packageName={selectedPackage}
                onClose={() => setSelectedPackage(null)}
                />
            )}
        </div>
        </>
    )
}