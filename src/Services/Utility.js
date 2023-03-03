export const apiFetch = async () => {
  return new Promise((res, rej) => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://fakestoreapi.com/products", requestOptions)
      .then(response => response.text())
      .then(result => {
        
        console.log(result, "RESULT")
        res(result)
      })
      .catch(error => {
        console.log('error', error)
        rej(error)
      })
      
  })
}