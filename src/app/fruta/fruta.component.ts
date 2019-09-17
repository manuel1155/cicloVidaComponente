<div class="card m-3">
    <h5 class="card-header">Formulario Cliente</h5>
    <div class="card-body">
        <form [formGroup]="clienteForm" (ngSubmit)="onSubmit()">
            <div class="form-row">
                <div class="form-group col-5">
                    <label>Nombres</label>
                    <input type="text" class="form-control" formControlName="nombres"  />
                </div>
                <div class="form-group col-5">
                    <label>Apellidos</label>
                        <input type="text" class="form-control" formControlName="apellidos"/>
                    </div>
                    <div class="form-group col-2">
                        <label>Se enteró:</label>
                        <select class="form-control" formControlName="entero">
                            <option value=""></option>
                            <option value="Página Web">Página Web</option>
                            <option value="Llamada Telefónica">Llamada Telefónica</option>
                            <option value="Visita a tienda">Visita a tienda</option>
                        </select>
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

