import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const seed = async () => {
  const existingUser = await prisma.user.findUnique({
    where: { email: 'devlprnitish@gmail.com' },
  });

  if (!existingUser) {
    // Hash the password with bcrypt
    const hashedPassword = await bcrypt.hash('nitish@440@portfolio', 10);

    await prisma.user.create({
      data: {
        email: 'admin@example.com',
        password: hashedPassword,
      },
    });

    console.log('Default user created!');
  } else {
    console.log('User already exists!');
  }
};

seed()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
