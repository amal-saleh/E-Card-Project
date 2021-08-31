import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(private renderer:Renderer2) { }

  onToggleColorTheme(event){
    console.log(event.detail.checked);
    if (event.detail.checked){
      this.renderer.setAttribute(document.body,"color-theme",'dark')

  }else{
    this.renderer.setAttribute(document.body,"color-theme",'light')
  }
}

  ngOnInit() {
  }
  }
