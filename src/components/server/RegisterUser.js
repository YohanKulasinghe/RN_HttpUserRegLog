async function RegisterUser(user) {
    try {
        let response = await fetch('https://mighty-taiga-45064.herokuapp.com/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(user)
            });
        let responseJson = await response.json();
        return responseJson.state;
    } catch (error) {
        console.error(error);
    }
}

export { RegisterUser }