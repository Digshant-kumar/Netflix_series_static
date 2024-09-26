export const Practice = () => {
  const students = [];

  return (
    <>
      {/* <p>{!students.length && "No Student Found"}</p> */}
      {/* <p>{students.length === 0 && "No Student Found"}</p> */}
      {/* <p>{!students.length && "No Student Found"}</p> */}
      <p>{Boolean(!students.length) && "No Student Found"}</p>

      <p>Number Of Students : {students.length}</p>
    </>
  );
};
