// import ImageKit from "imagekit";
import { config } from "@/lib/config";
// import { NextResponse } from "next/server";
// File: app/api/upload-auth/route.ts
import { getUploadAuthParams } from "@imagekit/next/server"

const {env: {imageKit: {publicKey, privateKey, urlEndpoint}}} = config

// const imagekit = new ImageKit({
//     publicKey,
//     privateKey,
//     urlEndpoint,
// });

// export async function GET() {
//     return NextResponse.json(imagekit.getAuthenticationParameters)
// }



export async function GET() {
    // Your application logic to authenticate the user
    // For example, you can check if the user is logged in or has the necessary permissions
    // If the user is not authenticated, you can return an error response

    const { token, expire, signature } = getUploadAuthParams({
        privateKey: privateKey as string, // Never expose this on client side
        publicKey: publicKey as string,
        // expire: 30 * 60, // Optional, controls the expiry time of the token in seconds, maximum 1 hour in the future
        // token: "random-token", // Optional, a unique token for request
    })

    return Response.json({ token, expire, signature, publicKey: publicKey })
}