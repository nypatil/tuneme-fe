import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MyKnowledgeService, KnowledgeMenuItem, HotTopicItem } from '../../services/my-knowledge.service';

@Component({
  selector: 'app-my-knowledge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-knowledge.component.html',
  styleUrls: ['./my-knowledge.component.css']
})
export class MyKnowledgeComponent implements OnInit {
  menuItems$: Observable<KnowledgeMenuItem[]>;
  hotTopics$: Observable<HotTopicItem[]>;
  activeTab: 'hot_topics' | 'menu' = 'hot_topics';

  constructor(
    private myKnowledgeService: MyKnowledgeService,
    private router: Router
  ) {
    this.menuItems$ = this.myKnowledgeService.getMenuItems();
    this.hotTopics$ = this.myKnowledgeService.getHotTopics();
  }

  ngOnInit(): void {}

  selectTab(tab: 'hot_topics' | 'menu'): void {
    this.activeTab = tab;
  }

  goToDetails(item: KnowledgeMenuItem | HotTopicItem): void {
    let displayItem: Partial<KnowledgeMenuItem>;

    if ('nid' in item) { // HotTopicItem has nid, KnowledgeMenuItem does not
      displayItem = {
        name: item.title,
        description__value_export: item.field_description,
        field_icon_image: item.field_cover_image
      };
    } else {
      displayItem = item;
    }

    this.router.navigate(['/my-knowledge-details'], { state: { item: displayItem } });
  }
}