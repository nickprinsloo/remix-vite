import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  const headers = new Headers();

  headers.append(
    "Set-Cookie",
    "foo=bar; Domain=localhost; Path=/; SameSite=Lax"
  );
  headers.append(
    "Set-Cookie",
    "hello=world; Domain=localhost; Path=/; SameSite=Lax"
  );
  headers.append("location", "http://localhost:3000");

  const response = new Response(null, {
    headers,
    status: 302,
  });

  return response;
};
