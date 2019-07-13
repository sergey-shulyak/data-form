export async function fetchData(url) {
  const response = await fetch(url)
  return response.json()
}

export async function sendData(url, data) {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })
}
