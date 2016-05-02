 import {toHtmlTagFormat} from 'lib/html-tag-format'

 export class HtmlTagFormatValueConverter {

 	toView(value) {
 		return toHtmlTagFormat(value);
 	}

 }