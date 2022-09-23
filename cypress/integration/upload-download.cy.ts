// /<reference types="cypress" />

import { UploadPage,
} from "../page/index";

describe("When uploading/downloading files", () => {
  let uploadPage: UploadPage;
  const fileName = `uploadFileTest.txt`;

  before("Open upload Site", () => {
    uploadPage = new UploadPage();
  });

  it("File must be uploaded", () => {
    uploadPage.getTestUploadPage();
    uploadPage.uploadFile(fileName);
    uploadPage.getFileNameAfterUpload().should("contain.text", fileName);
  });
});
