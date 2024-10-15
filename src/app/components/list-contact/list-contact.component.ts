import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationMessageComponent } from '../shared/confirmation-message/confirmation-message.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent {
  public displayedColumns: string[] = ['id', 'fullName', 'phone', 'email', 'entryDate', 'sex', 'actions'];
  public dataSource = new MatTableDataSource<Contact>();
  public listContact?: Contact[];
  public _dialog?: MatDialog;

  private readonly _contactService?: ContactService

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private readonly contactService: ContactService, public dialog: MatDialog, public snackBar: MatSnackBar) {
    this._contactService = contactService;
    this._dialog = dialog;
  }

  ngOnInit(): void {
    this.loadContacts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadContacts() {
    this.listContact = this._contactService?.getContacts();
    this.dataSource = new MatTableDataSource(this.listContact);
  }

  deleteContact(i: number) {
    const dialogRef = this.dialog.open(ConfirmationMessageComponent, {
      width: '450px',
      data: { msg: "Vas a eliminar el contacto, quieres continuar?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'accept') {
        this._contactService?.deleteContactById(i);
        this.loadContacts();
        this.snackBar.open('Contacto eliminado', '', {
          duration: 2000
        })
      }
    })
  }

}