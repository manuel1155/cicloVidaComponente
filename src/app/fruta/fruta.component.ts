import { Component, OnInit } from '@angular/core';
import { FormBuilder, 
	      FormGroup, 
        Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  clienteForm: FormGroup;
  submitted = false;

  constructor(
    private fb:FormBuilder
  ) { 
    this.clienteForm = this.fb.group({
      entero: ['', Validators.required],
      nombres: ['aaaaa', Validators.required],
      apellidos: ['', Validators.required],     
    });
  }

  ngOnInit() {
  }

  get f() { return this.clienteForm.controls; }

  onSubmit(){
    this.submitted=true;
    console.log(this.clienteForm.value);
  }

}
