# ReweDigital

## Getting Started
Simple Angular app implementing local http calls, searching functionality, access restrictions, etc.

The application has the following features: 
- Local calls to json files
- Getting and reviewing this data
- Simple login done only on the front-end
- Table with a search
- Admin restrictions
- Responsiveness

## Installing
This project is done with the latest version of Angular (for the time being 6.0.8) requires node >=v9.11.1.

```
# Clone project
git clone https://github.com/PetarKerefeyski/ReweDigital.git

# Navigate to project folder
cd ReweDigital

# Run front-end package installer
npm install

# Run Angular and proxy servers
npm start

# APP is available at: localhost:4200

#For testing purposes, there are two users
    - admin/admin - who has Admin right
    - petark/petark - who is a regular user

```

## Directory Structure

```

├── e2e
├── node_modules
├── src
|   ├── app
|   |   ├── about
|   |   ├── header
|   |   ├── login
|   |   ├── products
|   |   ├── sidenav
|   |   ├── table
|   |   ├── app.component.ts
|   |   ├── app.component.spec.ts
|   |   ├── app.component.html
|   |   └── app.module.ts
|   ├── assets
|   |   ├── data
|   |   ├───└─── products.json
|   |   └───└─── users.json
|   ├── index.html
|   ├── tsconfig.js
|   ├── karma.conf
|   ├── main.js
|   ├── polyfills.js
|   ├── styles.css
|   ├── test.js
|   ├── tsconfig.app.json
|   ├── tsconfig.spec.json
|   └── tslint.json
├── angular.json
├── package.json          <- dependencies of the project
├── package-lock.json
├── proxy.config.json
├── tsconfig.json
├── tslint.json
└── README.md             <- project readme and how to install
```

## Author

Petar Kerefeyski
