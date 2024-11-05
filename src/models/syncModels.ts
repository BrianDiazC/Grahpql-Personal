
import { sequelize } from "../config/database";

// Función para sincronizar modelos de Sequelize
export const syncModels = async () => {
    try {
        await sequelize.sync({force: false}); // Cambia a true si quieres que sobrescriba las tablas
        console.log("Modelos sincronizados con éxito.");
    } catch (error) {
        console.error("Error al sincronizar los modelos:", error);
    }
};