import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent, MatPaginator, MatDialog, MatTableDataSource } from '@angular/material';

import { UsuariosService } from '../usuarios.service';
import { Page } from 'src/app/core/interface/page';
import { PopupComponent } from 'src/app/core/components/popup/popup.component';
import { Usuario } from '../model';
import { UsuariosDetailComponent } from '../usuarios-detail/usuarios-detail.component';

import { AppState, selectUsers } from 'src/app/store';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-usuarios-grid',
  templateUrl: './usuarios-grid.component.html',
  styleUrls: ['./usuarios-grid.component.scss']
})
export class UsuariosGridComponent implements OnInit {

  public displayedColumns = ['avatar', 'first_name', 'last_name','email','id'];
  public loading = false;
  public page: Page;
  public pageEvent: PageEvent;
  public pageSize = 12;
  public pageSizeOptions: number[] = [12, 5, 10, 25, 100];
  private dataStore: Usuario[];

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Usuario>([]);

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public service: UsuariosService,
    public cd: ChangeDetectorRef,
    public dialog: MatDialog,
    private store: Store<AppState>
  ) {
    this.store.pipe(select(selectUsers)).subscribe(value => {
      this.dataStore = value;
    });
  }

  ngOnInit() {
    this.loading = true;
    this.processStateUsers(this.dataStore);
    //this.searchPage(1, this.pageSize);
  }

  private processPage(response: Page): void {
    let page = [];
    if (this.hasDataInResponse(response)) {
      page = response.data;
    }
    this.dataSource = new MatTableDataSource<Usuario>(page);
    this.dataSource.paginator = this.paginator;
    this.loading = false;
  }

  private processStateUsers(res) {
    let data = [];
    if (this.hasDataInResponse(res)) {
      data = res;
    }
    this.dataSource = new MatTableDataSource<Usuario>(data);
    this.dataSource.paginator = this.paginator;
    this.loading = false;
  }

  private hasDataInResponse(response): boolean {
    return response && response.data && response.data.length > 0;
  }

  public paginate(event): PageEvent {
    this.searchPage(event.pageIndex, event.pageSize);
    return event;
  }

  private searchPage(page, size): void {
    this.loading = true;
    this.service.page(page, size)
                .subscribe(
                  res => this.processPage(<Page> res),
                  err => this.processErrorResponse(err)
                );
  }

  public excluir(model: any){
    const dialogRef = this.dialog.open(PopupComponent, {data:{ message: "Tem certeza que deseja excluir o Registro?"}});
    dialogRef.afterClosed().subscribe(val => val ? this.processarExclusaoItem(model) : null);
  }

  private processarExclusaoItem(model: any){
      this.loading = true;
      this.service.delete(model.id).subscribe(
          res => this.processarExclusaoItemSuccess(res, model),
          err => this.processErrorResponse(err)
      );
  }

  private processarExclusaoItemSuccess(res, model) {
      this.loading = false;
      this.dataSource.data.splice(this.dataSource.data.indexOf(model), 1);
      this.paginator._changePageSize(this.paginator.pageSize);
      this.processResponseData(res);
  }

  /* public incluirEditar(id: number = null){
    const dialogRef = this.dialog.open(UsuariosDetailComponent, {
      minWidth: '100vw',
      height: '100%',
      data:{ id }
    });
    dialogRef.afterClosed().subscribe(val => val ? console.log('aki') : null);
  } */

  protected processResponseData(response: any){
    this.loading = false;
    //this.dialog.open(PopupMessageComponent, { data: { title: 'Error', messages:  messenger} });
  }

  protected processErrorResponse(error: any): void {
    this.loading = false;
    //this.dialog.open(PopupMessageComponent, { data: { title: 'Error', messages:  messenger} });
  }

}
