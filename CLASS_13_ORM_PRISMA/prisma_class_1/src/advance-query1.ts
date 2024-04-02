import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  let res = await prisma.user.findMany({
    where:{
      email:{
        endsWith:'gmail.com'
      },
      posts:{
        //has atleast one post published
        some:{
          published:true
        }
      }
    },
    include:{
      posts:{
        where:{
          published:true
        }
      }
    }
  });

  let res2 = await prisma.post.findMany({
    take:2,
    skip:2
  });
  console.log(res2,'res2');
}
main();