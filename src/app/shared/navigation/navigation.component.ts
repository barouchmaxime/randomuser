import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../app.types";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() menus;
  private selectedId;
  constructor(private store: Store<AppState>,
              private route: ActivatedRoute,
              private router: Router) {
    store.pipe(select('selectedId')).subscribe(
      selectedId => {
        this.selectedId = selectedId;
      }
    );
  }
  ngOnInit() {
  }
  isSelected(id) {
    return this.selectedId === id;
  }
  onRouteSelection(menu) {
    let route = menu.route.substring(0, menu.route.lastIndexOf('/'));
    this.router.navigate([route, menu.id], { relativeTo: this.route });
  }
}
