import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.projects = database.list('projects');
}

  getProjects(){
    return this.projects;
  }

  addProject(newProject: Project){
    this.projects.push(newProject);
  }

  getProjectById(projectId: string){
    return this.database.object('/projects/' + projectId);
  }
  updateProject(localUpdateProject){
    var projectEntryInFirebase = this.getProjectById(localUpdateProject.$key);
    projectEntryInFirebase.update({name: localUpdateProject.name,
                                  description: localUpdateProject.description,
                                  goal: localUpdateProject.goal,
                                  totalRaised: localUpdateProject.totalRaised,
                                  sponsor: localUpdateProject.sponsor});
  }
  deleteProject(localProjectToDelete){
    var projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }

}
