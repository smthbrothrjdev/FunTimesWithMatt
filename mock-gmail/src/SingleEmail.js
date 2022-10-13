import React, { useEffect, useState } from "react";

export default function SingleEmail({ id }) {
  const [data, setData] = useState({});
  // console.log(id);
  useEffect(() => {
    fetch("http://localhost:3001/emails/" + id)
      .then((res) => {
        const a = res.json();

        return a;
      })
      .then((data2) => {
        setData(data2);
      });
  }, [id]);
  return (
    <div>
      <h1> {data.subject}</h1>
      <h3> {data.sender}</h3>
      <p>{data.date}</p>

      <p> {data.message}</p>
    </div>
  );
}
