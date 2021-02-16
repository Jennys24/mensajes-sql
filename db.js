const Sequelize = require('sequelize');


// acá creamos la conexión a la Base de Datos
const sql = new Sequelize('tableros', 'root', 'abigail', {
  host: 'localhost',
  dialect: 'mysql'
});

// acá inicializamos los modelos (tablas)
const Message = sql.define('Message', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Debe indicar un nombre'
      },
      len: {
        args: [2],
        msg: 'El nombre debe ser de largo al menos 2'
      }
    }
  },
  post: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Debe postear un mensaje'
      }
    }
  }
});

const Commentary = sql.define('Commentary', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Debe indicar un nombre'
      },
      len: {
        args: [2],
        msg: 'El nombre debe ser de largo al menos 2'
      }
    }
  },
  post: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Debe postear un comentario'
      }
    }
  }
});

Message.hasMany(Commentary); 
Commentary.belongsTo(Message); 

//  después sincronizamos nuestro código con la base de datos
sql.sync()
.then(() => {
  console.log('Base de datos y tablas creadas');
});

// finalmente acá listamos todos los modelos que queremos exportar
module.exports = {
  Message,
  Commentary
};