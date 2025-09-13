test("GET api/v1/status shoud return 200", async () => {
  return fetch("http://localhost:3000/api/v1/status")
    .then((res) => {
      expect(res.status).toBe(200);
      return res.json();
    });
})