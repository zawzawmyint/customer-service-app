export async function getIntercomContacts() {
  const { INTERCOM_ACCESS_TOKEN } = process.env;

  try {
    const response = await fetch("https://api.intercom.io/contacts", {
      headers: {
        "Intercom-Version": "2.11",
        Authorization: `Bearer ${INTERCOM_ACCESS_TOKEN}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  } catch (error) {
    return console.log(error);
  }
}
