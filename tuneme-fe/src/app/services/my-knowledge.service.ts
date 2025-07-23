import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface KnowledgeMenuItem {
  name: string;
  tid: string;
  parent_term_name: string;
  parent_term_id: string;
  description__value_export: string;
  field_icon_image: string;
}

export interface HotTopicItem {
  nid: string;
  title: string;
  field_cover_image: string;
  field_image: string;
  field_short_description: string;
  field_thematic_area_id: string;
  field_thematic_area: string;
  field_child_term: string;
  field_child_term_id: string;
  field_description: string;
  field_age_group: string;
  field_objective: string;
  field_tags: string;
  field_video: string;
  langcode: string;
  field_hot_srh_content: string;
  field_sms_text: string;
  created: string;
  changed: string;
  field_social_media_text: string;
  field_recommended_articles_export: string[];
}

@Injectable({
  providedIn: 'root'
})
export class MyKnowledgeService {

  private menuApiUrl = 'https://mhsp-dev2.unfpa.org/srh_context_taxonomy_export';
  private hotTopicsApiUrl = 'https://mhsp-dev2.unfpa.org/tuneme_srh_content_listing/309';

  constructor(private http: HttpClient) { }

  getMenuItems(): Observable<KnowledgeMenuItem[]> {
    return this.http.get<KnowledgeMenuItem[]>(this.menuApiUrl);
  }

  getHotTopics(): Observable<HotTopicItem[]> {
    return this.http.get<HotTopicItem[]>(this.hotTopicsApiUrl);
  }
}
