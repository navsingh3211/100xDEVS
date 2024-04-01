import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  // await prisma.post.create({
  //   data:{
  //     title:"Once upon the time.",
  //     author:{
  //       connect:{
  //         id:1
  //       }
  //     }
  //   }
  // });
  await prisma.post.create({
    data:{
      title:"Jai shree ram",
      authorId:3,
      published:true
    }
  });
}

main();