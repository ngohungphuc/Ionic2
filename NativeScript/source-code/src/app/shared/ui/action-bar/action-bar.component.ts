import { Component, OnInit, Input } from "@angular/core";
import { isAndroid } from "platform";
import { Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";

import { UIService } from "../../ui.service";

declare var android: any;

@Component({
  selector: "ns-action-bar",
  templateUrl: "./action-bar.component.html",
  styleUrls: ["./action-bar.component.css"]
})
export class ActionBarComponent implements OnInit {
  @Input() title: string;
  @Input() showBackButton = true;
  @Input() hasMenu = true;
  
  get canGoBack() {
    return this.router.canGoBack() && this.showBackButton;
  }

  get android() {
    return isAndroid;
  }

  constructor(
    private page: Page,
    private router: RouterExtensions,
    private uIService: UIService
  ) {}

  ngOnInit() {}

  onGoBack() {
    this.router.backToPreviousPage();
  }

  onLoaded() {
    if (isAndroid) {
      const androidToolbar = this.page.actionBar.nativeView;
      const backButton = androidToolbar.getNavigationIcon();

      if (backButton) {
        backButton.setColorFilter(
          android.graphics.Color.parseColor("#171717"),
          (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
        );
      }
    }
  }

  onToggleMenu() {
    this.uIService.toggleDrawer();
  }
}
