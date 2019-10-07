import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service'
import { ModalService } from '../../services/modal.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private contentful: ContentfulService, private modal: ModalService) { }

  projects = []

  ngOnInit() {
    this.contentful.logProjects()
      .subscribe((entries) => {
        let items, cols = 2, count = 0
        items = entries['items'].length

        while (count != items) {
          this.projects.push(entries['items'].slice(count, count + cols))
          count += cols
        }
      })
  }

  openModal(id) {
    this.modal.open(id)
  }

}
