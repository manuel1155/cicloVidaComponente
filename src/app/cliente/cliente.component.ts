import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  clienteForm: FormGroup;
  submitted = false;
  clientesList:any;
  verTabla:boolean=false;
  currentCli:string=null;

  constructor(private fb:FormBuilder,private afs: AngularFirestore,) {
    this.clienteForm = this.fb.group({
      entero: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      confirmPass: ['', [Validators.required,Validators.minLength(6)]],
      numHijos: ['', Validators.required],
      hijos: new FormArray([])
    },{
      validator: validarPass('pass', 'confirmPass')
  });
  }

  async ngOnInit() {
    
    this.afs.collection('clientes').valueChanges().subscribe( (clientes)=>{
      console.log(clientes)
      this.clientesList = clientes;
      this.verTabla=true;
    });
 
  }

  editCliente(id:string){
    this.onReset();
    this.currentCli=id;
    console.log('edit '+id);
    let datos= this.clientesList.filter(c=>c.id==id)

    this.clienteForm.patchValue({
      entero: datos[0].entero,
      nombres: datos[0].nombres,
      apellidos: datos[0].apellidos,
      correo: datos[0].correo,
      pass: datos[0].pass,
      confirmPass: datos[0].confirmPass,
      numHijos: datos[0].numHijos,
    })

    let hijosForm = this.clienteForm.get('hijos') as FormArray;

    const hijosList = datos[0].hijos

    hijosList.forEach(h => {
      hijosForm.push(this.crearHijo(h.nombrehijo,h.edad));
    })

  }

  crearHijo(name,edad): FormGroup {
    return this.fb.group({
      nombrehijo: name,
      edad:edad,
    });
  
  }

  get f() { return this.clienteForm.controls; }
  get h() { return this.f.hijos as FormArray; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.clienteForm.invalid) {
        return;
    }

    // display form values on success

    let post=this.clienteForm.value;
    
    if(this.currentCli == null){
      const id = this.afs.createId();
      post['id']=id;
      this.afs.collection('clientes').doc(id).set(post);
      alert('¡Se ha registrado el cliente correctamente!');
    }else{
      post['id']=this.currentCli
      this.afs.collection('clientes').doc(this.currentCli).set(post);
      alert('¡Se ha editado el cliente correctamente!');
    }
    this.onReset();
  }

  onReset() {
    this.submitted = false;
    this.clienteForm.reset();
    this.currentCli=null;
    for (let i = this.h.length; i >= 0; i--) {
      this.h.removeAt(i);
    }    
  }

  onChangeHijos(e) {
    console.log(e);
    const numHijos = e.target.value || 0;

    //Vaciar arreglo
    for (let i = this.h.length; i >= 0; i--) {
      this.h.removeAt(i);
    }

    //agregar items
    for (let i = this.h.length; i < numHijos; i++) {
      this.h.push(this.fb.group({
          nombrehijo: ['', Validators.required],
          edad: ['', [Validators.required]]
      }));
    }
  }

onClear() {
  // clear errors and reset ticket fields
  this.submitted = false;
  this.h.reset();
}

}



export function validarPass(campo1: string, campo2: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[campo1];
        const controlConfirm = formGroup.controls[campo2];

        if (controlConfirm.errors && !controlConfirm.errors.mustMatch) {
            // si tiene otros errores se regresa
            return;
        }

        // manda error al campo
        if (control.value !== controlConfirm.value) {
            controlConfirm.setErrors({ validarPass: true });
        } else {
            controlConfirm.setErrors(null);
        }
    }
}
