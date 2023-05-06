import { Component, OnInit } from '@angular/core';
import { User } from '../User/user';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  public files: NgxFileDropEntry[] = [];

  constructor(private authService: AuthService, private userService: UserService) {}

  onSubmit() {
    this.userService.updateUser(this.user.id, this.user).subscribe(() => {
      console.log('User updated successfully');
    }, (error) => {
      console.log('Error updating user:', error);
    });
  }


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
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.user.photo = reader.result as string;
            this.updatePhoto();
          };
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
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
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.user.photo = reader.result as string;
            this.updatePhoto();
          };
        });
      }
    }
  }

  public fileOver(event: any) {
    console.log(event);
  }

  public fileLeave(event: any) {
    console.log(event);
  }

 

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result as string | undefined;
      if (base64String) {
        this.user.photo = base64String.split(',')[1]; // extract base64 data from string
        this.updatePhoto();
      }
    };
  }
  

  onClickFileInput() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }
  

  updatePhoto() {
    const photo = this.user.photo || '';
    this.userService.updatePhotoById(this.user.id, photo).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  updateUser() {
    this.userService.updateUser(this.user.id, this.user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
