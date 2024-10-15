import { useEffect, useState } from "react"
import { Coffe } from "../../types"
import Buttons from "../../components/Buttons/Buttons"
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard"

const AllProducts = () => {
  const [products, setProducts] = useState<Coffe[]>([])
  const [focusedButton, setFocusedButton] = useState<string>("All Products")
  const [filter, setFilter] = useState<"all" | "available">("all")

  const handleFocus = (buttonName: string) => {
    setFocusedButton(buttonName)
    setFilter(buttonName === "Available Now" ? "available" : "all")
  }

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.available)

  return (
    <main className="min-h-screen bg-Back-color">
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src="/src/assets/bg-cafe.jpg" />
        </div>
        <section className="transform -translate-y-16 sm:-translate-y-24 md:-translate-y-32 lg:-translate-y-52 bg-Black-modal p-4 sm:p-8 md:p-12 lg:p-20 rounded-2xl w-11/12 sm:w-10/12 md:w-5/6 lg:w-3/4">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-white text-3xl">Our Collection</h1>
            <p className="text-Grey-selected w-full sm:w-4/5 md:w-3/5 lg:w-2/5 text-center text-sm sm:text-base">
              Introducing our Coffe Collectuion, a selection of uniqyue coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
            <div className="flex gap-4 pt-3">
              <Buttons
                text={"All Products"}
                isFocused={focusedButton === "All Products"}
                onFocusChange={() => handleFocus("All Products")}
              />
              <Buttons
                text={"Available Now"}
                isFocused={focusedButton === "Available Now"}
                onFocusChange={() => handleFocus("Available Now")}
              />
            </div>
          </div>
          <div className="flex gap-10 p-20 flex-wrap justify-center">
            {filteredProducts.map((product) => (
              <CoffeeCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default AllProducts
