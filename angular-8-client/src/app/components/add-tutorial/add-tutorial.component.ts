import { Component, OnInit } from '@angular/core';
import { TutorialDaoImpl } from 'src/app/services/tutorial.dao.impl';
import { TutorialDao } from 'src/app/services/tutorial.dao.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  tutorialService: TutorialDao;

  constructor(private tutorialDaoImpl: TutorialDaoImpl) { 
    this.tutorialService = this.tutorialDaoImpl;
  }

  ngOnInit() {
  }

  saveTutorial() {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial() {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }

}
