const db = require('../config/db')

// excluir por id
// db('usuarios').where({ id: 1 })
//   .delete()
//   .then(res => console.log(res))
//   .finally(() => db.destroy())

// excluir tudo de perfis
// db('perfis').delete()
//   .then(res => console.log(res))
//   .finally(() => db.destroy())

// excluir tudo de usuarios
db('usuarios').delete()
  .then(res => console.log(res))
  .finally(() => db.destroy())
