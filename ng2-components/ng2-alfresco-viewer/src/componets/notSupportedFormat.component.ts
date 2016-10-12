/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, Input } from '@angular/core';
import { AlfrescoAuthenticationService, RenditionsService } from 'ng2-alfresco-core';

@Component({
    moduleId: module.id,
    selector: 'not-supported-format',
    templateUrl: './notSupportedFormat.component.html',
    styleUrls: ['./notSupportedFormat.component.css']
})
export class NotSupportedFormat {

    @Input()
    nameFile: string;

    @Input()
    urlFile: string;

    @Input()
    nodeId: string;

    isPdfAvailable: boolean = false;

    constructor(private authService: AlfrescoAuthenticationService, private renditionsService: RenditionsService) {
    }

    /**
     * Download file opening it in a new window
     */
    download() {
        window.open(this.urlFile);
    }

    ngOnChanges() {
        if (this.nodeId) {
            this.handlePdfConversion();
        }
    }

    handlePdfConversion() {
        this.renditionsService.isRenditionAvailable(this.nodeId, 'pdf').subscribe((conversionPresent) => {
            this.isPdfAvailable = true;
            if (conversionPresent) {
                this.renditionsService.getRendition(this.nodeId, 'pdf').subscribe((rendition) => {
                    console.log(rendition);
                }, () => {
                    this.isPdfAvailable = false;
                });
            } else {
                this.renditionsService.createRendition(this.nodeId, 'pdf').subscribe((rendition) => {
                    console.log(rendition);
                }, () => {
                    this.isPdfAvailable = false;
                });
            }
        }, (error) => {
            this.isPdfAvailable = false;
            console.error(error);
        });
    }
}
