import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';


@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent {
  public displayedColumns: string[] = ['fullName', 'phone', 'email', 'entryDate', 'sex', 'actions'];
  public dataSource = new MatTableDataSource<Contact>();
  public listContact?: Contact[];
  private readonly _contactService?: ContactService

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private readonly contactService: ContactService) {
    this._contactService = contactService;
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
    console.log(this.listContact)
  }
}
