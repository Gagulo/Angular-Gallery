import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {

  images: any[];
  title = 'Recent Photo';
  @Input() filterBy?: string = 'all';
  visibleImages: any[] = [];

  constructor(private imageService: ImageService) {
    console.log(this.filterBy)
    this.visibleImages = this.imageService.getImages();
   }

   ngOnChanges() {
     this.visibleImages = this.imageService.getImages();
   }
}
