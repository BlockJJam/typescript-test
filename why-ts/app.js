// api url
var url = 'https://jsonplaceholder.typicode.com/users/';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

// js에서 jsdoc으로 hint를 얻는 방법
/**
 * 
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */
/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address 
 */

/**
 * 
 * @returns {Promise<User>}
 */
function fetchUser(){
  return axios.get(url);
}

fetchUser().then(function (response){
  // response.address.cit // typescript였다면, 코드상에서 에러를 확인 가능
  response.address.city
})

function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerText = user[0].addres.city;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
