function onSignIn(googleUser) {
    const id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token)
    $.ajax({
        url: `${baseURL}/users/signup/google`,
        method: 'POST',
        data: {
            id_token
        }
    })
        .then(response => {
            console.log(response);
            const {id, name, token } = response;
            localStorage.setItem('id', id);
            localStorage.setItem('name', name);
            localStorage.setItem('token', token);
            createFancyTodo();
        })
        .catch(err => {
            console.log(err);
        })
}


function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        localStorage.clear();
        console.log(localStorage.getItem('token'))
        createSignUpForm();
    });
}