import { Component } from "@angular/core";

@Component({
    selector: 'app-loading',
    template: '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
    styleUrls: ['loading.component.scss']
})
export class LoadingComponent{}
