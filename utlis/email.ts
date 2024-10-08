// import nodemailer from "nodemailer"
// import {google} from "googleapis"

// const GOOGLE_REFRESH_TOKEN="1//04IFsTNSRYpifCgYIARAAGAQSNwF-L9IrQtk-MlkfLoRPTLeP5FSOQzJrACcEX_eb1cJvCzxgPB2RN2lDMrOit74TF1YMMp4PVjs"

// const GOOGLE_CLIENT= "76597312158-nvjq3tqe0489m3upu0flchdbu9tom9nt.apps.googleusercontent.com"

// const GOOGLE_URL= "https://developers.google.com/oauthplayground"

// const GOOGLE_SECRET_KEY= "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"
// const USER_MAIL= "ghettodeveloper@gmail.com"

// const oAuth = new google.auth.OAuth2(
//     GOOGLE_CLIENT,
//     GOOGLE_SECRET_KEY,
//     GOOGLE_URL
//   );

//   oAuth.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

//   export const sendEmail = async (user: any) => {
//     try {
//       const accessToken: any = (await oAuth.getAccessToken()).token;

//       const transport = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: USER_MAIL,
//           type: "OAuth2",
//           clientId: GOOGLE_CLIENT,
//           clientSecret: GOOGLE_SECRET_KEY,
//           refreshToken: GOOGLE_REFRESH_TOKEN,
//           accessToken,
//         },
//       });
//     }}

// // export const sendEmail=
