const getData = async (find) => {
    const data = await fetch(`http://localhost:3000?term=${find}`, {
        method: "GET",
    })
    console.log(await data.json())
    const resp = await data.json()
    return resp;
  }

  export default getData;