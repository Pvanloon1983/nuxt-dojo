export default defineEventHandler(async (event) => {

  // Handle query params
  // const { name } = getQuery(event)

  // Handle post data
  // const { age } = await readBody(event);

  // api call with private key
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=lU0S9dmJdeUfbInY3sBvEd9LIIwCK3A02GBFG5rF')

  // return {
  //   message: `Hello, ${name}! You are ${age} years old.`
  // }

  return data
})