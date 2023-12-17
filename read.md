We created a minimalist express boilerplate with the following features:

ECMA2022: features enabled
Dotenv: Load environment variables from .env file
Eslint: Code quality tool
Prettier: to prettify the code
MongoDB: ready to go configuration with mongoose
MySQL: ready to go configuration with mysql2
CORS: feature enabled
RBAC: logic to authorize people with specific roles to use the endpoints.
Passport: logic to add an authentication layer if neeeded.
Sparkpost: email service support with sparkpost.
Error: Handling errors custom middleware and helpers globally configured
Multer: File uploading configured to use in routes as middleware
Google Cloud Storage middleware configured to use Google Cloud Storage as upload bucket
Google Cloud Pub/Sub pub/sub support for event driven events added
Axios: globally configured in ./src/utils/api.utils.js
Swagger documentation reachable at http://localhost:3000/api/v1/docs
Jest Testing tool support
Logger: Logging support with Winston
Docker ready configuration with multi-stage option
Terraform ready configuration to instantiate infrastracture in GCP
Agenda ready to emit events through agenda jobs
Best practices in naming files