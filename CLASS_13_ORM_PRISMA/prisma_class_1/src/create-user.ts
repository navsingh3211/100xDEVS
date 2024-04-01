import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log:['info','query']});

async function main() {
  await prisma.user.create({
    data:{
      email:"ram@gmail.com",
      name:"ram singh"
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })