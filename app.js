const api = "http://localhost:4000/user/add-numbers";


const api2 = "http://localhost:4000/admin/login";



async function addNum(api) {
  try {
    const apInter = await fetch(api, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ firstNum: 2, secNum: 5 , code: 'bbc123'}),
    });

    const getData = await apInter.json();

    console.log(getData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function displayNames(api2) {
  try {
    const apInter = await fetch(api2, {
  method: "POST",
  headers: {
    "content-Type": "application/json",
  },
  body: JSON.stringify({ userName: 'Alex', password: 'alexDicksucker' }),
});

    const getData = await apInter.json();

    console.log(getData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// addNum(api);

displayNames(api2);

