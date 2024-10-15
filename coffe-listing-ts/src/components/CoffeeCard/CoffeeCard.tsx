import { Coffe } from "../../types"

const CoffeeCard = ({ product }: { product: Coffe }) => {
  return (
    <div className="relative" key={product.id}>
      <img className="rounded-xl" src={product.image} alt={product.name} />
      {product.popular && (
        <p className="bg-Orange-star absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-semibold">
          Popular
        </p>
      )}
      <div className="flex justify-between pt-3">
        <h3 className="text-White-text font-semibold">{product.name}</h3>
        <span className="bg-Green-prices px-2 rounded-md font-semibold">
          {product.price}
        </span>
      </div>
      <div className="flex items-center justify-between pt-3">
        <div className="flex gap-1 ">
          {product.rating && product.votes ? (
            <img
              className="text-Orange-star"
              src="/src/assets/Star_fill.svg"
              alt="star"
            />
          ) : (
            <img src="/src/assets/Star.svg" alt="star" />
          )}
          {product.rating && product.votes ? (
            <>
              <span className="text-White-text">{product.rating}</span>
              <span className="text-Grey-selected">
                ({product.votes} votes)
              </span>
            </>
          ) : (
            <p className="text-Grey-selected">No ratings</p>
          )}
        </div>
        {!product.available && (
          <p className="text-Red-sold font-semibold">Sold out</p>
        )}
      </div>
    </div>
  )
}

export default CoffeeCard
