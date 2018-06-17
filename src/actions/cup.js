import url from '../services/api'

export function loadWorldCup() {
    return (dispatch, getState) => {
        dispatch({
            type: 'LOAD_MATCH',
            payload: new Promise((resolve) => {
                fetch(url, {
                    method: "GET",
                })
                .then(response => {
                    if(!response.ok) {
                        resolve(null)
                    }
                    return response
                })
                .then((res) => res.json())
                .then(res => {
                    resolve(res)
                })
                .catch((err) => {
                    console.log(err)
                })
            })
        })
    }
}