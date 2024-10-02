(async () => {
    const settings = [
        'API_PORT',
        'DB_PORT',
        'DB_USER',
        'DB_PASSWORD',
        'DB_HOST',
        'DATABASE'
    ];

    settings.forEach((item) => {
        console.log(item);
    })
})()
