export const env = {
    postgresUri: process.env.POSTGRES_URI || 'postgresql://postgres:Asd.123*@localhost:5432/saludplus',
    fileDataCsv: process.env.FILE_DATA_CSV || './data/simulation_saludplus_data.csv',
    mongoUri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/saludplus'
};