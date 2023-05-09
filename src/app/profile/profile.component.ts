import { Component, OnInit } from '@angular/core';
import { User } from '../User/user';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  successMessage: string = '';
  errorMessage: string = '';
  private baseUrl = 'http://localhost:8080/WasteWise';
  public files: NgxFileDropEntry[] = [];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const email = this.authService.getUsername();
    if (email) {
      this.userService.getUserByEmail(email).subscribe((user: User) => {
        console.log(user);
        this.user = user;
      });
    }
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          console.log(droppedFile.relativePath, file);
          this.updatePhoto(this.user.id, file).subscribe(
            (user: User) => {
              console.log('Photo updated successfully!');
              this.user = user;
            },
            (error) => console.log(error)
          );
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public onFileDrop(files: NgxFileDropEntry[]) {
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.updatePhoto(this.user.id, file).subscribe(
            (user: User) => {
              console.log('Photo updated successfully!');
              this.user = user;
            },
            (error) => console.log(error)
          );
        });
      }
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.updatePhoto(this.user.id, file).subscribe(
      (user: User) => {
        console.log('Photo updated successfully!');
        this.user = user;
      },
      (error) => console.log(error)
    );
  }

  onClickFileInput() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }

  updatePhoto(id: number, file: File) {
    return this.userService.updatePhoto(id, file);
  }
  
  
  
  dataURLtoBlob(dataURL: string): Blob {
    const [header, body] = dataURL.split(",");
    const mimeMatch = header.match(/:(.*?);/);
    if (!mimeMatch) {
      throw new Error("Invalid data URL: missing MIME type");
    }
    const mime = mimeMatch[1];
    const byteCharacters = atob(body);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mime });
  }
  
  
  updateUser(id: number) {
    this.router.navigate(['/editProfile', id]);
  }
}


