import axios from 'axios';

// export function loadData() {
//     return (dispatch) => axios.get('https://facebook.github.io/react-native/movies.json').then((response) => {
//         dispatch(urlfetchkar(response.movies));
//     });
// }

export function loadData() {
    const url = 'https://randomuser.me/api?results=5';
    return (dispatch) => axios.get(url).then(response =>
        dispatch(urlfetchkar(response.data.results))); 
}

// axios('http://api.example.com')
//     .then(data => console.log(data))

// export function loadData() {
//     return (dispatch) => fetch('https://facebook.github.io/react-native/movies.json').then(res => res.json()).then((response) => {

//             dispatch(urlfetchkar(response.movies));
//         });
// }

export function urlfetchkar(data) {
    console.log(data[0].picture);
    return {
        type: 'fetchmydata',
        data
    };
}
