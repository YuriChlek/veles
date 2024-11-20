# GraphQl examples


## Login admin user
This mutation is used for admin login. It accepts the admin's login and password and returns the user's information along with an access token.
Parameters:

```bash
mutation AdminLogin($login: String!, $password: String!) {
    login(login: $login, password: $password) {
        user {
            admin_id
            login
            email
            first_name
            last_name
            role
        }
        token
    }
}
```

```bash
login: (String!) The admin's login.
password: (String!) The admin's password.
```

#### Returns:
```bash
user: An object containing information about the admin:
admin_id: The admin's identifier.
login: The admin's login.
email: The admin's email address.
first_name: The admin's first name.
last_name: The admin's last name.
role: The admin's role.
token: An access token for authentication.
```

#### Example
```bash
mutation {
  login(login: "admin", password: "test_pass") {
    user {
      admin_id
      login
      email
      first_name
      last_name
      role
    }
    token
  }
}
```

# Verify admin user token
This mutation verifies the validity of the admin's token. It accepts the token and returns a boolean value indicating whether the token is valid.

```bash
mutation VerifyAdminToken($token: String!) {
    verifyToken(token: $token) {
        verify
    }
}
```

#### Parameters:
```bash
token: (String!) The admin's token to be verified.
```

#### Returns:

```bash
verify: (Boolean) A boolean value indicating whether the token is valid (true - valid, false - invalid).
```

#### Example

```bash
mutation {
    verifyToken(token: "eyJhbGciOiJIUzI1NiI9pbl9pY...") {
      verify
    }
  }
```

# Set language
```bash
mutation {
  setLanguage(
    language_view: "Español",
    language_code: "es",
    default_frontend_language: false,
    default_admin_language: true
  ) {
    language_view
    language_code
    default_frontend_language
    default_admin_language
  }
}
```



