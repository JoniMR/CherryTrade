import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CryptoInterface } from '../../models/crypto.model';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = [
    'icon',
    'name',
    'asset',
    'value',
    'stock',
    'buysell',
  ];
  dataSource: MatTableDataSource<CryptoInterface>;
  list: CryptoInterface[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private tableService: TableService) {}

  selectedFilters: string = 'Popular';

  filtersForm = new FormControl('');

  filters: string[] = ['Popular', 'Stablecoin', 'NFT', 'Metaverse'];

  ngOnInit(): void {
    this.tableService.getAllCryptos().subscribe(
      (data) => {
        console.log(data);
        this.list = data;
        this.dataSource = new MatTableDataSource<CryptoInterface>(this.list);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err) => {
        this.handleError(err);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  handleError(error: any) {
    if (error.status === 500) {
    }
  }
}
