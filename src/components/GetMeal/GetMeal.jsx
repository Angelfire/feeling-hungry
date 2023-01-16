import { useQuery } from '@tanstack/react-query'
import { getMeals } from '../../utils/api'
import GetRecipe from "../GetRecipe/GetRecipe"

import "./GetMeal.css"

function GetMeal() {
  const {
    isLoading,
    error,
    refetch,
    data: meals,
  } = useQuery({
    enabled: false,
    queryKey: ['meals'],
    queryFn: getMeals
  })

  const { meals: [ meal ] = [] } = meals || {}

  if (error) return <h2>An error has occurred: {error.message}</h2>

  return (
    <div className="GetMeal">
      <button className="GetMeal__Button" onClick={() => refetch()}>
        {isLoading ? "Loading Recipe 🥑" : "Get Recipe 🥑"}
      </button>
        { meal !== undefined && <GetRecipe recipe={meal} /> }
    </div>
  )
}

export default GetMeal
