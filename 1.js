const API =
    "http://localhost:8080/api/auth";


const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async function(e) {

            e.preventDefault();

            const email =
                document.getElementById("email")
                    .value;

            const password =
                document.getElementById("password")
                    .value;

            const response =
                await fetch(
                    API + "/login",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({
                            email,
                            password
                        })
                    }
                );

            const data =
                await response.json();

            if (!response.ok) {

                document.getElementById(
                    "message"
                ).textContent = data;

                return;
            }

            localStorage.setItem(
                "user",
                JSON.stringify(data)
            );

            window.location.href =
                "index.html";

        }
    );

}


const registerForm =
    document.getElementById(
        "registerForm"
    );


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        async function(e) {

            e.preventDefault();

            const name =
                document.getElementById("name")
                    .value;

            const email =
                document.getElementById("email")
                    .value;

            const password =
                document.getElementById("password")
                    .value;

            const response =
                await fetch(
                    API + "/register",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({
                            name,
                            email,
                            password
                        })
                    }
                );

            const data =
                await response.text();

            document.getElementById(
                "message"
            ).textContent = data;

            if (response.ok) {

                setTimeout(() => {

                    window.location.href =
                        "login.html";

                }, 1000);

            }

        }
    );

}