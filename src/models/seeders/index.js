// seeders/index.js
const db = require('../index')
const chance = require('chance').Chance()
const faker = require('faker')
const { fake } = require('faker')


const createSeeds = async () => {
 
 
  const usuariosCount = 40


  
  for (let index = 0; index < usuariosCount; index++) {
    const usuario = await db.Usuarios.create({
      correo: faker.internet.email(),
      clave: faker.lorem.sentence(),
      createdAt: faker.date.recent(2),
      updatedAt: faker.date.recent(2)
    })
  }







  const medicosCount = 10

  for (let index = 0; index < medicosCount; index++) {
    const medico = await db.Medicos.create({
      nombre: faker.name.firstName(),
      apellido: faker.name.lastName(),
      createdAt: faker.date.recent(3),
      updatedAt: faker.date.recent(4)
    })
  }






  const variablenum = 5

  for (let index1 = 0; index1 < variablenum; index1++) {
    const  Citas = await db.Citas.create({
      nombre: faker.name.firstName(),
      apellido: faker.name.lastName(),
      createdAt: faker.date.recent(2),
      fechaCita: faker.date.recent(2)
    })
  }







}

module.exports = createSeeds
