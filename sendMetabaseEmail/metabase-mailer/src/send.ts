require("dotenv").config();

import * as Email from "./email";
import { login } from "./metabase/auth";
import * as Pdf from "./metabase/pdf";
import * as Setup from "./puppeteer/setup";

async function main() {

  const baseURL = process.env.METABASE_BASE_URL!;
  const reportURL = `${baseURL}${process.env.METABASE_PDF_PATH}`;
  const pdfName = process.env.METABASE_PDF_NAME!;



  Email.send({
    from: process.env.METABASE_EMAIL_FROM!,
    to: process.env.METABASE_EMAIL_TO!,
    subject: process.env.METABASE_EMAIL_SUBJECT!,
    link: reportURL,
    pdf: pdfName,
  });

}

main();
