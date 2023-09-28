export const getPokemon = async ({ page = 1, rowsPerPage = 5 }) => {
  try {
    const res = await fetch("public/pokemon.json")
    if (!res.ok) {
      throw new Error("Network response was not ok")
    }

    const data = await res.json()
    const numberOfItems = data?.length
    const lastPage = Math.ceil(numberOfItems / rowsPerPage)

    const currentPageIndex = (page - 1) * rowsPerPage

    const slicedData = data.slice(
      currentPageIndex,
      currentPageIndex + rowsPerPage
    )
    console.log({
      data: slicedData,
      currentPage: page,
      hasNextPage: lastPage > page,
      lastPage,
      numberOfItems,
    })
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
