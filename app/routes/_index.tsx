import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = ({ request }: LoaderFunctionArgs) => {
  const cookieHeader = request.headers.get("Cookie");

  return { cookieHeader };
};

export default function Index() {
  const cookieHeader = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <div>
        <Link to="http://localhost:3000/set-cookies">
          Try to set two cookies
        </Link>
        <div>Received:</div>
        <div>{JSON.stringify(cookieHeader, null, 2)}</div>
        <div>Expected:</div>
        <div>
          {JSON.stringify({ cookieHeader: "hello=world; foo=bar" }, null, 2)}
        </div>
      </div>
    </div>
  );
}
