import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Subscription } from 'rxjs';
import { LoaderService, LoaderState } from '../../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() color: ThemePalette = 'primary';
  @Input() mode: ProgressSpinnerMode = 'determinate';
  @Input() value = 50;

  visible: boolean = false;

  private _loaderStateChanged: Subscription = new Subscription();

  constructor(private _loaderService: LoaderService) { }

  ngOnInit(): void {
    this._loaderStateChanged = this._loaderService.loaderState$
      .subscribe((state: LoaderState) => this.visible = state.show);
  }

  ngOnDestroy() {
    this._loaderStateChanged.unsubscribe();
  }

}
