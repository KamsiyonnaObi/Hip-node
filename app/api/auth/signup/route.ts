import UserModel from "@/models/User";
import dbConnect from "@/utils/mongooseConnect";

export async function POST(request: Request) {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");
  const username = formData.get("username");
  const stage = formData.get("Stage");
  const codingLevel = formData.get("codingLevel");
  const interests = formData.get("interests");

  try {
    await dbConnect();

    const existingUser = await UserModel.findOne({ email });

    const existingUserByUsername = await UserModel.findOne({ username });

    if (!existingUser || !existingUserByUsername) {
      UserModel.create({
        email,
        password,
        username,
        stage,
        codingLevel,
        interests,
      });
      return new Response(JSON.stringify({ message: "success" }), {
        status: 200,
      });
    }
    return new Response(JSON.stringify({ message: "User already exists" }), {
      status: 400,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error }), { status: 500 });
  }
}
