class Database{
    static getClients(){
        // Busca no banco de dados
    }

    static getClientByID(id){
        // Busca no banco de dados
    }

    static postClient(){
        // Adiciona cliente no banco de dados
    }

    static patchClient(client){
        // Atualiza o cliente
    }

    static deleteClient(id){
        // Deleta o cliente
    }
}

class OracleDatabase extends Database{    
    static getClients(){
        // Busca no banco de dados Oracle
        console.log('Banco de dados Oracle');
    }

    static getClientByID(id){
        // Busca no banco de dados Oracle
        console.log('Banco de dados Oracle');
    }

    static postClient(){
        // Adiciona cliente no banco de dados Oracle
        console.log('Banco de dados Oracle');
    }

    static patchClient(client){
        // Atualiza o cliente Oracle
        console.log('Banco de dados Oracle');
    }

    static deleteClient(id){
        // Deleta o cliente Oracle
        console.log('Banco de dados Oracle');
    }
}

class MySQLDatabase extends Database{    
    static getClients(){
        // Busca no banco de dados MySQL
        console.log('Banco de dados MySQL');
    }

    static getClientByID(id){
        // Busca no banco de dados MySQL
        console.log('Banco de dados MySQL');
    }

    static postClient(){
        // Adiciona cliente no banco de dados MySQL
        console.log('Banco de dados MySQL');
    }

    static patchClient(client){
        // Atualiza o cliente MySQL
        console.log('Banco de dados MySQL');
    }

    static deleteClient(id){
        // Deleta o cliente MySQL
        console.log('Banco de dados MySQL');
    }
}

module.exports = {OracleDatabase, MySQLDatabase}