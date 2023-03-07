export default async function fetchData(url: string) {
  const response: Response = await fetch(url);

  if (response.ok) {
    return await response.json();
  } else if (response.status === 404) {
    throw new Error('Error with getting data!')
  } else if (response.status > 499) {
    throw new Error('Server not responding')
  } else {
    throw new Error('Something went wrong')
  }
}
