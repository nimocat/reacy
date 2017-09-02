module.exports = {
  apps : [
    {
      name      : 'Reacy_Production',
      script    : 'app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],
  deploy : {
    production : {
      user : 'root',
      host : '101.200.38.240',
      ref  : 'origin/master',
      repo : 'https://github.com/Makcy/reacy.git',
      path : '/var/www/production',
      'post-deploy' : 'yarn install && pm2 reload ecosystem.config.js --env production'
    },
  }
};
