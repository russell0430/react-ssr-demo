const sleep = (time: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}
export const mockFetch = async () => {
  await sleep(700)
  return { data: "successful", status: 200 }
}
