export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const res = await fetch(
      "https://blockmaze.org/wp-json/contact-form-7/v1/contact-forms/622/feedback",
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { status: "error", message: "Server error" },
      { status: 500 },
    );
  }
}
