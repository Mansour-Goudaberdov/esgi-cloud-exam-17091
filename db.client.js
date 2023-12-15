const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres://psql_4in8_user:MSRX1BMlbmiajY5mTmc7L9HlJtFzQ8X3@dpg-clu2i38l5elc7388f9v0-a.frankfurt-postgres.render.com/psql_4in8', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;