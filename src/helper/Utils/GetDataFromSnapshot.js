export const GetDataFromSnapshot = async (snapshot) => {
  const data = [];
  return await snapshot.onSnapshot(
    (docs) => {
      const currentState = [];
      docs.forEach((doc) => {
        console.log(doc.data()); // individual doc object
        currentState.push(doc.data());
      });
      data.push(currentState);
      console.log(currentState); // all the stored docs
    },
    (error) => {
      console.log(error);
    }
  );
};
