import { deleteDir } from "@/lib/modifystuff";
import { NextResponse } from "next/server";

export async function POST(request) {
  // const randomStr = () => require("crypto").randomBytes(32).toString("hex");

  if (
    request.headers.get("api_route_secret") !== process.env.API_ROUTE_SECRET
  ) {
    return NextResponse.json("You are not authorized to call this API", {
      status: 401,
    });
  }
  const res = await request.json();
  const resp = await deleteDir(res.data);
  console.log(resp);

  return NextResponse.json(resp?.message, { status: resp?.status });
}
