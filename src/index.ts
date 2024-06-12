import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
  firstName?: string;
  lastName?: string;
  email?: string;
}

async function updateUser(
  id: number,
  { firstName, lastName, email }: UpdateParams
) {
  const res = await prisma.user.update({
    where: { id },
    data: {
      email,
      firstName,
      lastName,
    },
  });
  console.log(res);
}

updateUser(1, {
  email: "akash@gmail.com",
  firstName: "Akash",
  lastName: "Sharma",
});
