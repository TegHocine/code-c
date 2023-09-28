export const calculatePower = (pokemon) => {
  if (!pokemon) return
  return (
    pokemon.hp +
    pokemon.attack +
    pokemon.defense +
    pokemon.special_attack +
    pokemon.special_defense +
    pokemon.speed
  )
}

export const numberOnly = (e) => {
  const value = e?.target?.value
  if (value) {
    e.target.value = value.replace(/[^0-9]/g, "")
  }
}
