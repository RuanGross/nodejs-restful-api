/*
 * Create and export configuration variables
 *
 */

// Container for all the environments
const environments = {};

// Staging (default) environment
environments.staging = {
  port: 3000,
  envName: 'staging',
};

// Production environment
environments.production = {
  port: 5000,
  envName: 'production',
};

// Detwermine which environment was passed as a command-line argument

const currentEnvironment =
  typeof process.env.NODE_ENV == 'string'
    ? process.env.NODE_ENV.toLowerCase()
    : '';

// check that the current environment is one of the enviroments above, if not, default to staging
let environmentsToExport =
  typeof environments[currentEnvironment] == 'object'
    ? environments[currentEnvironment]
    : environments.staging;

// export the module
module.exports = environmentsToExport;
