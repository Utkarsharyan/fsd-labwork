const fs = require("fs");
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
  try {
    const employees = JSON.parse(fs.readFileSync("employees.json", "utf8"));

    await client.connect();
    const database = client.db("CompanyDB");
    const collection = database.collection("employees");

    await collection.insertMany(employees);

    await collection.updateOne(
      { empId: 101 },
      { $set: { designation: "Senior Developer" } }
    );

    const updatedEmployees = await collection.find().toArray();
    fs.writeFileSync(
      "updated_employees.json",
      JSON.stringify(updatedEmployees, null, 2)
    );

    console.log("Export completed successfully.");
  } catch (error) {
    console.error("An error occurred:", error.message);
  } finally {
    await client.close();
  }
}

main();
