import { MongoClient } from 'mongodb';
import { env } from './env.js';

// Creamos el cliente usando la URI que viene de env.js
export const mongoClient = new MongoClient(env.mongoUri);

export async function connectMongo() {
    try {
        await mongoClient.connect();
        console.log('🍃 MongoDB: Conexión exitosa.');
        return mongoClient.db(); // Retorna la base de datos lista para usar
    } catch (error) {
        console.error('❌ Error en MongoDB:', error);
        throw error;
    }
}