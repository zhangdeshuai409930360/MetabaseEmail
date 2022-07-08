import Nodemailer from "nodemailer";

const transport = Nodemailer.createTransport({
  host: process.env.SMTP_HOST!,
  port: +process.env.SMTP_PORT! || 25,
  service : "Gmail",
  secure: true,
    auth : {
      user : process.env.METABASE_EMAIL_FROM!,
      pass : process.env.METABASE_EMAIL_PASSWORD!
  },
});

export const send = async ({
  to,
  from,
  subject,
  link,
  pdf,
}: {
  to: string;
  from: string;
  subject: string;
  link: string;
  pdf: string;
}) =>
  new Promise<any>((resolve, reject) => {
    transport.sendMail(
      {
        from,
        to,
        subject,
        html: 'Embedded image: <img src="cid:unique@kreata.ee"/>',
        attachments: [
          {
            filename: pdf,
            path:`/data/crontab/sendMetabaseEmail/images/${pdf}.png`,
            cid: 'unique@kreata.ee',
          },
        ],
        text: `Hi, the "${subject}" PDF is attached.

You can view the web version here: ${link}`,
      },
      (err, info) => {
        if (err) {
          return reject(err);
        }

        resolve(info);
      },
    );
  });
