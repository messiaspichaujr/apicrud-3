import { Sequelize } from "sequelize"; //pacote para importar

const db = new Sequelize('universidade','root','',{ //variavel para mapear o banco de dados
    host: 'localhost',
    dialect: 'mysql'
  
})

export default db //exportando a função pra usar em outros módulos