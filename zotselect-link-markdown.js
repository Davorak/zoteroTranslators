{
"translatorID":"04623cf0-313c-11df-9aae-0800200c9a66",
"translatorType":2,
"label":"ZotSelect Link",
"creator":"Scott Campbell, Avram Lyon",
"target":"html",
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
        //  Original gist https://gist.github.com/nschneid/3134386
        // This out puts the zotero://select uri that serves as a unique
        // identifier for zotero items.  I think the item.key is supposed to
        // work accros computers now adays.
		Zotero.write("[](zotero://select/items/");
		var library_id = item.LibraryID ? item.LibraryID : 0;
		Zotero.write(library_id+"_"+item.key+"']");
	}
}
