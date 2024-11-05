import { z } from 'zod'
import dotenv from 'dotenv'


dotenv.config()


const envSchema = z.object({

    DB_NAME: z.string(),
    DB_USERNAME: z.string(),
    DB_PASSWORD: z.string(),
    DB_PORT: z.preprocess((val) => Number(val), z.number())
});
 
//exportando el env al momento de querer hacerlo con esto, la desventaja es que debes importarlo en todo archivo que lo necesites
// export const env = envSchema.parse(process.env)

envSchema.parse(process.env)

//De esta manera lo tengo global en toda la aplicacion dentro de process.env
declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envSchema> {}
    }
}

