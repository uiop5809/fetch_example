import { rest } from "msw";

export const handlers = [
  rest.put("http://localhost:3000/counter/increment", async (req, res, ctx) => {
    const { value } = req.body;
    return res(
      ctx.json({
        value: value + 2,
      })
    );
  }),
  rest.get("/login", async (req, res, ctx) => {
    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),
  // 서버의 요청 custom
  rest.get(
    "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json",
    async (req, res, ctx) => {
      const id = req.url.searchParams.get("id");

      const originalResponse = await ctx.fetch(req);
      const originalResponseData = await originalResponse.json();

      return res(
        ctx.json({
          data: {
            people: [
              ...originalResponseData.data.people,
              {
                name: id,
                age: 135,
              },
            ],
          },
        })
      );
    }
  ),
];
