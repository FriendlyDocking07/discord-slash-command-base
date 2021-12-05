
module.exports = {
    token: '', // - Required
    clientId: '', // - Required

    settings: {
        prefix: '' // - Required
    },

    sequelize: {
        type: 'sqlite', // The supported database types are: Postgres(postgres), MariaDB(mariadb), MySQL(mysql), SQLite(sqlite), Microsoft SQL Server(mssql)
        hostname: '',
        username: '',
        password: '',
    }
}