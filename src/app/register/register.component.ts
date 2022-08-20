import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../popup/popup.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private _captcha: string = "";
  private _isSalesman: boolean | undefined;
  private _form: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    person: new FormControl("", Validators.required),
    INN: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    street: new FormControl("", Validators.required),
    house: new FormControl("", Validators.required),
    office: new FormControl("", Validators.required),
    tel: new FormControl("", Validators.required),
    site: new FormControl("", ),
    other: new FormControl("")
  });

  constructor(private dialogRef: MatDialog) {
  }

  ngOnInit(): void {
  }

  public resolve(captchaResponse: string) {
    this._captcha = captchaResponse;
  }

  public get captcha(): string {
    return this._captcha;
  }

  public get isSalesman(): boolean {
    return this._isSalesman!;
  }

  public setSalesman() {
    this._isSalesman = true;
  }

  public get form(): FormGroup {
    return this._form;
  }

  public setBuyer() {
    this._isSalesman = false;
  }

  submitForm() {
    if (this._form.valid) {
      this.dialogRef.open(PopupComponent);
    }
  }

}
