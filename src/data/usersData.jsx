const usersData = [];
for (let i = 1; i <= 10; i++) {
  const user = {
    id: i,
    email: `user${i}@example.com`,
    password: `password${i}`,
    name: `User ${i}`,
  };
  usersData.push(user);
}
export default usersData;
