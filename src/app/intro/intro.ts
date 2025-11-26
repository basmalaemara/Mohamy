import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  templateUrl: './intro.html',
  styleUrls: ['./intro.css']
})
export class IntroComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // After 1 second, go to /home
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000);
  }
}
