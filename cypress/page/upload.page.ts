// /<reference types="cypress" />

class UploadPage {
  
  private uploadURL: string;
  private browseFileBtn: string;
  private uploadFileBtn: string;
  private fileCaptionAfterUpload: string;

  constructor() {
    this.uploadURL = `https://the-internet.herokuapp.com/upload`;
    this.browseFileBtn = `#file-upload`;
    this.uploadFileBtn = `#file-submit`;
    this.fileCaptionAfterUpload = `#uploaded-files`;
  }

  public getTestUploadPage(): void {
    cy.visit(this.uploadURL);
  }

  public uploadFile(fileName: string): void {
    cy.get(this.browseFileBtn).attachFile(fileName);
    cy.get(this.uploadFileBtn).click();
  }

  public getFileNameAfterUpload() {
    return cy.get(this.fileCaptionAfterUpload);
  }
}

export {UploadPage}
