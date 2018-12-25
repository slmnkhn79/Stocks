import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';
import { DialogComponent } from '../import/dialog/dialog.component';
import { ImportService } from '../import/import.service'
const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
 
  constructor(public dialog: MatDialog, public uploadService: ImportService) { }

  ngOnInit() {
   
  }
  public openUploadDialog() {
    let dialogRef = this.dialog.open(DialogComponent);
  }
}
