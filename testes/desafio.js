const db = require('../config/db')

async function salvarUsuario(nome, email, senha) {
  const dados = { nome, senha, email }
  const filtro = { email }

  const usuario = await db('usuarios').where(filtro).first()

  if (usuario === undefined) {
    await db('usuarios').insert(dados)
  } else {
    await db('usuarios').where(filtro).update(dados)
  }

  return await db('usuarios').where(filtro).first()
}

async function salvarPerfil(nome, rotulo) {
  const dados = { nome: nome, rotulo: rotulo }
  const filtro = { nome: nome }

  const perfil = await db('perfis').where(filtro).first()

  if (perfil === undefined) {
    await db('perfis').insert(dados)
  } else {
    await db('perfis').where(filtro).update(dados)
  }

  return await db('perfis').where(filtro).first()
}

async function adicionaPerfis(usuario, ...perfis) {
  for(perfil of perfis) {
    const dados = { usuario_id: usuario.id, perfil_id: perfil.id } 
    let usuario_perfil = await db('usuarios_perfis').where(dados).first()
    console.log(usuario_perfil)

    if (usuario_perfil === undefined) {
      await db('usuarios_perfis').insert(dados)
    }
  }
}

async function executar() {
  const usuario = await salvarUsuario(
    'Ana Silva', 'ana5@empresa.com', '123456'
  )
  
  const perfilA = await salvarPerfil('rh5', 'Pessoal')
  const perfilB = await salvarPerfil('fin5', 'Financeiro')

  console.log(usuario)
  console.log(perfilA)
  console.log(perfilB)

  await adicionaPerfis(usuario, perfilA, perfilB)
}

executar()
  .catch(err => console.log(err))
  .finally(() => db.destroy())