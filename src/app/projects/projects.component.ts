import { Component } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor(private router: Router){}

  projects: Project[] = [
    new Project("Father Johns Community Help", "Come hang out with father John as he blesses people, free food with cash donation", 4000, "The Church of Chris", 1),
    new Project("Help you help me", "I need your help, please donate and help you help me", 1500, "Jun", 2),
    new Project("The last donation", "This is for the last donation that you will ever make, it goes to everying!!!", 1000000000, "Kimlan", 3)
  ];

  goToDetailPage(clickedProject: Project) {
    this.router.navigate(['projects', clickedProject.id]);
  };
}
