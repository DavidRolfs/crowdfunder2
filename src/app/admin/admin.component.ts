import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(name: string, description: string, goal: number, totalRaised: number,  sponser: string) {
    var newProject: Project = new Project(name, description, goal, totalRaised, sponser);
    this.projectService.addProject(newProject);
  }

}
