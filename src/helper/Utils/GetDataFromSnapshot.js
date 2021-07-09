export const GetDataFromSnapshot = async (snapshot) => {
  const result = new Promise((resolve, reject) => {
    const data = [];
    snapshot.onSnapshot(
      (docs) => {
        docs.forEach((doc) => {
          data.push(doc.data());
        });
        resolve(data);
      },
      (err) => {
        console.log(err);
        reject();
      }
    );
  });
  const finalResult = await result;
  return finalResult;
};
