(async () => {
    const settings = [
        "NEXT_PUBLIC_API_PORT",
        "NEXT_PUBLIC_API_HOST",
        "DB_PORT",
        "DB_USER",
        "DB_PASSWORD",
        "DB_HOST",
        "DATABASE",
    ];

    settings.forEach((item) => {
        console.log(item);
    });
})();
