/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';
// alert('user')

function login() {
  fetch("/login", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: "admin",
      pwd: "admin",
    }),
  })
    .then((res) => {
      location.reload();
    });
}

function logout() {
  fetch("/logout", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
    }),
  })
    .then((res) => {
      location.reload();
    });
}
