export const getCryptoPrices = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
  )
  return res.json()
}
