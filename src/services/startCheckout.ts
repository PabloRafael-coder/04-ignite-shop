import axios from "axios"

export default async function startCheckout(checkoutProduct) {
  const response = await axios.post('/api/checkout', {
    checkoutProduct
  })

  return response.data
}