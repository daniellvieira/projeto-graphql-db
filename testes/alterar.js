const db = require('../config/db')
const novoUsuario = {
  nome: 'Pedro',
  email: 'pedro@empresa.com.br',
  senha: '12345678'
}


async function execicio() {
  // count
  const { qtde } = await db('usuarios').count('* as qtde').first()
  console.log(qtde)

  // inserir (se a tabele estiver vazia)
  if (qtde === 0) {
    await db('usuarios').insert(novoUsuario)
  }

  // consultar
  let { id } = await db('usuarios')
    .select('id').limit(1).first()

  // alterar
  await db('usuarios').where({ id: id })
    .update({
      nome: 'Pedro Garcia',
      email: 'pedro.garcia@empresa.com.br'
    })

  return await db('usuarios').where({ id })
}

execicio()
  .then(usuario => console.log(usuario))
  .finally(() => db.destroy())
