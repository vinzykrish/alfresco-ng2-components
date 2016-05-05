/**
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
System.register(['./src/components/upload.component', './src/services/upload.service', './src/directives/file-select.directive', './src/directives/file-draggable.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var upload_component_1, upload_service_1, file_select_directive_1, file_draggable_directive_1;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (upload_component_1_1) {
                upload_component_1 = upload_component_1_1;
                exportStar_1(upload_component_1_1);
            },
            function (upload_service_1_1) {
                upload_service_1 = upload_service_1_1;
                exportStar_1(upload_service_1_1);
            },
            function (file_select_directive_1_1) {
                file_select_directive_1 = file_select_directive_1_1;
            },
            function (file_draggable_directive_1_1) {
                file_draggable_directive_1 = file_draggable_directive_1_1;
            }],
        execute: function() {
            exports_1("default",{
                component: [upload_component_1.UploadComponent],
                directives: [file_select_directive_1.FileSelectDirective, file_draggable_directive_1.FileDraggableDirective],
                providers: [upload_service_1.UploadService]
            });
        }
    }
});
//# sourceMappingURL=ng2-alfresco-upload.js.map