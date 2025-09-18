# Express ESM Starter

A minimal Node.js + Express project scaffold using modern ES modules, with Jest and Mocha for testing and ESLint for linting.

## Features
- Express.js with basic routing and error handling
- Custom request logging middleware
- Environment variable support via dotenv
- Jest and Supertest for HTTP testing
- Mocha sample test
- ESLint configuration
- Nodemon for development

## Getting Started

1. Clone the repository and navigate into the project directory.
2. Install dependencies:

```
npm install
```

3. Create a .env file (optional) based on .env.example:

```
cp .env.example .env
```

4. Start the server:

```
npm start
```

You should see output similar to:

```
Server running on port 3000
```

Visit http://localhost:3000 to confirm the server is running.

## Development

Run with auto-restart on changes:

```
npm run dev
```

## Testing

- Run Jest tests (default):
```
npm test
```

- Run Jest explicitly:
```
npm run test:jest
```

- Run Mocha tests:
```
npm run test:mocha
```

## Linting

- Check lint issues:
```
npm run lint
```

- Fix lint issues automatically:
```
npm run lint:fix
```

## Project Structure

```
.
├── .env.example
├── .eslintrc.json
├── .gitignore
├── package.json
├── README.md
├── server.js
├── src
│   ├── app.js
│   ├── middleware
│   │   └── logger.js
│   └── routes
│       └── index.js
└── tests
    ├── app.test.js       # Jest + Supertest
    └── mocha.spec.js     # Mocha sample
```
