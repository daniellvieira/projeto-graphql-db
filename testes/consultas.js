const db = require('../config/db')

// db('perfis')
//   .then(res => res.map(p => p.nome))
//   .then(nomes => console.log(nomes))u
//   .finally(() => db.destroy())

// db('perfis').select('nome', 'id')
//   .then(res => console.log(res))
//   .finally(() => db.destroy())

// db.select('nome', 'id')
//   .from('perfis')
//   .limit(4).offset(1)
//   .then(res => console.log(res))
//   .finally(() => db.destroy())

// db('perfis')
//   .where({id: 2})
//   .then(res => console.log(res))
//   .finally(() => db.destroy())

db('perfis')
  .whereNot({id: 1})
  .where('nome', 'like', '%m%')
  .whereIn('id', [2,4,5])
  .then(res => console.log(res))
  .finally(() => db.destroy())

console.log('fim')