import { Injectable } from '@angular/core';
import * as contentful from 'contentful'
import { environment } from '../../environments/environment';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  })

  constructor() { }

  logProjects() {
    const promise = this.client.getEntries({ content_type: 'project' })

    return <any>from(promise);
  }
}
