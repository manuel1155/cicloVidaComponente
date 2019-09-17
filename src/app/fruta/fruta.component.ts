<div class="card m-3">
    <h5 class="card-header">Formulario Cliente</h5>
    <div class="card-body">
        <form [formGroup]="clienteForm" (ngSubmit)="onSubmit()">
            <div class="form-row">
                <div class="form-group col-5">
                    <label>Nombres</label>
                    <input type="text" class="form-control" formControlName="nombres" [ngClass]="{ 'is-invalid': submitted && f.nombres.errors }"/>
                    <div *ngIf="submitted && f.nombres.errors" class="invalid-feedback">
                        <div *ngIf="f.nombres.errors.required">El campo nombres es requerido</div>
                    </div>
                </div>

                <div class="form-group col-5">
                    <label>Apellidos</label>
                    <input type="text" class="form-control" formControlName="apellidos" [ngClass]="{ 'is-invalid': submitted && f.apellidos.errors }"/>
                    <div *ngIf="submitted && f.apellidos.errors" class="invalid-feedback">
                        <div *ngIf="f.apellidos.errors.required">El campo apellidos es requerido</div>
                    </div>
                </div>
                <div class="form-group col-2">
                    <label>Se enteró:</label>
                    <select class="form-control" formControlName="entero" [ngClass]="{ 'is-invalid': submitted && f.entero.errors }">
                        <option value=""></option>
                        <option value="Página Web">Página Web</option>
                        <option value="Llamada Telefónica">Llamada Telefónica</option>
                        <option value="Visita a tienda">Visita a tienda</option>
                    </select>
                    <div *ngIf="submitted && f.entero.errors" class="invalid-feedback">
                        <div *ngIf="f.entero.errors.required">Este campo es requerido</div>
                    </div>
                </div>
                </div>
                <div class="text-center">
                    <button class="btn btn-primary" type="submit" > Registrar</button>  
                    <button class="btn btn-danger" 
                    type="reset" (click)="onReset()">Cancelar</button>
                </div>
        </form>
    </div>
</div>

<pre> {{ clienteForm.value | json }} </pre>
<p> {{ clienteForm.valid }} </p>
