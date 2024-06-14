import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodosAndUserDetails(id: number) {
  const res = await prisma.todo.findMany({
    where: {
      userId: id,
    },
    select: {
      id: true,
      title: true,
      completed: true,
      user: true,
    },
  });
  console.log(res);
}
getTodosAndUserDetails(1);
