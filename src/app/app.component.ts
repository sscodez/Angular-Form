import { Component, OnInit } from '@angular/core';
import {AngularFirestore}from 'angularfire2/firestore'
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,AbstractControl
} from '@angular/forms';
import {UserService} from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  form:FormGroup;
  submitted = false;
  user = [
    { fullname: '', fname: "" ,phone:"",size:" "},
     ];
  constructor(private formBuilder: FormBuilder, private _user:UserService ) {}
  ngOnInit() {
    this.form = this.formBuilder.group({

      fullname: [null,[ Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      fname: [null,[ Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      phone: [null, [Validators.required,Validators.minLength(10), Validators.pattern(/[0-9]/)]],
      size: [null,[ Validators.required]]
      
      })
    }

    // onAddUser(fullname:any,fname:any,phone:any,size:any){
   
    //   this.user.push({
    //     fullname:fullname.value,
    //     fname:fname.value,
    //     phone:phone.value,
    //     size:size.value,
      
    //   })
    //  this._project.saveUser(this.user);
    // }

    get f() { return this.form.controls; }
    onSubmit(){
      this.submitted = true;
      if (this.form.invalid) {
        return;
      
      
      }

    //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
    
    // const fullname=this.form.value.fullname;
    // const  fname=this.form.value.fname;
    // const phone=this.form.value.phone;
    // const  size=this.form.value.size;


    alert('Form have been Submitted successfully');
   this._user.createStudent(this.form.value)
      // let data=form.value;
      // this.firestore.collection('employees').add(data);
       this.submitted = false;
      this.form.reset();
    }


}
