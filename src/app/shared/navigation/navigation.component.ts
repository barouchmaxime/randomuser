import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() menus;
  selectedRoute;
  constructor(private route: ActivatedRoute,
              private router: Router) {}
  ngOnInit() {
    this.selectedRoute = this.menus && this.menus.length > 0? this.menus[0].route: null;
  }
  isSelected(routeUrl) {
    return this.selectedRoute === routeUrl;
  }
  onRouteSelection(menu) {
    this.selectedRoute = menu.route;
    let route = menu.route.substring(0, menu.route.lastIndexOf('/'));
    this.router.navigate([route, menu.id], { relativeTo: this.route });
  }
}
