{
"translatorID":"04623cf0-313c-11df-9aae-0800200c9a69",
"translatorType":2,
"label":"ZotSource Link",
"creator":"Scott Campbell, Avram Lyon",
"target":"txt",
"minVersion":"2.0",
"maxVersion":"",
"priority":200,
"inRepository":false,
"displayOptions":{"exportCharset":"UTF-8"},
"lastUpdated":"2012-07-17 22:27:00"
}

function doExport() {
	var item;
	while(item = Zotero.nextItem()) {
        //  This returns a human readable source of the item object for 
        // inspection, debuging and though like myself that do not know much
        // javascript.
		Zotero.write(item.toSource());
	}
}
