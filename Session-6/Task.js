var myfun = () => {
  var userdata = {
    name: "rohan",
    email: "rohan@gmail.com",
    id: 101,
  };
  var { email, name } = userdata;
  var usernames = ["rohan", "raj", "sid", "vaish", "ram"];
  var [x, y, z] = usernames;

  console.log(usernames[2]);

  console.log(z);

  //   console.log(name);
  //   console.log(email);
  //   console.log(name);
  //   console.log(email);
};

myfun();
