import { calculatePower } from "src/utils"

export const getPokemon = async ({
  page = 1,
  rowsPerPage = 5,
  query = "",
  threshold = 0,
}) => {
  try {
    const res = await fetch("public/pokemon.json")
    if (!res.ok) {
      throw new Error("Network response was not ok")
    }

    const data = await res.json()

    const filteredPower =
      threshold === 0
        ? data
        : data.filter((pokemon) => calculatePower(pokemon) >= threshold)

    const filteredData =
      query === ""
        ? filteredPower
        : filteredPower.filter((pokemon) =>
            pokemon.name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""))
          )

    const numberOfItems = filteredData?.length

    const lastPage = Math.ceil(numberOfItems / rowsPerPage)

    const currentPageIndex = (page - 1) * rowsPerPage

    const slicedData = filteredData.slice(
      currentPageIndex,
      currentPageIndex + rowsPerPage
    )

    return {
      data: slicedData,
      currentPage: page,
      hasNextPage: lastPage > page,
      lastPage,
      numberOfItems,
    }
  } catch (error) {
    return Promise.reject(error)
  }
}
